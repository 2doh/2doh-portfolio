import React from "react";
import styled from "styled-components";

const FeatureHeader = () => {
  return (
    <HeaderSection>
      <h2>Interaction Lab</h2>
      <p>완성도와 UX를 고민하며 구현한 기능 모음입니다.</p>
    </HeaderSection>
  );
};

export default FeatureHeader;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 60px;
  h2 {
    font-size: 2.5rem;
    font-weight: 900;
    margin-bottom: 16px;
    background: linear-gradient(90deg, #000, var(--color-accent-mint));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    color: var(--color-text-secondary);
    font-size: 1.1rem;
  }
`;
