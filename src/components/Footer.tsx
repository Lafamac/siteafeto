"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Footer() {
  const { data: session } = useSession();

  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <img src="/img/logo_afeto-03.jpg" alt="Afeto" className="w-10 h-10 rounded-full object-cover shadow-sm" />
              <span className="text-xl font-bold text-white">Afeto</span>
            </div>
            <p className="mt-4 text-sm text-purple-100 leading-relaxed">
              Núcleo de Aprendizagem e Psicologia. Um espaço dedicado ao desenvolvimento humano com acolhimento e profissionalismo.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-purple-100 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="text-sm text-purple-100 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/#servicos" className="text-sm text-purple-100 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/area-do-cliente" className="text-sm text-purple-100 hover:text-white transition-colors">
                  Área do Cliente
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Sites Úteis</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.focoensina.com.br/downloads" target="_blank" rel="noopener noreferrer" className="text-sm text-purple-100 hover:text-white transition-colors">
                  Foco Ensina
                </a>
              </li>
              <li>
                <a href="https://psicosol.com/caldo-de-palavras/" target="_blank" rel="noopener noreferrer" className="text-sm text-purple-100 hover:text-white transition-colors">
                  Psicosol
                </a>
              </li>
              <li>
                <a href="https://www.cokitos.com.pt/" target="_blank" rel="noopener noreferrer" className="text-sm text-purple-100 hover:text-white transition-colors">
                  Coquinhos
                </a>
              </li>
              <li>
                <a href="http://www.escolagames.com.br/" target="_blank" rel="noopener noreferrer" className="text-sm text-purple-100 hover:text-white transition-colors">
                  Escola Games
                </a>
              </li>
              <li>
                <a href="https://www.ludoeducativo.com.br/pt/" target="_blank" rel="noopener noreferrer" className="text-sm text-purple-100 hover:text-white transition-colors">
                  Ludo Educativo
                </a>
              </li>
              <li>
                <a href="https://rachacuca.com.br/" target="_blank" rel="noopener noreferrer" className="text-sm text-purple-100 hover:text-white transition-colors">
                  Racha Cuca
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="text-sm text-purple-100 flex items-center gap-2">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contato@afeto.com.br
              </li>
              <li className="text-sm text-purple-100 flex items-center gap-2">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (11) 99999-9999
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-purple-200">
            &copy; {new Date().getFullYear()} Afeto - Núcleo de Aprendizagem e Psicologia. Todos os direitos reservados.
          </p>
          {session && (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-sm font-medium text-white hover:text-purple-200 transition-colors"
            >
              Sair da Conta
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}
