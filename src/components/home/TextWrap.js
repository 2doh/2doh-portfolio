import React from "react";
import styled from "styled-components";
import ScrollText from "./ScrollText";

const TextWrap = () => {
  return (
    <TextWrapper>
      <SubGreeting>
        <ScrollText text="발전하고 정진하고자 하는," delay={0.2} />
      </SubGreeting>
      <MainTitle>
        <Highlight>
          <ScrollText text="이도현" delay={1} />
        </Highlight>
        <ScrollText text="입니다." delay={1.3} />
      </MainTitle>
      <Description>
        <ScrollText
          text="팀원들과의 협업을 통해 더 나은 결과를 만들어가는 과정과,"
          delay={1.5}
        />
        <br />
        <ScrollText
          text="복잡한 문제를 해결해 나가는 순간에 성취감과 즐거움을 느낍니다."
          delay={3}
        />
        <br />
        <ScrollText
          text="트렌드에 맞춰 꾸준히 배우고 성장하는 개발자가 되고자 합니다."
          delay={4.5}
        />
      </Description>
    </TextWrapper>
  );
};

export default TextWrap;

const TextWrapper = styled.div`
  top: 50%;
  transform: translateY(-60%);
  position: absolute;
  text-align: center;
`;

const SubGreeting = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 8px;
`;

const MainTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
`;

const Highlight = styled.span`
  color: var(--color-accent-mint);
  /* background: linear-gradient(transparent 80%, var(--color-accent-amber) 10%); */
  padding: 0 5px;
`;

const Description = styled.div`
  font-size: 1.1rem;
  line-height: 1.4;
  opacity: 0.9;
  word-break: keep-all;
  color: #e0e0e0;
`;
