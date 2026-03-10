import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WhiteBoardDemo from "./components/feature/demo/board/WhiteBoardDemo";
import ConfettiCannon from "./components/feature/demo/confetti/ConfettiCannon";
import DarkModeDemo from "./components/feature/demo/DarkModeDemo";
import SearchDemo from "./components/feature/demo/search/SearchDemo";
import SpeechDemo from "./components/feature/demo/speech/SpeechDemo";
import ScrollToTop from "./layout/common/ScrollToTop";
import Header from "./layout/Header";
import { useThemeStore } from "./store/useThemeStore";
import GlobalStyle from "./styles/GlobalStyle";
import VurtualListDemo from "./components/feature/demo/virtuallist/VurtualListDemo";
import HomePage from "./page/home/HomePage";
import ProjectsPage from "./page/projects/ProjectsPage";
import FeaturePage from "./page/feature/FeaturePage";

function App() {
  const isDarkMode = useThemeStore(state => state.isDarkMode);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light",
    );
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/features" element={<FeaturePage />}>
          <Route path="darkmode" element={<DarkModeDemo />} />
          <Route path="whiteboard" element={<WhiteBoardDemo />} />
          <Route path="speech" element={<SpeechDemo />} />
          <Route path="search" element={<SearchDemo />} />
          <Route path="confetti" element={<ConfettiCannon />} />
          <Route path="virtualList" element={<VurtualListDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
