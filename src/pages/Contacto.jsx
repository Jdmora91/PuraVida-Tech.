import React, { useState } from "react";
import translations from "../i18n/translations";
import { X } from "lucide-react";

function Contacto({ language }) {
  const t = translations[language].contact;
  const [showModal, setShowModal] = useState(false);

  // función de envío
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // Mensaje para WhatsApp
    const text =
      language === "es"
        ? `¡Hola! Soy ${name}. Mi correo es ${email}. Quisiera más información sobre los servicios de Pura Vida Tech. Mensaje: ${message}`
        : `Hi! I'm ${name}. My email is ${email}. I'd like more information about Pura Vida Tech services. Message: ${message}`;

    // Redirige a WhatsApp
    window.open(`https://wa.me/50670277792?text=${encodeURIComponent(text)}`);

    // Muestra modal de agradecimiento
    setShowModal(true);

    // Redirige al home después de 3 segundos
    setTimeout(() => {
      setShowModal(false);
      window.location.href = "#home";
    }, 3000);
  };

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

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            type="text"
            placeholder={language === "es" ? "Tu nombre" : "Your name"}
            className="w-full p-4 rounded-lg bg-gray-900/50 text-white border border-gray-700 focus:outline-none focus:border-teal-400"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-lg bg-gray-900/50 text-white border border-gray-700 focus:outline-none focus:border-teal-400"
            required
          />
          <textarea
            name="message"
            placeholder={language === "es" ? "Tu mensaje" : "Your message"}
            className="w-full p-4 rounded-lg bg-gray-900/50 text-white border border-gray-700 focus:outline-none focus:border-teal-400"
            rows="5"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-green-400 hover:opacity-90 px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300"
          >
            {t.send}
          </button>
        </form>
      </div>

      {/* Modal de agradecimiento */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-[#111827] max-w-md w-full rounded-2xl p-8 text-center relative border border-gray-800 shadow-2xl animate-fadeIn">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-teal-400"
            >
              <X size={24} />
            </button>

            <h3 className="text-2xl font-bold text-teal-400 mb-4">
              {language === "es" ? "¡Gracias por tu mensaje!" : "Thank you!"}
            </h3>
            <p className="text-gray-300 mb-4">
              {language === "es"
                ? "Te responderemos pronto por WhatsApp o correo electrónico."
                : "We'll get back to you soon via WhatsApp or email."}
            </p>
            <p className="text-sm text-gray-500 italic">
              {language === "es"
                ? "Serás redirigido al inicio en unos segundos..."
                : "You'll be redirected to home shortly..."}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contacto;
