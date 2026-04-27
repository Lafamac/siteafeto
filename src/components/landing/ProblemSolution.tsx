"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Brain, ArrowRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ProblemSolution = () => {
  const [activeTab, setActiveTab] = useState<"reforco" | "neuro">("reforco");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-[#fdfcfb]">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-brand-purple mb-8 leading-tight"
          >
            Como podemos cuidar de você e da sua família hoje?
          </motion.h2>
          
          {/* Tabs / Choice switcher */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              onClick={() => setActiveTab("reforco")}
              className={cn(
                "flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 text-base md:text-lg",
                activeTab === "reforco"
                  ? "bg-brand-purple text-white shadow-xl shadow-brand-purple/30"
                  : "bg-brand-soft text-brand-purple hover:bg-brand-accent transition-colors border border-brand-purple/10"
              )}
            >
              <GraduationCap size={22} />
              Reforço Escolar
            </button>
            <button
              onClick={() => setActiveTab("neuro")}
              className={cn(
                "flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 text-base md:text-lg",
                activeTab === "neuro"
                  ? "bg-brand-purple text-white shadow-xl shadow-brand-purple/30"
                  : "bg-brand-soft text-brand-purple hover:bg-brand-accent transition-colors border border-brand-purple/10"
              )}
            >
              <Brain size={22} />
              Atendimento Neuropsicológico
            </button>
          </div>
        </div>

        {/* Cards container */}
        <div className="max-w-3xl mx-auto relative min-h-[380px]">
          <AnimatePresence mode="wait">
            {activeTab === "reforco" ? (
              <motion.div
                key="reforco"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-brand-purple/5"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-brand-warm/10 text-brand-warm rounded-full flex items-center justify-center mb-6">
                    <GraduationCap size={32} />
                  </div>
                  <p className="text-lg md:text-xl text-gray-800 mb-6 leading-relaxed">
                    Sabemos como aperta o coração ver seu filho frustrado com a escola, desmotivado ou tendo dificuldades para acompanhar a turma.
                  </p>
                  <p className="text-lg md:text-xl text-gray-900 font-bold mb-8 leading-relaxed italic">
                    Podemos ajudar — Nosso acompanhamento psicopedagógico irá mapear a forma única como cada criança aprende. Com uma abordagem lúdica e sem pressão, ajudamos a resgatar a autonomia, melhorar o desempenho e devolver a alegria de estudar.
                  </p>
                  <button
                    onClick={() => scrollToSection("reforco-detalhe")}
                    className="flex items-center gap-2 px-8 py-4 bg-brand-green text-white rounded-full font-bold hover:scale-105 transition-all shadow-lg shadow-brand-green/20"
                  >
                    <span>Saber mais sobre o reforço escolar</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="neuro"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-brand-purple/5"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center mb-6">
                    <Brain size={32} />
                  </div>
                  <p className="text-lg md:text-xl text-gray-800 mb-6 leading-relaxed">
                    Lidar com a ansiedade, suspeitas de neurodivergências ou a exaustão emocional não precisa ser uma jornada solitária e pesada.
                  </p>
                  <p className="text-lg md:text-xl text-gray-900 font-bold mb-8 leading-relaxed italic">
                    Podemos ajudar — Oferecemos um espaço seguro e sem julgamentos para terapia psicológica e avaliações neuropsicológicas precisas (TDAH, Autismo, etc.), conduzindo tudo com o acolhimento e profissionalismo de uma Neuropsicóloga doutora em comportamento.
                  </p>
                  <button
                    onClick={() => scrollToSection("neuro-detalhe")}
                    className="flex items-center gap-2 px-8 py-4 bg-brand-green text-white rounded-full font-bold hover:scale-105 transition-all shadow-lg shadow-brand-green/20"
                  >
                    <span>Saber mais sobre o atendimento psicológico</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
