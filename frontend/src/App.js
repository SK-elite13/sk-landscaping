import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicLayout } from "./components/PublicLayout";
import { LeadDialogProvider } from "./context/LeadDialogContext";

import Home from "./pages/Home";
// Make sure these page files exist in src/pages/ or standard components
import { Services } from "./pages/Services"; 
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <LeadDialogProvider>
      <Router>
        <PublicLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PublicLayout>
      </Router>
    </LeadDialogProvider>
  );
}
