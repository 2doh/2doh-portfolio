import HomeTopSection from "../../components/Home/HomeTopSection";
import HomeSectionWrap from "../../layout/Home/HomeSectionWrap";
import { profileData } from "../../data/portfolioData";
import ContactSection from "../../components/Home/ContactSection";

const HomePage = () => {
  const profile = profileData;
  return (
    <>
      <HomeSectionWrap>
        <HomeTopSection />
      </HomeSectionWrap>
    </>
  );
};

export default HomePage;
