import React from "react";
import styled from "styled-components";
import { profileData } from "../../data/portfolioData";
import { Card, Grid } from "../../layout/common/Layout";
import ContactSection from "./ContactSection";

const HomeTopSection = () => {
  const profile = profileData;

  return (
    <Container>
      <IntroBox>
        <Greeting>안녕하세요, 이도현입니다.</Greeting>
        <Title>
          발전하고 정진하는 <br /> 프론트엔드 개발자가 되고싶습니다.
        </Title>
        <Description>{profile.introduction}</Description>
      </IntroBox>

      <ContactSection email={profile.email} github={profile.github} />

      <Grid>
        <Card>
          <SubTitle>🎓 Education</SubTitle>
          <HistoryList>
            {profile.education.map(edu => (
              <HistoryItem key={edu.id}>
                <strong>{edu.title}</strong>
                <span>{edu.period}</span>
                <p>{edu?.desc}</p>
              </HistoryItem>
            ))}
          </HistoryList>
        </Card>

        <Card>
          <SubTitle>⚒️ Tech Skills</SubTitle>
          <SkillWrapper>
            {profile.skills.map(skill => (
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
            <img src="https://img.shields.io/badge/axios-A29E4?style=for-the-badge&logo=axios&logoColor=white" />
            <img src="https://img.shields.io/badge/typescript-007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
            <img
              src="https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg"
              width="50"
              height="30"
              alt="Zustand logo"
            />
          </BadgeContainer>
        </Card>
      </Grid>
    </Container>
  );
};

export default HomeTopSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const IntroBox = styled.div``;

const Greeting = styled.span`
  background: var(--color-accent-lavender);
  color: var(--color-text);
  padding: 4px 12px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
`;

const Title = styled.h1`
  /* font-size: 2.8rem; */
  font-size: clamp(2rem, 5vw, 3.2rem);
  color: var(--color-text-primary);
  margin: 15px 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
  word-break: keep-all;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  max-width: 700px;
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
  background: var(--color-warm-gray);
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
