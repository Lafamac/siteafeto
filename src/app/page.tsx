import React from "react";
import Hero from "@/components/landing/Hero";
import ProblemSolution from "@/components/landing/ProblemSolution";
import ServiceSection from "@/components/landing/ServiceSection";
import PsicopedagogiaSection from "@/components/landing/PsicopedagogiaSection";
import SpaceGallery from "@/components/landing/SpaceGallery";
import TeamSlider from "@/components/landing/TeamSlider";
import PlansSection from "@/components/landing/PlansSection";
import CTASection from "@/components/landing/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. PROBLEM + SOLUTION SECTION */}
      <ProblemSolution />

      {/* 3. REFORÇO ESCOLAR SECTION */}
      <ServiceSection
        id="reforco-detalhe"
        title="REFORÇO ESCOLAR: Transformando a dificuldade em autonomia e confiança."
        subtitle="A hora de estudar não precisa ser o momento mais difícil do dia. Ver o seu filho frustrado por não acompanhar a escola dói. A gente sabe que a rotina é corrida e nem sempre você tem o tempo ou as ferramentas adequadas para ajudar nas tarefas. Seja por um obstáculo na matéria ou por uma neurodivergência, a criança que não entende o conteúdo acaba perdendo a vontade de tentar."
        bullets={[
          "Apoio Prático e Direto: Colocamos a matéria em dia, auxiliamos nos deveres de casa e preparamos a criança para as provas sem ansiedade.",
          "Acompanhamento Personalizado: Descobrimos exatamente como o seu filho aprende melhor. Usamos as facilidades dele para destravar as dificuldades.",
          "Aprender Brincando: Através do lúdico e de muito afeto, a criança deixa de ver a escola como um 'bicho-papão' e recupera a alegria de dizer: 'eu consigo fazer'."
        ]}
        transformation="A transformação: Seu filho ganha independência escolar e você ganha a paz de saber que ele está sendo cuidado por quem entende."
        ctaText="Eu quero reforço escolar"
        ctaLink="https://wa.me/5535991957579?text=Vi%20o%20site%20e%20desejo%20refor%C3%A7o%20escolar"
        imageUrl="/img/reforco.png"
        variant="warm"
      />

      {/* 4. ATENDIMENTO PSICOPEDAGÓGICO SECTION */}
      <PsicopedagogiaSection />

      {/* 5. SPACE SECTION */}
      <SpaceGallery />

      {/* 6. TEAM SECTION */}
      <TeamSlider />

      {/* 7. PLANS SECTION */}
      <PlansSection />

      {/* 8. FINAL CTA (MOST IMPORTANT) */}
      <CTASection />
    </div>
  );
}