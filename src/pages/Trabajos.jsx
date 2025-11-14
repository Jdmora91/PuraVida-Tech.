import React from "react";
import { motion } from "framer-motion";
import ChefHome from "../assets/ChefCalderon/home.jpg";
import BienesHome from "../assets/BienesRaices/propiedades.png";
import clinica from "../assets/Clinica/Home.png"
import translations from "../i18n/translations";
import hotel from "../assets/hotel/hotel.png"


export default function Trabajos({ language }) {
  const t = translations[language].trabajos;

  const projects = [
    {
      id: 1,
      title: t.chefTitle,
      description: t.chefDescription,
      image: ChefHome,
      link: "https://demo-restaurante-two.vercel.app/",
    },
    {
      id: 2,
      title: t.realEstateTitle,
      description: t.realEstateDescription,
      image: BienesHome,
      link: "https://demo-bienes-raices.vercel.app/",
    },
      {
      id: 3,
      title: t.clinicaTitle,
      description: t.clinicaDescription,
      image: clinica,
      link: "https://demo-clinica-puravida.vercel.app/",
    },
       {
      id: 3,
      title: t.hotelTitle,
      description: t.hotelDescription,
      image: hotel,
      link: "https://demo-hotel-pura-vida.vercel.app/",
    },
  ];

  return (
    <section
      id="trabajos"
      className="relative min-h-screen bg-[#0e141b] text-white py-24 px-6 md:px-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4ECDC4] mb-4">
          {t.title}
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-[#101820] rounded-2xl overflow-hidden shadow-lg hover:shadow-[#4ECDC4]/30 hover:shadow-xl border border-white/10"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-2xl font-semibold text-[#4ECDC4]">{project.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="mt-4 inline-block bg-[#4ECDC4] text-[#0e141b] px-4 py-2 rounded-lg font-semibold text-center transition-all hover:bg-[#3bb9a9]"
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
