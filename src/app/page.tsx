import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section (Início) */}
      <section id="inicio" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center bg-gradient-to-br from-purple-100 via-purple-50 to-blue-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/img/background-home.jpg')] bg-cover bg-center opacity-20" />
        </div>
        <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-afeto-purple tracking-tight max-w-4xl leading-tight text-center">
          Acolhimento e desenvolvimento para um <span className="text-afeto-blue">aprendizado pleno</span>
        </h1>
        <p className="mt-6 text-xl text-gray-800 max-w-2xl font-medium text-center">
          O Núcleo Afeto é um espaço dedicado a transformar desafios em conquistas através da psicopedagogia e da psicologia, focando no desenvolvimento humano de forma lúdica e respeitosa.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/#servicos" className="px-8 py-3 rounded-full bg-afeto-purple text-white font-medium hover:bg-purple-700 transition-all shadow-md">
            Conheça nossos serviços
          </Link>
          <Link href="/login" className="px-8 py-3 rounded-full border-2 border-gray-200 text-gray-700 font-medium hover:border-afeto-blue hover:text-afeto-blue transition-all bg-white">
            Área do Cliente
          </Link>
        </div>
        </div>
      </section>

      {/* Sobre Nós Section */}
      <section id="sobre" className="w-full py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100">
        <div className="order-2 md:order-1 relative h-96 rounded-3xl overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center border border-gray-200">
          <img src="/img/background-home.jpg" alt="Criança aprendendo" className="w-full h-full object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold text-purple-700 mb-6">Sobre o Afeto</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Nascemos do desejo de oferecer um olhar singular para cada indivíduo. Acreditamos que a aprendizagem ocorre de forma muito mais efetiva quando é mediada pelo afeto e pela compreensão das particularidades de cada um.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Nossa equipe interdisciplinar utiliza as melhores práticas da neurociência, psicologia e pedagogia para auxiliar no diagnóstico, intervenção e acompanhamento escolar e comportamental.
          </p>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="w-full bg-gradient-to-b from-purple-100 to-blue-100 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-purple-700">Como podemos ajudar?</h2>
            <p className="mt-4 text-lg text-gray-700">Serviços especializados para o desenvolvimento cognitivo e emocional.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white/80 p-8 rounded-2xl shadow-md border border-purple-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-afeto-green/10 text-afeto-green rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reforço Escolar</h3>
              <p className="text-gray-600 leading-relaxed">Ensino personalizado que visa não apenas a melhora das notas, mas também a recuperação da autoconfiança do aluno no processo de aprendizagem.</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white/80 p-8 rounded-2xl shadow-md border border-purple-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-afeto-orange/10 text-afeto-orange rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Alfabetização Lúdica</h3>
              <p className="text-gray-600 leading-relaxed">Estimulamos a consciência fonológica, vocabulário e a coordenação motora de forma lúdica, tornando o aprendizado prazeroso.</p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white/80 p-8 rounded-2xl shadow-md border border-purple-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-afeto-blue/10 text-afeto-blue rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Apoio Psicológico</h3>
              <p className="text-gray-600 leading-relaxed">Acompanhamento terapêutico voltado para o bem-estar emocional, ajudando no manejo da ansiedade, TDAH, dislexia e neurodivergências.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="w-full bg-gradient-to-r from-afeto-purple to-afeto-blue py-20 px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Pronto para iniciar essa jornada conosco?</h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Entre em contato para agendar uma avaliação ou acesse a Área do Cliente para conferir nossos materiais exclusivos.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/login" className="px-8 py-3 rounded-full bg-white text-afeto-purple font-medium hover:bg-gray-100 transition-all shadow-lg">
            Acessar Área do Cliente
          </Link>
          <a href="mailto:contato@afeto.com.br" className="px-8 py-3 rounded-full border-2 border-white/30 text-white font-medium hover:bg-white/10 transition-all">
            Fale Conosco
          </a>
        </div>
      </section>
    </div>
  );
}
