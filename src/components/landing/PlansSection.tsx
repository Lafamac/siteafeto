"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "Acompanhamento Pontual",
    price: "Consulte",
    period: "por aula",
    features: [
      "Foco em conteúdo específico",
      "Preparação para provas",
      "Material de apoio incluso",
      "Relatório pós-aula"
    ],
    highlight: false
  },
  {
    name: "Plano Mensal (2x semana)",
    price: "Consulte",
    period: "8 aulas/mês",
    features: [
      "Acompanhamento contínuo",
      "Auxílio no dever de casa",
      "Rotina de estudos personalizada",
      "Suporte via WhatsApp",
      "Desconto em oficinas"
    ],
    highlight: true
  },
  {
    name: "Plano Intensivo (3x semana)",
    price: "Consulte",
    period: "12 aulas/mês",
    features: [
      "Recuperação de base",
      "Acompanhamento diário",
      "Metodologias ativas",
      "Reunião com a escola",
      "Avaliação psicopedagógica"
    ],
    highlight: false
  }
];

const PlansSection = () => {
  return (
    <section id="planos" className="py-24 bg-[#fcf8f5]">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-purple mb-4">
            Investimento no Futuro
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto italic">
            Planos exclusivos para <span className="font-bold text-brand-warm underline underline-offset-4">Reforço Escolar</span>. 
            Para atendimento neuropsicológico, consulte disponibilidade de horários.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-white p-8 rounded-3xl shadow-xl border-2 transition-all duration-500 hover:shadow-2xl flex flex-col ${
                plan.highlight ? "border-brand-warm scale-105 z-10" : "border-transparent hover:border-brand-purple/10"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-warm text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Mais Procurado
                </div>
              )}
              
              <h4 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
              <div className="mb-6">
                <span className="text-3xl font-serif font-bold text-brand-purple">{plan.price}</span>
                <span className="text-gray-400 text-sm ml-2">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={18} className="text-brand-green flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href="https://wa.me/5535991957579?text=Vi%20o%20site%20e%20quero%20saber%20valores%20do%20refor%C3%A7o"
                className={`w-full py-4 rounded-xl font-bold text-center transition-all flex items-center justify-center gap-2 ${
                  plan.highlight 
                    ? "bg-brand-green text-white shadow-lg shadow-brand-green/20 hover:bg-brand-green-dark" 
                    : "bg-brand-soft text-brand-purple hover:bg-brand-purple hover:text-white"
                }`}
              >
                <MessageCircle size={18} />
                Solicitar Orçamento
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
