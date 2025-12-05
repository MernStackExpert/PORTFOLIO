import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "ToyTopia - Toy Marketplace",
      category: "Frontend (React + Firebase)",
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1470&auto=format&fit=crop",
      description: "A modern toy marketplace with a user-friendly interface. Users can browse toys, search for specific items, filter by category and price, view details, and interact with dynamic components using Swiper JS.",
      techStack: ["React", "Firebase", "Tailwind", "DaisyUI", "Swiper JS", "AOS"],
      liveLink: "https://toytopiaasigement.netlify.app/",
      githubClient: "https://github.com/MernStackExpert/ToyTopia.git", 
      githubServer: null, 
    },
    {
      id: 2,
      title: "FinEase - Finance Manager",
      category: "Full Stack (MERN)",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
      description: "A comprehensive personal finance tracker. Features a real-time dashboard for income/expenses, insightful charts using Recharts, report filtering, and smooth Framer Motion animations.",
      techStack: ["Next.js", "MongoDB", "Express", "Node.js", "Recharts", "Framer Motion"],
      liveLink: "https://fineaseasigement.netlify.app/",
      githubClient: "https://github.com/MernStackExpert/Asigement-10-Client-Side.git", 
      githubServer: "https://github.com/MernStackExpert/Asigement-10-Server-Side.git", 
    },
    {
      id: 3,
      title: "BookHub - Online Library",
      category: "Full Stack (MENN)",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1482&auto=format&fit=crop",
      description: "A responsive online library application. Allows users to browse books, filter by author or category, search titles, and manage their personal book collection with secure authentication.",
      techStack: ["Next.js", "MongoDB", "Express", "Node.js", "Firebase", "Tailwind"],
      liveLink: "https://bookhub-plum.vercel.app/",
      githubClient: "https://github.com/MernStackExpert/BookHub-Client", 
      githubServer: "https://github.com/MernStackExpert/BookHub-Server.git", 
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A selection of my best work using modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative h-[450px] w-full rounded-2xl overflow-hidden border border-slate-700/50 shadow-xl bg-slate-900"
            >
              
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500">
                
                <div className="mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-300 bg-cyan-900/30 border border-cyan-500/30 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h3>

                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="text-xs text-slate-400 bg-slate-800/80 px-2 py-1 rounded border border-slate-700/50">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                    
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1 text-white text-sm font-medium hover:text-cyan-400 transition-colors group/link"
                    >
                      Live <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>

                    <a 
                      href={project.githubClient}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1 text-slate-400 text-sm font-medium hover:text-white transition-colors"
                    >
                      <Github size={16} /> Client
                    </a>

                    {project.githubServer && (
                      <a 
                        href={project.githubServer}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex items-center gap-1 text-slate-400 text-sm font-medium hover:text-white transition-colors"
                      >
                        <Github size={16} /> Server
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;