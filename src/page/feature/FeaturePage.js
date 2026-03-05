import { useRef, useState } from "react";
import DemoSection from "../../components/feature/demo/DemoSection";
import DemoWrapper from "../../components/feature/demo/DemoWrapper";
import FeatureCard from "../../components/feature/FeatureCard";
import FeatureContainer from "../../components/feature/FeatureContainer";
import FeatureHeader from "../../components/feature/FeatureHeader";
import { featureData } from "../../data/portfolioData";
import FeatureSectionWrap from "../../layout/feature/FeatureSectionWrap";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

const FeaturePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const demoRef = useRef(null);

  const currentPath = location.pathname.split("/")[2];
  const selectedFeature = featureData.find(item => item.path === currentPath);

  const handleCardClick = item => {
    const targetPath = item.path === "speech" ? `${item.path}/1` : item.path;
    navigate(`/features/${targetPath}`);

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
            onClick={() => handleCardClick(item)}
          />
        ))}
      </FeatureContainer>
      <div ref={demoRef}>
        {currentPath ? (
          <DemoSection isOpen={true}>
            <DemoWrapper selectedFeature={selectedFeature}>
              <Outlet />
            </DemoWrapper>
          </DemoSection>
        ) : null}
      </div>
    </FeatureSectionWrap>
  );
};

export default FeaturePage;
