import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { useLeadDialog } from "../context/LeadDialogContext";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up"); // "up" or "down"
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { openDialog } = useLeadDialog();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if at the top of the page
      if (currentScrollY <= 20) {
        setIsAtTop(true);
        setScrollDirection("up");
      } else {
        setIsAtTop(false);
        // Detect scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
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

  // Visibility logic for mobile header (hide when scrolling down, show when scrolling up or menu is open)
  const isVisibleMobile = scrollDirection === "up" || mobileMenuOpen;

  // Background styling logic:
  // 1. At the top: subtle light water-type blur
  // 2. Scrolling up (away from top) or menu open: darker frosted glass
  // 3. Desktop scrolling down: stays light water blur
  const isDarkGlass = (!isAtTop && scrollDirection === "up") || mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        /* Mobile hide/show slide transform */
        isVisibleMobile ? "translate-y-0" : "-translate-y-full md:translate-y-0"
      } ${
        /* Background & Blur switching */
        isDarkGlass
          ? "bg-black/85 backdrop-blur-md border-b border-white/10 text-white shadow-lg"
          : "bg-white/15 backdrop-blur-md border-b border-white/10 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-2 text-xl font-black tracking-tight"
        >
          <img
            src="/logo.png"
            alt="SK Logo"
            className="h-9 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <span className="text-white">SK</span>
          <span className="text-leaf">LANDSCAPING</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                  active
                    ? "text-leaf font-extrabold"
                    : "text-white/80 hover:text-white"
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

      {/* Mobile Top-to-Bottom Slide-Down Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100 border-t border-white/10" : "max-h-0 opacity-0"
        } bg-black/95 backdrop-blur-xl px-6 py-4 space-y-4`}
      >
        <nav className="flex flex-col space-y-3">
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
        <div className="pt-2 pb-2">
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
    </header>
  );
}

export default Navbar;
