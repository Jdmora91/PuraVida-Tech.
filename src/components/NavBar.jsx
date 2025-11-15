import React, { useState } from "react";
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
      {/* NAVBAR */}
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 hidden md:flex">
        <div
          className="
            bg-[#0e141b]/60 
            backdrop-blur-xl 
            border border-white/10 
            rounded-full 
            px-10 py-1 
            shadow-[0_8px_30px_rgba(0,0,0,0.35)]
            flex items-center gap-40
            transition-all duration-300
          "
        >
          
          <div
            onClick={() => scrollToSection("home")}
            className="flex items-center pl-8 pr-15 "
          ><span className="text-3xl font-bold tracking-wide text-white/90 drop-shadow-[0_1px_4px_rgba(255,255,255,0.25)]"> PuraVidaTech </span>
          </div>

          {/* Menu */}
          <ul className="flex items-center gap-6 text-m">
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

      {/* MOBILE*/}
      <nav className="fixed top-6 right-9 z-50 md:hidden">
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
