"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSitesUteisOpen, setIsSitesUteisOpen] = useState(false);
  const sitesUteisRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sitesUteisRef.current && !sitesUteisRef.current.contains(event.target as Node)) {
        setIsSitesUteisOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre Nós", href: "/#sobre" },
    { name: "Serviços", href: "/#servicos" },
  ];

  const sitesUteis = [
    { name: "Foco Ensina", href: "https://www.focoensina.com.br/downloads" },
    { name: "Psicosol", href: "https://psicosol.com/caldo-de-palavras/" },
    { name: "Coquinhos", href: "https://www.cokitos.com.pt/" },
    { name: "Escola Games", href: "http://www.escolagames.com.br/" },
    { name: "Ludo Educativo", href: "https://www.ludoeducativo.com.br/pt/" },
    { name: "Racha Cuca", href: "https://rachacuca.com.br/" },
  ];

  return (
    <header className="fixed w-full top-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 backdrop-blur-sm shadow-md z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <img src="/img/logo_afeto-03.jpg" alt="Afeto" className="w-12 h-12 rounded-full object-cover shadow-sm" />
              <span className="text-2xl font-bold text-white tracking-tight">Afeto</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-purple-200 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            <div className="relative" ref={sitesUteisRef}>
              <button
                onClick={() => setIsSitesUteisOpen(!isSitesUteisOpen)}
                className="text-white hover:text-purple-200 transition-colors font-medium flex items-center gap-1"
              >
                Sites Úteis
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isSitesUteisOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  {sitesUteis.map((site) => (
                    <a
                      key={site.name}
                      href={site.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsSitesUteisOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-purple-50 hover:text-afeto-purple transition-colors"
                    >
                      {site.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/area-do-cliente"
              className="bg-white text-purple-600 hover:bg-purple-100 px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Área do Cliente
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-afeto-purple focus:outline-none p-2"
              aria-label="Abrir menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:bg-afeto-purple/5 hover:text-afeto-purple block px-3 py-3 rounded-md font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <Link
                href="/area-do-cliente"
                onClick={() => setIsMenuOpen(false)}
                className="bg-afeto-orange text-white block px-3 py-3 rounded-lg font-medium text-center shadow-md w-full"
              >
                Área do Cliente
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
