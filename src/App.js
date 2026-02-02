import React from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { Container, Section, SectionTitle } from "./components/Layout";
import Profile from "./components/Profile";
import ProjectCard from "./components/ProjectCard";
import { profileData, projectData } from "./data/portfolioData";

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        {/* 프로필 섹션 */}
        <Profile data={profileData} />

        {/* 프로젝트 섹션 */}
        <Section>
          <SectionTitle>Projects</SectionTitle>
          <ProjectsGrid>
            {projectData.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ProjectsGrid>
        </Section>
      </Container>
    </>
  );
}

export default App;
