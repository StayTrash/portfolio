'use client';

import React from 'react';
import { useCursor } from '@/hooks/useCursor';
import GlobalStyles from '@/components/GlobalStyles';
import Cursor from '@/components/Cursor';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import HomeGrid from '@/components/HomeGrid';
import DitherOverlay from '@/components/DitherOverlay';

export default function Home() {
  const { variants, cursorVariant, textEnter, textLeave, redTextEnter, redTextLeave } = useCursor();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans relative cursor-none selection:bg-white selection:text-black overflow-x-hidden">
      <GlobalStyles />
      <Cursor variants={variants} cursorVariant={cursorVariant} />
      <Navigation textEnter={textEnter} textLeave={textLeave} />
      <HeroSection textEnter={textEnter} textLeave={textLeave} />
      <HomeGrid textEnter={textEnter} textLeave={textLeave} redTextEnter={redTextEnter} redTextLeave={redTextLeave} />
      <DitherOverlay />
    </div>
  );
}
