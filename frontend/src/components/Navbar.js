import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { useLeadDialog } from "../context/LeadDialogContext";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openDialog } = useLeadDialog();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-md border-b border-white/10 text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-2 text-xl font-black tracking-tight"
        >
          <img 
            src="/logo.png" 
            alt="SK Logo" 
            className="h-9 w-auto object-contain" 
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <span className="text-white">SK</span>
          <span className="text-leaf">LANDSCAPING</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                  active ? "text-leaf" : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <button
            onClick={openDialog}
            className="px-5 py-2.5 bg-forest hover:bg-leaf text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
          >
            GET FREE QUOTE
          </button>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-leaf transition-colors focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-5 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-bold tracking-wide transition-colors ${
                    active ? "text-leaf font-extrabold" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openDialog();
              }}
              className="w-full py-3.5 bg-forest hover:bg-leaf text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg"
            >
              GET FREE QUOTE
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
