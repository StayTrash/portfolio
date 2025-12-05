'use client';

import React from 'react';
import { 
  Mail, Github, Linkedin, Phone, 
  Download, Image as ImageIcon, MessageCircle as MessageCircleIcon
} from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import GridCell from '@/components/GridCell';
import TechPile from '@/components/TechPile';
import { work_tags, contact_info, tech_stack_items } from '@/constants/data';

interface HomeGridProps {
  textEnter: () => void;
  textLeave: () => void;
  redTextEnter?: () => void;
  redTextLeave?: () => void;
}

export default function HomeGrid({ textEnter, textLeave, redTextEnter, redTextLeave }: HomeGridProps) {
  const socialIcons = [
    { Icon: Mail, href: `mailto:${contact_info.email}` },
    { Icon: Github, href: "https://github.com/StayTrash" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/shubham-kumar-8944b325b/" },
    { Icon: Phone, href: `tel:+8521298191` },
    { Icon: FaXTwitter, href: "https://x.com/shubham__0_5" }
  ];

  return (
    <section className="relative w-full bg-[#0a0a0a] z-30 mb-16 md:mb-24 pt-8 md:pt-12 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 w-full relative">
        
        <GridCell className="flex flex-col">
          <h3 
            className="text-3xl font-semibold text-red-600 mb-4 leading-tight"
            // onMouseEnter={redTextEnter || textEnter}
            // onMouseLeave={redTextLeave || textLeave}
          >Hey, welcome to my site!</h3>
          <p className="text-white text-base md:text-lg leading-relaxed mb-3 font-light">
            I'm Shubham, creative developer and <span className="line-through decoration-red-600 decoration-2 text-white"><i>caffeine addict</i></span> from India, merging design and code with flair.
          </p>
          <p className="text-white text-base md:text-lg leading-relaxed font-light">
            When I'm off the grid, you'll find me traveling, exploring tracks and trails.
          </p>
        </GridCell>

        <GridCell className="flex flex-col justify-between">
          <div className="relative">
            <h3 className="text-[5rem] leading-[0.9] font-medium text-white tracking-wider">Catch<br/>me<br/>on</h3>
          </div>
          <div className="grid grid-cols-5 gap-2 mt-8">
            {socialIcons.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith('http') ? "_blank" : undefined}
                rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="aspect-square bg-transparent rounded-lg flex items-center justify-center transition-colors duration-300 cursor-pointer border border-white/20 group hover:border-red-600/50"
                onMouseEnter={redTextEnter || textEnter} 
                onMouseLeave={redTextLeave || textLeave}
              >
                <item.Icon size={20} className="text-white group-hover:text-red-600 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </GridCell>

        <GridCell className="flex flex-col justify-between">
          <h3 className="text-[3.5rem] leading-[0.95] font-medium text-white tracking-tight mb-4">Browse<br/>my<br/>résumé!</h3>
          <div>
            <p className="text-gray-400 text-base md:text-lg mb-6 leading-relaxed font-light">Have an exciting project or job opening? Dive into my résumé.</p>
            <a 
              href="https://drive.google.com/file/d/1_0WM-r6KwEK0WpWDLdL5MeriHLsJozRr/view?usp=sharing" 
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

        <GridCell className="md:col-span-2 flex flex-col">
          <h3 
            className="text-3xl font-semibold text-red-600 mb-4 leading-tight"
            // onMouseEnter={redTextEnter || textEnter}
            // onMouseLeave={redTextLeave || textLeave}
          >Who Am I ?</h3>
          <div className="text-white text-base md:text-lg leading-relaxed space-y-6 font-light max-w-4xl">
            <p>I'm a creative Full Stack Developer. Proficient in various JavaScript frameworks and skilled in other technologies that catch my interest. My tech toolkit is as diverse as a barista's coffee menu. I collect <span className="line-through decoration-red-600 decoration-2 text-white"><i>languages and frameworks</i></span> like travelers collect fridge magnets.</p>
            <p>When I'm not responding to your <span className="line-through decoration-red-600 decoration-2 text-white"><i>texts</i></span> or <span className="line-through decoration-red-600 decoration-2 text-white"><i>emails</i></span>, you can safely assume I've packed my bags and escaped on a much-needed vacation.</p>
            <p>My <span className="line-through decoration-red-600 decoration-2 text-white"><i>commits</i></span> are like constellations—connecting dots in the dark to make something beautiful.</p>

          </div>
        </GridCell>

        <GridCell className="md:col-span-1 lg:col-span-1 relative overflow-hidden min-h-[400px] !p-0">
          <TechPile onMouseEnter={redTextEnter || textEnter} onMouseLeave={redTextLeave || textLeave} />
        </GridCell>

        <GridCell className="md:col-span-1 lg:col-span-1 flex flex-col">
          <h3 
            className="text-3xl font-semibold text-red-600 mb-6"
          >
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 gap-2.5 overflow-y-auto max-h-[350px] pr-2 custom-scrollbar">
            {tech_stack_items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-2 rounded-lg bg-[#111] border border-white/10 hover:border-white/30 hover:bg-[#151515] transition-all duration-300 group cursor-default"
              >
                <div className="shrink-0 w-7 h-7 flex items-center justify-center">
                  <item.icon 
                    size={18} 
                    style={{ 
                      color: item.brandColor === '#000000' || item.brandColor === '#181717' 
                        ? '#ffffff' 
                        : (item.brandColor || 'currentColor')
                    }}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-white text-xs font-medium group-hover:text-red-600 transition-colors duration-300 truncate">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </GridCell>

        <GridCell className="md:col-span-2">
            <h3 className="text-3xl font-semibold text-red-600 mb-8">What I Build & Worked On!</h3>
            <div className="flex flex-wrap gap-3 content-start">
              {work_tags.map((tag, i) => (
                <span key={i} className="bg-[#111] border border-white/15 rounded-lg px-4 py-2.5 text-xs text-gray-300 flex items-center gap-2 hover:bg-[#222] transition-colors cursor-default font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                  {tag}
                </span>
              ))}
            </div>
        </GridCell>

        <GridCell className="md:col-span-2 flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl font-semibold text-red-600 mb-3 tracking-tight">Got a brilliant project idea?</h3>
            <h3 className="text-4xl md:text-5xl font-bold text-red-600 mb-10 tracking-tight">Let's make it come to life!</h3>
            <div className="flex flex-col md:flex-row gap-4 w-full mt-auto">
              <a 
                href={contact_info.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-white text-black py-4 px-6 rounded-lg font-bold flex items-center justify-between hover:bg-gray-200 transition-colors group cursor-pointer"
                onMouseEnter={textEnter} 
                onMouseLeave={textLeave}
              >
                <span>Ping Me on WhatsApp</span>
                <MessageCircleIcon size={20} className="group-hover:scale-110 transition-transform"/>
              </a>
              <a 
                href={`mailto:${contact_info.email}`} 
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
      <div className="mt-5 w-full bg-[#121212] border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative overflow-hidden group shadow-2xl">
         <div className="relative z-10 flex flex-col gap-2">
           <h2 className="text-2xl md:text-4xl text-white font-medium tracking-tight">
             Came down so far... <span className="text-red-600 font-medium">Wanna Grab a Coffee?</span>
           </h2>
           <div className="flex items-center gap-2 mt-2">
             <span className="text-sm font-medium text-gray-300">Find me at:</span>
             <a href={contact_info.location.mapUrl} target="_blank" rel="noopener noreferrer" className="text-base md:text-lg text-red-600 font-medium hover:underline cursor-pointer" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                {contact_info.location.coordinates}
             </a>
           </div>
         </div>
      </div>
    </section>
  );
}

