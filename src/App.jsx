import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import WorkshopsPage from "./pages/WorkshopsPage";
import StoryPage from "./pages/StoryPage";
import ContactPage from "./pages/ContactPage";

import { cafeConfig } from "./config/cafeConfig"; 
import "./styles/cafeTheme.css";

// Optional live theme switcher: set VITE_THEME_BACKEND_URL to turn it on (see .env.example).
const BACKEND_URL = import.meta.env.VITE_THEME_BACKEND_URL;
const CURRENT_SITE_ID = "cafe-multipage";

export default function App() {
  const { pathname } = useLocation();
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem(`${CURRENT_SITE_ID}-theme`);
    return savedTheme || cafeConfig.theme || "regent-classic";
  });

  useEffect(() => {
    if (cafeConfig.theme && !localStorage.getItem(`${CURRENT_SITE_ID}-theme`)) {
      setCurrentTheme(cafeConfig.theme);
    }
  }, [cafeConfig.theme]);

  useEffect(() => {
    if (!BACKEND_URL) return;
    let socket;
    let unmounted = false;
    fetch(`${BACKEND_URL}/api/themes/${CURRENT_SITE_ID}`, { signal: AbortSignal.timeout(5000) })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.activeTheme) {
          setCurrentTheme(data.activeTheme);
        }
      })
      .catch((err) => console.error(err));

    const handleThemeChange = (data) => {
      if (data.siteId === CURRENT_SITE_ID && data.activeTheme) {
        setCurrentTheme(data.activeTheme);
      }
    };

    import("socket.io-client").then(({ io }) => {
      if (unmounted) return;
      socket = io(BACKEND_URL);
      socket.on("theme_changed", handleThemeChange);
    });

    return () => {
      unmounted = true;
      socket?.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === "THEME_CHANGE" && event.data.themeKey && event.data.siteId === CURRENT_SITE_ID) {
        setCurrentTheme(event.data.themeKey);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    localStorage.setItem(`${CURRENT_SITE_ID}-theme`, currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
    document.body.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-transparent text-[var(--text-main)] transition-colors duration-300">
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