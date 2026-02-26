import React from "react";
import styled from "styled-components";
import DarkModeDemo from "./DarkModeDemo";
import { flexCenter } from "../../../styles/mixin";

const DemoWrapper = ({ selectedId, setSelectedId, selectedFeature }) => {
  return (
    <Wrapper>
      <div className="demo-header">
        <div className="title-group">
          <span className="id-badge">#0{selectedFeature.id}</span>
          <h2>{selectedFeature.title} Demo</h2>
        </div>
        <button onClick={() => setSelectedId(null)} className="close-btn">
          닫기
        </button>
      </div>

      <div className="demo-content">
        {selectedId === 1 && <DarkModeDemo />}
        {/* {selectedId === 4 && <SearchDemo />}
        {selectedId === 5 && <CRUDDemo />} */}
      </div>
    </Wrapper>
  );
};

export default DemoWrapper;

const Wrapper = styled.div`
  padding: 40px;

  .demo-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;

    .id-badge {
      color: var(--color-accent-olive);
      font-weight: 800;
      margin-right: 10px;
    }

    h2 {
      font-size: 1.8rem;
      font-weight: 800;
      color: var(--color-text-primary);
    }

    .close-btn {
      background: #f5f5f5;
      border: none;
      padding: 8px 16px;
      border-radius: 10px;
      cursor: pointer;
      &:hover {
        background: #e0e0e0;
      }
    }
  }

  .demo-content {
    border-radius: 10px;
    padding: 30px;
    min-height: 300px;
    ${flexCenter}
  }
`;
