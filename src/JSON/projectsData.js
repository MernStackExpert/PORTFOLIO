const projectsData = [
  {
    id: 1,
    title: "LoanLink - Microloan System",
    category: "Full Stack (MERN)",
    image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=1373&auto=format&fit=crop",
    description: "A comprehensive full-stack microloan platform designed to bridge the gap between financial organizations and borrowers with Stripe payment integration.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Firebase", "JWT", "Recharts"],
    liveLink: "https://micro-loan.netlify.app/",
    githubClient: "https://github.com/MernStackExpert/Microloan.git",
    githubServer: "https://github.com/MernStackExpert/Microloan-Backend.git",
    challenges: "Implementing a multi-role dashboard (Admin, Manager, User) while maintaining secure API access via JWT was a major challenge. Syncing Stripe's payment success callbacks with the backend application logic also required deep debugging.",
    futurePlans: "Introduce an automated credit scoring system based on borrowing history and implement a real-time chat feature between loan officers and borrowers using Socket.io.",
    features: [
      "Role-based Access Control (Admin, Manager, User)",
      "Secure Payment integration with Stripe",
      "Interactive data visualization with Recharts",
      "JWT Authentication with HttpOnly cookies"
    ]
  },
  {
    id: 2,
    title: "BookHub - Online Library",
    category: "Full Stack (Next.js)",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1482&auto=format&fit=crop",
    description: "A modern, responsive online library application where users can manage their personal book collections with a polished dark-theme UI.",
    techStack: ["Next.js", "Express", "MongoDB", "Firebase", "Tailwind CSS", "DaisyUI", "ImgBB API"],
    liveLink: "https://bookhub-plum.vercel.app/",
    githubClient: "https://github.com/MernStackExpert/BookHub.git", 
    githubServer: "https://github.com/MernStackExpert/BookHub-Server.git",
    challenges: "Handling dynamic routing in Next.js App Router for book details and implementing image uploads to ImgBB while keeping the form submission fast was quite tricky. Managing the state of book collections during real-time search was another hurdle.",
    futurePlans: "Integrate a PDF reader for book previews, add a peer-to-peer book lending system, and implement a user rating/review module for each book.",
    features: [
      "Dynamic book detail pages with 3D effects",
      "ImgBB integration for book cover uploads",
      "Real-time search and category filtering",
      "Protected dashboard for collection management"
    ]
  },
  {
    id: 3,
    title: "FinEase - Finance Manager",
    category: "Full Stack (MERN)",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
    description: "A professional-grade financial application for tracking daily expenses, income trends, and personal wealth management with advanced analytics.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Framer Motion", "Recharts", "Firebase"],
    liveLink: "https://fineaseasigement.netlify.app/", 
    githubClient: "https://github.com/MernStackExpert/Asigement-10-Client-Side.git",
    githubServer: "https://github.com/MernStackExpert/Asigement-10-Server-Side.git",
    challenges: "Creating a high-performance server-side search with debouncing for large transaction datasets. Designing a mobile-first responsive sidebar drawer that works seamlessly with high-contrast Dark/Light mode transitions.",
    futurePlans: "Add AI-powered spending alerts, multi-currency support for international users, and a feature to export financial statements in PDF or Excel format.",
    features: [
      "Advanced Dashboard with real-time stats",
      "Dynamic Bar and Area charts for trends",
      "Server-side search and multi-criteria filtering",
      "Dual-mode profile picture management"
    ]
  }
];

export default projectsData;