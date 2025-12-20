'use client';

import React from 'react';

interface GridCellProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function GridCell({ children, className = "", onClick, onMouseEnter, onMouseLeave }: GridCellProps) {
  return (
    <div 
      className={`p-8 md:p-10 border border-white/15 bg-[#0a0a0a] relative hover:border-white/30 transition-colors duration-500 ${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute top-1.5 left-1.5 text-white/20 font-light text-sm select-none">+</div>
      <div className="absolute top-1.5 right-1.5 text-white/20 font-light text-sm select-none">+</div>
      <div className="absolute bottom-1.5 left-1.5 text-white/20 font-light text-sm select-none">+</div>
      <div className="absolute bottom-1.5 right-1.5 text-white/20 font-light text-sm select-none">+</div>
      {children}
    </div>
  );
}

