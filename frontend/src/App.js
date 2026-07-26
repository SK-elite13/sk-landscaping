import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicLayout } from "./components/PublicLayout";
import { LeadDialogProvider } from "./context/LeadDialogContext";

import Home from "./pages/Home";
import { ServicesPage } from "./pages/ServicesPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  return (
    <LeadDialogProvider>
      <Router>
        <PublicLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </PublicLayout>
      </Router>
    </LeadDialogProvider>
  );
}
