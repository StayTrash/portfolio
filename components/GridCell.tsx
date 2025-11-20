'use client';

import React from 'react';

interface GridCellProps {
  children: React.ReactNode;
  className?: string;
}

export default function GridCell({ children, className = "" }: GridCellProps) {
  return (
    <div className={`p-8 md:p-10 border border-white/15 bg-[#0a0a0a] relative hover:border-white/30 transition-colors duration-500 ${className}`}>
      <div className="absolute top-1.5 left-1.5 text-white/20 font-light text-sm select-none">+</div>
      <div className="absolute top-1.5 right-1.5 text-white/20 font-light text-sm select-none">+</div>
      <div className="absolute bottom-1.5 left-1.5 text-white/20 font-light text-sm select-none">+</div>
      <div className="absolute bottom-1.5 right-1.5 text-white/20 font-light text-sm select-none">+</div>
      {children}
    </div>
  );
}

