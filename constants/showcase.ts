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
  desc: string[];
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
    desc: "Developed an AI-powered tutoring platform with voice-interactive capabilities, enabling real-time personalized learning.",
    tags: ["Next.js", "React", "Typescript", "Supabase", "VAPI SDK", "Tailwind CSS"],
    color: "border-red-500",
    github: "https://github.com/StayTrash/Tutorly---AI-Tutor",
    live: "https://tutorly-liart.vercel.app/"
  },
  {
    title: "Scrubi",
    desc: "A modern web app with real-time collaboration, a virtual canvas for hand-drawn visuals and an interactive UI.",
    tags: ["Next.js", "React", "Typescript", "Convex", "Excalidraw Extension", "Tailwind CSS"],
    color: "border-red-500",
    github: "https://github.com/StayTrash/Scrubi",
    live: "https://scrubi.vercel.app/"
  },
  {
    title: "TrueClean",
    desc: "A cleaning services landing page website with a modern, responsive design and seamless user experience.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    color: "border-red-500",
    github: "https://github.com/StayTrash/cleaning-website",
    live: "https://cleaning-website-phi.vercel.app/"
  },
  {
    title: "KharidLo",
    desc: "Built an e-commerce web app with secure JWT auth, PayPal payments, and dynamic product management.",
    tags: ["React", "Redux Toolkit", "Express.js", "MongoDB", "Tailwind CSS"],
    color: "border-red-500",
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
    desc: [
      "Contributed to 6 repositories, merging 90+ pull requests and delivering 18k+ lines of code across frontend stack (Next.js, TypeScript).",
      "Improved frontend performance by implementing lazy loading, dynamic imports, code-splitting, and caching, reducing page load time by nearly 35% and improving FCP and LCP while significantly lowering TBT.",
      "Implemented an automated product tagging system to streamline classification for shipping partners, improving logistics accuracy and reducing manual intervention by 40%.",
      "Architected n8n-based AI agents for PDF data extraction, Google Analytics auto-reporting, and a website sales assistant, reducing manual operations by over 50% and speeding up support tasks by 30%."
    ]
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

