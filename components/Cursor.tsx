'use client';

import React from 'react';
import { CursorVariants } from '@/hooks/useCursor';

interface CursorProps {
  variants: CursorVariants;
  cursorVariant: "default" | "text";
}

export default function Cursor({ variants, cursorVariant }: CursorProps) {
  return (
    <div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] hidden md:block"
      style={{
        transform: `translate(${variants[cursorVariant].x}px, ${variants[cursorVariant].y}px)`,
        backgroundColor: variants[cursorVariant].backgroundColor,
        mixBlendMode: variants[cursorVariant].mixBlendMode as any,
        width: variants[cursorVariant].width,
        height: variants[cursorVariant].height,
        transition: "transform 0.1s linear, width 0.3s ease, height 0.3s ease" 
      }}
    />
  );
}

