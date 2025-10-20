import React, { useState } from "react";
import Logo from "../assets/logo4.png";
import LanguageToggle from "./LanguageToggle";
import translations from "../i18n/translations";
import { Menu, X } from "lucide-react";

function Navbar({ language, toggleLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[language].navbar;

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // cerrar menú móvil al hacer clic
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0e141b]/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img src={Logo} alt="Pura Vida Tech logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-white tracking-tight">
            Pura Vida <span className="text-teal-400">Tech</span>
          </span>
        </div>

        {/* Menú Desktop */}
        <ul className="hidden md:flex gap-10 text-sm font-medium">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-200 hover:text-teal-400 transition"
            >
              {t.home}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-gray-200 hover:text-teal-400 transition"
            >
              {t.about}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-200 hover:text-teal-400 transition"
            >
              {t.services}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("paquetes")}
              className="text-gray-200 hover:text-teal-400 transition"
            >
              {t.plans}
            </button>
          </li>
          {/* 🆕 Nuevo botón para la sección Trabajos */}
          <li>
            <button
              onClick={() => scrollToSection("trabajos")}
              className="text-gray-200 hover:text-teal-400 transition"
            >
              {language === "es" ? "Nuestros Trabajos" : "Our Projects"}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-gray-200 hover:text-teal-400 transition"
            >
              {t.contact}
            </button>
          </li>
        </ul>

        {/* Toggle de idioma y menú hamburguesa */}
        <div className="flex items-center gap-4">
          <LanguageToggle language={language} toggleLanguage={toggleLanguage} />

          {/* Botón hamburguesa (mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-teal-400 hover:text-white transition"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Menú Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-[#0e141b]/95 backdrop-blur-lg border-t border-gray-700 py-6 px-8 absolute top-full left-0 w-full z-40 animate-fadeIn">
          <ul className="flex flex-col gap-5 text-center text-gray-200 font-medium">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-teal-400 transition"
              >
                {t.home}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="hover:text-teal-400 transition"
              >
                {t.about}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-teal-400 transition"
              >
                {t.services}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("paquetes")}
                className="hover:text-teal-400 transition"
              >
                {t.plans}
              </button>
            </li>
            {/* 🆕 Nuevo botón móvil para “Nuestros Trabajos” */}
            <li>
              <button
                onClick={() => scrollToSection("trabajos")}
                className="hover:text-teal-400 transition"
              >
                {language === "es" ? "Nuestros Trabajos" : "Our Projects"}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contacto")}
                className="hover:text-teal-400 transition"
              >
                {t.contact}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
