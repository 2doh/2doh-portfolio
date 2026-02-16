import React from "react";
import styled from "styled-components";

const ProjectCategory = ({ filter, setFilter }) => {
  const categories = ["전체", "개인", "협업", "클론"];
  return (
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
  );
};

export default ProjectCategory;

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
