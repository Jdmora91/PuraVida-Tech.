import React from "react";
import { Facebook, Instagram, MessageCircle, ArrowUp } from "lucide-react";
import translations from "../i18n/translations";

const scrollToTop = () => {
  const homeSection = document.getElementById("home");
  if (homeSection) homeSection.scrollIntoView({ behavior: "smooth" });
  else window.scrollTo({ top: 0, behavior: "smooth" });
};

function Footer({ language }) {
  const t = translations[language].footer;

  return (
    <footer className="relative bg-[#0e141b]/90 backdrop-blur-md text-gray-300 py-14 px-8 border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Columna 1 */}
        <div>
          <h3 className="text-2xl font-bold text-teal-400 mb-3">Pura Vida Tech</h3>
          <p className="text-sm leading-relaxed text-gray-400">{t.phrase}</p>
          <p className="text-xs text-gray-500 mt-4">
            🌎 {language === "es" ? "Clientes en toda Costa Rica e internacionales." : "Serving clients across Costa Rica and worldwide."}
          </p>
        </div>

        {/* Columna 2 */}
        <div>
          <h4 className="font-semibold text-teal-400 mb-3">{language === "es" ? "Atención al cliente" : "Customer Service"}</h4>
          <p className="text-sm text-gray-400">
            📅 {language === "es" ? "Lunes a Sábado:" : "Monday to Saturday:"} <span className="text-white">8:00 a.m. – 6:00 p.m.</span>
          </p>
          <p className="text-sm text-gray-400 mt-2">💬 {language === "es" ? "Respuesta rápida por WhatsApp o correo." : "Quick response via WhatsApp or email."}</p>
          <p className="text-sm text-gray-400 mt-2">
            💳 <span className="text-white">{language === "es" ? "Pagos:" : "Payments:"}</span> Sinpe Móvil, PayPal, {language === "es" ? "transferencia bancaria." : "bank transfer."}
          </p>
          <p className="text-xs text-gray-500 mt-3">React · Tailwind · OpenAI API</p>
        </div>

        {/* Columna 3 */}
        <div className="flex flex-col items-center md:items-end justify-center">
          <h4 className="font-semibold text-teal-400 mb-3">{language === "es" ? "Síguenos" : "Follow Us"}</h4>
          <div className="flex gap-5 mb-5">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
              <Instagram size={22} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
              <Facebook size={22} />
            </a>
            <a href="https://wa.me/506XXXXXXXX" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
              <MessageCircle size={22} />
            </a>
          </div>
          <p className="text-teal-400 italic text-sm">{t.slogan}</p>
        </div>
      </div>

      <div className="border-t border-gray-700/30 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Pura Vida Tech. {t.rights}
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Volver arriba"
      >
        <ArrowUp size={22} />
      </button>
    </footer>
  );
}

export default Footer;
