import { useRef, useState } from "react";
import DemoSection from "../../components/feature/demo/DemoSection";
import DemoWrapper from "../../components/feature/demo/DemoWrapper";
import FeatureCard from "../../components/feature/FeatureCard";
import FeatureContainer from "../../components/feature/FeatureContainer";
import FeatureHeader from "../../components/feature/FeatureHeader";
import { featureData } from "../../data/portfolioData";
import FeatureSectionWrap from "../../layout/feature/FeatureSectionWrap";

const FeaturePage = () => {
  const [selectedId, setSelectedId] = useState(null);
  const demoRef = useRef(null);

  const selectedFeature = featureData.find(item => item.id === selectedId);

  const handleCardClick = id => {
    setSelectedId(id);

    setTimeout(() => {
      if (demoRef.current) {
        const offset = demoRef.current.offsetTop;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <FeatureSectionWrap>
      <FeatureHeader />
      <FeatureContainer>
        {featureData.map(item => (
          <FeatureCard
            item={item}
            key={item.id}
            onClick={() => handleCardClick(item.id)}
          />
        ))}
      </FeatureContainer>
      <div ref={demoRef}>
        {selectedFeature ? (
          <DemoSection isOpen={selectedId !== null}>
            <DemoWrapper
              setSelectedId={setSelectedId}
              selectedFeature={selectedFeature}
              selectedId={selectedId}
            />
          </DemoSection>
        ) : null}
      </div>
    </FeatureSectionWrap>
  );
};

export default FeaturePage;
