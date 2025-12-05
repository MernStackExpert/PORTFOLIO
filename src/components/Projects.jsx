import React, { useState } from 'react';
import { ExternalLink, Github, X, Code2, Layers, Zap } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "HealthPlus - Medical Booking",
      category: "Full Stack (MERN)",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      description: "A comprehensive doctor appointment booking system with dashboard functionality for patients and doctors.",
      techStack: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      details: {
        about: "HealthPlus addresses the complexity of booking medical appointments. It features secure user authentication, real-time slot management, and an admin dashboard.",
        challenges: "Handling real-time availability of doctors and managing timezone conflicts for appointments was the biggest challenge. Implementing secure JWT authentication for different user roles (Doctor/Patient/Admin) was also complex.",
        improvements: "I plan to add a real-time chat system between doctor and patient using Socket.io and integrate a payment gateway for consultation fees."
      }
    },
    {
      id: 2,
      title: "EcoTrack - Waste Management",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      description: "An eco-friendly platform connecting waste collectors with households to promote recycling and cleaner environments.",
      techStack: ["React.js", "Firebase", "DaisyUI", "Recharts"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      details: {
        about: "EcoTrack helps users schedule waste pickups and track their recycling impact. It visualizes data using charts to motivate users.",
        challenges: "Designing an intuitive UI for non-tech-savvy users was difficult. Integrating map services to show collector locations required learning complex API documentation.",
        improvements: "Future updates will include a mobile app version using React Native and an AI-based waste classification feature using image recognition."
      }
    },
    {
      id: 3,
      title: "3D Portfolio Website",
      category: "Frontend & Animation",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      description: "A personal portfolio website featuring immersive 3D elements and smooth GSAP animations.",
      techStack: ["React.js", "Three.js", "GSAP", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      details: {
        about: "This project showcases my frontend skills, specifically in 3D web technologies. It uses React Three Fiber for the 3D scene and GSAP for scroll animations.",
        challenges: "Optimizing 3D models to load fast on mobile devices without lagging was a major hurdle. I had to use compression techniques and lazy loading.",
        improvements: "I want to add more interactive mini-games within the portfolio and support VR mode for a more immersive experience."
      }
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Check out some of the projects I've built using the MERN stack and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="text-xs text-slate-300 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs text-slate-300 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    View Details
                  </button>
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg border border-slate-700 transition-colors"
                    title="Live Link"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg border border-slate-700 transition-colors"
                    title="GitHub Repo"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl shadow-cyan-500/10 animate-fade-in-up">
            
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-red-500/20 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:bg-gradient-to-r"></div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span key={idx} className="text-xs font-medium text-cyan-300 bg-cyan-900/30 px-3 py-1 rounded-full border border-cyan-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-2">
                      <Code2 size={20} className="text-purple-400" /> About Project
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {selectedProject.details.about}
                    </p>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-2">
                      <Layers size={20} className="text-red-400" /> Challenges
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {selectedProject.details.challenges}
                    </p>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-2">
                      <Zap size={20} className="text-yellow-400" /> Future Plans
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {selectedProject.details.improvements}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a 
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-xl font-medium transition-all"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a 
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-xl font-medium border border-slate-600 transition-all"
                  >
                    <Github size={18} /> Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;