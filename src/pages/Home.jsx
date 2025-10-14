import React from "react";
import fondo from "../assets/FondoHome3.avif";
import translations from "../i18n/translations";

function Home({ language }) {
  const t = translations[language].home;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-start px-8 md:px-20 text-white bg-fixed bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-teal-400/20"></div>

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-[4rem] md:text-[6rem] font-serif font-extrabold leading-tight drop-shadow-lg">
          {t.title}
        </h1>
        <p className="text-lg md:text-2xl mt-4 font-light text-gray-200 drop-shadow-md">
          {t.subtitle}
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200">
            {t.btn1}
          </button>
          <button className="border border-teal-400 hover:bg-teal-400 hover:text-black font-semibold px-6 py-3 rounded-lg transition-all duration-200">
            {t.btn2}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
