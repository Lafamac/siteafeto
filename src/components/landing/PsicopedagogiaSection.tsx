"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, AlertCircle, Award, BookOpen, Clock, Heart, Users } from "lucide-react";

const PsicopedagogiaSection = () => {
  const whatsappUrl = "https://wa.me/5535991696527?text=Olá,%20vi%20o%20site%20e%20desejo%20agendar%20uma%20avaliação%20psicopedagógica";

  const indications = [
    { text: "Crianças com dificuldades de aprendizagem", icon: AlertCircle },
    { text: "Atrasos no processo de alfabetização", icon: BookOpen },
    { text: "Dificuldades de leitura e escrita", icon: Award },
    { text: "Problemas de atenção e organização escolar", icon: Clock },
    { text: "Baixo rendimento acadêmico", icon: Heart }
  ];

  const steps = [
    "Avaliação psicopedagógica individualizada",
    "Intervenções direcionadas às necessidades de cada aluno",
    "Estímulo à leitura, escrita, atenção, memória e raciocínio",
    "Desenvolvimento da autonomia, autoestima e confiança para aprender",
    "Orientação à família e acompanhamento do processo escolar"
  ];

  const testimonials = [
    {
      parent: "Roberta M.",
      child: "mãe da Júlia (7 anos)",
      text: "A psicopedagogia no Núcleo Afeto foi um divisor de águas na nossa vida. Minha filha tinha muita resistência com a leitura. Hoje ela mesma pega os livrinhos para ler com prazer e segurança!"
    },
    {
      parent: "Thiago S.",
      child: "pai do Leonardo (9 anos)",
      text: "Antes tínhamos brigas diárias na hora de fazer a tarefa. O acompanhamento trouxe autonomia e paciência para o Léo. A dedicação e o carinho da psicopedagoga são incríveis."
    }
  ];

  return (
    <section id="psicopedagogia-detalhe" className="py-24 bg-gradient-to-b from-white to-[#fcf8f5] overflow-hidden">
      <div className="container px-6 mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-brand-purple mb-6 leading-tight"
          >
            Dificuldades na Aprendizagem Têm Solução
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-purple/80 font-medium font-sans leading-relaxed"
          >
            Atendimento psicopedagógico especializado para crianças e adolescentes.
          </motion.p>
          <div className="w-24 h-1 bg-brand-warm/30 mx-auto mt-6 rounded-full" />
        </div>

        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 leading-tight">
              Seu filho apresenta dificuldades na leitura, escrita, alfabetização, atenção ou organização dos estudos?
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              A psicopedagogia ajuda a identificar as causas dessas dificuldades e a desenvolver estratégias personalizadas que favorecem a aprendizagem de forma eficaz, respeitosa e acolhedora.
            </p>
            
            <div className="p-6 bg-brand-soft/40 border-l-4 border-brand-warm rounded-2xl">
              <h4 className="font-serif font-bold text-lg text-brand-purple mb-2">Nosso Objetivo</h4>
              <p className="text-gray-700 font-medium">
                Promover o desenvolvimento das habilidades de aprendizagem, ajudando cada criança a alcançar seu potencial com segurança, motivação e autonomia.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-brand-warm/10 rounded-3xl blur-3xl -z-10" />
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-brand-purple/5">
              <h4 className="font-serif text-xl font-bold text-brand-purple mb-6 flex items-center gap-2">
                <Users className="text-brand-warm" size={24} />
                Para quem é indicado?
              </h4>
              <ul className="space-y-4">
                {indications.map((ind, idx) => {
                  const Icon = ind.icon;
                  return (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-brand-soft/30 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-brand-soft flex items-center justify-center text-brand-purple flex-shrink-0">
                        <Icon size={20} />
                      </div>
                      <span className="text-gray-700 font-semibold text-sm md:text-base">{ind.text}</span>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-brand-purple/5 mb-24 max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-serif text-center text-brand-purple mb-10">
            Como funciona o atendimento?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {steps.slice(0, 3).map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-brand-soft/20 rounded-2xl">
                  <CheckCircle2 className="text-brand-green flex-shrink-0 mt-0.5" size={22} />
                  <span className="text-gray-700 font-medium text-sm md:text-base">{step}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {steps.slice(3).map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-brand-soft/20 rounded-2xl">
                  <CheckCircle2 className="text-brand-green flex-shrink-0 mt-0.5" size={22} />
                  <span className="text-gray-700 font-medium text-sm md:text-base">{step}</span>
                </div>
              ))}
              <div className="p-4 bg-brand-warm-light/20 rounded-2xl border border-brand-warm/15 text-center">
                <span className="text-brand-purple font-bold text-xs uppercase tracking-widest block mb-1">Dica</span>
                <span className="text-gray-600 text-xs font-semibold">Tudo é planejado conforme o ritmo de cada estudante.</span>
              </div>
            </div>
          </div>
        </div>

        {/* About the professional */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-24">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-brand-purple/10 shadow-2xl bg-white">
              <img 
                src="/img/claudia.png" 
                alt="Cláudia - Psicopedagoga" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-3xl font-serif text-brand-purple">Equipe Afeto</h3>
            <p className="text-gray-600 leading-relaxed">
              No Núcleo Afeto, o atendimento psicopedagógico é conduzido por especialistas com pós-graduação e sólida experiência em psicopedagogia clínica e institucional. 
            </p>
            <p className="text-gray-600 leading-relaxed">
              O foco principal está em construir uma ponte lúdica e de confiança com cada estudante, utilizando recursos e metodologias ativas que facilitam a leitura, a escrita, o raciocínio matemático e a auto-organização de estudos, sempre em constante diálogo com a família e com a escola do aluno.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20 max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-serif text-center text-brand-purple mb-12">
            Depoimentos de Famílias
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-brand-purple/5 flex flex-col justify-between"
              >
                <p className="text-gray-600 leading-relaxed italic mb-6">
                  "{test.text}"
                </p>
                <div>
                  <h5 className="font-bold text-gray-900">{test.parent}</h5>
                  <p className="text-xs text-brand-warm font-semibold">{test.child}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-brand-purple text-white rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -mr-32 -mt-32" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h4 className="text-2xl md:text-3xl font-serif mb-4 leading-snug">
              Descubra como podemos ajudar seu filho a aprender com mais confiança e tranquilidade.
            </h4>
            <p className="text-white/80 mb-8 text-sm md:text-base font-sans">
              Entre em contato conosco para agendar uma conversa inicial e realizar uma avaliação psicopedagógica completa.
            </p>
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-green hover:bg-brand-green-dark text-white rounded-2xl font-bold shadow-lg shadow-black/20 transition-all text-base md:text-lg"
            >
              <MessageCircle size={22} />
              <span>Agendar Avaliação</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PsicopedagogiaSection;
