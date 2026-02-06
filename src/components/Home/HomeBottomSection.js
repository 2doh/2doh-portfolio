import React, { useState } from "react";
import styled from "styled-components";
import { projectData } from "../../data/portfolioData";
import ProjectOverview from "./ProjectOverview";

const HomeBottomSection = () => {
  const [filter, setFilter] = useState("전체");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["전체", "개인", "협업", "클론"];
  const filteredProjects =
    filter === "전체"
      ? projectData
      : projectData.filter(p => p.category === filter);
  return (
    <>
      <h3>⚒️ Projects</h3>
      <FilterBar>
        {categories.map(cate => (
          <FilterBtn
            key={cate}
            active={filter === cate}
            onClick={() => setFilter(cate)}
          >
            {cate}
          </FilterBtn>
        ))}
      </FilterBar>
      <ProjectGrid>
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            onClick={() => setSelectedProject(project)}
          >
            <h4>
              [{project.category}] {project.title}
            </h4>
            <p style={{ fontSize: "0.9rem", color: "#666" }}>
              {project.description}
            </p>
          </ProjectCard>
        ))}
      </ProjectGrid>
      <ProjectOverview
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
    </>
  );
};

export default HomeBottomSection;

const FilterBar = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 30px;
  margin-top: 10px;
  flex-wrap: wrap;
`;

const FilterBtn = styled.button`
  padding: 8px 20px;
  border-radius: 5px;
  border: 1px solid var(--color-border);
  background: ${props =>
    props.active ? "var(--color-bg-white)" : "var(--color-bg-sub)"};
  color: var(--color-text-primary);
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  &:hover {
    background: ${props => (props.active ? "" : "#f0f0f0;")};
    color: ${props => (props.active ? "" : "#000000;")};
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  border: 1px solid var(--color-border);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding: 30px;
  background: var(--color-bg-white);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 12px;
  }

  p {
    font-size: 0.95rem;
    color: var(--color-text-secondary);
    /* 글자수가 너무 길 때 3줄까지만 노출 */
    /* display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden; */
  }

  &:hover {
    transform: translateY(-8px);
    border-color: var(--color-accent-mint);
    box-shadow: 0 20px 40px rgba(198, 219, 218, 0.3);
  }
`;
