import React from "react";
import Hero from "@/components/landing/Hero";
import ProblemSolution from "@/components/landing/ProblemSolution";
import ServiceSection from "@/components/landing/ServiceSection";
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
          "100% Individualizado: Descobrimos exatamente como o seu filho aprende melhor. Usamos as facilidades dele para destravar as dificuldades.",
          "Aprender Brincando: Através do lúdico e de muito afeto, a criança deixa de ver a escola como um 'bicho-papão' e recupera a alegria de dizer: 'eu consigo fazer'."
        ]}
        transformation="A transformação: Seu filho ganha independência escolar e você ganha a paz de saber que ele está sendo cuidado por quem entende."
        ctaText="Eu quero reforço escolar"
        ctaLink="https://wa.me/5535991957579?text=Vi%20o%20site%20e%20desejo%20refor%C3%A7o%20escolar"
        variant="warm"
      />

      {/* 4. ATENDIMENTO NEUROPSICOLÓGICO SECTION */}
      <ServiceSection
        id="neuro-detalhe"
        title="ATENDIMENTO NEUROPSICOLÓGICO: Entenda sua mente, encontre respostas e viva mais leve."
        subtitle="Você não precisa carregar o peso das emoções sozinho. Lidar com a ansiedade, a exaustão ou a suspeita de uma neurodivergência pode ser uma jornada solitária e confusa. Muitas vezes, sofremos por não entender a origem dos nossos próprios pensamentos e dores, ou não sabemos como ajudar nossos filhos a processarem o que sentem."
        bullets={[
          "Terapia Psicológica: Um espaço de escuta ativa e acolhimento. Ajudamos você a entender a origem das suas emoções, medos e reações, construindo ferramentas práticas para lidar com o dia a dia.",
          "Avaliação Neuropsicológica: Para quem busca respostas concretas. Realizamos metodologias e baterias de testes precisas para identificação e laudo de neurodivergências (como TDAH, Autismo, Ansiedade, entre outros)."
        ]}
        transformation="A transformação: Sair do escuro. É trocar a angústia pelo autoconhecimento e o medo da dúvida por um diagnóstico que traz alívio e direção."
        ctaText="Eu quero atendimento psicológico"
        ctaLink="https://wa.me/5535991696527?text=Vi%20o%20site%20e%20desejo%20atendimento%20psicol%C3%B3gico"
        variant="purple"
        reverse
      />

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