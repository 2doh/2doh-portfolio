import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useBoardStore from "../../../../store/useBoardState";
import { useThemeStore } from "../../../../store/useThemeStore";

const BoardField = () => {
  const { tool, color, setColor, lineWidth, clearAll } = useBoardStore();
  const { isDarkMode } = useThemeStore();
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    const width = parent.clientWidth;
    const height = parent.clientHeight;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lientWidth = 3;
    ctxRef.current = ctx;
  }, []);

  const startDrawing = e => {
    if (!ctxRef.current) return;
    const { offsetX, offsetY } = e.nativeEvent;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = e => {
    if (!isDrawing || ctxRef.current === null) return;

    const { offsetX, offsetY } = e.nativeEvent;

    requestAnimationFrame(() => {
      if (!isDrawing) return;

      const ctx = ctxRef.current;

      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY);
    });
  };

  const stopDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  useEffect(() => {
    if (ctxRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = ctxRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, [clearAll]);

  useEffect(() => {
    if (ctxRef.current) {
      ctxRef.current.strokeStyle = color;
      ctxRef.current.globalCompositeOperation =
        tool === "eraser" ? "destination-out" : "source-over";
      ctxRef.current.lineWidth = lineWidth;
    }
  }, [tool, color, lineWidth]);

  useEffect(() => {
    if (isDarkMode) {
      setColor("#f5f5f5");
    } else setColor("#2a1b07");
  }, [isDarkMode]);

  return (
    <CanvasField
      ref={canvasRef}
      cursor={tool}
      onMouseDown={e => {
        startDrawing(e);
      }}
      onMouseMove={e => {
        draw(e);
      }}
      onMouseUp={() => {
        stopDrawing();
      }}
      onMouseLeave={() => {
        stopDrawing();
      }}
    />
  );
};

export default BoardField;

const CanvasField = styled.canvas`
  width: 100%;
  height: 100%;
  display: block;
  background-color: var(--color-invert);
  cursor: ${props => (props.cursor === "eraser" ? "crosshair" : "pencil")};
  touch-action: none;
`;
