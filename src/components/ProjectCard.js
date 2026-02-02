import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
  border: 1px solid #eee;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 15px;
  flex-wrap: wrap;
  gap: 10px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;

const Period = styled.span`
  font-size: 0.9rem;
  color: #888;
  background: #f1f3f5;
  padding: 4px 8px;
  border-radius: 4px;
`;

const StackList = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const StackTag = styled.span`
  font-size: 0.8rem;
  border: 1px solid #ddd;
  padding: 2px 8px;
  border-radius: 4px;
  color: #555;
`;

const Description = styled.p`
  margin-bottom: 20px;
  line-height: 1.6;
  color: #444;
`;

const FeatureList = styled.ul`
  list-style: none;
  background: #fafafa;
  padding: 20px;
  border-radius: 8px;
`;

const FeatureItem = styled.li`
  margin-bottom: 8px;
  position: relative;
  padding-left: 20px;
  font-size: 0.95rem;
  color: #555;

  &::before {
    content: "✔";
    position: absolute;
    left: 0;
    color: #28a745;
    font-size: 0.8rem;
    top: 3px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Header>
        <Title>{project.title}</Title>
        <Period>{project.period}</Period>
      </Header>

      <StackList>
        {project.stack.map((tech, i) => (
          <StackTag key={i}>{tech}</StackTag>
        ))}
      </StackList>

      <Description>{project.description}</Description>

      <FeatureList>
        {project.features.map((feature, i) => (
          <FeatureItem key={i}>{feature}</FeatureItem>
        ))}
      </FeatureList>
    </Card>
  );
};

export default ProjectCard;
