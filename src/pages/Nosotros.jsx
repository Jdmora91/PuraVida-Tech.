
import React from "react";
import translations from "../i18n/translations";

function Nosotros({ language }) {
  const t = translations[language].about;

  return (
    <section
      id="nosotros"
      className="relative bg-[#0e141b] text-white py-28 px-8 md:px-20 overflow-hidden"
    >
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e141b]/95 via-[#101820]/90 to-[#0e141b]/95"></div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-20">
        {/* Encabezado */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4ECDC4] mb-2">
            {language === "es" ? "Sobre Nosotros" : "About Us"}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {language === "es"
              ? "En Pura Vida Tech creemos que cada negocio local merece una presencia digital tan auténtica como su historia. Fusionamos diseño, estrategia y tecnología para crear experiencias digitales únicas que generan confianza y resultados."
              : "At Pura Vida Tech, we believe every local business deserves a digital presence as authentic as its story. We combine design, strategy, and technology to create unique digital experiences that build trust and deliver results."}
          </p>
        </div>

        {/* Frase inspiradora */}
        <div className="relative bg-gradient-to-r from-[#12232E]/60 to-[#0e141b]/60 p-8 rounded-2xl shadow-inner border-l-4 border-[#4ECDC4] text-center">
          <p className="text-xl italic text-gray-200 max-w-3xl mx-auto">
            {language === "es"
              ? "Los clientes internacionales confían más en negocios con página web propia que en aquellos que solo usan redes sociales."
              : "International clients trust businesses with their own website more than those that rely only on social media."}
          </p>
          <span className="text-[#4ECDC4] mt-3 block font-semibold">
            {language === "es"
              ? "Tu sitio web es tu carta de presentación global."
              : "Your website is your global business card."}
          </span>
        </div>

        {/* Misión */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-gray-300">
            <h3 className="text-2xl font-bold text-[#4ECDC4] mb-3">
              {language === "es" ? "Nuestra Misión" : "Our Mission"}
            </h3>
            <p className="leading-relaxed">
              {language === "es"
                ? "Impulsar a emprendedores, hoteles, restaurantes y agentes inmobiliarios a crecer en línea con sitios modernos, optimizados y rentables. Diseñamos cada proyecto con propósito, enfocándonos en resultados reales."
                : "To empower entrepreneurs, hotels, restaurants, and real estate agents to grow online with modern, optimized, and profitable websites. Every project we design has purpose — focused on real, measurable results."}
            </p>
          </div>
          <div className="flex-1 bg-[#1A1F25]/60 rounded-2xl p-10 shadow-lg hover:shadow-[#4ECDC4]/20 transition-all duration-500">
            <ul className="space-y-3 text-gray-200">
              <li>💡 {language === "es" ? "Innovación constante" : "Constant innovation"}</li>
              <li>🌎 {language === "es" ? "Compromiso local e internacional" : "Local and international commitment"}</li>
              <li>⚙️ {language === "es" ? "Diseño con propósito" : "Purpose-driven design"}</li>
              <li>🚀 {language === "es" ? "Resultados medibles" : "Measurable results"}</li>
            </ul>
          </div>
        </div>

        {/* Historia */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-[#4ECDC4] mb-3">
            {language === "es" ? "Nuestra Historia" : "Our Story"}
          </h3>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            {language === "es"
              ? "Fundada por José Donis Mora, desarrollador full stack apasionado por la tecnología y el emprendimiento local. Tras su experiencia en Estados Unidos y Costa Rica, nació la visión de crear una agencia que combine talento costarricense con estándares internacionales."
              : "Founded by José Donis Mora, a full-stack developer passionate about technology and local entrepreneurship. After gaining experience in the U.S. and Costa Rica, he envisioned an agency that blends Costa Rican talent with international standards."}
          </p>
        </div>

        {/* Cierre inspirador */}
        <div className="text-center mt-10">
          <p className="text-2xl font-serif italic text-gray-200 max-w-2xl mx-auto">
            {language === "es"
              ? "“Transformamos ideas en experiencias digitales con esencia costarricense.”"
              : "“We transform ideas into digital experiences with Costa Rican essence.”"}
          </p>
          <div className="mt-10">
<a
  href="#contacto"
  className="bg-gradient-to-r from-[#4ECDC4] to-[#2ECCB2] hover:opacity-90 text-white font-semibold px-5 py-2.5 md:px-8 md:py-3 text-sm md:text-base rounded-lg shadow-lg transition-all duration-300 whitespace-nowrap text-center"
>
  {language === "es"
    ? "Hablemos de tu proyecto"
    : "Let's Talk About Your Project"}
</a>


          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
