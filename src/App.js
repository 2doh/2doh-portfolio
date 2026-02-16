import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import HomePage from "./page/Home/HomePage";
import ProjectsPage from "./page/Projects/ProjectsPage";
import GlobalStyle from "./styles/GlobalStyle";
import ScrollToTop from "./layout/Common/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
