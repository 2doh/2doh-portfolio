import styled from "styled-components";
import { useThemeStore } from "../../../store/useThemeStore";

const DarkModeDemo = () => {
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  return (
    <DemoBox>
      <StatusText>
        현재 모드: <strong>{isDarkMode ? "DARK 🌙" : "LIGHT ☀️"}</strong>
      </StatusText>

      <ToggleContainer>
        <label>
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <SwitchBackground>
            <CircleBtn isDarkMode={isDarkMode} />
            <IconWrapper position="left" isActive={!isDarkMode}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            </IconWrapper>
            <IconWrapper position="right" isActive={isDarkMode}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
              </svg>
            </IconWrapper>
          </SwitchBackground>
        </label>
      </ToggleContainer>

      <PreviewCard>
        <h4>다크모드 프리뷰</h4>
        <p>
          이 카드는 CSS 변수와 Zustand 상태관리를 사용하여 테마에 따라 색상이
          자동으로 변경됩니다.
        </p>
      </PreviewCard>
    </DemoBox>
  );
};

export default DarkModeDemo;

const DemoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StatusText = styled.p`
  font-size: 1.2rem;
  color: var(--color-text-primary);
  strong {
    color: var(--color-accent-mint);
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;

  label {
    cursor: pointer;
    display: block;
    position: relative;
    width: 150px;
    aspect-ratio: 500 / 200;
  }

  input {
    display: none;
  }
`;

const SwitchBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--color-border);
  border-radius: 100px;
  transition: background-color 0.5s ease;
  overflow: hidden;
  box-shadow: inset 0px 4px 8px rgba(0, 0, 0, 0.1);

  input:checked + & {
    background-color: #2d2d2d;
    box-shadow: inset 0px 4px 8px rgba(0, 0, 0, 0.5);
  }
`;

const CircleBtn = styled.div`
  position: absolute;
  top: 10%;
  left: ${props => (props.isDarkMode ? "60%" : "5%")};
  height: 80%;
  aspect-ratio: 1 / 1;
  background-color: ${props => (props.isDarkMode ? "#cbd5e1" : "#fbbf24")};
  border-radius: 50%;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 2;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 50%;
  z-index: 1;
  transition: all 0.5s ease;

  ${props => (props.position === "left" ? "left: 12%;" : "right: 12%;")}

  svg {
    width: 100%;
    height: 100%;
    stroke: ${props =>
      props.isActive
        ? props.position === "left"
          ? "#d97706"
          : "#e2e8f0"
        : "#94a3b8"};
    transition: stroke 0.5s ease;
  }
`;

const PreviewCard = styled.div`
  width: 100%;
  max-width: 300px;
  padding: 20px;
  border-radius: 15px;
  background: var(--color-card-bg);
  border: 1px solid var(--color-border);
  text-align: left;

  h4 {
    margin-top: 0;
    color: var(--color-text-primary);
  }
  p {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
  }
`;
