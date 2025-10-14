import React from "react";
import Logo from "../assets/logo4.png";
import LanguageToggle from "./LanguageToggle";
import translations from "../i18n/translations";

function Navbar({ language, toggleLanguage }) {
  const t = translations[language].navbar;

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-white/10">
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

        {/* Menu principal */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-10 text-sm font-medium">
            <li>
              <button onClick={() => scrollToSection("home")} className="text-gray-200 hover:text-teal-400 transition">
                {t.home}
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("nosotros")} className="text-gray-200 hover:text-teal-400 transition">
                {t.about}
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("services")} className="text-gray-200 hover:text-teal-400 transition">
                {t.services}
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("paquetes")} className="text-gray-200 hover:text-teal-400 transition">
                {t.plans}
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contacto")} className="text-gray-200 hover:text-teal-400 transition">
                {t.contact}
              </button>
            </li>
          </ul>

          {/* Botón de idioma */}
          <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
