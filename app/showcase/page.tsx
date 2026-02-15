'use client';

import React, { useState } from 'react';
import { 
  ArrowUpRight, Briefcase, Calendar, ChevronDown, ChevronUp, ExternalLink, Github, GraduationCap
} from 'lucide-react';
import { useCursor } from '@/hooks/useCursor';
import GlobalStyles from '@/components/GlobalStyles';
import Cursor from '@/components/Cursor';
import Navigation from '@/components/Navigation';
import GridCell from '@/components/GridCell';
import { showcase_projects, experience_data, education_data } from '@/constants/showcase';

export default function ShowcasePage() {
  const { variants, cursorVariant, textEnter, textLeave } = useCursor();
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);
  
  const toggle_experience = (index: number) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans relative cursor-none selection:bg-white selection:text-black overflow-x-hidden">
      <GlobalStyles />
      <Cursor variants={variants} cursorVariant={cursorVariant} />
      <Navigation textEnter={textEnter} textLeave={textLeave} showBackButton={true} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-10 sm:pb-12 md:pb-16 fade-in min-h-screen flex flex-col">
        
        {/* Hero */}
        <header className="mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tighter mb-3 sm:mb-4">
            SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">WORKS</span>
          </h1>
          <p className="text-gray-400 max-w-xl text-sm sm:text-base md:text-lg font-light leading-relaxed">
            A curated collection of projects that push the boundaries of design and technology.
          </p>
        </header>

        {/* Projects grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-14 sm:mb-16 md:mb-20 lg:mb-24" aria-label="Projects">
          {showcase_projects.map((project, i) => {
            // Extract color from border class and map to proper colors
            const colorMatch = project.color.match(/border-(\w+)-500/);
            const colorName = colorMatch ? colorMatch[1] : 'red';
            
            // Color mapping with proper Tailwind classes
            const colorConfig: { [key: string]: { 
              border: string; 
              borderGlow: string;
              text: string; 
              hoverText: string;
              gradient: string;
              gradientStrong: string;
              buttonHover: string;
              icon: string;
              tagBorder: string;
              tagBg: string;
            } } = {
              'red': {
                border: 'border-red-500',
                borderGlow: 'shadow-[0_0_30px_rgba(239,68,68,0.3)]',
                text: 'text-red-500',
                hoverText: 'md:group-hover:text-red-500',
                gradient: 'from-red-500/20 via-red-600/10 to-transparent',
                gradientStrong: 'from-red-500/30 via-red-600/20 to-transparent',
                buttonHover: 'hover:bg-red-600',
                icon: 'text-red-500',
                tagBorder: 'group-hover:border-red-500/60',
                tagBg: 'group-hover:bg-red-500/10'
              },
              'blue': {
                border: 'border-blue-500',
                borderGlow: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]',
                text: 'text-blue-500',
                hoverText: 'md:group-hover:text-blue-500',
                gradient: 'from-blue-500/20 via-blue-600/10 to-transparent',
                gradientStrong: 'from-blue-500/30 via-blue-600/20 to-transparent',
                buttonHover: 'hover:bg-blue-600',
                icon: 'text-blue-500',
                tagBorder: 'group-hover:border-blue-500/60',
                tagBg: 'group-hover:bg-blue-500/10'
              },
              'green': {
                border: 'border-green-500',
                borderGlow: 'shadow-[0_0_30px_rgba(34,197,94,0.3)]',
                text: 'text-green-500',
                hoverText: 'md:group-hover:text-green-500',
                gradient: 'from-green-500/20 via-green-600/10 to-transparent',
                gradientStrong: 'from-green-500/30 via-green-600/20 to-transparent',
                buttonHover: 'hover:bg-green-600',
                icon: 'text-green-500',
                tagBorder: 'group-hover:border-green-500/60',
                tagBg: 'group-hover:bg-green-500/10'
              },
              'purple': {
                border: 'border-purple-500',
                borderGlow: 'shadow-[0_0_30px_rgba(168,85,247,0.3)]',
                text: 'text-purple-500',
                hoverText: 'md:group-hover:text-purple-500',
                gradient: 'from-purple-500/20 via-purple-600/10 to-transparent',
                gradientStrong: 'from-purple-500/30 via-purple-600/20 to-transparent',
                buttonHover: 'hover:bg-purple-600',
                icon: 'text-purple-500',
                tagBorder: 'group-hover:border-purple-500/60',
                tagBg: 'group-hover:bg-purple-500/10'
              }
            };
            
            const colors = colorConfig[colorName] || colorConfig['red'];
            
            return (
              <div
                key={i}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
              <GridCell 
                className={`flex flex-col justify-between min-h-[300px] sm:min-h-[340px] md:min-h-[380px] lg:min-h-[420px] group relative overflow-hidden transition-all duration-500 sm:hover:scale-[1.02] md:hover:scale-[1.03] hover:shadow-2xl bg-gradient-to-br from-[#0a0a0a] to-[#111111]`}
              >
                
                {/* Project number */}
                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 md:top-6 md:right-6 z-10 opacity-15 group-hover:opacity-40 transition-all duration-500">
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter opacity-20">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Main content */}
                <div className="relative z-10 transition-all duration-700 md:group-hover:opacity-25 pb-20 sm:pb-24 md:pb-0 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4 sm:mb-5 md:mb-6 gap-3 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div className={`w-1.5 h-1.5 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 ${colorName === 'red' ? 'bg-red-500' : colorName === 'blue' ? 'bg-blue-500' : colorName === 'green' ? 'bg-green-500' : 'bg-purple-500'}`}></div>
                        <span className={`text-[10px] sm:text-xs font-mono ${colors.text} opacity-70 font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase`}>
                          PROJECT {(i + 1).toString().padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white ${colors.hoverText} transition-colors duration-500 leading-[1.1] mb-1 tracking-tight break-words`}>
                        {project.title}
                      </h3>
                      <div 
                        className={`w-10 sm:w-12 h-0.5 opacity-50 mt-2 group-hover:w-14 sm:group-hover:w-16 group-hover:opacity-100 transition-all duration-500 ${colorName === 'red' ? 'bg-red-500' : colorName === 'blue' ? 'bg-blue-500' : colorName === 'green' ? 'bg-green-500' : 'bg-purple-500'}`}
                      ></div>
                    </div>
                    <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                      <div 
                        className="p-1.5 sm:p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all duration-300"
                        style={{
                          borderColor: 'rgba(255,255,255,0.1)',
                        }}
                      >
                        <ArrowUpRight className={`opacity-50 group-hover:opacity-100 ${colors.icon} transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 w-5 h-5 sm:w-[22px] sm:h-[22px]`} />
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 md:mb-10 font-light max-w-[95%] sm:max-w-[90%]">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-2.5 mt-auto">
                    {project.tags.map((tag, j) => {
                      const tagColorStyles = colorName === 'red' ? {
                        borderColor: 'rgba(239, 68, 68, 0.6)',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)'
                      } : colorName === 'blue' ? {
                        borderColor: 'rgba(59, 130, 246, 0.6)',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)'
                      } : colorName === 'green' ? {
                        borderColor: 'rgba(34, 197, 94, 0.6)',
                        backgroundColor: 'rgba(34, 197, 94, 0.1)'
                      } : {
                        borderColor: 'rgba(168, 85, 247, 0.6)',
                        backgroundColor: 'rgba(168, 85, 247, 0.1)'
                      };
                      
                      return (
                        <span 
                          key={j} 
                          className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-wider border border-white/15 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-gray-300 bg-black/40 backdrop-blur-sm transition-all duration-500 group-hover:shadow-lg group-hover:scale-105 font-medium"
                          style={{ 
                            transitionDelay: `${j * 0.05}s`,
                            ...tagColorStyles
                          }}
                          onMouseEnter={(e) => {
                            Object.assign(e.currentTarget.style, tagColorStyles);
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
                          }}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Action buttons: fixed bar on mobile, hover overlay on desktop */}
                <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 p-4 sm:p-5 md:p-0 md:inset-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black/98 via-black/90 to-black/70 md:from-black/95 md:via-black/85 md:to-black/75 backdrop-blur-xl md:backdrop-blur-md">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className={`group/btn flex items-center gap-2 sm:gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 md:px-10 md:py-4 rounded-full bg-white text-black font-bold ${colors.buttonHover} hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 flex-1 md:flex-none md:w-auto justify-center text-xs sm:text-sm md:text-base shadow-xl md:shadow-2xl border-2 border-transparent hover:border-white/20`}
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:rotate-12 transition-transform duration-300 shrink-0" />
                    <span className="hidden sm:inline">View Code</span>
                    <span className="sm:hidden">Code</span>
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer" 
                    className={`group/btn flex items-center gap-2 sm:gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 md:px-10 md:py-4 rounded-full bg-white text-black font-bold ${colors.buttonHover} hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 flex-1 md:flex-none md:w-auto justify-center text-xs sm:text-sm md:text-base shadow-xl md:shadow-2xl border-2 border-transparent hover:border-white/20`}
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:rotate-12 transition-transform duration-300 shrink-0" />
                    <span className="hidden sm:inline">Live Demo</span>
                    <span className="sm:hidden">Live</span>
                  </a>
                </div>
              </GridCell>
              </div>
            );
          })}
        </section>

        {/* Experience */}
        <section className="mb-14 sm:mb-16 md:mb-20 lg:mb-24" aria-label="Experience">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 md:mb-12 flex items-center gap-2 sm:gap-3 md:gap-4">
            <Briefcase className="text-red-500 w-5 h-5 sm:w-6 sm:h-6 shrink-0" /> Experience
          </h2>
          <div className="space-y-3 sm:space-y-4 md:space-y-5">
            {experience_data.map((exp, i) => {
              const isExpanded = expandedExperience === i;
              
              return (
                <GridCell 
                  key={i} 
                  className="flex flex-col gap-3 sm:gap-4 py-5 sm:py-6 md:py-8 group cursor-pointer"
                  onClick={() => toggle_experience(i)}
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 md:gap-4">
                    <div className="flex-1 min-w-0 flex items-start justify-between gap-3">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white break-words leading-snug">{exp.role} <span className="text-red-500">@ {exp.company}</span></h3>
                      <div className="sm:hidden flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-red-500/50 transition-all duration-300 shrink-0 pointer-events-none">
                        {isExpanded ? (
                          <ChevronUp size={16} className="text-white" />
                        ) : (
                          <ChevronDown size={16} className="text-white" />
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-gray-500 font-mono text-[10px] sm:text-xs border border-white/10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shrink-0 pointer-events-none">
                        <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" /> <span className="whitespace-nowrap">{exp.date}</span>
                      </div>
                      <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-red-500/30 transition-all duration-300 shrink-0 pointer-events-none">
                        {isExpanded ? (
                          <ChevronUp size={16} className="text-white group-hover:text-red-500 transition-colors duration-300" />
                        ) : (
                          <ChevronDown size={16} className="text-white group-hover:text-red-500 transition-colors duration-300" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul className="space-y-2 sm:space-y-3 pt-1 sm:pt-2">
                      {exp.desc.map((point, j) => (
                        <li key={j} className="text-gray-400 text-xs sm:text-sm font-light flex items-start gap-2 sm:gap-3 leading-relaxed">
                          <span className="text-red-500 shrink-0 mt-0.5">•</span>
                          <span className="flex-1 min-w-0">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GridCell>
              );
            })}
          </div>
        </section>

        {/* Education */}
        <section className="mb-14 sm:mb-16 md:mb-20 lg:mb-24" aria-label="Education">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 md:mb-12 flex items-center gap-2 sm:gap-3 md:gap-4">
            <GraduationCap className="text-red-500 w-5 h-5 sm:w-6 sm:h-6 shrink-0" /> Education
          </h2>
          <div className="space-y-3 sm:space-y-4 md:space-y-5">
            {education_data.map((edu, i) => (
              <GridCell key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 md:gap-4 py-5 sm:py-6 md:py-8">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 break-words leading-snug">{edu.degree} <span className="text-red-500">@ {edu.institution}</span></h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">{edu.desc}</p>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-gray-500 font-mono text-[10px] sm:text-xs border border-white/10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shrink-0">
                  <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" /> <span className="whitespace-nowrap">{edu.date}</span>
                </div>
              </GridCell>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
