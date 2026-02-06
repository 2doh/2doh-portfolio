import HomeBottomSection from "./components/Home/HomeBottomSection";
import HomeTopSection from "./components/Home/HomeTopSection";
import Header from "./layout/Header";
import HomeSectionWrap from "./layout/Home/HomeSectionWrap";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HomeSectionWrap id="home">
        <HomeTopSection />
      </HomeSectionWrap>
      <HomeSectionWrap id="projects">
        <HomeBottomSection />
      </HomeSectionWrap>
    </>
  );
}

export default App;
