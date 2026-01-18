'use client';

import React from 'react';

export default function DitherOverlay() {
  // Create a checkerboard pattern that's clearly visible
  // Using a 4x4 pixel checkerboard pattern
  const createCheckerboard = () => {
    const svg = `
      <svg width="4" height="4" xmlns="http://www.w3.org/2000/svg">
        <rect width="2" height="2" fill="rgba(255, 255, 255, 0.1)"/>
        <rect x="2" y="0" width="2" height="2" fill="rgba(0, 0, 0, 0.08)"/>
        <rect x="0" y="2" width="2" height="2" fill="rgba(0, 0, 0, 0.08)"/>
        <rect x="2" y="2" width="2" height="2" fill="rgba(255, 255, 255, 0.1)"/>
      </svg>
    `;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
  };

  const style: React.CSSProperties & {
    WebkitImageRendering?: string;
    msImageRendering?: string;
  } = {
    backgroundImage: `url("${createCheckerboard()}")`,
    backgroundSize: '4px 4px',
    backgroundRepeat: 'repeat',
    mixBlendMode: 'overlay',
    opacity: 0.7,
    imageRendering: 'pixelated',
    WebkitImageRendering: 'pixelated',
    msImageRendering: 'pixelated'
  };

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={style}
    />
  );
}
