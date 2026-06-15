export const TECHS = [
  "Figma", "Angular", "React", "Next.js", "TypeScript", "Tailwind CSS",
  ".NET", "PostgreSQL", "Prisma", "Docker", "Azure", "WordPress", "Java", "Git",
];

export type Skill = { title: string; body: string; tags: string[]; dark?: boolean };

export const SKILLS: Skill[] = [
  {
    title: "UI/UX Design",
    body: "Designing intuitive, accessible interfaces — from research and wireframes to polished, prototyped flows.",
    tags: ["Figma", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    title: "Frontend Development",
    body: "Building responsive, component-driven interfaces with modern frameworks and a sharp eye for detail.",
    tags: ["Angular", "React", "Next.js", "TypeScript", "Tailwind"],
    dark: true,
  },
  {
    title: "Full-Stack & Backend",
    body: "Wiring up secure, data-driven apps end to end — APIs, databases and role-based architectures.",
    tags: [".NET", "Prisma", "PostgreSQL", "REST APIs"],
  },
  {
    title: "WordPress & Tooling",
    body: "Turning designs into fast, client-ready WordPress sites, plus the tools that keep delivery smooth.",
    tags: ["WordPress", "Elementor", "Docker", "Azure", "Java"],
  },
];

export type ExpItem = { role: string; org: string; desc: string; year: string };

export const EXPERIENCE: ExpItem[] = [
  {
    role: "Front End Developer & UI/UX Intern",
    org: "Enhanzer",
    desc: "Developed responsive web and mobile interfaces for the eZuite V5 Cloud ERP using Angular — focusing on clean UI, reusable components and an enhanced user experience. Contributed to scalable enterprise ERP modules while gaining hands-on experience with .NET, Microsoft Azure, Docker and collaborative software development.",
    year: "2025 — 2026",
  },
  {
    role: "WordPress Developer & UI/UX Designer",
    org: "Freelance",
    desc: "Created UI/UX designs in Figma and transformed them into responsive WordPress websites using Elementor. Customised themes, integrated plugins, optimised performance, and collaborated with clients to deliver visually appealing, functional web solutions on time.",
    year: "2023 — Now",
  },
  {
    role: "BSc (Hons) Computer Science",
    org: "University of Westminster",
    desc: "Building strong foundations in software engineering, data structures and problem-solving — applied directly to real, shipped projects alongside my studies.",
    year: "2023 — Now",
  },
];

export type Project = { title: string; year: string; desc: string; tags: string[]; ph: string };

export const PROJECTS: Project[] = [
  {
    title: "Traces — Mobile App & Web",
    year: "2025",
    desc: "A shipment-tracking platform for small and medium businesses — centralised shipment updates and real-time package tracking for customers. Built for sellers on platforms like Facebook Shops to streamline delivery and boost satisfaction.",
    tags: ["Product Design", "Mobile", "Web", "Dashboard"],
    ph: "app + dashboard shots",
  },
  {
    title: "Teacher File & SMS Notification System",
    year: "2026 · Ongoing",
    desc: "A teacher-management system for Zonal Education Offices to manage personal files, salary increments, promotions and service records — automatically notifying teachers via SMS about approvals and key updates.",
    tags: ["Full-Stack", "Role-Based Auth", "SMS", "Records"],
    ph: "system screens",
  },
  {
    title: "NChanter — POS & Inventory System",
    year: "2026 · Ongoing",
    desc: "A full-stack point-of-sale and inventory app with product management, order processing, barcode generation, authentication and dashboard analytics.",
    tags: ["Next.js", "React", "Prisma", "PostgreSQL", "Tailwind"],
    ph: "pos + analytics",
  },
  {
    title: "Ticket Booking Application",
    year: "2024",
    desc: "A console-based ticket-booking system — book a seat, view the seat plan and print ticket info. Built on OOP principles with loops, 2D arrays and file handling to persist ticket data.",
    tags: ["Java", "OOP", "File Handling", "CLI"],
    ph: "java console app",
  },
];

export const NAV_LINKS = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
