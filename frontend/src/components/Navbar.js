import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { useLeadDialog } from "../context/LeadDialogContext";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { openDialog } = useLeadDialog();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setIsAtTop(true);
        setScrollDirection("up");
      } else {
        setIsAtTop(false);
        if (currentScrollY > lastScrollY && currentScrollY > 60) {
          setScrollDirection("down");
        } else if (currentScrollY < lastScrollY) {
          setScrollDirection("up");
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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

  const isHomePage = location.pathname === "/";
  const isVisibleMobile = scrollDirection === "up" || mobileMenuOpen;
  
  // Strict dark bar with clear edge when scrolled or on interior pages
  const isDarkGlass = (!isAtTop && scrollDirection === "up") || mobileMenuOpen || (!isHomePage && isAtTop);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isVisibleMobile ? "translate-y-0" : "-translate-y-full md:translate-y-0"
      } ${
        isDarkGlass
          ? "bg-black/90 backdrop-blur-sm border-b border-white/10 text-white"
          : "bg-black/40 backdrop-blur-sm border-b border-white/10 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 md:h-20 flex items-center justify-between overflow-hidden">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-1.5 text-base md:text-xl font-black tracking-tight shrink-0"
        >
          <img
            src="/logo.png"
            alt="SK Logo"
            className="h-6 md:h-9 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = "none";
            }}
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
                className={`text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                  active ? "text-leaf font-extrabold" : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <button
            onClick={() => openDialog()}
            className="px-5 py-2.5 bg-forest hover:bg-leaf text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
          >
            GET FREE QUOTE
          </button>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-white hover:text-leaf transition-colors focus:outline-none shrink-0"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100 border-t border-white/10" : "max-h-0 opacity-0"
        } bg-black/95 backdrop-blur-xl px-5 py-4 space-y-3`}
      >
        <nav className="flex flex-col space-y-2.5">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-bold tracking-wide transition-colors ${
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
            className="w-full py-3 bg-forest hover:bg-leaf text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg"
          >
            GET FREE QUOTE
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
