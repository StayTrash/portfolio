import { IconType } from 'react-icons';
import { 
  SiJavascript, SiTypescript, SiHtml5, SiCss3,
  SiIntellijidea, SiGit, SiGithub, SiDocker,
  SiNodedotjs, SiN8N, SiPostman, SiReact, SiNextdotjs, SiExpress,
  SiRedux, SiTailwindcss, SiShadcnui, SiAmazon, SiMongodb, SiPostgresql,
  SiMysql, SiPrisma, SiSupabase
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export interface TechItem {
  icon: IconType;
  color: string;
  label: string;
  brandColor?: string;
}

export const tech_stack_items: TechItem[] = [
  { icon: FaJava, color: "text-[#ED8B00]", label: "Java", brandColor: "#ED8B00" },
  { icon: SiJavascript, color: "text-[#F7DF1E]", label: "JavaScript", brandColor: "#F7DF1E" },
  { icon: SiTypescript, color: "text-[#3178C6]", label: "TypeScript", brandColor: "#3178C6" },
  { icon: FaDatabase, color: "text-[#336791]", label: "SQL", brandColor: "#336791" },
  { icon: SiHtml5, color: "text-[#E34F26]", label: "HTML", brandColor: "#E34F26" },
  { icon: SiCss3, color: "text-[#1572B6]", label: "CSS", brandColor: "#1572B6" },
  { icon: VscCode, color: "text-[#007ACC]", label: "VS Code", brandColor: "#007ACC" },
  { icon: SiIntellijidea, color: "text-[#000000]", label: "IntelliJ IDEA", brandColor: "#000000" },
  { icon: SiGit, color: "text-[#F05032]", label: "Git", brandColor: "#F05032" },
  { icon: SiGithub, color: "text-white", label: "GitHub", brandColor: "#181717" },
  { icon: SiDocker, color: "text-[#2496ED]", label: "Docker", brandColor: "#2496ED" },
  { icon: SiNodedotjs, color: "text-[#339933]", label: "Node.js", brandColor: "#339933" },
  { icon: SiN8N, color: "text-[#FF6D5A]", label: "n8n", brandColor: "#FF6D5A" },
  { icon: SiPostman, color: "text-[#FF6C37]", label: "Postman", brandColor: "#FF6C37" },
  { icon: SiReact, color: "text-[#61DAFB]", label: "React", brandColor: "#61DAFB" },
  { icon: SiNextdotjs, color: "text-white", label: "Next.js", brandColor: "#000000" },
  { icon: SiExpress, color: "text-white", label: "Express.js", brandColor: "#000000" },
  { icon: SiRedux, color: "text-[#764ABC]", label: "Redux Toolkit", brandColor: "#764ABC" },
  { icon: SiTailwindcss, color: "text-[#06B6D4]", label: "Tailwind CSS", brandColor: "#06B6D4" },
  { icon: SiShadcnui, color: "text-[#000000]", label: "Shadcn UI", brandColor: "#000000" },
  { icon: SiAmazon, color: "text-[#FF9900]", label: "AWS", brandColor: "#FF9900" },
  { icon: SiMongodb, color: "text-[#47A248]", label: "MongoDB", brandColor: "#47A248" },
  { icon: SiPostgresql, color: "text-[#4169E1]", label: "PostgreSQL", brandColor: "#4169E1" },
  { icon: SiMysql, color: "text-[#4479A1]", label: "MySQL", brandColor: "#4479A1" },
  { icon: SiPrisma, color: "text-[#2D3748]", label: "Prisma", brandColor: "#2D3748" },
  { icon: SiSupabase, color: "text-[#3ECF8E]", label: "Supabase", brandColor: "#3ECF8E" }
];

export const work_tags = [
  "UI/UX Design", 
  "Websites", 
  "DevOps", 
  "Cloud Services", 
  "Testing and QA", 
  "API Development", 
  "Web Applications", 
  "Security Solutions", 
  "Frontend Development", 
  "Backend Development", 
  "Database Management", 
  "E-commerce Solutions", 
  "Performance Optimization", 
  "Documentation and Technical Writing"
];

export const social_icons = [
  { name: "Mail", href: "mailto:shubhamkumar200308@gmail.com" },
  { name: "X", href: "https://x.com/shubham__0_5" },
  { name: "Github", href: "https://github.com/StayTrash" },
  { name: "Linkedin", href: "https://www.linkedin.com/in/shubham-kumar-8944b325b/" },
  { name: "Instagram", href: "https://instagram.com" },
  { name: "Layers", href: "#" },
  { name: "Phone", href: "tel:+91-8521298191" },
  { name: "MessageCircle", href: "https://wa.me/8521298191" }
];

export const contact_info = {
  email: "shubhamkumar200308@gmail.com",
  whatsapp: "https://wa.me/8521298191",
  location: {
    coordinates: "23.4133° N, 85.4044° E",
    mapUrl: "https://www.google.com/maps?q=23.4133157,85.4044843"
  }
};

export const role_variations = [
  "Creative Developer",
  "Full Stack Developer",
  "Problem Solver",
  // "Code Artist",
  "Tech Enthusiast",
  "UI/UX Designer",
  "Web Architect",
  "Innovation Seeker",
  // "Digital Craftsman",
  "Solution Builder"
];

