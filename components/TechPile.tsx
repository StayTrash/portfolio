'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MoveRight } from 'lucide-react';
import { tech_stack_items } from '@/constants/data';

interface TechPileProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function TechPile({ }: TechPileProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<any>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMatterLoaded, setIsMatterLoaded] = useState(false);

  // Load Matter.js from CDN
  useEffect(() => {
    if ((window as any).Matter) {
      setIsMatterLoaded(true);
      return;
    }
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js";
    script.async = true;
    script.onload = () => setIsMatterLoaded(true);
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  // Initialize Physics Engine
  useEffect(() => {
    if (!isMatterLoaded || !sceneRef.current) return;

    const Matter = (window as any).Matter;
    if (!Matter) return;

    const { Engine, World, Bodies, Mouse, MouseConstraint, Runner, Events, Body } = Matter;

    const engine = Engine.create();
    engine.world.gravity.y = 0.8; // Slightly reduced gravity for smoother motion
    engineRef.current = engine;

    const width = sceneRef.current.clientWidth;
    const height = sceneRef.current.clientHeight;

    const wallOptions = { isStatic: true, render: { visible: false }, friction: 0.3, restitution: 0.3 };
    const ground = Bodies.rectangle(width / 2, height + 50, width, 100, wallOptions);
    const leftWall = Bodies.rectangle(-50, height / 2, 100, height * 2, wallOptions);
    const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height * 2, wallOptions);
    
    const iconSize = 40;
    const radius = iconSize / 2;
    
    const bodies = tech_stack_items.map((_, i) => {
      const x = Math.random() * (width - iconSize) + radius;
      const y = -Math.random() * 500 - 50; 
      
      return Bodies.circle(x, y, radius, { 
        restitution: 0.5, 
        friction: 0.3,
        frictionAir: 0.01,
        density: 0.001, 
        angle: Math.random() * Math.PI * 2,
        chamfer: { radius: 2 }
      });
    });

    World.add(engine.world, [ground, leftWall, rightWall, ...bodies]);

    const mouse = Mouse.create(sceneRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.4,
        damping: 0.1,
        render: { visible: false }
      }
    });
    
    if (mouseConstraint.mouse.element) {
      (mouseConstraint.mouse.element as any).removeEventListener("mousewheel", (mouseConstraint.mouse as any).mousewheel);
      (mouseConstraint.mouse.element as any).removeEventListener("DOMMouseScroll", (mouseConstraint.mouse as any).mousewheel);
    }
    World.add(engine.world, mouseConstraint);

    const runner = Runner.create({ 
      delta: 1000 / 60, // 60 FPS
      isFixed: true 
    });
    Runner.run(runner, engine);

    Events.on(engine, 'afterUpdate', () => {
        bodies.forEach((body, i) => {
            const card = cardsRef.current[i];
            if (card) {
                const { x, y } = body.position;
                const angle = body.angle;
                const offset = radius;
                card.style.transform = `translate3d(${x - offset}px, ${y - offset}px, 0) rotate(${angle}rad)`;
                card.style.opacity = y > height + 100 ? '0' : '1';
            }
        });
    });

    const handleResize = () => {
        if (!sceneRef.current) return;
        const newWidth = sceneRef.current.clientWidth;
        const newHeight = sceneRef.current.clientHeight;
        
        Body.setPosition(ground, { x: newWidth / 2, y: newHeight + 50 });
        Body.setPosition(rightWall, { x: newWidth + 50, y: newHeight / 2 });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      Runner.stop(runner);
      Engine.clear(engine);
      World.clear(engine.world);
    };
  }, [isMatterLoaded]);

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#0a0a0a]" ref={sceneRef}>
      <h3 className="text-3xl font-semibold text-red-600 absolute top-8 left-8 z-10 pointer-events-none">
        What I Work With...
      </h3>
      {/* <div className="absolute top-8 right-8 z-10 pointer-events-none animate-pulse text-white/20">
        <MoveRight />
      </div> */}

      {tech_stack_items.map((item, i) => (
        <div
          key={i}
          ref={(el) => { cardsRef.current[i] = el; }}
          className="absolute top-0 left-0 w-[40px] h-[40px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none z-20 will-change-transform pointer-events-auto"
        >
          <item.icon 
            size={40} 
            style={{ 
              color: item.brandColor === '#000000' || item.brandColor === '#181717' 
                ? '#ffffff' 
                : (item.brandColor || 'currentColor')
            }}
          />
        </div>
      ))}
      
      {!isMatterLoaded && (
         <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-600">
            Loading...
         </div>
      )}
    </div>
  );
}

