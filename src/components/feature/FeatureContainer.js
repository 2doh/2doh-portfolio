import styled from "styled-components";
import { featureData } from "../../data/portfolioData";

const FeatureContainer = ({ children }) => {
  return (
    <Container>
      <FeatureGrid>{children}</FeatureGrid>
    </Container>
  );
};

export default FeatureContainer;

const Container = styled.div`
  width: 100%;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 30px;
`;
