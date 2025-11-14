import React from "react";
import translations from "../i18n/translations";

// Importar el video desde assets
import videoNosotros from "../assets/nosotros/nosotros.mp4";

function Nosotros({ language }) {
  const t = translations[language].about;

  return (
    <section
      id="nosotros"
      className="relative min-h-screen w-full text-white overflow-hidden py-28 px-6 md:px-20"
    >
      {/* ===== VIDEO DE FONDO ===== */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="
          absolute inset-0 w-full h-full object-cover
          brightness-[0.45] contrast-110
        "
      >
        <source src={videoNosotros} type="video/mp4" />
      </video>

      {/* Overlays para mejorar visibilidad del texto */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70"></div>

      {/* ===== CONTENIDO ===== */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-24">
        
        {/* TITULO */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-xl text-[#4ECDC4]">
            {language === "es" ? "Sobre Nosotros" : "About Us"}
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            {language === "es"
              ? "En Pura Vida Tech combinamos estrategia, diseño y tecnología con excelencia internacional. Creamos experiencias digitales que impulsan negocios locales e internacionales."
              : "At Pura Vida Tech we combine strategy, design, and technology with international standards. We craft digital experiences that empower both local and global businesses."}
          </p>
        </div>

        {/* FRASE DESTACADA */}
        <div className="relative bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/10 text-center">
          <p className="text-xl md:text-2xl italic text-gray-100 leading-relaxed drop-shadow">
            {language === "es"
              ? "Los negocios con página web inspiran más confianza que aquellos que solo dependen de redes sociales."
              : "Businesses with a professional website inspire more trust than those relying solely on social media."}
          </p>

          <span className="text-[#4ECDC4] mt-3 block font-semibold drop-shadow">
            {language === "es"
              ? "Tu sitio web es tu vitrina ante el mundo."
              : "Your website is your showcase to the world."}
          </span>
        </div>

        {/* MISIÓN + LISTA */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* MISION */}
          <div className="flex-1 text-gray-200 space-y-4">
            <h3 className="text-3xl font-bold text-[#4ECDC4] drop-shadow">
              {language === "es" ? "Nuestra Misión" : "Our Mission"}
            </h3>
            <p className="leading-relaxed text-gray-100 drop-shadow-md">
              {language === "es"
                ? "Ayudar a emprendedores, hoteles, restaurantes y empresas a crecer en línea con sitios modernos, rápidos y diseñados con propósito. Cada proyecto que creamos está pensado para resultados reales."
                : "To help entrepreneurs, hotels, restaurants, and businesses grow online with modern, fast, and purpose-driven websites. Every project we craft is designed for real results."}
            </p>
          </div>

          {/* LISTA */}
          <div className="flex-1 bg-white/5 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-white/10 hover:shadow-[#4ECDC4]/20 transition-all duration-500">
            <ul className="space-y-4 text-gray-100 text-lg">
              <li>💡 {language === "es" ? "Innovación constante" : "Constant innovation"}</li>
              <li>🌎 {language === "es" ? "Compromiso local e internacional" : "Local & international commitment"}</li>
              <li>⚙️ {language === "es" ? "Diseño con propósito" : "Purpose-driven design"}</li>
              <li>🚀 {language === "es" ? "Resultados medibles" : "Measurable results"}</li>
            </ul>
          </div>
        </div>

        {/* HISTORIA */}
        <div className="space-y-4 text-center md:text-left max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-[#4ECDC4] drop-shadow-lg">
            {language === "es" ? "Nuestra Historia" : "Our Story"}
          </h3>
          <p className="text-gray-100 leading-relaxed text-lg drop-shadow-md">
            {language === "es"
              ? "Pura Vida Tech fue fundada por José Donis Mora, desarrollador full stack con visión internacional. Combinamos la creatividad costarricense con estándares globales para entregar proyectos de alto impacto."
              : "Pura Vida Tech was founded by José Donis Mora, a full-stack developer with international vision. We blend Costa Rican creativity with global standards to deliver high-impact projects."}
          </p>
        </div>

        {/* CTA FINAL */}
        <div className="text-center mt-14">
          <p className="text-2xl italic text-gray-200 font-serif drop-shadow">
            {language === "es"
              ? "“Creamos experiencias digitales con esencia costarricense.”"
              : "“We create digital experiences with Costa Rican soul.”"}
          </p>

          <a
            href="#contacto"
            className="mt-6 inline-block bg-gradient-to-r from-[#4ECDC4] to-[#2ECCB2] text-white px-8 py-3 rounded-lg font-semibold shadow-xl hover:opacity-90 transition-all duration-300"
          >
            {language === "es"
              ? "Hablemos de tu proyecto"
              : "Let’s Talk About Your Project"}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
