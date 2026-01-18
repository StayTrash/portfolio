'use client';

import React, { useState, useEffect } from 'react';
import { hero_font_styles, font_transition_interval } from '@/constants/fonts';
import { role_variations } from '@/constants/data';

interface HeroSectionProps {
  textEnter: () => void;
  textLeave: () => void;
}

export default function HeroSection({ textEnter, textLeave }: HeroSectionProps) {
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayRole, setDisplayRole] = useState(role_variations[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStyleIndex((prev) => (prev + 1) % hero_font_styles.length);
    }, font_transition_interval);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        const nextIndex = (currentRoleIndex + 1) % role_variations.length;
        setDisplayRole(role_variations[nextIndex]);
        setCurrentRoleIndex(nextIndex);
        setTimeout(() => {
          setIsAnimating(false);
        }, 50);
      }, 400);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, [currentRoleIndex]);

  return (
    <section className="relative w-full h-screen min-h-screen flex flex-col items-center justify-center sticky top-0 overflow-hidden">
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
            StayTrash
          </h1>
        ))}
      </div>
      <div className="z-20 relative flex flex-col items-center gap-0 md:gap-0 px-4">
          <div 
            className="bg-[#0a0a0a] px-6 py-5 md:px-12 md:py-10 flex flex-row items-center gap-4 md:gap-8 transform transition-transform duration-500 md:hover:scale-105 shadow-2xl border border-white w-full max-w-[90vw] md:max-w-none"
            onMouseEnter={textEnter} 
            onMouseLeave={textLeave}
          >
              <div className="text-3xl md:text-7xl font-bold tracking-tight text-white leading-none pb-1">
                portfolio
              </div>
              <div className="h-10 md:h-20 w-[1px] bg-white flex-shrink-0"></div>
              <div className="flex flex-col items-start justify-center gap-1 min-w-0">
                  <h2 className="text-base md:text-2xl font-semibold text-white leading-tight truncate w-full">
                    Shubham Kumar
                  </h2>
                  <div className="relative h-[14px] md:h-[20px] overflow-hidden">
                    <p 
                      className={`text-[10px] md:text-sm text-white-400 font-normal leading-tight whitespace-nowrap transition-all duration-500 ease-in-out ${
                        isAnimating 
                          ? 'opacity-0 -translate-y-2 scale-95' 
                          : 'opacity-100 translate-y-0 scale-100'
                      }`}
                    >
                      {displayRole}
                    </p>
                  </div>
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
                StayTrash
              </h1>
            ))}
          </div>
      </div>
      {/* Mobile: Bottom texts positioned at bottom of viewport */}
      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-12 z-20 text-xs md:text-sm">
          <div className="text-white mb-1 text-[10px] md:text-sm">Working as</div>
          <div className="text-white font-semibold text-sm md:text-lg">Full Stack Developer</div>
      </div>
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-12 z-20 text-xs md:text-sm text-white">
          <div>2025</div>
      </div>
    </section>
  );
}
