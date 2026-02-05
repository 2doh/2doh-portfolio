import React, { useState } from "react";
import styled from "styled-components";
import { projectData } from "../../data/portfolioData";

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
        {categories.map(cat => (
          <FilterBtn
            key={cat}
            active={filter === cat}
            onClick={() => setFilter(cat)}
          >
            {cat}
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
    </>
  );
};

export default HomeBottomSection;

const FilterBar = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const FilterBtn = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid #ddd;
  background: ${props => (props.active ? "#007bff" : "white")};
  color: ${props => (props.active ? "white" : "#333")};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #f0f0f0;
    color: black;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 20px;
  background: white;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }
`;
