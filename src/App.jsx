import React, { useState } from "react";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import TransitionSection from "./components/TransitionSection";
import Paquetes from "./pages/Paquetes";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";
import ChatBox from "./components/ChatBox"

function App() {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <div className="relative bg-[#0e141b] text-white overflow-hidden">
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <Home language={language} />
      <Nosotros language={language} />
      <TransitionSection />
      <Servicios language={language} />
      <TransitionSection />
      <Paquetes language={language} />
      <TransitionSection />
      <Contacto language={language} />
      <Footer language={language} />
      <ChatBox />
    </div>
  );
}

export default App;
