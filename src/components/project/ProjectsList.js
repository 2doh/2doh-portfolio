import React from "react";
import styled from "styled-components";

const ProjectsList = ({ filteredProjects, setSelectedProject }) => {
  return (
    <ProjectGrid>
      {filteredProjects.map(project => (
        <ProjectCard
          key={project.id}
          onClick={() => setSelectedProject(project)}
        >
          <ImageWrapper>
            {project.img ? (
              <img src={project.img} alt={project.title} />
            ) : (
              <div className="no-image">No Preview Available</div>
            )}
            <div className="overlay">상세보기</div>
          </ImageWrapper>
          <CardContent>
            <CategoryLabel cate={project.category}>
              {project.category}
            </CategoryLabel>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <StackPreview>
              {project.stack?.slice(0, 3).map(s => (
                <span key={s}>#{s}</span>
              ))}
            </StackPreview>
          </CardContent>
        </ProjectCard>
      ))}
    </ProjectGrid>
  );
};

export default ProjectsList;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  background: var(--color-bg);
  border-radius: 10px;
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: var(--color-accent-mint);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  background: var(--color-bg-sub);
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .no-image {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-secondary);
    font-size: 0.9rem;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${ProjectCard}:hover & {
    img {
      transform: scale(1.1);
    }
    .overlay {
      opacity: 1;
    }
  }
`;

const CardContent = styled.div`
  padding: 24px;
`;

const CategoryLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 4px;
  background: ${props =>
    props.cate === "개인"
      ? "var(--color-accent-lavender)"
      : props.cate === "협업"
        ? "var(--color-accent-amber)"
        : "var(--color-accent-mint)"};
  color: var(--color-text);
  display: inline-block;
  margin-bottom: 12px;
`;

const StackPreview = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 8px;
  span {
    font-size: 0.8rem;
    color: var(--color-accent-olive);
    font-weight: 600;
  }
`;
