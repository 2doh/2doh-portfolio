import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./layout/Common/ScrollToTop";
import Header from "./layout/Header";
import FeaturePage from "./page/feature/FeaturePage";
import HomePage from "./page/home/HomePage";
import ProjectsPage from "./page/projects/ProjectsPage";
import GlobalStyle from "./styles/GlobalStyle";
import { useThemeStore } from "./store/useThemeStore";
import { useEffect } from "react";

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
        <Route path="/features" element={<FeaturePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
