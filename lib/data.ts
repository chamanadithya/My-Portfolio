export const TECHS = [
  "HTML", "CSS", "JavaScript", "React", "Next.js", "Flutter", "Angular",
  "Java", "Python", "Spring", ".NET", "MySQL", "MongoDB", "PostgreSQL",
  "Git", "GitHub", "VS Code", "Figma", "Postman", "Docker", "WordPress",
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

export type GalleryItem = { label: string; kind: string };

export type Project = {
  slug: string;
  title: string;
  year: string;
  desc: string;
  tags: string[];
  ph: string;
  art: string;
  cover?: string;
  category: string;
  role: string;
  overview: string;
  contributions: string[];
  gallery: GalleryItem[];
  liveUrl?: string;
  repoUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "traces",
    title: "Traces — Mobile App & Web",
    year: "2025",
    desc: "A shipment-tracking platform for small and medium businesses — centralised shipment updates and real-time package tracking for customers. Built for sellers on platforms like Facebook Shops to streamline delivery and boost satisfaction.",
    tags: ["Product Design", "Mobile", "Web", "Dashboard"],
    ph: "app + dashboard shots",
    art: "map",
    cover: "/projects/traces.png",
    category: "Product Design · Mobile & Web",
    role: "UI/UX Designer & Frontend Developer",
    overview:
      "Traces is a shipment-tracking platform built for small and medium-sized businesses, enabling centralised management of shipment updates and real-time package tracking for their customers. It was designed especially for businesses selling through platforms like Facebook Shops — improving customer satisfaction and streamlining delivery management with an intuitive tracking dashboard.",
    contributions: [
      "Designed an intuitive tracking dashboard for centralised shipment management.",
      "Built real-time package tracking so customers can follow deliveries end to end.",
      "Tailored the experience for businesses selling through Facebook Shops.",
      "Focused on streamlining delivery management and boosting customer satisfaction.",
    ],
    gallery: [
      { label: "dashboard overview", kind: "dashboard" },
      { label: "tracking screen", kind: "map" },
      { label: "mobile app", kind: "phone" },
    ],
  },
  {
    slug: "teacher-file-sms",
    title: "Teacher Personal File & SMS Notification System",
    year: "2026 · Ongoing",
    desc: "A teacher-management system for Zonal Education Offices to manage personal files, salary increments, promotions and service records — automatically notifying teachers via SMS about approvals and key updates.",
    tags: ["Full-Stack", "Role-Based Auth", "SMS", "Records"],
    ph: "system screens",
    art: "records",
    cover: "/projects/teacher-sms.jpg",
    category: "Full-Stack System",
    role: "Designer & Developer",
    overview:
      "A teacher-management system for Zonal Education Offices to manage teacher personal files, salary increments, promotions and service records. The system lets office staff update teacher information while automatically notifying teachers via SMS about approved salary increments and important personal-file updates — built with a secure, role-based architecture and centralised record management.",
    contributions: [
      "Designed and developed the system to manage personal files, increments, promotions and service records.",
      "Enabled office staff to securely update teacher information.",
      "Automated SMS notifications for approved increments and key file updates.",
      "Built a secure role-based architecture with centralised record management.",
    ],
    gallery: [
      { label: "records dashboard", kind: "records" },
      { label: "teacher profile", kind: "profile" },
      { label: "notification log", kind: "sms" },
    ],
  },
  {
    slug: "nchanter-pos",
    title: "NChanter — POS & Inventory Management System",
    year: "2026 · Ongoing",
    desc: "A full-stack point-of-sale and inventory app with product management, order processing, barcode generation, authentication and dashboard analytics.",
    tags: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    ph: "pos + analytics",
    art: "pos",
    cover: "/projects/nchanter-pos.png",
    category: "Full-Stack Application",
    role: "Full-Stack Developer",
    overview:
      "NChanter is a full-stack point-of-sale and inventory-management application featuring product management, order processing, barcode generation, authentication and dashboard analytics. It was built end to end with Next.js, React, TypeScript, Prisma, PostgreSQL and Tailwind CSS.",
    contributions: [
      "Built product-management and order-processing flows.",
      "Implemented barcode generation and secure authentication.",
      "Created dashboard analytics for sales and inventory insight.",
      "Engineered the full stack with Next.js, React, TypeScript, Prisma & PostgreSQL.",
    ],
    gallery: [
      { label: "point of sale", kind: "pos" },
      { label: "inventory table", kind: "inventory" },
      { label: "analytics dashboard", kind: "chart" },
    ],
  },
  {
    slug: "ticket-booking-java",
    title: "Ticket Booking Application",
    year: "2024",
    desc: "A console-based ticket-booking system — book a seat, view the seat plan and print ticket info. Built on OOP principles with loops, 2D arrays and file handling to persist ticket data.",
    tags: ["Java", "OOP", "File Handling", "CLI"],
    ph: "java console app",
    art: "terminal",
    cover: "/projects/ticket-booking.jpg",
    category: "Java Application",
    role: "Developer",
    overview:
      "A console-based ticket-booking system with multiple functionalities — booking a seat, viewing the seat plan and printing ticket information. It applies OOP principles, loops (for / while / nested) and 2D arrays, with a file-handling layer that saves ticket information to a text file.",
    contributions: [
      "Implemented seat booking, seat-plan viewing and ticket printing.",
      "Applied OOP principles, loops and 2D arrays throughout.",
      "Added file handling to persist ticket information to a text file.",
    ],
    gallery: [
      { label: "console menu", kind: "terminal" },
      { label: "seat plan output", kind: "seats" },
    ],
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);

export const NAV_LINKS = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
