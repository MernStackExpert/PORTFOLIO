import React from "react";
import { useParams, Link } from "react-router";
import { Github, ExternalLink, ArrowLeft, Code2, Lightbulb, Rocket, Layout } from "lucide-react";
import projectsData from "../JSON/projectsData";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Project Not Found!</h2>
          <Link to="/" className="text-cyan-400 hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={20} /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 py-10 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors font-medium"
        >
          <ArrowLeft size={20} /> Back to Projects
        </Link>

        <div className="mb-10">
          <div className="relative group">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-64 md:h-[450px] object-cover rounded-3xl border border-slate-700/50 shadow-2xl mb-8"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60 rounded-3xl"></div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-cyan-400 text-sm font-bold tracking-wider uppercase bg-cyan-400/10 px-3 py-1 rounded-md border border-cyan-400/20">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-4">{project.title}</h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="bg-slate-800/80 text-slate-300 border border-slate-700 px-4 py-1.5 rounded-xl text-sm font-semibold">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-16">
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-cyan-500/20"
          >
            <ExternalLink size={20} /> Live Preview
          </a>
          <a 
            href={project.githubClient} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-2xl font-bold transition-all border border-slate-700 shadow-xl"
          >
            <Github size={20} /> Client Repo
          </a>
          {project.githubServer && (
            <a 
              href={project.githubServer} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-2xl font-bold transition-all border border-slate-700 shadow-xl"
            >
              <Github size={20} /> Server Repo
            </a>
          )}
        </div>

        <div className="grid gap-6 md:gap-10">
          <section className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-3xl border border-slate-800/50 hover:border-cyan-500/30 transition-colors">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Code2 className="text-cyan-400" /> Project Description
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg">{project.description}</p>
          </section>

          {project.features && (
            <section className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-3xl border border-slate-800/50 hover:border-blue-500/30 transition-colors">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Layout className="text-blue-400" /> Key Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-400">
                    <span className="text-cyan-500 mt-1">•</span> {feature}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-3xl border border-slate-800/50 hover:border-yellow-500/30 transition-colors">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Lightbulb className="text-yellow-400" /> Challenges Faced
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg">{project.challenges}</p>
          </section>

          <section className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-3xl border border-slate-800/50 hover:border-purple-500/30 transition-colors">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Rocket className="text-purple-400" /> Future Improvement & Plans
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg">{project.futurePlans}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;