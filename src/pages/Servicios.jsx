import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaShoppingCart, FaHotel, FaHome } from "react-icons/fa";
import translations from "../i18n/translations";

function Servicios({ language }) {
  const t = translations[language].services;

  return (
    <section
      id="services"
      className="relative bg-[#0e141b] text-white py-28 px-8 md:px-20 overflow-hidden"
    >
      {/* Noise Premium */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.12] pointer-events-none"></div>

      {/* Glow Radial */}
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-[#4ECDC4]/10 rounded-full blur-[160px]"></div>
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-[#2ECCB2]/10 rounded-full blur-[160px]"></div>

      {/* Encabezado */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto mb-20 relative z-10"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
          {language === "es" ? "Nuestros Servicios" : "Our Services"}
        </h2>

        <p className="text-gray-300 text-lg md:text-xl mt-6 leading-relaxed font-light">
          {language === "es"
            ? "Soluciones digitales construidas con precisión, diseño y estrategia — pensadas para crecer tu negocio desde el primer día."
            : "Digital solutions crafted with precision, design, and strategy — built to grow your business from day one."}
        </p>

        <p className="text-[#4ECDC4] mt-4 text-sm md:text-base italic">
          {language === "es"
            ? "Un sitio web bien hecho inspira confianza y aumenta tus conversiones."
            : "A well-crafted website inspires trust and boosts conversions."}
        </p>
      </motion.div>

      {/* Grid de Servicios */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {[
          {
            icon: <FaLaptopCode className="text-5xl" />,
            es: "Desarrollo Web Moderno",
            en: "Modern Web Development",
            descEs:
              "Sitios rápidos, seguros y profesionales diseñados para generar resultados reales.",
            descEn:
              "Fast, secure and professional websites built to deliver real results.",
          },
          {
            icon: <FaShoppingCart className="text-5xl" />,
            es: "Restaurantes & Cafés",
            en: "Restaurants & Cafes",
            descEs:
              "Menús digitales, pedidos por WhatsApp y sitios que venden 24/7.",
            descEn:
              "Digital menus, WhatsApp ordering and websites that sell 24/7.",
          },
          {
            icon: <FaHotel className="text-5xl" />,
            es: "Sitios para Hoteles",
            en: "Hotel Websites",
            descEs:
              "Diseños premium con reservaciones integradas para clientes internacionales.",
            descEn:
              "Premium layouts with integrated booking for international guests.",
          },
          {
            icon: <FaHome className="text-5xl" />,
            es: "Bienes Raíces",
            en: "Real Estate",
            descEs:
              "Catálogos dinámicos, mapas y fichas profesionales para mostrar propiedades.",
            descEn:
              "Dynamic catalogs, maps and professional listings for showcasing properties.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="
              bg-white/5 backdrop-blur-xl 
              p-10 rounded-2xl shadow-xl 
              border border-white/10
              hover:border-[#4ECDC4]/40 
              hover:shadow-[#4ECDC4]/10 
              hover:-translate-y-2 
              transition-all duration-500
              text-center flex flex-col items-center
            "
          >
            <div className="text-[#4ECDC4] mb-6">{item.icon}</div>

            <h3 className="text-xl font-semibold mb-3 text-white">
              {language === "es" ? item.es : item.en}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed font-light">
              {language === "es" ? item.descEs : item.descEn}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA Final */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-24 relative z-10"
      >
        <p className="text-2xl md:text-3xl italic text-gray-200 font-serif mb-6">
          {language === "es"
            ? "“Diseños que convierten visitas en clientes.”"
            : "“Designs that turn visitors into clients.”"}
        </p>

        <a
          href="#contacto"
          className="bg-gradient-to-r from-[#4ECDC4] to-[#2ECCB2] hover:opacity-90 text-black font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-300"
        >
          {language === "es" ? "Hablemos" : "Let's Talk"}
        </a>
      </motion.div>
    </section>
  );
}

export default Servicios;
