import React, { useState } from "react";
import translations from "../i18n/translations";
import { X } from "lucide-react";

export default function Contacto({ language }) {
  const t = translations[language].contact;
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const text =
      language === "es"
        ? `¡Hola! Soy ${name}. Mi correo es ${email}. Me gustaría más información sobre Pura Vida Tech. Mensaje: ${message}`
        : `Hi! I'm ${name}. My email is ${email}. I'd like more information about Pura Vida Tech. Message: ${message}`;

    window.open(`https://wa.me/50670277792?text=${encodeURIComponent(text)}`);

    setShowModal(true);
    setTimeout(() => setShowModal(false), 3000);
  };

  return (
    <section
      id="contacto"
      className="
      relative min-h-screen py-32 px-6 md:px-20
      text-white overflow-hidden bg-[#0A0F15]
    "
    >
      {/* 🌌 Radial glow premium */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#4ECDC4]/15 rounded-full blur-[180px]" />

      {/* 🌀 Spotlight que sigue el mouse */}
      <div
        id="spotlight"
        className="
        pointer-events-none absolute inset-0 opacity-[0.08]
        bg-[radial-gradient(circle_at_center,_#ffffff_0%,_transparent_70%)]
      "
      ></div>

      {/* 🎛 Noise premium */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.06] pointer-events-none" />

      {/* 📌 Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-teal-300 tracking-tight drop-shadow-xl">
          {language === "es" ? "Hablemos" : "Let’s Talk"}
        </h2>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mt-4 leading-relaxed">
          {language === "es"
            ? "Estamos listos para ayudarte a crear una presencia digital de alto nivel. Envíanos un mensaje y te responderemos lo antes posible."
            : "We’re ready to help you build a high-end digital presence. Send us a message and we’ll get back to you shortly."}
        </p>

        {/* 🧊 FORMULARIO PREMIUM */}
        <form
          onSubmit={handleSubmit}
          className="
            mt-16 mx-auto max-w-3xl p-10
            rounded-3xl backdrop-blur-2xl
            bg-white/5 border border-white/10 shadow-2xl
            animate-[fadeInUp_0.8s_ease]
          "
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="name"
              type="text"
              required
              placeholder={language === "es" ? "Tu nombre" : "Your name"}
              className="
                w-full p-4 rounded-xl bg-white/5 border border-white/10 
                text-white focus:border-teal-400 focus:ring-2 
                focus:ring-teal-500/40 outline-none transition
              "
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="
                w-full p-4 rounded-xl bg-white/5 border border-white/10 
                text-white focus:border-teal-400 focus:ring-2 
                focus:ring-teal-500/40 outline-none transition
              "
            />
          </div>

          <textarea
            name="message"
            rows={5}
            required
            placeholder={language === "es" ? "Tu mensaje" : "Your message"}
            className="
              w-full p-4 mt-6 rounded-xl bg-white/5 border border-white/10 
              text-white focus:border-teal-400 focus:ring-2 
              focus:ring-teal-500/40 outline-none transition
            "
          ></textarea>

          {/* 🌈 BOTÓN PREMIUM */}
          <button
            type="submit"
            className="
              w-full mt-8 px-10 py-4 rounded-xl font-semibold text-lg text-white 
              bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400
              shadow-lg shadow-teal-500/20 hover:scale-[1.02]
              transition-all duration-300
            "
          >
            {language === "es" ? "Enviar mensaje" : "Send message"}
          </button>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-[#111827] w-full max-w-sm p-8 rounded-2xl text-center border border-white/10 shadow-xl">
            <h3 className="text-2xl font-bold text-teal-300 mb-2">
              {language === "es" ? "¡Gracias!" : "Thank you!"}
            </h3>
            <p className="text-gray-300">
              {language === "es"
                ? "Te responderemos pronto."
                : "We’ll get back to you soon."}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
