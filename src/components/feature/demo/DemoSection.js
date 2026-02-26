import React from "react";
import styled from "styled-components";

const DemoSection = ({ children, isOpen }) => {
  return <DemoWrap isOpen={isOpen}>{children}</DemoWrap>;
};

export default DemoSection;

const DemoWrap = styled.section`
  margin-top: 50px;
  background: var(--color-bg);
  border-radius: 10px;
  border: 1px solid var(--color-border);
  min-height: 400px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
`;
