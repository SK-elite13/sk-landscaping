import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { PublicLayout } from "./components/PublicLayout";
import { LeadDialogProvider } from "./context/LeadDialogContext";
import ScrollToTop from "./components/ScrollToTop";

// Page Imports
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// Wrapper component to apply smooth fade & slide-up animation on route change
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div
      key={location.pathname}
      className="animate-fade-slide-up transition-all duration-300 ease-out"
    >
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <LeadDialogProvider>
      <Router>
        <ScrollToTop />
        <PublicLayout>
          <AnimatedRoutes />
        </PublicLayout>
      </Router>
    </LeadDialogProvider>
  );
}
