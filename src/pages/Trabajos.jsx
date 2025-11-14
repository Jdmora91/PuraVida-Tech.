import React from "react";
import { motion } from "framer-motion";
import translations from "../i18n/translations";

import ChefHome from "../assets/ChefCalderon/home.jpg";
import BienesHome from "../assets/BienesRaices/propiedades.png";
import clinica from "../assets/Clinica/Home.png";
import hotel from "../assets/hotel/hotel.png";

export default function Trabajos({ language }) {
  const t = translations[language].trabajos;

  const projects = [
    {
      id: 1,
      badge: language === "es" ? "Restaurante" : "Restaurant",
      title: t.chefTitle,
      description: t.chefDescription,
      image: ChefHome,
      link: "https://demo-restaurante-two.vercel.app/",
      gradient: "from-[#4ECDC4] to-[#3BB9A9]",
    },
    {
      id: 2,
      badge: language === "es" ? "Bienes Raíces" : "Real Estate",
      title: t.realEstateTitle,
      description: t.realEstateDescription,
      image: BienesHome,
      link: "https://demo-bienes-raices.vercel.app/",
      gradient: "from-cyan-400 to-blue-400",
    },
    {
      id: 3,
      badge: language === "es" ? "Clínica" : "Clinic",
      title: t.clinicaTitle,
      description: t.clinicaDescription,
      image: clinica,
      link: "https://demo-clinica-puravida.vercel.app/",
      gradient: "from-pink-400 to-fuchsia-500",
    },
    {
      id: 4,
      badge: language === "es" ? "Hotel" : "Hotel",
      title: t.hotelTitle,
      description: t.hotelDescription,
      image: hotel,
      link: "https://demo-hotel-pura-vida.vercel.app/",
      gradient: "from-orange-400 to-yellow-400",
    },
  ];

  return (
    <section
      id="trabajos"
      className="relative min-h-screen bg-[#0e141b] text-white py-28 px-6 md:px-16 overflow-hidden"
    >
      {/* Fondo premium con noise + glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(78,205,196,0.07),transparent)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.07] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#4ECDC4] drop-shadow-lg">
          {t.title}
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* GRID PREMIUM */}
      <div className="grid md:grid-cols-2 gap-14 max-w-6xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="group relative bg-[#101820]/90 rounded-3xl overflow-hidden shadow-2xl border border-white/5 backdrop-blur-sm"
          >
            {/* Glow detrás */}
            <div
              className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} opacity-20 blur-xl group-hover:opacity-30 transition-all duration-500`}
            ></div>

            {/* Imagen con mockup elegante */}
            <div className="relative overflow-hidden rounded-t-3xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-all duration-700"
              />

              {/* Badge superior */}
              <span
                className="absolute top-4 left-4 px-4 py-1 rounded-full text-sm font-semibold
                bg-black/60 backdrop-blur-md text-white border border-white/10"
              >
                {project.badge}
              </span>
            </div>

            {/* Contenido */}
            <div className="p-8 relative z-10">
              <h3 className="text-2xl font-bold text-[#4ECDC4] mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Botón premium */}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.07 }}
                className="
                  mt-6 inline-block 
                  bg-gradient-to-r from-[#4ECDC4] to-[#35bfae]
                  text-[#0e141b] px-5 py-2.5 rounded-lg 
                  font-semibold text-center shadow-md
                  hover:shadow-[#4ECDC4]/40 transition-all
                "
              >
                {t.button}
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
