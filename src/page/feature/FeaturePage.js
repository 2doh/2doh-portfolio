import FeatureCard from "../../components/feature/FeatureCard";
import FeatureContainer from "../../components/feature/FeatureContainer";
import FeatureHeader from "../../components/feature/FeatureHeader";
import { featureData } from "../../data/portfolioData";
import FeatureSectionWrap from "../../layout/feature/FeatureSectionWrap";

const FeaturePage = () => {
  return (
    <FeatureSectionWrap>
      <FeatureHeader />
      <FeatureContainer>
        {featureData.map(item => (
          <FeatureCard item={item} key={item.id} />
        ))}
      </FeatureContainer>
    </FeatureSectionWrap>
  );
};

export default FeaturePage;
