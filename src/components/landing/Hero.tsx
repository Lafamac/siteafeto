"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, MapPin } from "lucide-react";
import HeroBackground from "../HeroBackground";

const Hero = () => {
  const scrollToFinal = () => {
    const el = document.getElementById("contato");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Background with higher opacity to ensure text readability */}
      <HeroBackground overlayOpacity={0.5} />

      <div className="container relative z-10 px-6 mx-auto text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-white/10 backdrop-blur-md rounded-full text-brand-accent font-bold shadow-sm border border-white/20"
          >
            <MapPin size={16} />
            <span className="text-xs tracking-widest uppercase">Lavras / MG</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6 drop-shadow-lg"
          >
            Precisando de ajuda no aprendizado do seu filho ou busca por atendimento especializado?
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/95 max-w-2xl mb-12 leading-relaxed font-sans"
          >
            Há mais de <span className="font-bold text-white underline decoration-brand-warm underline-offset-4">10 anos</span>, o Núcleo Afeto transforma histórias. 
            Oferecemos reforço escolar e atendimento neuropsicológico em um espaço lúdico e repleto de afeto.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            onClick={scrollToFinal}
            className="group flex items-center gap-3 px-10 py-5 bg-brand-green text-white rounded-2xl font-bold text-xl shadow-2xl shadow-brand-green/20 hover:bg-brand-green-dark transition-all duration-300"
          >
            <MessageCircle className="group-hover:rotate-12 transition-transform" />
            <span>Fale Agora pelo WhatsApp</span>
          </motion.button>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
