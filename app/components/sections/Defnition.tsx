// definition 


"use client";

import { FaLightbulb, FaPalette, FaStar, FaUsers, FaMapMarkedAlt, FaFlag } from "react-icons/fa";

export default function Def() {
  const cards = [
    {
      icon: <FaLightbulb size={28} className="text-primary" />,
      title: "Innovation",
      description:
        "Mboka Expo encourage l’innovation et les nouvelles idées pour le développement technologique et culturel.",
    },
    {
      icon: <FaPalette size={28} className="text-primary" />,
      title: "Créativité",
      description:
        "Nous valorisons la créativité des développeurs et artistes pour créer des expériences uniques et inspirantes.",
    },
    {
      icon: <FaStar size={28} className="text-primary" />,
      title: "Exposition",
      description:
        "Présenter vos projets et créations au sein de notre plateforme pour toucher la communauté et les professionnels.",
    },
    {
      icon: <FaUsers size={28} className="text-primary" />,
      title: "Communauté",
      description:
        "Mboka Expo rassemble les développeurs et créateurs congolais pour partager, collaborer et s’entraider.",
    },
    {
      icon: <FaMapMarkedAlt size={28} className="text-primary" />,
      title: "Découverte",
      description:
        "Explorez des projets locaux, des tendances et des inspirations issues de la culture congolaise.",
    },
    {
      icon: <FaFlag size={28} className="text-primary" />,
      title: "Culture",
      description:
        "Mettre en avant la richesse culturelle du Congo dans le design et le développement web.",
    },
  ];

  return (
    <section className="bloc  w-full h-auto bg-background md:px-47 md:py-25 px-4 py-8  ">
        <div className="md:flex mb-10 items-center gap-4 ">
                  <h2 className="text-center text-text font-bold
                   text-3xl ">Les valeurs de <span className="text-primary">Mboka Expo </span></h2>
                   <p className="text-center my-6 text-text font-light md:text-xl opacity-70">Lorem ipsum, dolor sit </p>
               </div>

      <div className="grid gap-8 md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className=" bg-linear-to-bl from-[#1f1b1e5d] via-[#2a1d183c] to-[#f04d071c] backdrop-blur-md p-6  border-br border rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-text text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
