import React from "react";
import { FaLaptopCode, FaShoppingCart, FaHotel, FaHome } from "react-icons/fa";
import translations from "../i18n/translations";

function Servicios({ language }) {
  const t = translations[language].services;

  return (
    <section
      id="services"
      className="relative bg-[#0e141b]/90 backdrop-blur-sm text-white py-28 px-8 md:px-20"
    >
      {/* ===== Encabezado ===== */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4ECDC4] mb-4">
          {language === "es" ? "Nuestros Servicios" : "Our Services"}
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          {language === "es"
            ? "Creamos soluciones digitales modernas y efectivas, pensadas para que tu negocio crezca en línea con diseño, estrategia y resultados."
            : "We create modern and effective digital solutions, designed to help your business grow online with design, strategy, and measurable results."}
          <span className="block mt-2 text-[#4ECDC4] font-semibold">
            {language === "es"
              ? "Los extranjeros confían más en negocios con sitio web propio — no solo redes sociales."
              : "Foreign clients trust businesses with their own website — not just social media."}
          </span>
        </p>
      </div>

      {/* ===== Grid de Servicios ===== */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Servicio 1 */}
        <div className="bg-[#1A1F25]/60 p-10 rounded-2xl shadow-lg text-center hover:translate-y-[-6px] hover:shadow-[#4ECDC4]/20 transition-all duration-500 flex flex-col items-center">
          <FaLaptopCode className="text-[#4ECDC4] text-5xl mb-6" />
          <h3 className="text-2xl font-semibold mb-3">
            {language === "es" ? "Desarrollo Web" : "Web Development"}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            {language === "es"
              ? "Sitios modernos, rápidos y adaptados a tu marca, que inspiran confianza en tus clientes nacionales e internacionales."
              : "Modern, fast, and brand-tailored websites that inspire confidence in both local and international clients."}
          </p>
          <a
            href="#contacto"
            className="text-[#4ECDC4] font-semibold hover:underline"
          >
            {language === "es" ? "Cotizar ahora →" : "Get a quote →"}
          </a>
        </div>

        {/* Servicio 2 */}
        <div className="bg-[#1A1F25]/60 p-10 rounded-2xl shadow-lg text-center hover:translate-y-[-6px] hover:shadow-[#4ECDC4]/20 transition-all duration-500 flex flex-col items-center">
          <FaShoppingCart className="text-[#4ECDC4] text-5xl mb-6" />
          <h3 className="text-2xl font-semibold mb-3">
            {language === "es" ? "Restaurantes y Cafe" : "Restorants & Cafes"}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            {language === "es"
              ? "Tiendas optimizadas para vender 24/7, con integración a WhatsApp, pasarelas de pago locales y control total de tus productos."
              : "Optimized stores open 24/7, with WhatsApp integration, local payment gateways, and full control of your products."}
          </p>
          <a
            href="https://demo-restaurante-two.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4ECDC4] font-semibold hover:underline"
          >
            Chef Calderón →
          </a>
        </div>

        {/* Servicio 3 */}
        <div className="bg-[#1A1F25]/60 p-10 rounded-2xl shadow-lg text-center hover:translate-y-[-6px] hover:shadow-[#4ECDC4]/20 transition-all duration-500 flex flex-col items-center">
          <FaHotel className="text-[#4ECDC4] text-5xl mb-6" />
          <h3 className="text-2xl font-semibold mb-3">
            {language === "es" ? "Sitios para Hoteles" : "Hotel Websites"}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            {language === "es"
              ? "Diseño atractivo y funcional con integración de reservas y formularios para una experiencia fluida y profesional."
              : "Attractive, functional design with booking and form integration for a smooth, professional experience."}
          </p>
          <a
            href="#contacto"
            className="text-[#4ECDC4] font-semibold hover:underline"
          >
            {language === "es" ? "Próximamente →" : "Coming Soon →"}
          </a>
        </div>

        {/* Servicio 4 */}
        <div className="bg-[#1A1F25]/60 p-10 rounded-2xl shadow-lg text-center hover:translate-y-[-6px] hover:shadow-[#4ECDC4]/20 transition-all duration-500 flex flex-col items-center">
          <FaHome className="text-[#4ECDC4] text-5xl mb-6" />
          <h3 className="text-2xl font-semibold mb-3">
            {language === "es" ? "Bienes Raíces" : "Real Estate"}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            {language === "es"
              ? "Páginas con catálogos dinámicos, mapas interactivos y contacto directo para mostrar tus propiedades con estilo."
              : "Dynamic catalogs, interactive maps, and direct contact to showcase your properties with style."}
          </p>
          <a
            href="#contacto"
            className="text-[#4ECDC4] font-semibold hover:underline"
          >
            {language === "es" ? "Próximamente →" : "Coming Soon →"}
          </a>
        </div>
      </div>

      {/* ===== CTA final ===== */}
      <div className="text-center mt-24">
        <p className="text-2xl font-serif italic text-gray-200 max-w-2xl mx-auto mb-8">
          {language === "es"
            ? "“Transformamos ideas en experiencias digitales que generan confianza.”"
            : "“We transform ideas into digital experiences that build trust.”"}
        </p>
        <a
          href="#contacto"
          className="bg-gradient-to-r from-[#4ECDC4] to-[#2ECCB2] hover:opacity-90 text-white font-semibold px-5 py-2.5 md:px-8 md:py-3 text-sm md:text-base rounded-lg shadow-lg transition-all duration-300 whitespace-nowrap text-center"
        >
          {language === "es"
            ? "Hablemos de tu proyecto"
            : "Let's Talk About Your Project"}
        </a>


      </div>
    </section>
  );
}

export default Servicios;
