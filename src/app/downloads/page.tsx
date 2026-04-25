import Link from "next/link";

export default function Downloads() {
  const materiais = [
    {
      titulo: "Guia de Atividades para Férias",
      descricao: "Diversas atividades lúdicas para brincar e aprender durante as férias.",
      tipo: "PDF",
      tamanho: "2.5 MB",
      link: "#",
    },
    {
      titulo: "Cartilha de Alfabetização",
      descricao: "Material de apoio para pais que desejam auxiliar no processo de alfabetização.",
      tipo: "PDF",
      tamanho: "1.8 MB",
      link: "#",
    },
    {
      titulo: "Dicas para Estudos",
      descricao: "Técnicas de estudo para melhorar a concentração e aprendizado.",
      tipo: "PDF",
      tamanho: "1.2 MB",
      link: "#",
    },
    {
      titulo: "Jogos Educativos",
      descricao: "-collection de jogos para desenvolver habilidades cognitivas.",
      tipo: "PDF",
      tamanho: "3.0 MB",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Materiais Gratuitos</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Baixe nossos materiais exclusivos para auxiliar no desenvolvimento e aprendizado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {materiais.map((material, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{material.titulo}</h3>
                  <p className="text-gray-600 mb-4">{material.descricao}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">{material.tipo}</span>
                    <span>{material.tamanho}</span>
                  </div>
                </div>
                <a
                  href={material.link}
                  className="ml-4 p-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors"
                  aria-label={`Baixar ${material.titulo}`}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para Início
          </Link>
        </div>
      </div>
    </div>
  );
}