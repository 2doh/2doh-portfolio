import React from "react";
import styled from "styled-components";
import { Section, SectionTitle } from "./Layout";

const ProfileCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Role = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
  font-weight: 600;
`;

const Bio = styled.p`
  max-width: 600px;
  margin: 0 auto 30px;
  color: #444;
`;

const SkillContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const SkillBadge = styled.span`
  background-color: #e7f5ff;
  color: #007bff;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
`;

const Profile = ({ data }) => {
  return (
    <Section>
      <SectionTitle>About Me</SectionTitle>
      <ProfileCard>
        <Name>{data.name}</Name>
        <Role>{data.role}</Role>
        <Bio>{data.introduction}</Bio>
        <SkillContainer>
          {data.skills.map((skill, index) => (
            <SkillBadge key={index}>{skill}</SkillBadge>
          ))}
        </SkillContainer>
      </ProfileCard>
    </Section>
  );
};

export default Profile;
