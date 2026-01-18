'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface NavigationProps {
  textEnter: () => void;
  textLeave: () => void;
  showBackButton?: boolean;
}

export default function Navigation({ textEnter, textLeave, showBackButton = false }: NavigationProps) {
  const showcaseButtonRef = useRef<HTMLAnchorElement>(null);

  const handle_mouse_move = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!showcaseButtonRef.current || showBackButton) return;
    
    const rect = showcaseButtonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    showcaseButtonRef.current.style.setProperty('--mouse-x', `${x}%`);
    showcaseButtonRef.current.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 py-6 px-6 md:px-12 flex justify-between items-center z-50 mix-blend-difference pointer-events-none">
      <Link 
        href="/"
        className="text-xl font-semibold tracking-tight pointer-events-auto cursor-pointer flex items-center gap-2" 
        onMouseEnter={textEnter} 
        onMouseLeave={textLeave}
      >
        Shubham {showBackButton ? (
          <>
            <span className="text-red-600">Designs</span>
            <span className="w-2 h-2 bg-red-600 rounded-full"></span>
          </>
        ) : (
          <span className="w-2 h-2 bg-red-600 rounded-full"></span>
        )}
      </Link>
      <Link 
        ref={showcaseButtonRef}
        href={showBackButton ? "/" : "/showcase"}
        className={`pointer-events-auto px-6 py-2 rounded-full ${
          showBackButton 
            ? 'border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300' 
            : 'showcase-border-animated relative border-0'
        } text-xs uppercase tracking-widest font-bold bg-black/50 backdrop-blur-sm flex items-center gap-2`}
        onMouseEnter={textEnter} 
        onMouseLeave={textLeave}
        onMouseMove={handle_mouse_move}
      >
        {showBackButton ? (
          <>
            <ArrowLeft size={14} /> Back Home
          </>
        ) : (
          <>
            <span className="glow-effect"></span>
            <span className="relative z-10 showcase-text-animated">Showcase</span>
          </>
        )}
      </Link>
    </nav>
  );
}

