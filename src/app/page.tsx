import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section 
        id="inicio" 
        className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
      >
        <HeroBackground overlayOpacity={0.3} />
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl px-6 w-full">
          <span className="mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-sm font-semibold tracking-wide animate-fade-in">
            Psicopedagogia & Psicologia Especializada
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] [text-shadow:_0_4px_12px_rgba(0,0,0,0.5)]">
            Acolhimento para um <br />
            aprendizado pleno
          </h1>
          <p className="mt-8 text-lg md:text-xl text-gray-200 max-w-2xl font-light leading-relaxed backdrop-blur-sm p-4 rounded-xl text-center">
            No Núcleo Afeto, transformamos desafios em conquistas através de um olhar singular e humano.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
            <Link href="/#servicos" className="px-10 py-4 rounded-full bg-amber-500 text-slate-900 font-bold hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transform hover:-translate-y-1">
              Nossos Serviços
            </Link>
            <a href="https://wa.me/5535991957579" target="_blank" rel="noopener noreferrer" className="px-10 py-4 rounded-full bg-green-600 text-white font-bold hover:bg-green-500 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.258-.041.405.314.159.386.541 1.32.589 1.42.048.1.08.217.014.346-.067.13-.1.217-.199.332-.1.115-.207.258-.299.346-.104.102-.213.213-.091.421.122.208.544.899 1.168 1.454.802.712 1.474.933 1.683 1.023.21.089.332.074.457-.069.125-.143.541-.63.685-.845.145-.215.29-.18.491-.105.202.075 1.282.604 1.503.715s.367.166.421.258c.054.093.054.54-.09.945z"/>
              </svg>
              Contato
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Sobre Nós Section */}
      <section 
        id="sobre" 
        className="relative w-full py-32 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-amber-600 font-semibold tracking-wider uppercase text-sm">Quem Somos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2 mb-6">Sobre o Afeto</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Nascemos do desejo de oferecer um olhar singular para cada indivíduo. Acreditamos que a aprendizagem ocorre de forma muito mais efetiva quando é mediada pelo afeto e pela compreensão das particularidades de cada um.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Nossa equipe interdisciplinar utiliza as melhores práticas da neurociência, psicologia e pedagogia para auxiliar no diagnóstico, intervenção e acompanhamento escolar e comportamental.
            </p>
            <div className="mt-8 flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">500+</div>
                <div className="text-slate-500">Alunos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">10+</div>
                <div className="text-slate-500">Anos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">98%</div>
                <div className="text-slate-500">Satisfação</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 bg-amber-400/20 rounded-3xl transform rotate-3" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="/img/background-home.jpg" alt="Criança aprendendo" className="w-full h-80 md:h-96 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section 
        id="servicos" 
        className="relative w-full py-32 px-4 sm:px-6 lg:px-8 bg-slate-50"
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-xs">O que fazemos</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3">Como podemos ajudar?</h2>
            <p className="mt-5 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light">Serviços especializados para o desenvolvimento cognitivo e emocional.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 bg-amber-500 text-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/20">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors">Reforço Escolar</h3>
              <p className="text-slate-600 leading-relaxed">Ensino personalizado que visa não apenas a melhora das notas, mas também a recuperação da autoconfiança do aluno.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 bg-green-500 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-green-500/20">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-green-600 transition-colors">Alfabetização Lúdica</h3>
              <p className="text-slate-600 leading-relaxed">Estimulamos a consciência fonológica, vocabulário e coordenação motora de forma lúdica e prazerosa.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 bg-purple-500 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-purple-600 transition-colors">Apoio Psicológico</h3>
              <p className="text-slate-600 leading-relaxed">Acompanhamento terapêutico para ansiedade, TDAH, dislexia e neurodivergências.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section 
        id="planos" 
        className="relative w-full py-32 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold tracking-wider uppercase text-sm">Nossos Planos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">Escolha o plano ideal</h2>
            <p className="mt-4 text-lg text-slate-600"> Inversióne em seu desenvolvimento ou de seu filho.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-slate-100 hover:border-amber-400 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Plano Básico</h3>
              <p className="text-4xl font-bold text-amber-600 mb-2">R$ 297<span className="text-lg font-normal text-slate-500">/mês</span></p>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  1 sessão semanal (50min)
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Reforço escolar
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Relatório mensal
                </li>
              </ul>
              <a href="https://wa.me/5535991957579" target="_blank" rel="noopener noreferrer" className="block w-full py-3 rounded-full bg-slate-700 text-white font-medium text-center hover:bg-slate-800 transition-all">
                Escolher Plano
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-2xl border-2 border-amber-500 transform scale-105 relative">
              <div className="absolute top-0 right-0 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">MAIS POPULAR</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Plano Padrão</h3>
              <p className="text-4xl font-bold text-amber-600 mb-2">R$ 497<span className="text-lg font-normal text-slate-500">/mês</span></p>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  2 sessões semanais (50min)
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Reforço escolar
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Apoio psicológico
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Relatório quinzenal
                </li>
              </ul>
              <a href="https://wa.me/5535991957579" target="_blank" rel="noopener noreferrer" className="block w-full py-3 rounded-full bg-amber-500 text-slate-900 font-medium text-center hover:bg-amber-400 transition-all">
                Escolher Plano
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-slate-100 hover:border-amber-400 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Plano Completo</h3>
              <p className="text-4xl font-bold text-amber-600 mb-2">R$ 797<span className="text-lg font-normal text-slate-500">/mês</span></p>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  3 sessões semanais (50min)
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Reforço escolar intensivo
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Apoio psicológico
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Relatório semanal
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Atendimento prioritário
                </li>
              </ul>
              <a href="https://wa.me/5535991957579" target="_blank" rel="noopener noreferrer" className="block w-full py-3 rounded-full bg-slate-700 text-white font-medium text-center hover:bg-slate-800 transition-all">
                Escolher Plano
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="contato" 
        className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
        style={{ backgroundImage: 'url(/img/img1.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2d5a7d]/90 via-[#1e3a5f]/90 to-[#0d1f33]/95" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para iniciar essa jornada conosco?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Entre em contato pelo WhatsApp para agendar uma avaliação gratuita.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/5535991957579" target="_blank" rel="noopener noreferrer" className="px-10 py-4 rounded-full bg-green-600 text-white font-bold hover:bg-green-500 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.258-.041.405.314.159.386.541 1.32.589 1.42.048.1.08.217.014.346-.067.13-.1.217-.199.332-.1.115-.207.258-.299.346-.104.102-.213.213-.091.421.122.208.544.899 1.168 1.454.802.712 1.474.933 1.683 1.023.21.089.332.074.457-.069.125-.143.541-.63.685-.845.145-.215.29-.18.491-.105.202.075 1.282.604 1.503.715s.367.166.421.258c.054.093.054.54-.09.945z"/>
              </svg>
              Contato
            </a>
            <Link href="/downloads" className="px-10 py-4 rounded-full border-2 border-white/50 text-white font-semibold hover:bg-white/10 transition-all">
              Ver Downloads
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}