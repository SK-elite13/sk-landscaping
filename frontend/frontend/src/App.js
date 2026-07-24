import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/context/AuthContext";
import { LeadDialogProvider } from "@/context/LeadDialogContext";
import { LeadDialog } from "@/components/LeadDialog";
import { PublicLayout } from "@/components/PublicLayout";
import Home from "@/pages/Home";
import ServicesPage from "@/pages/ServicesPage";
import ProjectsPage from "@/pages/ProjectsPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import AdminLogin from "@/pages/AdminLogin";
import AdminDashboard from "@/pages/AdminDashboard";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const Public = ({ children }) => <PublicLayout>{children}</PublicLayout>;

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      <AuthProvider>
        <BrowserRouter>
          <LeadDialogProvider>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Public><Home /></Public>} />
              <Route path="/services" element={<Public><ServicesPage /></Public>} />
              <Route path="/projects" element={<Public><ProjectsPage /></Public>} />
              <Route path="/about" element={<Public><AboutPage /></Public>} />
              <Route path="/contact" element={<Public><ContactPage /></Public>} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
            <LeadDialog />
          </LeadDialogProvider>
        </BrowserRouter>
      </AuthProvider>
      <Toaster position="top-center" richColors />
    </ReactLenis>
  );
}

export default App;
