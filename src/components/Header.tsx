"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSitesUteisOpen, setIsSitesUteisOpen] = useState(false);
  const sitesUteisRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { name: "Reforço", href: "/#reforco-detalhe" },
    { name: "Clínica", href: "/#neuro-detalhe" },
    { name: "O Espaço", href: "/#espaco" },
  ];

  const sitesUteis = [
    { name: "Foco Ensina", href: "https://www.focoensina.com.br/downloads" },
    { name: "Psicosol", href: "https://psicosol.com/caldo-de-palavras/" },
    { name: "Escola Games", href: "http://www.escolagames.com.br/" },
    { name: "Ludo Educativo", href: "https://www.ludoeducativo.com.br/pt/" },
    { name: "Racha Cuca", href: "https://rachacuca.com.br/" },
  ];

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-500 py-4",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-lg py-3" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-purple shadow-sm">
                <img src="/img/logo_afeto-03.jpg" alt="Núcleo Afeto" className="w-full h-full object-cover" />
              </div>
              <span className={cn(
                "text-2xl font-serif font-bold tracking-tight transition-colors",
                isScrolled ? "text-brand-purple" : "text-white"
              )}>
                Afeto
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-sans font-bold text-sm uppercase tracking-wider transition-colors hover:text-brand-warm",
                  isScrolled ? "text-gray-600" : "text-white/90"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Sites Úteis Dropdown */}
            <div className="relative" ref={sitesUteisRef}>
              <button
                onClick={() => setIsSitesUteisOpen(!isSitesUteisOpen)}
                className={cn(
                  "font-sans font-bold text-sm uppercase tracking-wider transition-colors flex items-center gap-1 hover:text-brand-warm",
                  isScrolled ? "text-gray-600" : "text-white/90"
                )}
              >
                Recursos
                <ChevronDown size={14} className={cn("transition-transform", isSitesUteisOpen && "rotate-180")} />
              </button>
              {isSitesUteisOpen && (
                <div className="absolute top-full right-0 mt-4 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="px-4 py-2 mb-2 border-b border-gray-50">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sites Úteis</span>
                  </div>
                  {sitesUteis.map((site) => (
                    <a
                      key={site.name}
                      href={site.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsSitesUteisOpen(false)}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-brand-soft hover:text-brand-purple transition-colors"
                    >
                      {site.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="https://wa.me/5535991957579"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "px-6 py-2.5 rounded-full font-bold transition-all shadow-md flex items-center gap-2",
                "bg-brand-green text-white hover:bg-brand-green-dark shadow-brand-green/20"
              )}
            >
              <MessageCircle size={18} />
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "p-2 rounded-xl transition-colors",
                isScrolled ? "text-brand-purple bg-brand-soft" : "text-white bg-white/10"
              )}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[88px] bg-white z-40 p-6 animate-in slide-in-from-right duration-300">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-serif font-bold text-gray-900"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-gray-100 my-2" />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Recursos Externos</span>
              {sitesUteis.map((site) => (
                <a
                  key={site.name}
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-gray-600"
                >
                  {site.name}
                </a>
              ))}
            </div>
            <a
              href="https://wa.me/5535991957579"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 bg-brand-green text-white py-4 rounded-2xl font-bold text-center shadow-lg shadow-brand-green/20 hover:bg-brand-green-dark transition-all"
            >
              Falar pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

