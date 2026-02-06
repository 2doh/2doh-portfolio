import React, { useState } from "react";
import styled from "styled-components";

const ProjectOverview = ({ selectedProject, setSelectedProject }) => {
  return (
    <>
      {selectedProject && (
        <ModalOverlay onClick={() => setSelectedProject(null)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseBtn onClick={() => setSelectedProject(null)}>
              &times;
            </CloseBtn>
            <h2>{selectedProject.title}</h2>
            <p style={{ color: "#666", marginBottom: "20px" }}>
              {selectedProject.description}
            </p>

            <h4>사용한 기술</h4>
            <div style={{ display: "flex", gap: "5px", marginBottom: "20px" }}>
              {selectedProject.stack.map(s => (
                <span
                  key={s}
                  style={{
                    background: "#eee",
                    padding: "2px 8px",
                    borderRadius: "4px",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              {selectedProject.siteUrl && (
                <a
                  href={selectedProject.siteUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#007bff" }}
                >
                  🌐 Live Demo
                </a>
              )}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#333" }}
                >
                  🐙 GitHub
                </a>
              )}
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default ProjectOverview;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: var(--color-bg-white);
  padding: 50px;
  border-radius: 10px;
  max-width: 700px;
  width: 90%;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 24px;
    font-weight: 800;
  }

  h4 {
    margin-top: 30px;
    margin-bottom: 12px;
    color: var(--text-main);
  }

  p {
    font-size: 1.05rem;
    color: var(--text-sub);
    word-break: keep-all;
  }
`;
const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
`;
