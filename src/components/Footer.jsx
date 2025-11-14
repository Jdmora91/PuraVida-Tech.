import React from "react";
import { Facebook, Instagram, MessageCircle, ArrowUp } from "lucide-react";
import translations from "../i18n/translations";

const scrollToTop = () => {
  const homeSection = document.getElementById("home");
  if (homeSection) homeSection.scrollIntoView({ behavior: "smooth" });
  else window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Footer({ language }) {
  const t = translations[language].footer;

  return (
    <footer className="relative bg-[#0A0F15] text-gray-300 pt-24 pb-10 px-8 border-t border-white/10 overflow-hidden">

      {/* 🌌 Radial Glow Premium */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-teal-400/10 blur-[180px] pointer-events-none"></div>

      {/* 🧊 Noise Premium */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.07] pointer-events-none"></div>

      {/* 🧊 Capa sutil de glass */}
      <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-[2px] pointer-events-none"></div>

      {/* === Contenido === */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-16 text-center md:text-left">

        {/* Columna 1 */}
        <div>
          <h3 className="text-3xl font-extrabold text-teal-300 tracking-tight">
            Pura Vida Tech
          </h3>

          <p className="text-sm leading-relaxed text-gray-400 mt-4">
            {t.phrase}
          </p>

          <p className="text-xs text-gray-500 mt-5">
            🌎 {language === "es"
              ? "Clientes en Costa Rica, EE.UU. y Europa."
              : "Clients in Costa Rica, USA and Europe."}
          </p>
        </div>

        {/* Columna 2 */}
        <div>
          <h4 className="text-teal-300 font-semibold mb-4 text-lg">
            {language === "es" ? "Atención al Cliente" : "Customer Service"}
          </h4>

          <p className="text-gray-400 text-sm">
            📅 {language === "es" ? "Lunes a Sábado:" : "Monday to Saturday:"}
            <span className="text-white ml-1">8:00 a.m – 6:00 p.m</span>
          </p>

          <p className="text-gray-400 text-sm mt-2">
            💬 {language === "es"
              ? "Respuestas rápidas por WhatsApp o correo."
              : "Fast responses via WhatsApp or email."}
          </p>

          <p className="text-gray-400 text-sm mt-2">
            💳 {language === "es" ? "Pagos:" : "Payments:"}
            <span className="text-white ml-1">
              Sinpe Móvil · PayPal · {language === "es" ? "Transferencia" : "Bank Transfer"}
            </span>
          </p>

          <p className="text-xs text-gray-500 mt-4">React · Tailwind · AI Tools</p>
        </div>

        {/* Columna 3 */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="text-teal-300 font-semibold mb-4 text-lg">
            {language === "es" ? "Síguenos" : "Follow Us"}
          </h4>

          {/* Redes */}
          <div className="flex gap-6 mb-6">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-300 transition-colors hover:scale-110 duration-300"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-300 transition-colors hover:scale-110 duration-300"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://wa.me/5067027792"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-300 transition-colors hover:scale-110 duration-300"
            >
              <MessageCircle size={22} />
            </a>
          </div>

          <p className="text-teal-400 italic text-sm">{t.slogan}</p>
        </div>
      </div>

      {/* === Derechos === */}
      <div className="relative z-10 border-t border-white/10 mt-14 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Pura Vida Tech. {t.rights}
      </div>

      {/* === Botón TOP === */}
      <button
        onClick={scrollToTop}
        className="
          fixed bottom-6 right-6 z-50
          bg-gradient-to-r from-teal-400 to-green-400
          text-white p-3 rounded-full shadow-lg
          hover:scale-110 hover:shadow-teal-500/40
          transition-all duration-300
        "
      >
        <ArrowUp size={22} />
      </button>
    </footer>
  );
}