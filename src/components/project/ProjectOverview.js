import React from "react";
import styled from "styled-components";
import { flexCenter } from "../../styles/mixin";

const ProjectOverview = ({ selectedProject, setSelectedProject }) => {
  if (!selectedProject) return null;

  return (
    <ModalOverlay onClick={() => setSelectedProject(null)}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseBtn onClick={() => setSelectedProject(null)}>&times;</CloseBtn>

        <ModalHeader img={selectedProject.img}>
          <div className="header-overlay">
            <CategoryBadge cate={selectedProject.category}>
              {selectedProject.category}
            </CategoryBadge>
            <h2>{selectedProject.title}</h2>
          </div>
        </ModalHeader>

        <ModalBody>
          <Section>
            <h4>Overview</h4>
            <p className="description">{selectedProject.description}</p>
          </Section>
          {selectedProject.content && (
            <Section>
              <h4>Description</h4>
              <p className="content">{selectedProject.content}</p>
            </Section>
          )}
          <Section>
            <h4>Tech Stack</h4>
            <StackGroup>
              {selectedProject.stack.map(s => (
                <span key={s}>#{s}</span>
              ))}
            </StackGroup>
          </Section>
          <ButtonGroup>
            {selectedProject.siteUrl && (
              <IconButton
                href={selectedProject.siteUrl}
                target="_blank"
                rel="noreferrer"
                className="primary"
              >
                🌐 Live Demo
              </IconButton>
            )}
            {selectedProject.githubUrl && (
              <IconButton
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Icon>
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </Icon>
                GitHub Repository
              </IconButton>
            )}
          </ButtonGroup>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProjectOverview;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  ${flexCenter}
  z-index: 2000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: var(--color-bg-white);
  border-radius: 24px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-accent-mint);
    border-radius: 10px;
  }
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 300px;
  background: url(${props => props.img}) no-repeat center center / cover;
  position: relative;

  .header-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 40px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    color: white;
  }

  h2 {
    font-size: 2.2rem;
    font-weight: 800;
    margin-top: 10px;
  }
`;

const CategoryBadge = styled.span`
  background: ${props =>
    props.cate === "개인"
      ? "var(--color-accent-lavender)"
      : props.cate === "협업"
        ? "var(--color-accent-amber)"
        : "var(--color-accent-mint)"};
  color: var(--color-text-primary);
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 700;
`;

const ModalBody = styled.div`
  padding: 40px;
`;

const Section = styled.div`
  margin-bottom: 32px;

  h4 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 12px;
    color: var(--color-text-primary);
    display: flex;
    align-items: center;
    &::before {
      content: "";
      width: 4px;
      height: 16px;
      background: var(--color-accent-mint);
      margin-right: 10px;
      border-radius: 2px;
    }
  }

  p {
    line-height: 1.7;
    color: var(--color-text-secondary);
  }

  .description {
    font-weight: 600;
    color: var(--color-text-primary);
    font-size: 1.1rem;
  }
`;

const StackGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  span {
    background: var(--color-bg-sub);
    padding: 6px 14px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-accent-olive);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 40px;
`;

const IconButton = styled.a`
  flex: 1;
  text-decoration: none;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
  transition: all 0.3s;
  ${flexCenter}
  gap: 8px;

  background: var(--color-bg-sub);
  color: var(--color-text-primary);

  &.primary {
    background: var(--color-text-primary);
    color: white;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    filter: brightness(1.1);
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
  z-index: 10;
  ${flexCenter}
  transition: all 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`;

const Icon = styled.span`
  font-size: 1.2rem;
  ${flexCenter}
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    transition: fill 0.3s ease;
  }
`;
