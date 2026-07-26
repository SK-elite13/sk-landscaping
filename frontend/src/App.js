import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicLayout } from "./components/PublicLayout";
import { LeadDialogProvider } from "./context/LeadDialogContext";
import Home from "./pages/Home";

export default function App() {
  return (
    <LeadDialogProvider>
      <Router>
        <PublicLayout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </PublicLayout>
      </Router>
    </LeadDialogProvider>
  );
}
