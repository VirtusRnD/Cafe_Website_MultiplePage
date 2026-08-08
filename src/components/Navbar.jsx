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
        ? "bg-[var(--bg-card)]/95 backdrop-blur-md border-[var(--border-color)] py-3 shadow-sm" 
        : "bg-[var(--bg-primary)] border-transparent py-4 md:py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-5 md:px-12 flex items-center justify-between">
        
        <Link to="/" className="text-base sm:text-lg md:text-xl font-black tracking-wider text-[var(--text-main)] uppercase font-[var(--font-heading)] whitespace-nowrap">
          {cafeConfig.info.name}
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-bold tracking-widest text-[var(--text-main)]">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`transition-colors uppercase ${
                location.pathname === link.path ? "text-[var(--accent-highlight)] font-black border-b-2 border-[var(--accent-highlight)] pb-0.5" : "hover:text-[var(--accent-highlight)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden p-2 text-[var(--text-main)] focus:outline-none cursor-pointer"
          aria-label="Mobil Menüyü Aç"
        >
          <span className="text-2xl font-bold">{isOpen ? "✕" : "☰"}</span>
        </button>

      </div>

      {isOpen && (
        <div className="lg:hidden bg-[var(--bg-card)] border-b border-[var(--border-color)] px-6 py-6 flex flex-col gap-4 text-sm font-bold tracking-wider text-[var(--text-main)] shadow-xl">
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