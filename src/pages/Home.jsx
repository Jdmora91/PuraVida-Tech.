import React, { useState, useEffect } from "react";
import translations from "../i18n/translations";

// Tus videos
import videoDesktop from "../assets/home/fondo1.mp4";
import videoMobile from "../assets/home/fondo2.mp4";

function Home({ language }) {
  const t = translations[language].home;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-start px-8 md:px-20 text-white overflow-hidden"
    >

      {/* 🎬 VIDEO DE FONDO */}
      <video
        key={isMobile ? "mobile" : "desktop"}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={isMobile ? videoDesktop : videoMobile} type="video/mp4" />
      </video>

      {/* 🌈 OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent z-10"></div>

      {/* 📌 CONTENIDO */}
      <div className="relative z-20 max-w-3xl">
        <h1 className="text-[3.5rem] md:text-[6rem] font-serif font-extrabold leading-tight drop-shadow-lg">
          {t.title}
        </h1>

        <p className="text-lg md:text-2xl mt-4 font-light text-gray-200 drop-shadow-md">
          {t.subtitle}
        </p>

        <div className="flex gap-4 mt-8">
          <button
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200"
            onClick={() => scrollToSection("services")}
          >
            {t.btn1}
          </button>

          <button
            className="border border-teal-400 hover:bg-teal-400 hover:text-black font-semibold px-6 py-3 rounded-lg transition-all duration-200"
            onClick={() => scrollToSection("contacto")}
          >
            {t.btn2}
          </button>
        </div>
      </div>

    </section>
  );
}

export default Home;
