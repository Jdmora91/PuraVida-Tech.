import React, { useState } from "react";
import Logo from "../assets/logo4.png";
import LanguageToggle from "./LanguageToggle";
import translations from "../i18n/translations";
import { Menu, X } from "lucide-react";

export default function Navbar({ language, toggleLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[language].navbar;

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* NAVBAR ULTRA-X DESKTOP */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex">
        <div
          className="
            bg-[#0e141b]/60 
            backdrop-blur-xl 
            border border-white/10 
            rounded-full 
            px-8 py-2 
            shadow-[0_8px_30px_rgba(0,0,0,0.35)]
            flex items-center gap-8
            transition-all duration-300
          "
        >
          {/* Logo minimal */}
          <div
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <img src={Logo} className="h-7 w-auto opacity-90" />
          </div>

          {/* Menu */}
          <ul className="flex items-center gap-6 text-sm">
            {[
              { label: t.home, id: "home" },
              { label: t.about, id: "nosotros" },
              { label: t.services, id: "services" },
              { label: t.plans, id: "paquetes" },
              {
                label: language === "es" ? "Trabajos" : "Projects",
                id: "trabajos",
              },
              { label: t.contact, id: "contacto" },
            ].map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="
                    text-gray-300 
                    hover:text-white 
                    transition-all 
                    duration-200
                    font-medium
                    relative
                    group
                  "
                >
                  {/* Texto que crece */}
                  <span
                    className="
                      transition-all duration-300
                      group-hover:text-teal-400
                      group-hover:scale-110
                      inline-block
                    "
                  >
                    {item.label}
                  </span>

                  {/* Subrayado animado */}
                  <span
                    className="
                      absolute left-1/2 -translate-x-1/2 
                      bottom-[-4px]
                      h-[2px] w-0 
                      bg-teal-400 
                      rounded-full
                      group-hover:w-4 
                      transition-all duration-300
                    "
                  ></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Toggle idioma */}
          <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
        </div>
      </nav>

      {/* MOBILE ULTRA-X BURGER */}
      <nav className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-[#0e141b]/70 backdrop-blur-xl border border-white/10 rounded-full p-2 text-teal-400"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {menuOpen && (
          <div
            className="
              absolute right-0 mt-3 
              bg-[#0e141b]/90 backdrop-blur-xl
              border border-white/10 
              rounded-2xl p-6 
              w-52 text-center 
              shadow-[0_8px_30px_rgba(0,0,0,0.35)]
              animate-fadeIn
            "
          >
            <ul className="flex flex-col gap-5 text-gray-300 font-medium">
              {[
                { label: t.home, id: "home" },
                { label: t.about, id: "nosotros" },
                { label: t.services, id: "services" },
                { label: t.plans, id: "paquetes" },
                {
                  label: language === "es" ? "Trabajos" : "Projects",
                  id: "trabajos",
                },
                { label: t.contact, id: "contacto" },
              ].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="hover:text-teal-400 transition"
                  >
                    {item.label}
                  </button>
                </li>
              ))}

              <LanguageToggle
                language={language}
                toggleLanguage={toggleLanguage}
              />
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
