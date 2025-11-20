'use client';

import React from 'react';
import { 
  ArrowUpRight, Briefcase, Calendar, ArrowLeft, ExternalLink, Github
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

      <div className="w-full px-4 md:px-12 pt-32 pb-8 md:pb-12 fade-in min-h-screen flex flex-col">
        
        <div className="mb-16">
          <h1 className="text-[10vw] md:text-[6vw] font-bold text-white leading-none tracking-tighter mb-4">
            SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">WORKS</span>
          </h1>
          <p className="text-gray-400 max-w-xl text-lg font-light">
            A curated collection of projects that push the boundaries of design and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-24">
          {showcase_projects.map((project, i) => (
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

        <div className="mb-24">
          <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-4">
            <Briefcase className="text-red-500" /> Experience
          </h2>
          <div className="space-y-5">
            {experience_data.map((exp, i) => (
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
