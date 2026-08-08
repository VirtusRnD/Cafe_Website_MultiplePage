import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { cafeConfig } from "./config/cafeConfig";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import WorkshopsPage from "./pages/WorkshopsPage";
import StoryPage from "./pages/StoryPage";
import ContactPage from "./pages/ContactPage";

import "./styles/cafeTheme.css";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", cafeConfig.theme || "cozy-latte");
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-300">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/workshops" element={<WorkshopsPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}