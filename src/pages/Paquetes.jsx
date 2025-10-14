import React from "react";
import { CheckCircle } from "lucide-react";
import translations from "../i18n/translations";

function Paquetes({ language }) {
  const t = translations[language].plans;

  const planes = [
    {
      nombre: language === "es" ? "Plan Básico" : "Basic Plan",
      precio: "₡150.000 - ₡250.000",
      descripcion:
        language === "es"
          ? "Ideal para pequeños emprendimientos que buscan tener presencia profesional en línea sin grandes inversiones."
          : "Ideal for small businesses seeking a professional online presence without large investments.",
      incluye:
        language === "es"
          ? [
              "Diseño web moderno (1-3 secciones)",
              "Optimizado para móviles y tablets",
              "Formulario de contacto y conexión a WhatsApp",
              "Dominio y hosting por 1 año",
              "Mantenimiento anual con 1 actualización mensual incluida",
              "Asesoría en identidad digital básica",
              "Contrato con 50% de pago inicial y 50% a la entrega",
            ]
          : [
              "Modern web design (1–3 sections)",
              "Optimized for mobile and tablets",
              "Contact form and WhatsApp integration",
              "Domain and hosting for 1 year",
              "Annual maintenance with 1 monthly update included",
              "Basic digital identity consulting",
              "Contract with 50% upfront and 50% upon delivery",
            ],
      color: "from-teal-500 to-green-400",
    },
    {
      nombre: language === "es" ? "Plan Profesional" : "Professional Plan",
      precio: "₡300.000 - ₡450.000",
      descripcion:
        language === "es"
          ? "Perfecto para negocios en crecimiento que buscan posicionamiento, comunicación y presencia sólida."
          : "Perfect for growing businesses that need visibility, communication, and solid online presence.",
      incluye:
        language === "es"
          ? [
              "Hasta 5 páginas personalizadas (Inicio, Servicios, Nosotros, Contacto, Blog)",
              "Diseño responsive avanzado y SEO básico",
              "Integración de ChatBox inteligente con IA de soporte general",
              "Conexión directa a WhatsApp y redes sociales",
              "Panel editable de contenido",
              "Mantenimiento anual con 2 actualizaciones mensuales",
              "Contrato formal con 50% inicial y respaldo digital",
            ]
          : [
              "Up to 5 custom pages (Home, Services, About, Contact, Blog)",
              "Advanced responsive design and basic SEO",
              "Smart ChatBox with AI for general support",
              "Direct WhatsApp and social media integration",
              "Editable content panel",
              "Annual maintenance with 2 monthly updates",
              "Formal contract with 50% upfront and digital agreement",
            ],
      color: "from-cyan-500 to-blue-400",
    },
    {
      nombre: language === "es" ? "Plan Premium" : "Premium Plan",
      precio: "₡500.000 - ₡800.000+",
      descripcion:
        language === "es"
          ? "Pensado para marcas que quieren destacarse con automatización, chat IA, analítica avanzada y soporte continuo."
          : "Designed for brands seeking to stand out with automation, AI chat, advanced analytics, and continuous support.",
      incluye:
        language === "es"
          ? [
              "Todo del plan Profesional",
              "ChatBox avanzado con IA personalizada para atención al cliente",
              "Blog o tienda ligera con carrito y pasarela de pagos",
              "Integración de analítica web (Google Analytics / Meta)",
              "Soporte técnico durante 6 meses",
              "Mantenimiento anual con 3 actualizaciones mensuales incluidas",
              "Contrato digital con respaldo legal y pagos por etapas (50% inicio, 50% entrega)",
            ]
          : [
              "Everything in the Professional Plan",
              "Advanced AI ChatBox customized for customer support",
              "Blog or lightweight store with cart and payment gateway",
              "Web analytics integration (Google Analytics / Meta)",
              "Technical support for 6 months",
              "Annual maintenance with 3 monthly updates included",
              "Digital contract with legal backup and staged payments (50% upfront, 50% delivery)",
            ],
      color: "from-purple-500 to-pink-400",
    },
  ];

  return (
    <section
      id="paquetes"
      className="relative z-30 bg-[#0e141b]/85 backdrop-blur-sm text-white py-28 px-6 md:px-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-6">
          {language === "es" ? "Nuestros Paquetes" : "Our Packages"}
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-16">
          {language === "es"
            ? "Diseñados para emprendedores y pequeñas empresas que desean impulsar su marca con sitios web funcionales, seguros y listos para crecer."
            : "Designed for entrepreneurs and small businesses who want to grow their brand with functional, secure, and scalable websites."}
        </p>

        {/* Grilla de planes */}
        <div className="grid md:grid-cols-3 gap-8">
          {planes.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-900/70 rounded-2xl p-8 shadow-xl border border-gray-800 hover:scale-105 transition-transform duration-300"
            >
              <div
                className={`bg-gradient-to-r ${plan.color} text-white text-lg font-semibold inline-block px-4 py-2 rounded-full mb-6`}
              >
                {plan.nombre}
              </div>

              <h3 className="text-3xl font-bold mb-3 text-teal-400">
                {plan.precio}
              </h3>

              <p className="text-gray-300 text-sm mb-6">{plan.descripcion}</p>

              <ul className="text-left space-y-3">
                {plan.incluye.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-200">
                    <CheckCircle size={18} className="text-teal-400 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href={`https://wa.me/506XXXXXXXX?text=${encodeURIComponent(
                    language === "es"
                      ? `¡Hola! Estoy interesado en el ${plan.nombre} de Pura Vida Tech.`
                      : `Hello! I'm interested in the ${plan.nombre} from Pura Vida Tech.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
                >
                  {language === "es"
                    ? "Cotizar este plan →"
                    : "Request this plan →"}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 text-gray-400 italic max-w-3xl mx-auto">
          {language === "es"
            ? "“En Pura Vida Tech, creemos que una buena web no debe ser un lujo — sino el punto de partida para tu crecimiento digital.”"
            : "“At Pura Vida Tech, we believe a great website shouldn't be a luxury — it's the starting point of your digital growth.”"}
        </p>
      </div>
    </section>
  );
}

export default Paquetes;
