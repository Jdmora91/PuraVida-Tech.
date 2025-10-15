import React, { useState } from "react";
import { CheckCircle, X } from "lucide-react";
import translations from "../i18n/translations";

function Paquetes({ language }) {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const planes = [
    {
      id: "bahia",
      nombre: language === "es" ? "Plan Bahía" : "Bahía Plan",
      subtitulo:
        language === "es"
          ? "Presencia Local con Estilo"
          : "Local Presence with Style",
      precio:
        language === "es" ? (
          <>
            ₡75.000 prima + ₡20.000 / mes <br />
            <span className="text-teal-400 font-semibold">
              Precio Contado: ₡200.000 + 10% Descuento
            </span>
          </>
        ) : (
          <>
            $150 + $40 / month <br />
            <span className="text-teal-400 font-semibold">
              Full Payment: $400 + 10% Discount
            </span>
          </>
        ),
      descripcion:
        language === "es"
          ? "Ideal para negocios pequeños como cafeterías, tiendas, cabinas, tours o restaurantes. Sitio web moderno, bilingüe, con Chat IA y fotografías profesionales de tu negocio."
          : "Ideal for small local businesses such as cafes, shops, cabins, tours or restaurants. A modern bilingual website with AI chat and professional photography.",
      entrega:
        language === "es"
          ? "Entrega: 5 a 8 días hábiles"
          : "Delivery: 5 to 8 business days",
      incluye:
        language === "es"
          ? [
              "Diseño web de 1 a 3 secciones (Inicio / Servicios / Contacto)",
              "Optimización móvil y tablet (responsive design)",
              "Botón directo a WhatsApp + mapa de ubicación",
              "Sesión fotográfica profesional (10–15 fotos del negocio y entorno)",
              "Versión bilingüe (Español / Inglés)",
              "ChatBox con Inteligencia Artificial (automatizado o personalizado)",
              "Dominio + hosting + SSL por 1 año",
              "2 actualizaciones mensuales incluidas",
              "Contrato 12 meses → primer mes gratis",
            ]
          : [
              "Web design with 1–3 sections (Home / Services / Contact)",
              "Mobile and tablet responsive optimization",
              "Direct WhatsApp button + location map",
              "Professional photo session (10–15 business and environment photos)",
              "Bilingual version (Spanish / English)",
              "AI ChatBox (automated or personalized)",
              "Domain + hosting + SSL for 1 year",
              "2 monthly updates included",
              "12-month contract → first month free",
            ],
      color: "from-teal-500 to-green-400",
    },
    {
      id: "osa",
      nombre: language === "es" ? "Plan Osa" : "Osa Plan",
      subtitulo:
        language === "es"
          ? "Crecimiento Digital Empresarial"
          : "Business Digital Growth",
      precio:
        language === "es" ? (
          <>
            ₡150.000 + ₡30.000 / mes <br />
            <span className="text-teal-400 font-semibold">
              Precio Contado: ₡400.000 + 10% Descuento
            </span>
          </>
        ) : (
          <>
            $300 + $60 / month <br />
            <span className="text-teal-400 font-semibold">
              Full Payment: $800 + 10% Discount
            </span>
          </>
        ),
      descripcion:
        language === "es"
          ? "Para hoteles, inmobiliarias o empresas que necesitan un sitio robusto con reservas, catálogo o panel de gestión. Tecnología avanzada y fotografía profesional."
          : "For hotels, real-estate companies or enterprises that need a robust site with booking, catalog or admin panel. Advanced tech and professional photography.",
      entrega:
        language === "es"
          ? "Entrega: 8 a 15 días hábiles"
          : "Delivery: 8 to 15 business days",
      incluye:
        language === "es"
          ? [
              "Hasta 6 páginas o web app con backend y panel administrativo",
              "Formularios avanzados, reservas o catálogo dinámico",
              "Sesión fotográfica avanzada (20–30 fotos del negocio o propiedad)",
              "Versión bilingüe (Español / Inglés)",
              "Chat IA avanzado (automatización de respuestas o cotizaciones)",
              "Hosting premium + dominio + SSL por 1 año",
              "5 actualizaciones mensuales incluidas",
              "Integración con Google Maps, WhatsApp y correo profesional",
              "Contrato 12 meses → primer mes gratis",
            ]
          : [
              "Up to 6 pages or web app with backend and admin panel",
              "Advanced forms, booking or dynamic catalog",
              "Advanced photo session (20–30 business or property photos)",
              "Bilingual version (Spanish / English)",
              "Advanced AI Chat (automated replies or quotations)",
              "Premium hosting + domain + SSL for 1 year",
              "5 monthly updates included",
              "Integration with Google Maps, WhatsApp and professional email",
              "12-month contract → first month free",
            ],
      color: "from-cyan-500 to-blue-400",
    },
  ];

  return (
    <section
      id="paquetes"
      className="relative z-30 bg-[#0e141b]/90 text-white py-28 px-6 md:px-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-6">
          {language === "es" ? "Nuestros Planes" : "Our Plans"}
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-16">
          {language === "es"
            ? "Desarrollados en Bahía Ballena para impulsar tu negocio con diseño, fotografía y tecnología inteligente."
            : "Developed in Bahía Ballena to boost your business with design, photography and smart technology."}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {planes.map((plan) => (
            <div
              key={plan.id}
              className="bg-gray-900/70 rounded-2xl p-8 shadow-xl border border-gray-800 hover:border-teal-400 transition-all duration-300"
            >
              <div
                className={`bg-gradient-to-r ${plan.color} text-white text-lg font-semibold inline-block px-4 py-2 rounded-full mb-6`}
              >
                {plan.nombre}
              </div>
              <h3 className="text-xl font-bold text-teal-400 mb-1">
                {plan.subtitulo}
              </h3>
              <p className="text-gray-300 text-sm mb-6">{plan.descripcion}</p>
              <p className="text-teal-300 font-semibold mb-6">{plan.precio}</p>

              <button
                onClick={() => setSelectedPlan(plan)}
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
              >
                {language === "es" ? "Ver Plan →" : "View Plan →"}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-16 text-gray-400 italic max-w-3xl mx-auto">
          {language === "es"
            ? "Hecho en Bahía Ballena con tecnología, fotografía y estilo Pura Vida."
            : "Made in Bahía Ballena with technology, photography and Pura Vida style."}
        </p>
      </div>

      {selectedPlan && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-[#111827] w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] max-h-[85vh] overflow-y-auto rounded-2xl p-6 relative border border-gray-800 shadow-2xl">
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-teal-400"
            >
              <X size={24} />
            </button>

            <h3 className="text-2xl font-bold text-teal-400 mb-2">
              {selectedPlan.nombre}
            </h3>
            <p className="text-gray-300 mb-1">{selectedPlan.subtitulo}</p>
            <p className="text-gray-400 mb-3 italic">{selectedPlan.entrega}</p>
            <p className="text-teal-300 font-semibold mb-4">
              {selectedPlan.precio}
            </p>

            <ul className="space-y-2 text-left text-sm">
              {selectedPlan.incluye.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-200">
                  <CheckCircle size={16} className="text-teal-400 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex justify-center">
              <a
                href={`https://wa.me/50670277792?text=${encodeURIComponent(
                  language === "es"
                    ? `¡Hola! Estoy interesado en el ${selectedPlan.nombre} de Pura Vida Tech.`
                    : `Hello! I'm interested in the ${selectedPlan.nombre} from Pura Vida Tech.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-5 py-2 rounded-lg shadow-lg transition-all duration-300 text-sm"
              >
                {language === "es"
                  ? "Solicitar este plan →"
                  : "Request this plan →"}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Paquetes;
