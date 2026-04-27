"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 overflow-hidden relative">
      {/* Decorative shape */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-soft rounded-full blur-3xl -ml-32 -mt-32 opacity-50" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-purple/20">
                <img src="/img/logo_afeto-03.jpg" alt="Núcleo Afeto" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-serif font-bold text-brand-purple tracking-tight">Afeto</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Transformando histórias através do aprendizado e do cuidado psicológico especializado. Há mais de 10 anos sendo referência em Lavras/MG.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-soft flex items-center justify-center text-brand-purple hover:bg-brand-purple hover:text-white transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.247 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.061 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.247-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.061-2.633-.333-3.608-1.308-.975-.975-1.247-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.061-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.247 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073s3.667-.014 4.947-.072c4.357-.2 6.78-2.618 6.98-6.98.058-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.073-4.948-.073z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-soft flex items-center justify-center text-brand-purple hover:bg-brand-purple hover:text-white transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Navegação</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-500 hover:text-brand-purple transition-colors text-sm font-medium">Início</Link></li>
              <li><Link href="/#reforco-detalhe" className="text-gray-500 hover:text-brand-purple transition-colors text-sm font-medium">Reforço Escolar</Link></li>
              <li><Link href="/#neuro-detalhe" className="text-gray-500 hover:text-brand-purple transition-colors text-sm font-medium">Atendimento Neuro</Link></li>
              <li><Link href="/#espaco" className="text-gray-500 hover:text-brand-purple transition-colors text-sm font-medium">O Nosso Espaço</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                <Phone size={18} className="text-brand-warm" />
                Reforço: (35) 99195-7579
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                <Phone size={18} className="text-brand-warm" />
                Clínica: (35) 99169-6527
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                <Mail size={18} className="text-brand-warm" />
                contato@nucleoafeto.com.br
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-500 font-medium">
                <MapPin size={18} className="text-brand-warm flex-shrink-0" />
                Rua Gilberto Vilela, 74 - Bairro Centenário - Lavras, MG
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-brand-soft p-6 rounded-2xl border border-brand-purple/10">
            <h4 className="font-bold text-brand-purple mb-4 text-sm uppercase tracking-widest">Agende uma conversa</h4>
            <p className="text-xs text-gray-600 mb-6 font-medium">Tire suas dúvidas agora mesmo pelo WhatsApp.</p>
            <a 
              href="https://wa.me/5535991957579?text=Vi%20o%20site%20e%20desejo%20conversar%20sobre%20os%20servi%C3%A7os" 
              className="flex items-center justify-center gap-2 w-full py-3 bg-brand-green text-white rounded-xl font-bold text-sm shadow-lg shadow-brand-green/20 hover:bg-brand-green-dark transition-all"
            >
              <MessageCircle size={18} />
              Iniciar Chat
            </a>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
          <p>© {currentYear} Núcleo Afeto. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-purple">Políticas de Privacidade</a>
            <a href="#" className="hover:text-brand-purple">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

