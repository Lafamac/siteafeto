import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AreaDoCliente() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const downloads = [
    { title: "Atividades Psicomotoras", icon: "🖍️" },
    { title: "Jogos de Análise Fonológica", desc: "ex: Bingo dos Sons Iniciais", icon: "🎲" },
    { title: "Jogos para Dislexia", desc: "ex: Detetive Pibo Duque", icon: "🔎" },
  ];

  const plataformas = [
    { title: "Foco Ensina", link: "https://www.focoensina.com.br/downloads", desc: "Atividades de neuroeducação para trabalhar memória visual, planejamento executivo, atenção e lógica." },
    { title: "Psicosol", link: "https://psicosol.com/caldo-de-palavras/", desc: "Jogos como o Caldo de Palavras para alfabetização lúdica, ampliando o vocabulário." },
    { title: "Coquinhos", link: "https://www.cokitos.com.pt/", desc: "Jogos educativos online e gratuitos organizados por faixa etária." },
    { title: "Escola Games", link: "http://www.escolagames.com.br/", desc: "Plataforma gratuita focada nas habilidades da BNCC, contendo jogos de matemática e português." },
    { title: "Ludo Educativo", link: "https://www.ludoeducativo.com.br/pt/", desc: "Portal de jogos focados em disciplinas da educação básica." },
    { title: "Racha Cuca", link: "https://rachacuca.com.br/", desc: "Excelente para o estímulo do raciocínio lógico com quebra-cabeças e testes." },
  ];

  const jogosFisicos = [
    { title: "Torre Maluca", desc: "Ideal para trabalhar percepção lógica, planejamento e matemática básica.", icon: "🗼" },
    { title: "Pega Peixe", desc: "Excelente ferramenta lúdica para treinar o controle inibitório, a paciência e a perseverança.", icon: "🎣" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Banner de Boas-Vindas */}
      <div className="bg-gradient-to-r from-afeto-purple to-afeto-blue py-16 px-4 sm:px-6 lg:px-8 text-white shadow-inner">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Olá, {session?.user?.name || "Cliente"}!
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
            Um espaço dedicado a apoiar o Reforço Escolar (oferecendo ensino personalizado e recuperando a autoconfiança) e a Alfabetização (estimulando a consciência fonológica, vocabulário e coordenação motora fina de forma lúdica).
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        
        {/* Seção A: Downloads */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-afeto-green/20 text-afeto-green flex items-center justify-center text-sm">A</span>
            Downloads de Aulas e Jogos em PDF
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  {item.desc && <p className="text-sm text-gray-500 mt-2">{item.desc}</p>}
                </div>
                <button className="mt-6 flex items-center justify-center gap-2 w-full bg-gray-50 hover:bg-afeto-green hover:text-white text-gray-700 font-medium py-2 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Baixar PDF
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Seção B: Vídeos */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-afeto-red/20 text-afeto-red flex items-center justify-center text-sm">B</span>
            Vídeos Educativos e Orientação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-video bg-gray-200 flex items-center justify-center relative group cursor-pointer">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-afeto-red ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 line-clamp-1">Título do Vídeo Educativo {item}</h3>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">Breve descrição sobre o conteúdo deste vídeo e como ele pode auxiliar no desenvolvimento.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seção C: Plataformas e Jogos */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-afeto-blue/20 text-afeto-blue flex items-center justify-center text-sm">C</span>
            Plataformas e Jogos Educativos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plataformas.map((plat, idx) => (
              <a key={idx} href={plat.link} target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-afeto-blue/50 transition-all group flex flex-col h-full">
                <h3 className="text-lg font-bold text-afeto-blue group-hover:text-blue-700 flex items-center justify-between">
                  {plat.title}
                  <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </h3>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed flex-grow">{plat.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Seção D: Jogos Físicos */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-afeto-orange/20 text-afeto-orange flex items-center justify-center text-sm">D</span>
            Dicas de Jogos Físicos para Família
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {jogosFisicos.map((jogo, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-afeto-orange/10 flex items-start gap-4">
                <div className="text-4xl bg-orange-50 p-3 rounded-xl">{jogo.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{jogo.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">{jogo.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
