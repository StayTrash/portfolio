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

export const experience_data: Experience[] = [
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

