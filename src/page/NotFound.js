import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useScrollFadeIn } from "../hooks/useScrollFadeIn"; // 훅 경로에 맞춰 수정하세요
import { flexCenter } from "../styles/mixin";

const NotFound = () => {
  const navigate = useNavigate();
  const animatedItem = useScrollFadeIn("up", 0.8, 0);

  return (
    <Container {...animatedItem}>
      <ErrorCode>404</ErrorCode>
      <Title>페이지를 찾을 수 없습니다</Title>
      <Description>
        요청하신 페이지가 사라졌거나, 잘못된 경로를 입력하셨습니다. <br />
        입력하신 주소가 정확한지 다시 한번 확인해 주세요.
      </Description>
      <HomeButton onClick={() => navigate("/")}>메인으로 돌아가기</HomeButton>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  ${flexCenter}
  flex-direction: column;
  background-color: var(--color-bg);
  color: var(--color-text-primary);
  text-align: center;
  padding: 0 20px;
`;

const ErrorCode = styled.h1`
  font-size: clamp(8rem, 20vw, 12rem);
  font-weight: 900;
  margin: 0;
  line-height: 1;
  background: linear-gradient(135deg, var(--color-accent-mint), #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.2;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-top: -20px;
  margin-bottom: 16px;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 40px;
`;

const HomeButton = styled.button`
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  background-color: var(--color-accent-mint);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-3px);
    filter: brightness(1.1);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
  }
`;
