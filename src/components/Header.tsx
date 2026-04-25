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
    { name: "Planos", href: "/#planos" },
  ];

  const sitesUteis = [
    { name: "Foco Ensina", href: "https://www.focoensina.com.br/downloads" },
    { name: "Psicosol", href: "https://psicosol.com/caldo-de-palavras/" },
    { name: "Escola Games", href: "http://www.escolagames.com.br/" },
    { name: "Ludo Educativo", href: "https://www.ludoeducativo.com.br/pt/" },
    { name: "Racha Cuca", href: "https://rachacuca.com.br/" },
  ];

  return (
    <header className="fixed w-full top-0 bg-[#2d5a7d]/95 backdrop-blur-md shadow-md z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <img src="/img/logo_afeto-03.jpg" alt="Afeto" className="w-14 h-14 rounded-full object-cover shadow-sm" />
              <span className="text-2xl font-bold text-white tracking-tight">Afeto</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-gray-300 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            <div className="relative" ref={sitesUteisRef}>
              <button
                onClick={() => setIsSitesUteisOpen(!isSitesUteisOpen)}
                className="text-white hover:text-gray-300 transition-colors font-medium flex items-center gap-1"
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
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-afeto-purple transition-colors"
                    >
                      {site.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/downloads"
              className="text-white hover:text-gray-300 transition-colors font-medium"
            >
              Downloads
            </Link>
            <a
              href="https://wa.me/5535991957579"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.258-.041.405.314.159.386.541 1.32.589 1.42.048.1.08.217.014.346-.067.13-.1.217-.199.332-.1.115-.207.258-.299.346-.104.102-.213.213-.091.421.122.208.544.899 1.168 1.454.802.712 1.474.933 1.683 1.023.21.089.332.074.457-.069.125-.143.541-.63.685-.845.145-.215.29-.18.491-.105.202.075 1.282.604 1.503.715s.367.166.421.258c.054.093.054.54-.09.945z"/>
              </svg>
              Contato
            </a>
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
                className="text-gray-600 hover:bg-gray-50 hover:text-afeto-purple block px-3 py-3 rounded-md font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/downloads"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:bg-gray-50 block px-3 py-3 rounded-md font-medium transition-colors"
            >
              Downloads
            </Link>
            <div className="pt-4 mt-2 border-t border-gray-100">
              <a
                href="https://wa.me/5535991957579"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white flex items-center justify-center gap-2 px-3 py-3 rounded-lg font-bold text-center shadow-md w-full"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.258-.041.405.314.159.386.541 1.32.589 1.42.048.1.08.217.014.346-.067.13-.1.217-.199.332-.1.115-.207.258-.299.346-.104.102-.213.213-.091.421.122.208.544.899 1.168 1.454.802.712 1.474.933 1.683 1.023.21.089.332.074.457-.069.125-.143.541-.63.685-.845.145-.215.29-.18.491-.105.202.075 1.282.604 1.503.715s.367.166.421.258c.054.093.054.54-.09.945z"/>
                </svg>
                Contato
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
