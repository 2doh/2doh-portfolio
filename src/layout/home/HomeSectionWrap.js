import styled from "styled-components";
import { Wrap } from "../common/Layout";

const HomeSectionWrap = ({ children }) => {
  return <HomeWrap>{children}</HomeWrap>;
};

export default HomeSectionWrap;

const HomeWrap = styled.div`
  margin: 0 auto;
`;
