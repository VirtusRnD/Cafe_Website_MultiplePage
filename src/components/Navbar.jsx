import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cafeConfig } from "../config/cafeConfig";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/story", label: "Felsefe & Kavrum" },
    { path: "/menu", label: "Menü" },
    { path: "/workshops", label: "Mağaza & Atölye" },
    { path: "/contact", label: "İletişim & Konum" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
      scrolled 
        ? "bg-[var(--bg-card)]/95 backdrop-blur-md border-[var(--border-color)] py-3 shadow-md" 
        : "bg-[var(--bg-primary)]/80 backdrop-blur-sm border-transparent py-4 md:py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-5 md:px-12 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="text-lg sm:text-xl md:text-2xl font-black tracking-wider text-[var(--text-main)] uppercase font-[var(--font-heading)] whitespace-nowrap transition-colors">
          {cafeConfig.info.name}
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-bold tracking-widest text-[var(--text-main)]">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`transition-all uppercase py-1 ${
                location.pathname === link.path 
                  ? "text-[var(--accent-highlight)] font-black border-b-2 border-[var(--accent-highlight)]" 
                  : "hover:text-[var(--accent-highlight)] opacity-85 hover:opacity-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* MOBILE TOGGLE */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden p-2 text-[var(--text-main)] focus:outline-none cursor-pointer"
          aria-label="Mobil Menüyü Aç"
        >
          <span className="text-2xl font-bold">{isOpen ? "✕" : "☰"}</span>
        </button>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-[var(--bg-card)] border-b border-[var(--border-color)] px-6 py-6 flex flex-col gap-4 text-sm font-bold tracking-wider text-[var(--text-main)] shadow-2xl">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsOpen(false)} 
              className={`py-2 border-b border-[var(--border-color)]/50 uppercase ${
                location.pathname === link.path ? "text-[var(--accent-highlight)] font-black" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}