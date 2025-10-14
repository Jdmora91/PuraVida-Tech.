import React from "react";
import translations from "../i18n/translations";

function Contacto({ language }) {
  const t = translations[language].contact;

  return (
    <section
      id="contacto"
      className="relative bg-[#0e141b] text-white py-28 px-8 md:px-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-4">
          {t.title}
        </h2>
        <p className="text-gray-300 mb-12">{t.desc}</p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder={language === "es" ? "Tu nombre" : "Your name"}
            className="w-full p-4 rounded-lg bg-gray-900/50 text-white border border-gray-700 focus:outline-none focus:border-teal-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-lg bg-gray-900/50 text-white border border-gray-700 focus:outline-none focus:border-teal-400"
          />
          <textarea
            placeholder={language === "es" ? "Tu mensaje" : "Your message"}
            className="w-full p-4 rounded-lg bg-gray-900/50 text-white border border-gray-700 focus:outline-none focus:border-teal-400"
            rows="5"
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-green-400 hover:opacity-90 px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300"
          >
            {t.send}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacto;
