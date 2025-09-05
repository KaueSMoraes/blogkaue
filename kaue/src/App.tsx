import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
