export interface Project {
  title: string;
  desc: string;
  tags: string[];
  color: string;
  github: string;
  live: string;
}

export interface Experience {
  role: string;
  company: string;
  date: string;
  desc: string;
}

export interface Education {
  degree: string;
  institution: string;
  date: string;
  desc: string;
}

export const showcase_projects: Project[] = [
  {
    title: "Tutorly",
    desc: "A futuristic shopping platform built with React and WebGL product views.",
    tags: ["React", "Three.js", "Stripe"],
    color: "border-red-500",
    github: "https://github.com/StayTrash/Tutorly---AI-Tutor",
    live: "https://tutorly-liart.vercel.app/"
  },
  {
    title: "Scrubi",
    desc: "Smart productivity app using OpenAI to auto-schedule your day.",
    tags: ["Next.js", "OpenAI API", "Tailwind"],
    color: "border-blue-500",
    github: "https://github.com/StayTrash/Scrubi",
    live: "https://scrubi.vercel.app/"
  },
  {
    title: "TrueClean",
    desc: "Real-time financial data visualization with websocket integrations.",
    tags: ["Vue", "D3.js", "Firebase"],
    color: "border-green-500",
    github: "https://github.com/StayTrash/cleaning-website",
    live: "https://cleaning-website-phi.vercel.app/"
  },
  {
    title: "KharidLo",
    desc: "Interactive visualization of social connections and network analysis.",
    tags: ["React Flow", "GraphQL", "Neo4j"],
    color: "border-purple-500",
    github: "https://github.com/StayTrash/KharidLo-e-commerce-",
    live: "https://kharidlo-b4cd.onrender.com/"
  }
];

export const experience_data: Experience[] = [
  // {
  //   role: "Senior Frontend Developer",
  //   company: "TechCorp Inc.",
  //   date: "2023 - Present",
  //   desc: "Leading the frontend architecture for enterprise dashboard solutions."
  // },
  {
    role: "Frontend Developer",
    company: "Relish Developers Solutions",
    date: "June 2025 - Present",
    desc: "Built award-winning immersive web experiences for global brands."
  }
];

export const education_data: Education[] = [
  {
    degree: "Bachelor of Technology",
    institution: "Indian Institute of Information Technology, Ranchi",
    date: "November 2022 - May 2026",
    desc: "Electronics and Communication Engineering"
  }
];

