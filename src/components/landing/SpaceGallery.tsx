"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const SpaceGallery = () => {
  const images = [
    { src: "/img/fachada.jpg", label: "Fachada" },
    { src: "/img/salas.jpg", label: "Salas de Aula" },
    { src: "/img/consultorio.jpg", label: "Consultório" },
    { src: "/img/ludico.jpg", label: "Espaço Lúdico" },
  ];

  return (
    <section id="espaco" className="py-24 bg-white">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-purple mb-4">
            Nosso Espaço
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Um ambiente planejado para acolher com carinho, segurança e estímulos adequados a cada fase do desenvolvimento.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-gray-100"
            >
              <div className="absolute inset-0 bg-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-white font-bold">
                {img.label}
              </div>
              {/* Placeholder visualization */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span className="text-sm font-medium">Foto: {img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Section */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-brand-soft bg-brand-soft min-h-[450px] relative">
          <div className="absolute top-6 left-6 z-10 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs hidden md:block">
            <div className="flex items-start gap-3">
              <MapPin className="text-brand-warm flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-gray-900">Núcleo Afeto</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Rua Gilberto Vilela, 74 - Bairro Centenário - Lavras, MG
                </p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-brand-purple font-bold mt-2 inline-block hover:underline"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14872.245842841444!2d-45.0035048!3d-21.2415174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9ff55348b6c003%3A0xc367b6b1df33a76f!2sLavras%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1714214400000!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale contrast-125 opacity-80"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SpaceGallery;
