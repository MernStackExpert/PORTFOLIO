import React from "react";
import { Github, ArrowUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && AOS.refreshHard());
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "ToyTopia - Toy Marketplace",
      category: "Frontend (React + Firebase)",
      image:
        "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1470&auto=format&fit=crop",
      description:
        "A modern toy marketplace with interactive UI, filters, search, and Swiper JS.",
      techStack: ["React", "Firebase", "Tailwind", "DaisyUI", "Swiper JS", "AOS"],
      liveLink: "https://toytopiaasigement.netlify.app/",
      githubClient: "https://github.com/MernStackExpert/ToyTopia.git",
    },
    {
      id: 2,
      title: "FinEase - Finance Manager",
      category: "Full Stack (MERN)",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
      description:
        "A complete finance tracker with dashboard, charts, filters & animations.",
      techStack: [
        "Next.js",
        "MongoDB",
        "Express",
        "Node.js",
        "Recharts",
        "Framer Motion",
      ],
      liveLink: "https://fineaseasigement.netlify.app/",
      githubClient:
        "https://github.com/MernStackExpert/Asigement-10-Client-Side.git",
      githubServer:
        "https://github.com/MernStackExpert/Asigement-10-Server-Side.git",
    },
    {
      id: 3,
      title: "BookHub - Online Library",
      category: "Full Stack (MENN)",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1482&auto=format&fit=crop",
      description:
        "A Next.js-based online library with search, authentication & responsive UI.",
      techStack: ["Next.js", "MongoDB", "Express", "Node.js", "Firebase", "Tailwind"],
      liveLink: "https://bookhub-plum.vercel.app/",
      githubClient: "https://github.com/MernStackExpert/BookHub-Client",
      githubServer: "https://github.com/MernStackExpert/BookHub-Server.git",
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div data-aos="zoom-in" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A selection of my best work using modern technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
              className="group relative rounded-2xl overflow-hidden border border-slate-700/40 bg-slate-900 
                         shadow-lg hover:shadow-cyan-900/20 transition-all duration-500"
            >
              {/* Image */}
              <div className="w-full h-64 sm:h-60 md:h-56 lg:h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="px-3 py-1 text-xs font-semibold text-cyan-300 bg-cyan-900/20 border border-cyan-500/20 rounded-full">
                  {project.category}
                </span>

                <h3 className="text-xl font-semibold text-white mt-3">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-5">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="flex items-center gap-1 text-white text-sm font-medium hover:text-cyan-400"
                  >
                    Live <ArrowUpRight size={16} />
                  </a>

                  <a
                    href={project.githubClient}
                    target="_blank"
                    className="flex items-center gap-1 text-slate-400 text-sm hover:text-white"
                  >
                    <Github size={16} /> Client
                  </a>

                  {project.githubServer && (
                    <a
                      href={project.githubServer}
                      target="_blank"
                      className="flex items-center gap-1 text-slate-400 text-sm hover:text-white"
                    >
                      <Github size={16} /> Server
                    </a>
                  )}
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
