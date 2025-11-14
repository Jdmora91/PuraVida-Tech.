import React, { useState, useEffect } from "react";

//Pages
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Paquetes from "./pages/Paquetes";
import Contacto from "./pages/Contacto";
import Trabajos from "./pages/Trabajos"; 

//Components
import Navbar from "./components/NavBar";
import ChatBot from "./components/ChatBot";
import WhatsAppButton from "./components/WhatsAppButton";
import TransitionSection from "./components/TransitionSection";
import Footer from "./components/Footer";

function App() {
  const [language, setLanguage] = useState("es");
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 5 : 100));
    }, 80);

    setTimeout(() => {
      clearInterval(interval);
      setLoading(false);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Pantalla de carga */}
      {loading ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#0e141b] text-white z-50 transition-opacity duration-500">
          <h1 className="text-2xl md:text-3xl font-semibold text-teal-400 mb-6 text-center">
            {language === "es"
              ? "Cargando su mejor opción..."
              : "Loading your best choice..."}
          </h1>

          {/* Barra de carga */}
          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-teal-400 to-green-400 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className="mt-4 text-sm text-gray-400">
            {progress}% {language === "es" ? "completado" : "completed"}
          </p>
        </div>
      ) : (
        // Contenido principal
        <div className="relative bg-[#0e141b] text-white overflow-hidden">
          <Navbar language={language} toggleLanguage={toggleLanguage} />

          {/* 🏡 Secciones de la página principal */}
          <Home language={language} />
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
          <ChatBot language={language} />
          <WhatsAppButton language={language} />
        </div>
      )}
    </>
  );
}

export default App;
