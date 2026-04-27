"use client";

import React from "react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Dra. Valéria",
    role: "Neuropsicóloga (PhD)",
    crea: "CRP 04/XXXXX",
    desc: "Doutora em Comportamento Humano, especialista em avaliações neuropsicológicas e intervenção clínica.",
  },
  {
    name: "Equipe Afeto",
    role: "Psicopedagoga",
    crea: "CPp XXXXX",
    desc: "Especialista em Educação Infantil e Ensino Fundamental, focada em reforço escolar lúdico.",
  },
  {
    name: "Equipe Afeto",
    role: "Psicóloga Clínica",
    crea: "CRP 04/XXXXX",
    desc: "Acolhimento de crianças, jovens e adultos com foco em saúde emocional e bem-estar.",
  },
];

const TeamSlider = () => {
  return (
    <section className="py-24 bg-brand-soft">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-purple mb-4">
            Nossa Equipe
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profissionais apaixonadas pelo que fazem, em constante atualização para oferecer o melhor cuidado técnico e humano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-brand-purple/5 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-32 h-32 rounded-full bg-brand-soft border-4 border-brand-purple/10 mb-6 overflow-hidden relative">
                {/* Profile placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-brand-purple/20">
                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08c-1.29 1.94-3.5 3.22-6 3.22z"/>
                   </svg>
                </div>
                <div className="absolute inset-0 bg-brand-purple/10 group-hover:bg-transparent transition-colors" />
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
              <p className="text-brand-warm font-bold text-sm mb-2">{member.role}</p>
              <p className="text-xs text-gray-400 mb-4">{member.crea}</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSlider;
