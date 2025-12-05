import React, { useState } from 'react';
import { Terminal, Database, Layout, Wrench, Heart, Layers, Cpu, Code2, Globe, Sparkles } from 'lucide-react';

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skillsData = [
    {
      category: "Frontend",
      icon: <Layout className="w-8 h-8" />,
      color: "from-cyan-400 to-blue-500",
      bg: "bg-cyan-500/10",
      skills: ["JavaScript (ES6+)", "React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "DaisyUI"]
    },
    {
      category: "Backend",
      icon: <Terminal className="w-8 h-8" />,
      color: "from-green-400 to-emerald-600",
      bg: "bg-green-500/10",
      skills: ["Node.js", "Express.js", "REST API", "JWT (JSON Web Token)"]
    },
    {
      category: "Database",
      icon: <Database className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-500",
      bg: "bg-yellow-500/10",
      skills: ["MongoDB", "MongoDB Atlas"]
    },
    {
      category: "Tools",
      icon: <Wrench className="w-8 h-8" />,
      color: "from-purple-400 to-pink-500",
      bg: "bg-purple-500/10",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Firebase", "Netlify", "Vercel", "Chrome DevTools"]
    },
    {
      category: "Soft Skills",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-400 to-rose-600",
      bg: "bg-red-500/10",
      skills: ["Time Management", "Problem Solving", "Teamwork", "Fast Learner", "Communication"]
    },
    {
      category: "Others",
      icon: <Layers className="w-8 h-8" />,
      color: "from-indigo-400 to-violet-600",
      bg: "bg-indigo-500/10",
      skills: ["Axios", "Fetch API", "TanStack Query", "Cloudinary", "AOS", "Framer Motion"]
    }
  ];

  return (
    <div className="min-h-screen  text-white py-20 px-4 sm:px-6 lg:px-8 font-sans selection:bg-cyan-500/30">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-20 relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight relative z-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
              Tech
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Stack
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Crafting digital experiences with a modern toolkit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                group relative p-1 rounded-2xl transition-all duration-500 ease-out
                ${hoveredIndex === index ? 'scale-[1.02] -translate-y-1' : 'hover:bg-white/5'}
              `}
            >
              <div className={`
                absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 
                ${hoveredIndex === index ? 'opacity-100 blur-sm' : 'opacity-0'}
                transition-opacity duration-500
              `}></div>

              <div className="relative h-full bg-[#111] border border-white/5 rounded-xl p-8 overflow-hidden z-10 flex flex-col">
                
                <div className="absolute top-0 right-0 p-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors duration-700"></div>

                <div className="flex items-center justify-between mb-8 relative">
                  <div className={`p-3 rounded-lg ${category.bg} text-white ring-1 ring-white/10 group-hover:ring-white/30 transition-all duration-300`}>
                    {React.cloneElement(category.icon, { className: "w-6 h-6" })}
                  </div>
                  <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-6 text-slate-100 group-hover:text-white transition-colors">
                  {category.category}
                </h3>

                <div className="flex flex-wrap gap-2 relative mt-auto">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="
                        px-3 py-1.5 
                        text-sm font-medium 
                        text-slate-400 
                        bg-white/5 
                        border border-white/5 
                        rounded-md
                        hover:text-white 
                        hover:bg-white/10 
                        hover:border-white/20
                        transition-all duration-300
                        cursor-default
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Code2 className="w-4 h-4" />
            <span>Built with React & Tailwind</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>Modern Web Standards</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Performance Optimized</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;