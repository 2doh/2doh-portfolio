import React from "react";
import styled from "styled-components";

const HomeTopSection = () => {
  // 기술 숙련도 데이터 (필요에 따라 수정하세요)
  const skillLevels = [
    { name: "React", level: 90, color: "var(--color-accent-mint)" },
    { name: "Javascript", level: 85, color: "var(--color-accent-amber)" },
    {
      name: "Styled Components",
      level: 95,
      color: "var(--color-accent-coral)",
    },
    { name: "TypeScript", level: 70, color: "var(--color-highlight)" },
  ];

  return (
    <Container>
      {/* 1. 개인 소개 영역 */}
      <IntroBox>
        <Greeting>안녕하세요, 도현입니다. 👋</Greeting>
        <Title>
          사용자 중심의 가치를 만드는 <br /> 프론트엔드 개발자입니다.
        </Title>
        <Description>
          복잡한 문제를 단순하고 직관적인 UI로 풀어내는 과정에서 즐거움을
          느낍니다. 최신 기술 트렌드를 빠르게 습득하며, 팀원들과의 원활한 소통을
          통해 최고의 결과물을 만들어내고자 노력합니다.
        </Description>
      </IntroBox>

      <ContentGrid>
        {/* 2. 학력 및 교육 이력 */}
        <InfoCard>
          <SubTitle>🎓 Education</SubTitle>
          <HistoryList>
            <HistoryItem>
              <strong>OO대학교 (컴퓨터공학 전공)</strong>
              <span>2018.03 - 2023.02</span>
            </HistoryItem>
            <HistoryItem>
              <strong>부트캠프 프론트엔드 코스 6기</strong>
              <span>2023.06 - 2023.12</span>
              <p>- 리액트 심화 과정 및 협업 프로젝트 진행</p>
            </HistoryItem>
          </HistoryList>
        </InfoCard>

        {/* 3. 테크 스택 & 숙련도 */}
        <InfoCard>
          <SubTitle>⚒️ Tech Skills</SubTitle>
          <SkillWrapper>
            {skillLevels.map(skill => (
              <SkillItem key={skill.name}>
                <SkillLabel>
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </SkillLabel>
                <ProgressBar>
                  <Progress fill={skill.level} color={skill.color} />
                </ProgressBar>
              </SkillItem>
            ))}
          </SkillWrapper>
          <BadgeContainer>
            <img
              src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"
              alt="react"
            />
            <img
              src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white"
              alt="js"
            />
            <img
              src="https://img.shields.io/badge/StyledComponents-DB7093?style=flat-square&logo=StyledComponents&logoColor=white"
              alt="sc"
            />
          </BadgeContainer>
        </InfoCard>
      </ContentGrid>
    </Container>
  );
};

export default HomeTopSection;

// --- Styled Components ---

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const IntroBox = styled.div`
  margin-bottom: 20px;
`;

const Greeting = styled.span`
  background: var(--color-accent-lavender);
  color: var(--color-text-primary);
  padding: 4px 12px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  color: var(--color-text-primary);
  margin: 15px 0;
  line-height: 1.3;
  word-break: keep-all;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  max-width: 700px;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
`;

const InfoCard = styled.div`
  background: var(--color-bg-white);
  padding: 30px;
  border-radius: 24px;
  border: 1px solid var(--color-border);
`;

const SubTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 1.25rem;
  color: var(--color-text-primary);
`;

const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const HistoryItem = styled.div`
  display: flex;
  flex-direction: column;
  strong {
    font-size: 1rem;
    color: var(--color-text-primary);
  }
  span {
    font-size: 0.85rem;
    color: var(--color-text-secondary);
    margin-bottom: 4px;
  }
  p {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    margin: 0;
  }
`;

const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 25px;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const SkillLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text-secondary);
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: var(--color-bg-sub);
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${props => props.fill}%;
  height: 100%;
  background: ${props => props.color};
  border-radius: 4px;
  transition: width 1s ease-in-out;
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding-top: 15px;
  border-top: 1px dashed var(--color-border);
  img {
    height: 22px;
  }
`;
