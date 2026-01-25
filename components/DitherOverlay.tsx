'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function DitherOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const size = 200; // Size of the noise pattern
    canvas.width = size;
    canvas.height = size;

    // Create noise texture
    const imageData = ctx.createImageData(size, size);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      // Generate random noise value (0-255)
      const noise = Math.random() * 255;
      
      // Apply noise with varying opacity for more natural look
      const opacity = Math.random() * 0.15 + 0.05; // 0.05 to 0.2 opacity
      
      data[i] = noise;     // R
      data[i + 1] = noise; // G
      data[i + 2] = noise; // B
      data[i + 3] = opacity * 255; // A
    }

    ctx.putImageData(imageData, 0, 0);
    
    // Set the background image from canvas data URL
    setBackgroundImage(canvas.toDataURL());
  }, []);

  const style: React.CSSProperties = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundSize: '200px 200px',
    backgroundRepeat: 'repeat',
    mixBlendMode: 'overlay',
    opacity: 0.6,
    imageRendering: 'auto',
  };

  return (
    <>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <div 
        className="fixed inset-0 pointer-events-none z-[9999]"
        style={style}
      />
    </>
  );
}
