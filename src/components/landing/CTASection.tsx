"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, GraduationCap, Brain } from "lucide-react";

const CTASection = () => {
  const whatsappReforco = "https://wa.me/5535991957579?text=Vi%20o%20site%20e%20desejo%20refor%C3%A7o%20escolar";
  const whatsappNeuro = "https://wa.me/5535991696527?text=Vi%20o%20site%20e%20desejo%20atendimento%20psicol%C3%B3gico";

  return (
    <section id="contato" className="py-24 bg-brand-purple relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="container px-6 mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight">
            Não espere a dificuldade virar uma bola de neve.
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto font-sans leading-relaxed">
            Lidar com a frustração escolar do seu filho ou com o peso das próprias emoções não precisa ser uma caminhada solitária. No Núcleo Afeto, cada dificuldade é tratada com respeito, ciência e, acima de tudo, carinho.
            <br /><br />
            <span className="font-bold">Dê o primeiro passo para uma rotina com mais paz, autonomia e leveza. Fale com a nossa equipe sem compromisso e sinta-se em casa:</span>
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <motion.a
              href={whatsappReforco}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 px-8 py-5 bg-brand-green text-white rounded-2xl font-bold text-lg shadow-2xl shadow-black/20 hover:bg-brand-green-dark transition-all"
            >
              <GraduationCap size={24} />
              <span>Falar sobre Reforço Escolar</span>
              <MessageCircle size={22} className="ml-2" />
            </motion.a>

            <motion.a
              href={whatsappNeuro}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 px-8 py-5 bg-brand-green text-white rounded-2xl font-bold text-lg shadow-2xl shadow-black/20 hover:bg-brand-green-dark transition-all"
            >
              <Brain size={24} />
              <span>Falar sobre Atendimento Psicológico</span>
              <MessageCircle size={22} className="ml-2" />
            </motion.a>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 text-white/60 text-sm">
            <p>Rua Gilberto Vilela, 74 - Bairro Centenário - Lavras/MG • Núcleo Afeto — Transformando Histórias com Ciência e Carinho</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
