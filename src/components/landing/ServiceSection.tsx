"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ServiceSectionProps {
  id: string;
  title: string;
  subtitle: string;
  bullets: string[];
  transformation: string;
  ctaText: string;
  ctaLink: string;
  reverse?: boolean;
  variant: "warm" | "purple";
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  id,
  title,
  subtitle,
  bullets,
  transformation,
  ctaText,
  ctaLink,
  reverse = false,
  variant,
}) => {
  const isWarm = variant === "warm";

  return (
    <section id={id} className="py-24 overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className={cn(
          "flex flex-col lg:flex-row items-center gap-16",
          reverse && "lg:flex-row-reverse"
        )}>
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={cn(
                "aspect-[4/3] rounded-2xl relative z-10 overflow-hidden shadow-2xl",
                isWarm ? "bg-brand-warm-light/20" : "bg-brand-purple-light/20"
              )}
            >
              <div className={cn(
                "absolute inset-0 opacity-40 mix-blend-multiply",
                isWarm ? "bg-brand-warm" : "bg-brand-purple"
              )} />
              {/* Placeholder pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-4 border-white/30 animate-ping" />
              </div>
            </motion.div>
            
            {/* Decorative background shape */}
            <div className={cn(
              "absolute -top-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-30",
              isWarm ? "bg-brand-warm" : "bg-brand-purple"
            )} />
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: reverse ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={cn(
                "text-sm font-bold uppercase tracking-widest mb-4",
                isWarm ? "text-brand-warm" : "text-brand-purple"
              )}>
                {title.split(":")[0]}
              </h2>
              <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 leading-tight">
                {title.split(":")[1] || title}
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed italic">
                {subtitle}
              </p>

              <ul className="space-y-4 mb-10">
                {bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className={cn(
                      "mt-1 flex-shrink-0",
                      isWarm ? "text-brand-warm" : "text-brand-purple"
                    )} size={22} />
                    <span className="text-gray-700 font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className={cn(
                "p-6 rounded-2xl mb-10 border-l-4",
                isWarm ? "bg-brand-warm-light/30 border-brand-warm" : "bg-brand-purple-light/30 border-brand-purple"
              )}>
                <p className="text-lg text-gray-800 font-bold leading-snug">
                  {transformation}
                </p>
              </div>

              <a
                href={ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-green text-white rounded-xl font-bold transition-all shadow-lg hover:bg-brand-green-dark hover:shadow-xl shadow-brand-green/20"
              >
                <MessageCircle size={22} />
                {ctaText}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
