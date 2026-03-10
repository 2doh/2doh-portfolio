import confetti from "canvas-confetti";
import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";

const ConfettiCannon = () => {
  const [dragStart, setDragStart] = useState(null);
  const [dragEnd, setDragEnd] = useState(null);
  const containerRef = useRef(null);

  const getCoordinates = useCallback(e => {
    const rect = containerRef.current.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    return { x, y, rect };
  }, []);

  const handleMouseDown = e => {
    const { x, y } = getCoordinates(e);
    setDragStart({ x, y });
    setDragEnd({ x, y });
  };

  const handleMouseMove = e => {
    const { x, y } = getCoordinates(e);
    setDragEnd({ x, y });
  };

  const handleMouseUp = e => {
    if (!dragStart) return;
    const { x, y, rect } = getCoordinates(e);
    const dx = x - dragStart.x;
    const dy = y - dragStart.y;
    const dist = Math.hypot(dx, dy);

    const realX = rect.left + dragStart.x;
    const realY = rect.top + dragStart.y;
    const angle = Math.atan2(dy, -dx) * (180 / Math.PI);

    if (dist < 20) {
      setDragStart(null);
      setDragEnd(null);
      return;
    }

    confetti({
      particleCount: Math.min(dist / 5 + 10, 150),
      spread: 70,
      origin: {
        x: realX / window.innerWidth,
        y: realY / window.innerHeight,
      },
      angle: angle,
      gravity: 1.2,
      scalar: Math.min(dist * 0.01, 2),
      velocity: dist * 0.5,
      drift: 0,
      ticks: 300,
      colors: ["#9FF781", "#F3F781", "#ff4d4f", "#4a90e2"],
    });
    setDragStart(null);
    setDragEnd(null);
  };

  return (
    <CanvasWrapper
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setDragStart(null);
        setDragEnd(null);
      }}
    >
      <Instruction>화면을 클릭하고 길게 당겼다 놓아보세요</Instruction>
      {dragStart && dragEnd && (
        <TrajectoryLine
          x1={dragStart.x}
          y1={dragStart.y}
          x2={dragEnd.x}
          y2={dragEnd.y}
        />
      )}
    </CanvasWrapper>
  );
};

export default ConfettiCannon;

const CanvasWrapper = styled.div`
  width: 100%;
  height: 50vw;
  background: var(--color-warm-gray);
  border-radius: 10px;
  position: relative;
  cursor: grab;
  overflow: hidden;
  user-select: none;

  &:active {
    cursor: grabbing;
  }
`;

const Instruction = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--color-text);
  font-weight: 500;
`;

const TrajectoryLine = ({ x1, y1, x2, y2 }) => {
  const dist = Math.hypot(x2 - x1, y2 - y1);
  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <circle
        cx={x1}
        cy={y1}
        r={dist / 5}
        fill="none"
        stroke="rgba(255, 255, 255, 0.2)"
        strokeWidth="1"
      />

      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={dist > 250 ? "#ff4d4f" : "#2d5a58"}
        strokeWidth={2}
        strokeDasharray="4, 4"
      />

      <circle
        cx={x2}
        cy={y2}
        r="10"
        fill="none"
        stroke="white"
        strokeWidth="2"
      />
      <circle cx={x1} cy={y1} r="4" fill="#2d5a58" />
    </svg>
  );
};
