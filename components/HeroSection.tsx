'use client';

import React, { useState, useEffect } from 'react';
import { hero_font_styles, font_transition_interval } from '@/constants/fonts';

interface HeroSectionProps {
  textEnter: () => void;
  textLeave: () => void;
}

export default function HeroSection({ textEnter, textLeave }: HeroSectionProps) {
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStyleIndex((prev) => (prev + 1) % hero_font_styles.length);
    }, font_transition_interval);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center sticky top-0">
      {/* Background Text - Desktop: centered behind card */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        {hero_font_styles.map((style, index) => (
          <h1 
            key={`desktop-${style.label}`}
            className="absolute text-[11vw] md:text-[13vw] leading-none text-center hero-text-transition whitespace-nowrap"
            style={{
              fontFamily: style.font,
              color: style.color,
              opacity: currentStyleIndex === index ? 0.8 : 0,
              transform: currentStyleIndex === index ? 'scale(1)' : 'scale(0.95)',
              filter: 'blur(0px)',
              fontStyle: style.fontStyle || 'normal',
              fontWeight: style.fontWeight || 'normal'
            }}
          >
            PORTFOLIO
          </h1>
        ))}
      </div>
      <div className="z-20 relative flex flex-col items-center gap-0 md:gap-0">
          <div 
            className="bg-[#0a0a0a] px-8 py-6 md:px-12 md:py-10 flex flex-row items-center gap-8 transform transition-transform duration-500 hover:scale-105 shadow-2xl border border-white"
            onMouseEnter={textEnter} 
            onMouseLeave={textLeave}
          >
              <div className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-none pb-1">
                portfolio
              </div>
              <div className="h-12 md:h-20 w-[1px] bg-white"></div>
              <div className="flex flex-col items-start justify-center gap-1">
                  <h2 className="text-lg md:text-2xl font-semibold text-white leading-tight">
                    Arham Khan
                  </h2>
                  <p className="text-xs md:text-sm text-gray-400 font-normal leading-tight">
                    Creative Developer
                  </p>
              </div>
          </div>
          {/* Mobile: Transitioning text below card */}
          <div className="relative w-full flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden md:hidden -mt-2 h-[200px]">
            {hero_font_styles.map((style, index) => (
              <h1 
                key={`mobile-${style.label}`}
                className="absolute text-[15vw] leading-none text-center hero-text-transition whitespace-nowrap"
                style={{
                  fontFamily: style.font,
                  color: style.color,
                  opacity: currentStyleIndex === index ? 0.8 : 0,
                  transform: currentStyleIndex === index ? 'scale(1)' : 'scale(0.95)',
                  filter: 'blur(0px)',
                  fontStyle: style.fontStyle || 'normal',
                  fontWeight: style.fontWeight || 'normal'
                }}
              >
                PORTFOLIO
              </h1>
            ))}
          </div>
      </div>
      <div className="absolute bottom-6 left-6 md:left-12 z-20 text-sm">
          <div className="text-white mb-1">Working as</div>
          <div className="text-white font-semibold text-base md:text-lg">Full Stack Developer</div>
      </div>
      <div className="absolute bottom-6 right-6 md:right-12 z-20 text-sm text-white">
          <div>2025</div>
      </div>
    </section>
  );
}

