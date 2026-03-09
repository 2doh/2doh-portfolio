import React from "react";
import styled from "styled-components";

const VolumSlider = ({ sound, setSound, handleListen }) => {
  const vol = parseFloat(sound) || 0;
  return (
    <SliderWrapper>
      <ListenButton onClick={handleListen}>듣기</ListenButton>
      <i className="icon">{vol === 0 ? "🔇" : vol < 0.5 ? "🔈" : "🔊"}</i>
      <StyledSlider
        type="range"
        min="0"
        max="1"
        step="0.1"
        onChange={e => setSound(parseFloat(e.target.value))}
        value={vol}
      />
      <span className="status-label">{Math.round(vol * 100)}%</span>
    </SliderWrapper>
  );
};

export default VolumSlider;

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .icon {
    font-style: normal;
    font-size: 20px;
    width: 24px;
    display: flex;
    justify-content: center;
  }
  .status-label {
    width: 20px;
    text-align: right;
    font-size: 12px;
    font-weight: 600;
    color: var(--color-text-secondary);
    letter-spacing: 1px;
  }
`;

const ListenButton = styled.button`
  padding: 8px 16px;
  border-radius: 5px;
  border: none;
  background: ${props =>
    props.$isMuted ? "#ccc" : "var(--color-accent-olive, #99aa8c)"};
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  filter: brightness(1.1);
`;

const StyledSlider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 180px;
  height: 6px;
  background: ${props =>
    `linear-gradient(to right, var(--color-accent-olive) 0%, var(--color-accent-olive) ${props.value * 100}%, var(--color-border) ${props.value * 100}%, var(--color-border) 100%)`};
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    background: var(--color-deep-brown, #4a3a2a);
    border: 3px solid #fff;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.2);
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: var(--color-deep-brown);
    border: 3px solid #fff;
    border-radius: 50%;
  }
`;
