'use client';

import React from 'react';
import { 
  ArrowUpRight, Briefcase, Calendar, ExternalLink, Github
} from 'lucide-react';
import { useCursor } from '@/hooks/useCursor';
import GlobalStyles from '@/components/GlobalStyles';
import Cursor from '@/components/Cursor';
import Navigation from '@/components/Navigation';
import GridCell from '@/components/GridCell';
import { showcase_projects, experience_data } from '@/constants/showcase';

export default function ShowcasePage() {
  const { variants, cursorVariant, textEnter, textLeave } = useCursor();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans relative cursor-none selection:bg-white selection:text-black overflow-x-hidden">
      <GlobalStyles />
      <Cursor variants={variants} cursorVariant={cursorVariant} />
      <Navigation textEnter={textEnter} textLeave={textLeave} showBackButton={true} />

      <div className="w-full px-4 md:px-12 pt-24 md:pt-32 pb-8 md:pb-12 fade-in min-h-screen flex flex-col">
        
        <div className="mb-12 md:mb-16">
          <h1 className="text-[12vw] md:text-[6vw] font-bold text-white leading-none tracking-tighter mb-3 md:mb-4">
            SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">WORKS</span>
          </h1>
          <p className="text-gray-400 max-w-xl text-sm md:text-lg font-light">
            A curated collection of projects that push the boundaries of design and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-16 md:mb-24">
          {showcase_projects.map((project, i) => (
            <GridCell key={i} className="flex flex-col justify-between min-h-[280px] md:min-h-[300px] group relative overflow-hidden">
               <div className="relative z-10 transition-opacity duration-300 md:group-hover:opacity-20 pb-16 md:pb-0">
                  <div className="flex justify-between items-start mb-3 md:mb-4 gap-2">
                    <h3 className="text-xl md:text-3xl font-bold text-white md:group-hover:text-red-500 transition-colors flex-1">{project.title}</h3>
                    <ArrowUpRight className="opacity-50 text-red-500 shrink-0" size={18} />
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-[9px] md:text-[10px] uppercase tracking-wider border border-white/20 px-2 py-1 rounded text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
               </div>
               <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-row items-center justify-center gap-3 md:gap-4 p-4 md:p-0 md:inset-0 md:flex md:flex-col md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-black/80 md:bg-black/90 backdrop-blur-sm md:backdrop-blur-sm">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-white text-black font-bold hover:bg-red-600 hover:text-white transition-all transform hover:scale-105 flex-1 md:flex-none md:w-auto justify-center text-sm md:text-base"
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-white text-black font-bold hover:bg-red-600 hover:text-white transition-all transform hover:scale-105 flex-1 md:flex-none md:w-auto justify-center text-sm md:text-base"
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                  >
                    <ExternalLink size={18} />
                    <span>Live</span>
                  </a>
               </div>
            </GridCell>
          ))}
        </div>

        <div className="mb-16 md:mb-24">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 md:mb-12 flex items-center gap-3 md:gap-4">
            <Briefcase className="text-red-500" size={24} /> Experience
          </h2>
          <div className="space-y-4 md:space-y-5">
            {experience_data.map((exp, i) => (
              <GridCell key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 py-6 md:py-8">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 break-words">{exp.role} <span className="text-red-500">@ {exp.company}</span></h3>
                  <p className="text-gray-400 text-xs md:text-sm font-light">{exp.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 font-mono text-[10px] md:text-xs border border-white/10 px-3 py-1.5 md:py-1 rounded-full shrink-0">
                  <Calendar size={10} /> <span className="whitespace-nowrap">{exp.date}</span>
                </div>
              </GridCell>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
