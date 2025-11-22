'use client';

import React from 'react';
import { 
  ArrowUpRight, Briefcase, Calendar, ExternalLink, Github, GraduationCap
} from 'lucide-react';
import { useCursor } from '@/hooks/useCursor';
import GlobalStyles from '@/components/GlobalStyles';
import Cursor from '@/components/Cursor';
import Navigation from '@/components/Navigation';
import GridCell from '@/components/GridCell';
import { showcase_projects, experience_data, education_data } from '@/constants/showcase';

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
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
              <GridCell 
                key={i} 
                className={`flex flex-col justify-between min-h-[360px] md:min-h-[420px] group relative overflow-hidden border-l-[6px] ${colors.border} transition-all duration-700 hover:scale-[1.03] hover:shadow-2xl animate-fade-in-up bg-gradient-to-br from-[#0a0a0a] to-[#111111]`}
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradientStrong} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
                
                {/* Decorative corner accent */}
                <div 
                  className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(to bottom right, ${
                      colorName === 'red' ? 'rgba(239,68,68,0.1)' : 
                      colorName === 'blue' ? 'rgba(59,130,246,0.1)' : 
                      colorName === 'green' ? 'rgba(34,197,94,0.1)' : 
                      'rgba(168,85,247,0.1)'
                    }, transparent)`
                  }}
                ></div>
                <div 
                  className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl"
                  style={{
                    background: `linear-gradient(to top left, ${
                      colorName === 'red' ? 'rgba(239,68,68,0.05)' : 
                      colorName === 'blue' ? 'rgba(59,130,246,0.05)' : 
                      colorName === 'green' ? 'rgba(34,197,94,0.05)' : 
                      'rgba(168,85,247,0.05)'
                    }, transparent)`
                  }}
                ></div>
                
                {/* Project number with glow effect */}
                <div className="absolute top-6 right-6 z-10 opacity-15 group-hover:opacity-40 transition-all duration-500">
                  <div className="relative">
                    <span className="text-7xl md:text-8xl font-black text-white leading-none tracking-tighter opacity-20">
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                    <span className={`absolute inset-0 text-7xl md:text-8xl font-black leading-none tracking-tighter blur-sm opacity-30 ${colors.text}`}>
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Decorative line */}
                <div 
                  className="absolute top-0 left-[6px] w-px h-16 opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                  style={{
                    backgroundColor: colorName === 'red' ? 'rgb(239, 68, 68)' : 
                                   colorName === 'blue' ? 'rgb(59, 130, 246)' : 
                                   colorName === 'green' ? 'rgb(34, 197, 94)' : 
                                   'rgb(168, 85, 247)'
                  }}
                ></div>

                {/* Main content */}
                <div className="relative z-10 transition-all duration-700 md:group-hover:opacity-25 pb-24 md:pb-0 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-5 md:mb-6 gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-1.5 h-1.5 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 ${colorName === 'red' ? 'bg-red-500' : colorName === 'blue' ? 'bg-blue-500' : colorName === 'green' ? 'bg-green-500' : 'bg-purple-500'}`}></div>
                        <span className={`text-[10px] md:text-xs font-mono ${colors.text} opacity-70 font-semibold tracking-[0.2em] uppercase`}>
                          PROJECT {(i + 1).toString().padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className={`text-3xl md:text-5xl font-black text-white ${colors.hoverText} transition-colors duration-500 leading-[1.1] mb-1 tracking-tight`}>
                        {project.title}
                      </h3>
                      <div 
                        className={`w-12 h-0.5 opacity-50 mt-2 group-hover:w-16 group-hover:opacity-100 transition-all duration-500 ${colorName === 'red' ? 'bg-red-500' : colorName === 'blue' ? 'bg-blue-500' : colorName === 'green' ? 'bg-green-500' : 'bg-purple-500'}`}
                      ></div>
                    </div>
                    <div className="flex-shrink-0 mt-1">
                      <div 
                        className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all duration-300"
                        style={{
                          borderColor: 'rgba(255,255,255,0.1)',
                        }}
                      >
                        <ArrowUpRight className={`opacity-50 group-hover:opacity-100 ${colors.icon} transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1`} size={22} />
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 md:mb-10 font-light max-w-[90%]">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2.5 mt-auto">
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
                          className="text-[10px] md:text-[11px] uppercase tracking-wider border border-white/15 px-3.5 py-2 rounded-lg text-gray-300 bg-black/40 backdrop-blur-sm transition-all duration-500 group-hover:shadow-lg group-hover:scale-105 font-medium"
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

                {/* Action buttons overlay with enhanced design */}
                <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-row items-center justify-center gap-4 md:gap-5 p-5 md:p-0 md:inset-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 bg-gradient-to-t from-black/98 via-black/90 to-black/70 md:from-black/95 md:via-black/85 md:to-black/75 backdrop-blur-xl md:backdrop-blur-md">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className={`group/btn flex items-center gap-2.5 px-7 py-3.5 md:px-10 md:py-4.5 rounded-full bg-white text-black font-bold ${colors.buttonHover} hover:text-white transition-all duration-400 transform hover:scale-110 hover:-translate-y-0.5 active:scale-95 flex-1 md:flex-none md:w-auto justify-center text-sm md:text-base shadow-2xl border-2 border-transparent hover:border-white/20`}
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                  >
                    <Github size={20} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span>View Code</span>
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer" 
                    className={`group/btn flex items-center gap-2.5 px-7 py-3.5 md:px-10 md:py-4.5 rounded-full bg-white text-black font-bold ${colors.buttonHover} hover:text-white transition-all duration-400 transform hover:scale-110 hover:-translate-y-0.5 active:scale-95 flex-1 md:flex-none md:w-auto justify-center text-sm md:text-base shadow-2xl border-2 border-transparent hover:border-white/20`}
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                  >
                    <ExternalLink size={20} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span>Live Demo</span>
                  </a>
                </div>

                {/* Mobile buttons (always visible) */}
                <div className="md:hidden absolute bottom-0 left-0 right-0 z-20 flex flex-row items-center justify-center gap-3 p-4 bg-gradient-to-t from-black/98 to-black/70 backdrop-blur-xl">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className={`flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold ${colors.buttonHover} hover:text-white transition-all duration-300 transform active:scale-95 flex-1 justify-center text-sm shadow-lg`}
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
                    className={`flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold ${colors.buttonHover} hover:text-white transition-all duration-300 transform active:scale-95 flex-1 justify-center text-sm shadow-lg`}
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                  >
                    <ExternalLink size={18} />
                    <span>Live</span>
                  </a>
                </div>
              </GridCell>
            );
          })}
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

        <div className="mb-16 md:mb-24">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 md:mb-12 flex items-center gap-3 md:gap-4">
            <GraduationCap className="text-red-500" size={24} /> Education
          </h2>
          <div className="space-y-4 md:space-y-5">
            {education_data.map((edu, i) => (
              <GridCell key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 py-6 md:py-8">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 break-words">{edu.degree} <span className="text-red-500">@ {edu.institution}</span></h3>
                  <p className="text-gray-400 text-xs md:text-sm font-light">{edu.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 font-mono text-[10px] md:text-xs border border-white/10 px-3 py-1.5 md:py-1 rounded-full shrink-0">
                  <Calendar size={10} /> <span className="whitespace-nowrap">{edu.date}</span>
                </div>
              </GridCell>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
