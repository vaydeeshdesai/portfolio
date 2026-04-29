// ============================================================
// Portfolio Data — all content sourced here, zero hardcoded
// strings in JSX components.
// TODO: Update project GitHub repo URLs with exact repo links
// once repos are confirmed (currently using profile fallback).
// ============================================================

export interface PersonalInfo {
  name: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  tagline: string;
  coopAvailability: string;
  typewriterStrings: string[];
}

export interface Experience {
  company: string;
  role: string;
  date: string;
  location: string;
  bullets: string[];
  tech: string[];
}

export interface Project {
  name: string;
  date: string;
  description: string;
  bullets: string[];
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Education {
  university: string;
  college: string;
  degree: string;
  dates: string;
  location: string;
  gpa: string;
  courses: string[];
  certifications: Certification[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export const personalInfo: PersonalInfo = {
  name: "Vaydeesh Desai",
  email: "desai.vay@northeastern.edu",
  github: "github.com/vaydeeshdesai",
  linkedin: "linkedin.com/in/vaydeesh-desai",
  resumeUrl: "/resume.pdf",
  tagline:
    "I build precise, high-performance systems where financial data meets software engineering.",
  coopAvailability: "Co-op · Jul–Dec 2026",
  typewriterStrings: [
    "Software Engineer",
    "Full-Stack Developer",
    "Fintech Engineer",
    "CS + Finance @ Northeastern",
  ],
};

export const experiences: Experience[] = [
  {
    company: "VAK Sustainable Computing Lab @ Northwestern University",
    role: "Undergraduate Researcher",
    date: "April 2025 – June 2025",
    location: "Evanston, IL",
    bullets: [
      "Built and validated a real-time C/C++ + Python data pipeline processing raw sensor signals into clean, analysis-ready datasets for a 5-person research team",
      "Eliminated all pipeline failures across 50+ iterative test cycles by isolating synchronization and data integrity issues",
      "Translated technical findings into documentation and presentations that guided confident design decisions for a multidisciplinary team",
    ],
    tech: ["Python", "C/C++", "Data Pipelines", "Research"],
  },
  {
    company: "Northeastern Electric Racing (FinishLine Platform)",
    role: "Web Developer",
    date: "September 2024 – December 2024",
    location: "Boston, MA",
    bullets: [
      "Shipped TypeScript / ReactJS / Prisma features on FinishLine, a full-stack platform serving 100+ engineers",
      "Established a requirements-first process that cut post-deployment rework to zero",
    ],
    tech: ["TypeScript", "React", "Prisma", "Full-Stack"],
  },
  {
    company: "Wockhardt Hospitals Limited",
    role: "Data Intern",
    date: "June 2023 – July 2023",
    location: "Mumbai, India",
    bullets: [
      "Analyzed operational datasets with Python, Pandas, and Matplotlib — producing 10+ visualizations surfacing actionable insights for non-technical decision-makers",
      "Applied data analysis in a regulated environment with awareness of data governance and privacy standards",
    ],
    tech: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
  },
];

export const projects: Project[] = [
  {
    name: "QuantView — Portfolio Analytics & Risk Dashboard",
    date: "September 2025 – January 2026",
    description:
      "A full-stack AI-assisted analytics platform for portfolio risk analysis, integrating LLM APIs for natural language insight generation.",
    bullets: [
      "Risk engine computing 8 financial metrics: Sharpe ratio, beta, VaR, max drawdown, volatility",
      "Live ingestion of 250+ daily data points per asset; vectorized NumPy/Pandas pipeline",
      "Fully containerized with Docker; complete system architecture documentation",
    ],
    tech: [
      "FastAPI",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Pandas",
      "NumPy",
      "Docker",
      "LLM APIs",
    ],
    // TODO: Update to exact QuantView repo URL
    githubUrl: "https://github.com/vaydeeshdesai",
  },
  {
    name: "Inventory & Customer Management System",
    date: "August 2022 – June 2024",
    description:
      "A fully functional desktop application built for an IB Internal Assessment, supporting CRUD operations across relational entities with full authentication.",
    bullets: [
      "CRUD operations across 2 relational entities with 5+ sort/filter operations",
      "Authentication workflow: account creation, login validation, password recovery",
      "10+ wireframed screens in Figma translated to Tkinter with zero feature gaps",
    ],
    tech: ["Python", "Tkinter", "SQLite", "OOP", "Figma"],
    // TODO: Update to exact repo URL
    githubUrl: "https://github.com/vaydeeshdesai",
  },
];

export const education: Education = {
  university: "Northeastern University",
  college: "Khoury College of Computer Science",
  degree: "B.S. Computer Science & Business Administration · Finance Concentration",
  dates: "September 2024 – May 2028",
  location: "Boston, MA",
  gpa: "3.93 GPA · Dean's List",
  courses: [
    "Program Design I",
    "Program Design II",
    "Discrete Structures",
    "Foundations of Data Science",
    "Mathematical Reasoning",
    "Financial Accounting",
    "Microeconomics",
    "Macroeconomics",
  ],
  certifications: [
    {
      name: "Analysing & Visualising Data the Google Way",
      issuer: "Google Cloud",
    },
  ],
};
