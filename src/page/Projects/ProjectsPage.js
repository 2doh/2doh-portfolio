import { useState } from "react";
import ProjectCategory from "../../components/project/ProjectCategory";
import ProjectsList from "../../components/project/ProjectsList";
import { projectData } from "../../data/portfolioData";
import ProjectWrap from "../../layout/project/ProjectWrap";
import ProjectOverview from "../../components/project/ProjectOverview";

const ProjectsPage = () => {
  const [filter, setFilter] = useState("전체");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    filter === "전체"
      ? projectData
      : projectData.filter(p => p.category === filter);

  return (
    <>
      <ProjectWrap>
        <ProjectCategory filter={filter} setFilter={setFilter} />
        <ProjectsList
          filteredProjects={filteredProjects}
          setSelectedProject={setSelectedProject}
        />
        <ProjectOverview
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      </ProjectWrap>
    </>
  );
};

export default ProjectsPage;
