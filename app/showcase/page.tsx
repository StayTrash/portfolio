'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, Briefcase, Calendar, ArrowLeft, ExternalLink, Github
} from 'lucide-react';

// Shared GridCell component
const GridCell = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-8 md:p-10 border border-white/15 bg-[#0a0a0a] relative hover:border-white/30 transition-colors duration-500 ${className}`}>
    <div className="absolute top-1.5 left-1.5 text-white/20 font-light text-sm select-none">+</div>
    <div className="absolute top-1.5 right-1.5 text-white/20 font-light text-sm select-none">+</div>
    <div className="absolute bottom-1.5 left-1.5 text-white/20 font-light text-sm select-none">+</div>
    <div className="absolute bottom-1.5 right-1.5 text-white/20 font-light text-sm select-none">+</div>
    {children}
  </div>
);

export default function ShowcasePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  // Cursor Logic
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

  const projects = [
    {
      title: "Neon E-Commerce",
      desc: "A futuristic shopping platform built with React and WebGL product views.",
      tags: ["React", "Three.js", "Stripe"],
      color: "border-red-500",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "AI Task Manager",
      desc: "Smart productivity app using OpenAI to auto-schedule your day.",
      tags: ["Next.js", "OpenAI API", "Tailwind"],
      color: "border-blue-500",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Crypto Dashboard",
      desc: "Real-time financial data visualization with websocket integrations.",
      tags: ["Vue", "D3.js", "Firebase"],
      color: "border-green-500",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Social Graph",
      desc: "Interactive visualization of social connections and network analysis.",
      tags: ["React Flow", "GraphQL", "Neo4j"],
      color: "border-purple-500",
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  const experience = [
    {
      role: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      date: "2023 - Present",
      desc: "Leading the frontend architecture for enterprise dashboard solutions."
    },
    {
      role: "Creative Developer",
      company: "Digital Agency X",
      date: "2021 - 2023",
      desc: "Built award-winning immersive web experiences for global brands."
    },
    {
      role: "Freelance Developer",
      company: "Self Employed",
      date: "2019 - 2021",
      desc: "Delivered 30+ projects ranging from e-commerce to portfolio sites."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans relative cursor-none selection:bg-white selection:text-black overflow-x-hidden">
      {/* Global Styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
          
          body { font-family: 'Outfit', sans-serif; }
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
          Shubham <span className="text-red-600">Designs</span><span className="w-2 h-2 bg-red-600 rounded-full"></span>
        </Link>
        <Link 
          href="/"
          className="pointer-events-auto px-6 py-2 rounded-full border border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300 text-xs uppercase tracking-widest font-bold bg-black/50 backdrop-blur-sm flex items-center gap-2"
          onMouseEnter={textEnter} 
          onMouseLeave={textLeave}
        >
          <ArrowLeft size={14} /> Back Home
        </Link>
      </nav>

      {/* Showcase Content */}
      <div className="w-full px-4 md:px-12 pt-32 pb-8 md:pb-12 fade-in min-h-screen flex flex-col">
        
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-[10vw] md:text-[6vw] font-bold text-white leading-none tracking-tighter mb-4">
            SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">WORKS</span>
          </h1>
          <p className="text-gray-400 max-w-xl text-lg font-light">
            A curated collection of projects that push the boundaries of design and technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-24">
          {projects.map((project, i) => (
            <GridCell key={i} className="flex flex-col justify-between min-h-[300px] group relative overflow-hidden">
               <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-20">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-bold text-white group-hover:text-red-500 transition-colors">{project.title}</h3>
                    <ArrowUpRight className="opacity-50 text-red-500" />
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] uppercase tracking-wider border border-white/20 px-2 py-1 rounded text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
               </div>
               {/* Hover Actions Overlay */}
               <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/90 backdrop-blur-sm">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-red-600 hover:text-white transition-all transform hover:scale-105"
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-red-600 hover:text-white transition-all transform hover:scale-105"
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                  >
                    <ExternalLink size={20} />
                    <span>Live</span>
                  </a>
               </div>
            </GridCell>
          ))}
        </div>

        {/* Experience Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-4">
            <Briefcase className="text-red-500" /> Experience
          </h2>
          <div className="space-y-5">
            {experience.map((exp, i) => (
              <GridCell key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-4 !py-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role} <span className="text-red-500">@ {exp.company}</span></h3>
                  <p className="text-gray-400 text-sm font-light">{exp.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 font-mono text-xs border border-white/10 px-3 py-1 rounded-full whitespace-nowrap">
                  <Calendar size={12} /> {exp.date}
                </div>
              </GridCell>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

