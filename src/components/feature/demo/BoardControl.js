import React from "react";
import useBoardStore from "../../../store/useBoardState";
import styled from "styled-components";

const COLORS = [
  { light: "#2a1b07", dark: "#f5f5f5", name: "Basic" },
  { light: "#f6532b", dark: "#ff6b4a", name: "Red" },
  { light: "#99aa8c", dark: "#b2c5a3", name: "Olive" },
  { light: "#2d5a58", dark: "#4d8a87", name: "Teal" },
  { light: "#FF8A65", dark: "#ffab91", name: "Orange" },
];

const BoardControl = () => {
  const { tool, color, setTool, setColor, setLineWidth, lineWidth } =
    useBoardStore();

  return (
    <ControlWrap>
      <ToolGroup>
        <IconButton
          active={tool === "pen"}
          onClick={() => setTool("pen")}
          title="펜"
        >
          🖌️
        </IconButton>
        <IconButton
          active={tool === "eraser"}
          onClick={() => setTool("eraser")}
          title="지우개"
        >
          🧽
        </IconButton>
      </ToolGroup>

      <Divider />

      <ColorGroup>
        {COLORS.map(c => (
          <ColorDot
            key={c.light}
            bgColor={
              document.documentElement.getAttribute("data-theme") === "dark"
                ? c.dark
                : c.light
            }
            active={
              color ===
              (document.documentElement.getAttribute("data-theme") === "dark"
                ? c.dark
                : c.light)
            }
            onClick={() =>
              setColor(
                document.documentElement.getAttribute("data-theme") === "dark"
                  ? c.dark
                  : c.light,
              )
            }
          />
        ))}
      </ColorGroup>

      <Divider />

      <RangeGroup>
        <input
          type="range"
          min="1"
          max="20"
          value={lineWidth}
          onChange={e => setLineWidth(Number(e.target.value))}
        />
        <span>{lineWidth}px</span>
      </RangeGroup>
    </ControlWrap>
  );
};

export default BoardControl;

const ControlWrap = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px 25px;
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: 50px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  z-index: 100;
  transition: all 0.3s ease;
`;

const ToolGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const IconButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.active && "var(--color-accent-mint)"};
  font-size: 1.2rem;
  transition: all 0.2s;
`;

const ColorGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const ColorDot = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => props.bgColor};
  cursor: pointer;
  transform: ${props => (props.active ? "scale(1.2)" : "scale(1)")};
  transition: all 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

const RangeGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-text-primary);
  font-size: 0.8rem;
  font-weight: 700;

  input {
    cursor: pointer;
    accent-color: var(--color-accent-mint);
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 24px;
  background: var(--color-text);
`;
