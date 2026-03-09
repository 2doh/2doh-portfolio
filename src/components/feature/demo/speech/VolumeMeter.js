import React from "react";
import styled, { css, keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(1.5); }
`;

const VolumeMeter = ({ listening, toggleListening, volume }) => {
  const barCount = 10;
  return (
    <VolumeMeterWrapper>
      <IconWrapper $onSpeaking={listening} onClick={toggleListening}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
          <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" />
          <path d="M8 6v8" />
        </svg>
      </IconWrapper>

      <div className="volumemeter">
        {Array.from({ length: barCount }).map((_, index) => (
          <VolumeBar
            key={index}
            active={index < volume * barCount}
            delay={index * 0.1}
          />
        ))}
      </div>
    </VolumeMeterWrapper>
  );
};

export default VolumeMeter;

const VolumeMeterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  .volumemeter {
    display: flex;
    width: 150px;
    height: 30px;
    gap: 6px;
    align-items: center;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  transition: transform 0.2s ease;
  width: 30px;
  height: 30px;

  svg {
    width: 100%;
    height: 100%;
  }
  filter: ${props =>
    props.$onSpeaking ? `drop-shadow(1px 1px 5px var(--color-error))` : `none`};

  &:active {
    transform: scale(0.9);
  }
`;

const VolumeBar = styled.div`
  flex: 1;
  height: 60%;
  border-radius: 4px;
  background-color: ${props =>
    props.active ? "var(--color-accent, #4ade80)" : "#e2e8f0"};
  transition: all 0.2s ease;

  ${props =>
    props.playing &&
    props.active &&
    css`
      animation: ${bounce} 0.6s ease-in-out infinite;
      animation-delay: ${props.delay}s;
    `}
`;
