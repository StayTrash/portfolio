'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Mail, Github, Linkedin, Instagram, Layers, Phone, MessageCircle, 
  Download, Image as ImageIcon, Code, Database, Smartphone, Globe, 
  Cpu, Server, Box, PenTool, Terminal, Command, MoveRight, Coffee, Zap
} from 'lucide-react';

// --- Main App Container ---
export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  // --- Cursor Logic ---
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants: Record<string, { x: number; y: number; backgroundColor: string; mixBlendMode: string; width: number; height: number }> = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "white",
      mixBlendMode: "difference",
      width: 32,
      height: 32
    },
    text: {
      height: 120,
      width: 120,
      x: mousePosition.x - 60,
      y: mousePosition.y - 60,
      backgroundColor: "white",
      mixBlendMode: "difference"
    }
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans relative cursor-none selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* Global Styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
          
          /* Custom Font Faces */
          @font-face {
            font-family: 'Super Crawler';
            src: url('/fonts/Super Crawler.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          
          @font-face {
            font-family: 'Retro Block';
            src: url('/fonts/Retro Block.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          
          @font-face {
            font-family: 'Smoky Cloud';
            src: url('/fonts/smokycloud.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          
          @font-face {
            font-family: 'Bedane';
            src: url('/fonts/BEDANE.otf') format('opentype'),
                 url('/fonts/BEDANE.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          
          @font-face {
            font-family: 'Foremost';
            src: url('/fonts/Foremost Regular.otf') format('opentype'),
                 url('/fonts/Foremost Regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          
          @font-face {
            font-family: 'Foremost';
            src: url('/fonts/Foremost Italic.otf') format('opentype'),
                 url('/fonts/Foremost Italic.ttf') format('truetype');
            font-weight: normal;
            font-style: italic;
            font-display: swap;
          }
          
          @font-face {
            font-family: 'Gaseno';
            src: url('/fonts/Gaseno-Normal.otf') format('opentype'),
                 url('/fonts/Gaseno-Normal.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          
          @font-face {
            font-family: 'Gaseno';
            src: url('/fonts/Gaseno-Bold.otf') format('opentype'),
                 url('/fonts/Gaseno-Bold.ttf') format('truetype');
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          
          @font-face {
            font-family: 'Gaseno';
            src: url('/fonts/Gaseno-Light.otf') format('opentype'),
                 url('/fonts/Gaseno-Light.ttf') format('truetype');
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }
          
          @font-face {
            font-family: 'Gaseno';
            src: url('/fonts/Gaseno-Rounded.otf') format('opentype'),
                 url('/fonts/Gaseno-Rounded.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          
          @font-face {
            font-family: 'Gaseno Rounded';
            src: url('/fonts/Gaseno-Rounded.otf') format('opentype'),
                 url('/fonts/Gaseno-Rounded.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          
          @font-face {
            font-family: 'Gaseno';
            src: url('/fonts/Gaseno-SemiBold.otf') format('opentype'),
                 url('/fonts/Gaseno-SemiBold.ttf') format('truetype');
            font-weight: 600;
            font-style: normal;
            font-display: swap;
          }
          
          body { font-family: 'Outfit', sans-serif; }
          .hero-text-transition { transition: opacity 0.15s ease-in-out, transform 0.15s ease; }
          .fade-in { animation: fadeIn 0.5s ease-in-out; }
          @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: #0a0a0a; }
          ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
          ::-webkit-scrollbar-thumb:hover { background: #555; }
        `}
      </style>

      {/* Custom Cursor */}
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

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 py-6 px-6 md:px-12 flex justify-between items-center z-50 mix-blend-difference pointer-events-none">
        <Link 
          href="/"
          className="text-xl font-semibold tracking-tight pointer-events-auto cursor-pointer flex items-center gap-2" 
          onMouseEnter={textEnter} 
          onMouseLeave={textLeave}
        >
          Shubham <span className="w-2 h-2 bg-red-600 rounded-full"></span>
        </Link>
        <Link 
          href="/showcase"
          className="pointer-events-auto px-6 py-2 rounded-full border border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300 text-xs uppercase tracking-widest font-bold bg-black/50 backdrop-blur-sm flex items-center gap-2"
          onMouseEnter={textEnter} 
          onMouseLeave={textLeave}
        >
          Showcase
        </Link>
      </nav>

      {/* Home View */}
      <HomeView textEnter={textEnter} textLeave={textLeave} />
    </div>
  );
}

// --- HOME VIEW ---
const HomeView = ({ textEnter, textLeave }: { textEnter: () => void; textLeave: () => void }) => {
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const styles = [
    { font: "Super Crawler", color: "#ef4444", label: "Super Crawler" },
    { font: "Retro Block", color: "#f97316", label: "Retro Block" },
    { font: "Smoky Cloud", color: "#ffffff", label: "Smoky Cloud" },
    { font: "Bedane", color: "#d946ef", label: "Bedane" },
    { font: "Foremost", color: "#3b82f6", label: "Foremost", fontStyle: "italic" },
    // { font: "Gaseno", color: "#22c55e", label: "Gaseno Bold", fontWeight: "bold" },
    { font: "Gaseno Rounded", color: "#f59e0b", label: "Gaseno Rounded" },
    // { font: "Gaseno", color: "#06b6d4", label: "Gaseno Light", fontWeight: "300" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStyleIndex((prev) => (prev + 1) % styles.length);
    }, 600);
    return () => clearInterval(interval);
  }, [styles.length]);

  return (
    <div className="w-full px-4 md:px-12 pb-8 md:pb-12 fade-in">
      
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center sticky top-0">
        {/* Background Text - Desktop: centered behind card */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
          {styles.map((style, index) => (
            <h1 
              key={`desktop-${style.label}`}
              className="absolute text-[11vw] md:text-[13vw] leading-none text-center hero-text-transition whitespace-nowrap"
              style={{
                fontFamily: style.font,
                color: style.color,
                opacity: currentStyleIndex === index ? 0.8 : 0,
                transform: currentStyleIndex === index ? 'scale(1)' : 'scale(0.95)',
                filter: 'blur(0px)',
                fontStyle: (style as any).fontStyle || 'normal',
                fontWeight: (style as any).fontWeight || 'normal'
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
                      Shubham Kumar
                    </h2>
                    <p className="text-xs md:text-sm text-gray-400 font-normal leading-tight">
                      Creative Developer
                    </p>
                </div>
            </div>
            {/* Mobile: Transitioning text below card */}
            <div className="relative w-full flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden md:hidden -mt-2 h-[200px]">
              {styles.map((style, index) => (
                <h1 
                  key={`mobile-${style.label}`}
                  className="absolute text-[15vw] leading-none text-center hero-text-transition whitespace-nowrap"
                  style={{
                    fontFamily: style.font,
                    color: style.color,
                    opacity: currentStyleIndex === index ? 0.8 : 0,
                    transform: currentStyleIndex === index ? 'scale(1)' : 'scale(0.95)',
                    filter: 'blur(0px)',
                    fontStyle: (style as any).fontStyle || 'normal',
                    fontWeight: (style as any).fontWeight || 'normal'
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

        {/* Grid Section */}
        <section className="relative w-full bg-[#0a0a0a] z-30 mb-24 pt-12 px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full relative">
          
          <GridCell className="flex flex-col justify-between">
            <div>
              <h3 className="text-4xl font-bold text-red-600 mb-6 leading-tight">Hey, welcome to my site!</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 font-light">
                I'm Shubham, creative developer and <span className="line-through decoration-red-600 decoration-2 text-gray-600">caffeine addict</span> from India, merging design and code with flair.
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              When I'm off the grid, you'll find me traveling, exploring new coffee shops.
            </p>
          </GridCell>

          <GridCell className="flex flex-col justify-between">
            <h3 className="text-[4rem] leading-[0.9] font-medium text-white tracking-tight">Catch<br/>me<br/>on</h3>
            <div className="grid grid-cols-4 gap-2 mt-8">
              {[Mail, Github, Linkedin, Instagram, Layers, Phone, MessageCircle].map((Icon, i) => (
                <div key={i} className="aspect-square bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer group border border-white/5" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  <Icon size={20} className="text-gray-400 group-hover:text-black" />
                </div>
              ))}
            </div>
          </GridCell>

          <GridCell className="flex flex-col justify-between">
            <h3 className="text-[3.5rem] leading-[0.95] font-medium text-white tracking-tight mb-4">Browse<br/>my<br/>résumé!</h3>
            <div>
              <p className="text-gray-500 text-xs mb-6 leading-relaxed">Have an exciting project or job opening? Dive into my résumé.</p>
              <a 
                href="https://example.com/your-cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-white text-black py-3 px-5 rounded-lg font-semibold flex items-center justify-between hover:bg-gray-200 transition-colors cursor-pointer"
                onMouseEnter={textEnter} 
                onMouseLeave={textLeave}
              >
                <span className="text-sm">Download my CV</span>
                <Download size={18} />
              </a>
            </div>
          </GridCell>

          <GridCell className="flex flex-col items-center justify-center text-center min-h-[300px]">
            <div className="mb-6 text-white bg-[#151515] p-6 rounded-xl border border-white/10">
              <ImageIcon size={40} strokeWidth={1.5} />
            </div>
            <p className="text-red-600 text-sm font-semibold max-w-[200px]">Oops, nothing to see here! I'm camera-shy!</p>
          </GridCell>

          <GridCell className="md:col-span-2 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-red-600 mb-8">Who Am I ?</h3>
            <div className="text-gray-300 text-sm md:text-base leading-8 space-y-6 font-light">
              <p>I'm a creative Full Stack Developer with <span className="line-through decoration-red-600 decoration-2 text-gray-600">several years</span> of experience. Proficient in various JavaScript frameworks.</p>
              <p>My tech toolkit is diverse. I've applied my skills across <span className="line-through decoration-red-600 decoration-2 text-gray-600">Ed-Tech</span>, <span className="line-through decoration-red-600 decoration-2 text-gray-600">Healthcare</span>, and <span className="line-through decoration-red-600 decoration-2 text-gray-600">E-Commerce</span>.</p>
            </div>
          </GridCell>

          <GridCell className="md:col-span-2 relative overflow-hidden min-h-[400px] !p-0">
            <TechPile onMouseEnter={textEnter} onMouseLeave={textLeave} />
          </GridCell>

          <GridCell className="md:col-span-2">
              <h3 className="text-3xl font-bold text-red-600 mb-8">What I Build & Worked On!</h3>
              <div className="flex flex-wrap gap-3 content-start">
                {["Websites", "Web Applications", "Mobile Apps", "Content Management Systems (CMS)", "E-commerce Solutions", "Interactive Media", "Clinical Research Portal", "SharePoint", "Automated Solutions", "AI Solutions", "NPM Packages"].map((tag, i) => (
                  <span key={i} className="bg-[#111] border border-white/15 rounded-full px-4 py-2.5 text-xs text-gray-300 flex items-center gap-2 hover:bg-[#222] transition-colors cursor-default font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                    {tag}
                  </span>
                ))}
              </div>
          </GridCell>

          <GridCell className="md:col-span-2 flex flex-col justify-center">
              <h3 className="text-4xl md:text-5xl font-bold text-red-600 mb-3 tracking-tight">Got a brilliant project idea?</h3>
              <h3 className="text-4xl md:text-5xl font-bold text-red-600 mb-10 tracking-tight">Let's make it come to life!</h3>
              <div className="flex flex-col md:flex-row gap-4 w-full mt-auto">
                <a 
                  href="https://wa.me/8521298191" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-white text-black py-4 px-6 rounded-lg font-bold flex items-center justify-between hover:bg-gray-200 transition-colors group cursor-pointer"
                  onMouseEnter={textEnter} 
                  onMouseLeave={textLeave}
                >
                  <span>Ping Me on WhatsApp</span>
                  <MessageCircle size={20} className="group-hover:scale-110 transition-transform"/>
                </a>
                <a 
                  href="mailto:shubhamkumar200308@gmail.com" 
                  className="flex-1 bg-red-600 text-white py-4 px-6 rounded-lg font-bold flex items-center justify-between hover:bg-red-700 transition-colors group cursor-pointer"
                  onMouseEnter={textEnter} 
                  onMouseLeave={textLeave}
                >
                  <span>Drop Me an Email</span>
                  <Mail size={20} className="group-hover:scale-110 transition-transform"/>
                </a>
              </div>
          </GridCell>

        </div>
        <div className="mt-5 w-full bg-[#121212] border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative overflow-hiddexn group shadow-2xl">
           <div className="relative z-10 flex flex-col gap-2">
             <h2 className="text-2xl md:text-4xl text-white font-medium tracking-tight">
               Came down so far... <span className="text-red-600 font-medium">Wanna Grab a Coffee?</span>
             </h2>
             <div className="flex items-center gap-2 mt-2">
               <span className="text-sm font-medium text-gray-300">Find me at:</span>
               <a href="https://www.google.com/maps?q=23.2599,77.4126" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg text-red-600 font-medium hover:underline cursor-pointer" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                 23.2599° N, 77.4126° E
               </a>
             </div>
           </div>
        </div>
        {/* <footer className="w-full mt-12 flex justify-between items-end text-xs text-gray-500 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-1">
              <span className="uppercase tracking-wider text-[10px]">Working as</span>
              <span className="text-white font-medium">Full Stack Developer</span>
          </div>
          <div className="font-mono text-white opacity-50">2025</div>
        </footer> */}
      </section>
    </div>
  );
};

// --- SHARED COMPONENTS ---
const GridCell = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-8 md:p-10 border border-white/15 bg-[#0a0a0a] relative hover:border-white/30 transition-colors duration-500 ${className}`}>
    <div className="absolute top-1.5 left-1.5 text-white/20 font-light text-sm select-none">+</div>
    <div className="absolute top-1.5 right-1.5 text-white/20 font-light text-sm select-none">+</div>
    <div className="absolute bottom-1.5 left-1.5 text-white/20 font-light text-sm select-none">+</div>
    <div className="absolute bottom-1.5 right-1.5 text-white/20 font-light text-sm select-none">+</div>
    {children}
  </div>
);

const TechPile = ({ onMouseEnter, onMouseLeave }: { onMouseEnter: () => void; onMouseLeave: () => void }) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<any>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMatterLoaded, setIsMatterLoaded] = useState(false);

  // Tech Stack Data
  const techItems = [
    { icon: Code, color: "text-blue-400", label: "React" },
    { icon: Box, color: "text-yellow-400", label: "JS" },
    { icon: Terminal, color: "text-green-400", label: "Node" },
    { icon: Command, color: "text-purple-400", label: "Next" },
    { icon: Globe, color: "text-cyan-400", label: "Tailwind" },
    { icon: Database, color: "text-orange-400", label: "Firebase" },
    { icon: Cpu, color: "text-red-400", label: "Git" },
    { icon: Server, color: "text-indigo-400", label: "AWS" },
    { icon: PenTool, color: "text-pink-400", label: "Figma" },
    { icon: Smartphone, color: "text-emerald-400", label: "Flutter" },
    { icon: Layers, color: "text-white", label: "Three.js" },
    { icon: Zap, color: "text-yellow-300", label: "Vite" }
  ];

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

    const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Runner, Events, Body } = Matter;

    // Use existing engine if available or create new
    const engine = Engine.create();
    engineRef.current = engine;

    const width = sceneRef.current.clientWidth;
    const height = sceneRef.current.clientHeight;

    const wallOptions = { isStatic: true, render: { visible: false }, friction: 0.5, restitution: 0.2 };
    const ground = Bodies.rectangle(width / 2, height + 50, width, 100, wallOptions);
    const leftWall = Bodies.rectangle(-50, height / 2, 100, height * 2, wallOptions);
    const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height * 2, wallOptions);
    
    const bodies = techItems.map((_, i) => {
      const x = Math.random() * (width - 100) + 50;
      const y = -Math.random() * 500 - 50; 
      
      return Bodies.rectangle(x, y, 120, 45, { 
        chamfer: { radius: 20 }, 
        restitution: 0.4, 
        friction: 0.5,
        density: 0.002, 
        angle: Math.random() * Math.PI * 2
      });
    });

    World.add(engine.world, [ground, leftWall, rightWall, ...bodies]);

    const mouse = Mouse.create(sceneRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.1,
        render: { visible: false }
      }
    });
    
    if (mouseConstraint.mouse.element) {
      (mouseConstraint.mouse.element as any).removeEventListener("mousewheel", (mouseConstraint.mouse as any).mousewheel);
      (mouseConstraint.mouse.element as any).removeEventListener("DOMMouseScroll", (mouseConstraint.mouse as any).mousewheel);
    }
    World.add(engine.world, mouseConstraint);

    const runner = Runner.create();
    Runner.run(runner, engine);

    Events.on(engine, 'afterUpdate', () => {
        bodies.forEach((body, i) => {
            const card = cardsRef.current[i];
            if (card) {
                const { x, y } = body.position;
                const angle = body.angle;
                card.style.transform = `translate3d(${x - 60}px, ${y - 22.5}px, 0) rotate(${angle}rad)`;
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
    <div className="w-full h-full relative overflow-hidden bg-[#0a0a0a]" ref={sceneRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <h3 className="text-3xl font-bold text-red-600 absolute top-8 left-8 z-10 pointer-events-none">
        What I Work With...
      </h3>
      <div className="absolute top-8 right-8 z-10 pointer-events-none animate-pulse text-white/20">
        <MoveRight />
      </div>

      {techItems.map((item, i) => (
        <div
          key={i}
          ref={(el) => { cardsRef.current[i] = el; }}
          className="absolute top-0 left-0 w-[120px] h-[45px] bg-[#111] border border-white/10 rounded-full flex items-center justify-center gap-2 cursor-grab active:cursor-grabbing shadow-xl select-none z-20 will-change-transform hover:bg-[#1a1a1a] transition-colors"
        >
          <item.icon size={18} className={item.color} />
          <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">{item.label}</span>
        </div>
      ))}
      
      {!isMatterLoaded && (
         <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-600">
            Loading...
         </div>
      )}
    </div>
  );
};
