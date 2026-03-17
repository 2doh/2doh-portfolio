import React from "react";
import { Card, Grid } from "../../layout/common/Layout";
import styled from "styled-components";
import { useScrollFadeIn } from "../../hooks/useScrollFadeIn";
import { profileData } from "../../data/portfolioData";

const GridWrap = () => {
  const profile = profileData;
  const animatedEducation = useScrollFadeIn("up", 1, 0.2);
  const animatedSkills = useScrollFadeIn("up", 1, 0.2);
  return (
    <Grid>
      <Card {...animatedEducation}>
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

      <Card {...animatedSkills}>
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
  );
};

export default GridWrap;

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
