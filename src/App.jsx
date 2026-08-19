import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { io } from "socket.io-client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import WorkshopsPage from "./pages/WorkshopsPage";
import StoryPage from "./pages/StoryPage";
import ContactPage from "./pages/ContactPage";

import "./styles/cafeTheme.css";

const BACKEND_URL = "https://theme-backend-vh34.onrender.com";
const socket = io(BACKEND_URL);
const CURRENT_SITE_ID = "cafe-multipage";

export default function App() {
  const { pathname } = useLocation();
  const [currentTheme, setCurrentTheme] = useState("regent-classic");

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/themes/${CURRENT_SITE_ID}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.activeTheme) {
          setCurrentTheme(data.activeTheme);
        }
      })
      .catch((err) => console.error(err));

    const handleThemeChange = (data) => {
      if (data.siteId === CURRENT_SITE_ID && data.activeTheme) {
        setCurrentTheme(data.activeTheme);
      }
    };

    socket.on("theme_changed", handleThemeChange);

    return () => {
      socket.off("theme_changed", handleThemeChange);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  useEffect(() => {
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