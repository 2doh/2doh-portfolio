import Header from "./layout/Header";
import HomePage from "./page/Home/HomePage";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HomePage />
      {/* <ProjectWrap>
        <HomeBottomSection />
      </ProjectWrap> */}
    </>
  );
}

export default App;
