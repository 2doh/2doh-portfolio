import React, { Children } from "react";
import styled from "styled-components";

const HomeSectionWrap = ({ children }) => {
  return <Section>{children}</Section>;
};

export default HomeSectionWrap;

const Section = styled.section`
  padding: 100px 5% 60px;
  max-width: 1200px;
  margin: 0 auto;
`;
