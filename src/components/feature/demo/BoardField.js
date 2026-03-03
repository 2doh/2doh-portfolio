import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import useBoardStore from "../../../store/useBoardState";

const BoardField = () => {
  const { tool, color, lineWidth } = useBoardStore();
  const cavasRef = useRef(null);

  useEffect(() => {
    const canvas = cavasRef.current;
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
  }, []);

  const startDrawing = () => {};

  useEffect(() => {
    if (cavasRef.current) {
      cavasRef.current.strokeStyle = color;
      cavasRef.current.globalCompositeOperation =
        tool === "eraser" ? "destination-out" : "source-over";
      cavasRef.current.lineWidth = lineWidth;
    }
  }, [tool, color, lineWidth]);

  return (
    <CanvasField
      ref={cavasRef}
      onMouseDown={e => {
        startDrawing(e);
      }}
      onMouseMove={() => {}}
      onMouseUp={() => {}}
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
