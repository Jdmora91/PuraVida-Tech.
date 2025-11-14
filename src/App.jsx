import React, { useState, useEffect } from "react";

// Pages
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Paquetes from "./pages/Paquetes";
import Contacto from "./pages/Contacto";
import Trabajos from "./pages/Trabajos";

// Components
import Navbar from "./components/NavBar";
import ChatBot from "./components/ChatBot";
import AIDock from "./components/AIDock";
import TransitionSection from "./components/TransitionSection";
import Footer from "./components/Footer";

function App() {
  const [language, setLanguage] = useState("es");
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  // === CONTROL DEL CHATBOT ===
  const [openChatbot, setOpenChatbot] = useState(false);

  // Spotlight effect
  useEffect(() => {
    const spotlight = document.getElementById("spotlight");

    const handleMouseMove = (e) => {
      spotlight.style.background = `
        radial-gradient(
          circle at ${e.clientX}px ${e.clientY}px,
          rgba(255,255,255,0.12) 0%,
          transparent 60%
        )
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth hiding scroll class
  useEffect(() => {
    let timer;
    const handleScroll = () => {
      document.body.classList.add("scrolling");
      clearTimeout(timer);
      timer = setTimeout(() => {
        document.body.classList.remove("scrolling");
      }, 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Custom JARVIS scrollbar
  useEffect(() => {
    const thumb = document.getElementById("jarvis-thumb");
    const track = document.getElementById("jarvis-track");

    const updateThumb = () => {
      const scroll = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const trackHeight = track.offsetHeight - 20;
      const ratio = scroll / maxScroll;
      const pos = ratio * trackHeight;
      thumb.style.top = `${pos + 20}px`;
    };

    window.addEventListener("scroll", updateThumb);
    updateThumb();

    return () => window.removeEventListener("scroll", updateThumb);
  }, []);

  return (
    <div className="relative bg-[#0e141b] text-white overflow-hidden">

      <Navbar language={language} toggleLanguage={toggleLanguage} />

      <Home language={language} />
      <TransitionSection />

      <Nosotros language={language} />
      <TransitionSection />

      <Servicios language={language} />
      <TransitionSection />

      <Paquetes language={language} />
      <TransitionSection />

      <Trabajos language={language} />
      <TransitionSection />

      <Contacto language={language} />

      <Footer language={language} />

      {/* === CHATBOT PREMIUM === */}
      <ChatBot open={openChatbot} setOpen={setOpenChatbot} language={language} />

      {/* === AI DOCK ULTRA PREMIUM === */}
      <AIDock openChatbot={() => setOpenChatbot(true)} language={language} />

      {/* === CUSTOM JARVIS SCROLLBAR === */}
      <div id="jarvis-scrollbar">
        <div id="jarvis-track"></div>
        <div id="jarvis-thumb"></div>
      </div>

    </div>
  );
}

export default App;
