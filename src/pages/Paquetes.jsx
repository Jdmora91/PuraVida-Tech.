import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import translations from "../i18n/translations";

function Paquetes({ language }) {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const planes = [
    {
      id: "bahia",
      nombre: language === "es" ? "Plan Bahía" : "Bahía Plan",
      subtitulo:
        language === "es" ? "Presencia Local con Estilo" : "Local Presence with Style",
      precio:
        language === "es" ? (
          <>
            ₡75.000 prima + ₡20.000 / mes <br />
            <span className="text-teal-400 font-semibold">
              Precio Contado: ₡200.000 + <strong>10% Descuento</strong>
            </span>
          </>
        ) : (
          <>
            $150 + $40 / month <br />
            <span className="text-teal-400 font-semibold">
              Full Payment: $400 + <strong>10% Discount</strong>
            </span>
          </>
        ),
      descripcion:
        language === "es"
          ? "Ideal para negocios pequeños como cafeterías, tiendas, cabinas, tours o restaurantes. Sitio web moderno, bilingüe, con Chat IA y fotografías profesionales."
          : "Ideal for small local businesses such as cafes, shops, cabins, tours or restaurants. A modern bilingual website with AI chat and professional photography.",
      entrega: language === "es" ? "Entrega: 5 a 8 días hábiles" : "Delivery: 5 to 8 business days",
      incluye:
        language === "es"
          ? [
              "Diseño web de 1 a 3 secciones",
              "Optimización móvil",
              "Botón WhatsApp + mapa",
              "Sesión fotográfica profesional",
              "Versión bilingüe (ES/EN)",
              "ChatBox informativo",
              "Dominio + hosting + SSL por 1 año",
              "1 actualización mensual",
              "Contrato 12 meses → PRIMER MES GRATIS",
              "Soporte básico WhatsApp",
            ]
          : [
              "1–3 section website",
              "Mobile optimization",
              "WhatsApp button + map",
              "Professional photography",
              "Bilingual (ES/EN)",
              "Informative ChatBox",
              "Domain + hosting + SSL (1 year)",
              "1 monthly update",
              "12-month contract → FIRST MONTH FREE",
              "Basic WhatsApp support",
            ],
      color: "from-teal-400 to-emerald-400",
    },

    {
      id: "osa",
      nombre: language === "es" ? "Plan Osa" : "Osa Plan",
      subtitulo:
        language === "es" ? "Crecimiento Digital Empresarial" : "Business Digital Growth",
      precio:
        language === "es" ? (
          <>
            ₡150.000 + ₡30.000 / mes <br />
            <span className="text-teal-400 font-semibold">
              Precio Contado: ₡400.000 + <strong>10% Descuento</strong>
            </span>
          </>
        ) : (
          <>
            $300 + $60 / month <br />
            <span className="text-teal-400 font-semibold">
              Full Payment: $800 + <strong>10% Discount</strong>
            </span>
          </>
        ),
      descripcion:
        language === "es"
          ? "Para hoteles, inmobiliarias o empresas que necesitan un sitio robusto con reservas, catálogo o panel de gestión."
          : "For hotels, real estate or companies needing a robust site with booking, catalog or admin panel.",
      entrega: language === "es" ? "Entrega: 8 a 15 días hábiles" : "Delivery: 8 to 15 business days",
      incluye:
        language === "es"
          ? [
              "Hasta 6 páginas o web app",
              "Formularios avanzados / reservas",
              "Fotografía avanzada",
              "Bilingüe (ES/EN)",
              "Chat IA avanzado",
              "Hosting premium + dominio",
              "5 actualizaciones mensuales",
              "Integraciones (Maps, WhatsApp, email)",
              "Contrato 12 meses → PRIMER MES GRATIS",
              "Soporte técnico",
            ]
          : [
              "Up to 6 pages or web app",
              "Advanced forms / booking",
              "Advanced photography",
              "Bilingual (ES/EN)",
              "Advanced AI chat",
              "Premium hosting + domain",
              "5 monthly updates",
              "Integrations (Maps, WhatsApp, email)",
              "12-month contract → FIRST MONTH FREE",
              "Technical support",
            ],
      color: "from-cyan-400 to-blue-400",
    },
  ];

  return (
    <section
      id="paquetes"
      className="relative z-20 bg-[#0e141b] text-white py-28 px-6 md:px-20 overflow-hidden"
    >
      {/* Noise + Glow */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.1] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-teal-500/10 rounded-full blur-[140px]"></div>
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-blue-500/10 rounded-full blur-[140px]"></div>

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto relative z-10 mb-20">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
          {language === "es" ? "Nuestros Planes" : "Our Plans"}
        </h2>

        <p className="text-gray-300 text-lg md:text-xl font-light mt-3">
          {language === "es"
            ? "Soluciones creadas para impulsar tu negocio desde Bahía Ballena hacia el mundo."
            : "Solutions built to boost your business from Bahía Ballena to the world."}
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">
        {planes.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="
              bg-white/5 backdrop-blur-xl p-10 rounded-2xl 
              border border-white/10 hover:border-teal-400/40 
              transition-all duration-500 shadow-xl hover:-translate-y-2
            "
          >
            <div
              className={`bg-gradient-to-r ${plan.color} text-black font-bold px-4 py-2 rounded-full inline-block mb-6`}
            >
              {plan.nombre}
            </div>

            <h3 className="text-2xl font-semibold text-teal-400 mb-2">{plan.subtitulo}</h3>

            <p className="text-gray-300 mb-6 text-sm leading-relaxed">{plan.descripcion}</p>

            <p className="text-teal-300 font-semibold mb-6">{plan.precio}</p>

            <button
              onClick={() => setSelectedPlan(plan)}
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
            >
              {language === "es" ? "Ver Plan →" : "View Plan →"}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Footer Phrase */}
      <p className="mt-20 text-center text-gray-400 italic text-sm">
        {language === "es"
          ? "Hecho en Bahía Ballena con tecnología y estilo Pura Vida."
          : "Crafted in Bahía Ballena with technology and Pura Vida style."}
      </p>

      {/* Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#111827]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] max-h-[85vh] overflow-y-auto shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedPlan(null)}
                className="absolute top-4 right-4 text-gray-300 hover:text-teal-400"
              >
                <X size={24} />
              </button>

              <h3 className="text-2xl font-bold text-teal-400 mb-1">
                {selectedPlan.nombre}
              </h3>
              <p className="text-gray-300 mb-1">{selectedPlan.subtitulo}</p>
              <p className="text-gray-400 italic mb-3">{selectedPlan.entrega}</p>
              <p className="text-teal-300 font-semibold mb-4">{selectedPlan.precio}</p>

              <ul className="space-y-2 text-gray-200 text-sm">
                {selectedPlan.incluye.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle size={16} className="text-teal-400 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-center">
                <a
                  href={`https://wa.me/50670277792?text=${encodeURIComponent(
                    language === "es"
                      ? `¡Hola! Estoy interesado en el ${selectedPlan.nombre}.`
                      : `Hello! I'm interested in the ${selectedPlan.nombre}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded-lg shadow-xl transition-all duration-300"
                >
                  {language === "es" ? "Solicitar este plan →" : "Request this plan →"}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Paquetes;
