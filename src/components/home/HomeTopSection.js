import styled from "styled-components";
import { profileData } from "../../data/portfolioData";
import ContactSection from "./ContactSection";
import { useScrollFadeIn } from "../../hooks/useScrollFadeIn";
import TextWrap from "./TextWrap";
import GridWrap from "./GridWrap";
import bgImage from "../../assets/images/homebg.webp";
import { flexCenter } from "../../styles/mixin";

const HomeTopSection = () => {
  const profile = profileData;
  const animatedContact = useScrollFadeIn("up", 1, 0.2);

  return (
    <MainContent bgImage={bgImage}>
      <Overlay />
      <CenterWrapper>
        <TextWrap />
        <ScrollIcon>
          <span>∨</span>
        </ScrollIcon>
      </CenterWrapper>

      <ContentSection>
        <div {...animatedContact}>
          <ContactSection email={profile.email} github={profile.github} />
        </div>
        <GridWrap />
      </ContentSection>
    </MainContent>
  );
};

export default HomeTopSection;

const MainContent = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 120vh;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: #fff;
  /* margin-top: -100px; */
`;

const CenterWrapper = styled.div`
  height: 100vh;
  width: 100%;
  ${flexCenter}
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  [data-theme="dark"] & {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const ScrollIcon = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1rem;
  font-weight: bold;
  animation: bounce 1.5s infinite;
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translate(-50%, 0);
    }
    40% {
      transform: translate(-50%, -10px);
    }
  }
`;

const ContentSection = styled.section`
  width: 100%;
  background-color: var(--color-bg);
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  padding: 100px 5%;
  display: flex;
  flex-direction: column;
  gap: 60px;
  border-radius: 50px 50px 0 0;
`;
