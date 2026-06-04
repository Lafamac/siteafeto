"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "Plano de 10 Aulas",
    price: "Consulte",
    period: "Acompanhamento Intermediário",
    description: "Indicado para alunos que necessitam de acompanhamento escolar e organização dos estudos, com frequência de uma a duas aulas por semana. Assim como no plano anterior, as aulas podem ser intensificadas em períodos de avaliações e provas, de acordo com a necessidade do aluno.",
    features: [
      "Frequência de 1 a 2 aulas por semana",
      "Organização de rotina de estudos",
      "Intensificação em período de provas",
      "Acompanhamento pedagógico qualificado",
      "Suporte escolar focado na autonomia"
    ],
    highlight: false
  },
  {
    name: "Plano de 20 Aulas",
    price: "Consulte",
    period: "Melhor Custo-Benefício",
    description: "Realizado com frequência de duas a três aulas semanais, com possibilidade de intensificação durante períodos de provas e avaliações escolares. Este é o plano mais procurado pelas famílias, pois oferece um acompanhamento mais próximo e contínuo do desenvolvimento do aluno. Além disso, proporciona um desconto de 44,94% no valor das aulas.",
    features: [
      "Desconto especial de 44,94% incluso",
      "Frequência de 2 a 3 aulas semanais",
      "Acompanhamento próximo e contínuo",
      "Intensificação em período de provas",
      "Relatórios de evolução pedagógica",
      "Suporte via WhatsApp para dúvidas"
    ],
    highlight: true
  },
  {
    name: "Aula Individual (Avulsa)",
    price: "Consulte",
    period: "Atendimento Pontual",
    description: "Opção destinada a atendimentos pontuais ou necessidades específicas. O pagamento é realizado por aula, com valor único, sem aplicação de descontos.",
    features: [
      "Foco em conteúdo específico/urgente",
      "Resolução de dúvidas pontuais",
      "Sem taxa de fidelidade ou adesão",
      "Valor único por atendimento",
      "Material de apoio da aula incluso"
    ],
    highlight: false
  }
];

const PlansSection = () => {
  return (
    <section id="planos" className="py-24 bg-[#fcf8f5]">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-purple mb-6">
            Planos de Aula Personalizados
          </h2>
          <p className="text-lg text-gray-600 font-sans leading-relaxed">
            Oferecemos diferentes opções de planos, pensados para atender às necessidades de cada aluno e proporcionar um acompanhamento pedagógico eficaz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch mb-16">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-white p-8 rounded-3xl shadow-xl border-2 transition-all duration-500 hover:shadow-2xl flex flex-col justify-between ${
                plan.highlight 
                  ? "border-brand-warm scale-105 z-10 md:py-10" 
                  : "border-transparent hover:border-brand-purple/10"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-warm text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  Mais Procurado
                </div>
              )}
              
              <div>
                <h4 className="text-2xl font-serif font-bold text-gray-900 mb-2">{plan.name}</h4>
                <div className="mb-6 border-b border-gray-100 pb-6">
                  <span className="text-3xl font-serif font-bold text-brand-purple">{plan.price}</span>
                  <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider block mt-1">{plan.period}</span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  {plan.description}
                </p>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 size={18} className="text-brand-green flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
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

        <div className="text-center max-w-2xl mx-auto bg-brand-soft/30 p-6 rounded-2xl border border-brand-purple/5">
          <p className="text-sm md:text-base text-gray-600 font-medium italic">
            Esses planos foram desenvolvidos para oferecer suporte pedagógico personalizado, respeitando o ritmo e as necessidades de aprendizagem de cada aluno.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
