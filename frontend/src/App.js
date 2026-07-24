import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { LeadDialogProvider } from "./context/LeadDialogContext";
import { PublicLayout } from "./components/PublicLayout";
import { LeadDialog } from "./components/LeadDialog";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AdminLogin from "./pages/AdminLogin";

export default function App() {
  return (
    <AuthProvider>
      <LeadDialogProvider>
        <Router>
          <PublicLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admin/login" element={<AdminLogin />} />
            </Routes>
          </PublicLayout>
          <LeadDialog />
        </Router>
      </LeadDialogProvider>
    </AuthProvider>
  );
}
