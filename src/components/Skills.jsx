import React, { useState } from 'react';
import { Terminal, Database, Layout, Wrench, Heart, Layers, Code2, Globe, Sparkles } from 'lucide-react';

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // SVG Components for Real Logos
  const Logos = {
    React: () => (
      <svg viewBox="-10.5 -9.45 21 18.9" className="w-full h-full text-[#61DAFB] fill-current">
        <circle cx="0" cy="0" r="2" fill="#61DAFB"></circle>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="10" ry="4.5"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
        </g>
      </svg>
    ),
    HTML5: () => (
      <svg viewBox="0 0 512 512" className="w-full h-full text-[#E34F26] fill-current">
        <path d="M71,460 L30,0 L481,0 L440,460 L255,512 L71,460 Z M256,472 L405,431 L440,37 L71,37 L106,431 L256,472 Z" fill="currentColor"></path>
        <path d="M256,208 L181,208 L176,150 L256,150 L256,94 L115,94 L128,264 L256,264 L256,208 Z M256,355 L255,355 L192,338 L188,293 L132,293 L141,382 L255,414 L256,414 L256,355 Z" fill="currentColor"></path>
      </svg>
    ),
    CSS3: () => (
      <svg viewBox="0 0 512 512" className="w-full h-full text-[#1572B6] fill-current">
        <path d="M30,0 L481,0 L440,460 L255,512 L71,460 L30,0 Z M256,472 L405,431 L440,37 L71,37 L106,431 L256,472 Z" fill="currentColor" fillOpacity="0.5"></path>
        <path d="M256,94 L115,94 L119,150 L256,150 L256,94 Z M256,264 L256,208 L181,208 L176,150 L256,150 L256,94 L256,94 L256,94 L256,94 L115,94 L115,94 L128,264 L256,264 Z M256,355 L255,355 L192,338 L188,293 L132,293 L141,382 L255,414 L256,414 L256,355 Z" fill="currentColor"></path>
      </svg>
    ),
    JS: () => (
      <svg viewBox="0 0 1024 1024" className="w-full h-full text-[#F7DF1E] fill-current bg-black rounded-sm">
        <path d="M0,0 L1024,0 L1024,1024 L0,1024 L0,0 Z" fill="#F7DF1E" fillOpacity="0"></path>
        <path d="M224,0 L224,1024 L1024,1024 L1024,0 L224,0 Z" fill="#F7DF1E" fillOpacity="0"></path>
        <path d="M640,256 L640,768 L896,768 L896,256 L640,256 Z M256,256 L256,768 L512,768 L512,256 L256,256 Z" fill="none"></path>
        <text x="160" y="800" fontSize="600" fontFamily="Arial" fontWeight="bold" fill="#F7DF1E">JS</text>
      </svg>
    ),
    Tailwind: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full text-[#38B2AC] fill-current">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z"></path>
      </svg>
    ),
    Node: () => (
      <svg viewBox="0 0 32 32" className="w-full h-full text-[#339933] fill-current">
        <path d="M16,0 L2,8 L2,24 L16,32 L30,24 L30,8 L16,0 Z M22,10 L16,6.5 L10,10 L10,17 L16,20.5 L22,17 L22,10 Z" fill="currentColor"></path>
      </svg>
    ),
    Mongo: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full text-[#47A248] fill-current">
        <path d="M17.193 10.333c.18-.393.153-.56.033-.767-.327-.58-2.68-4.293-4.52-4.473-.347-.033-.747.26-.827.353-.18.234-.674 1.227-.854 2.894l-.066 3.013c.033.434.333 1.84.447 2.14.073.2.16.293.42.273 1.767-.14 4.54-1.22 5.367-3.433zM11.607 16.7c.027.28.2.3.453.287.427-.02 2.373-.187 3.373-.827.027-.02.047-.04.067-.06-.187.327-.474.753-.88 1.147-1.374 1.32-2.827 1.1-2.927 1.08-.18-.033-.207-.373-.086-1.627zM11.96 4.38c.033.02.507 1.62.533 3.653 0 0-.02-2.587-.533-3.653zm1.14 18.06c-.167.36-1.3.8-1.267.067 0-.02.047-3.267.047-3.267s-.06 2.36 1.22 3.2z"></path>
        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="none"></path>
      </svg>
    ),
    Git: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full text-[#F05032] fill-current">
        <path d="M23.546 10.93L13.067.452c-.6-.6-1.575-.6-2.175 0L.452 10.93c-.6.6-.6 1.575 0 2.175l10.479 10.479c.6.6 1.575.6 2.175 0l10.44-10.44c.601-.6.601-1.575 0-2.175zM10.27 19.531a2.532 2.532 0 110-5.064 2.532 2.532 0 010 5.064zm.76-7.85c-1.393 0-2.532 1.139-2.532 2.532 0 .611.22 1.173.582 1.611l-2.43 2.43a2.53 2.53 0 01-.194-3.53l1.838-1.838a2.527 2.527 0 01-.165-.898V7.589a2.532 2.532 0 112.9 0v4.399c0 .16-.027.315-.078.463l1.983 1.983a2.531 2.531 0 013.56-3.56l-5.464-5.465z"></path>
      </svg>
    ),
    GitHub: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full text-white fill-current">
        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12"></path>
      </svg>
    ),
    VSCode: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full text-[#007ACC] fill-current">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.245.08L.272 7.852a1.001 1.001 0 0 0-.259 1.107l6.636 10.457L.013 29.84a1.002 1.002 0 0 0 .259 1.108l1.396 1.767a.998.998 0 0 0 1.245.08l4.12-3.128 9.46 8.63a1.49 1.49 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 34.848V3.942a1.5 1.5 0 0 0-.85-1.355zM3.483 13.992l-1.36-2.14 1.36-2.143v4.283zM18 32.55L6.61 22.09l11.39-8.73V32.55zm0-23.36l-11.39-8.73 11.39-10.46v19.19z"></path>
      </svg>
    ),
    Firebase: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full text-[#FFCA28] fill-current">
        <path d="M3.89 15.672L6.255.461A.544.544 0 017.27.428l2.366 12.895-5.746 2.349z" fill="#FFC107"></path>
        <path d="M12.984 5.922L10.37 8.575l3.242 8.766 2.67-1.488-3.3-9.93z" fill="#FFA000"></path>
        <path d="M16.92 10.825l-.105-.333L13.626 2.58a.542.542 0 00-1.01.077L9.838 12.997l7.082 2.766z" fill="#FFCA28"></path>
        <path d="M12.015 23.107l-8.125-4.57 3.524-11.233.003-.008L3.89 15.672l8.125 4.568 9.412-5.385-2.507-7.228-6.905 15.48z" fill="#FFA000"></path>
      </svg>
    )
  };

  const skillsData = [
    {
      category: "Frontend",
      icon: <Layout className="w-12 h-12" />,
      gradientColors: "from-cyan-400 via-blue-500 to-cyan-400",
      iconColor: "text-cyan-400",
      skills: ["JavaScript", "React.js", "Next.js", "HTML5", "CSS3", "Tailwind", "Bootstrap", "DaisyUI"]
    },
    {
      category: "Backend",
      icon: <Terminal className="w-12 h-12" />,
      gradientColors: "from-emerald-400 via-green-500 to-emerald-400",
      iconColor: "text-emerald-400",
      skills: ["Node.js", "Express.js", "REST API", "JWT"]
    },
    {
      category: "Database",
      icon: <Database className="w-12 h-12" />,
      gradientColors: "from-yellow-400 via-orange-500 to-yellow-400",
      iconColor: "text-yellow-400",
      skills: ["MongoDB", "MongoDB Atlas"]
    },
    {
      category: "Tools",
      icon: <Wrench className="w-12 h-12" />,
      gradientColors: "from-purple-400 via-pink-500 to-purple-400",
      iconColor: "text-purple-400",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Firebase", "Netlify", "Vercel"]
    },
    {
      category: "Soft Skills",
      icon: <Heart className="w-12 h-12" />,
      gradientColors: "from-red-400 via-rose-500 to-red-400",
      iconColor: "text-red-400",
      skills: ["Time Management", "Problem Solving", "Teamwork", "Fast Learner"]
    },
    {
      category: "Others",
      icon: <Layers className="w-12 h-12" />,
      gradientColors: "from-indigo-400 via-violet-500 to-indigo-400",
      iconColor: "text-indigo-400",
      skills: ["Axios", "Fetch API", "TanStack Query", "Cloudinary", "Framer"]
    }
  ];

  // Using the Real Logos for the Slider
  const sliderIcons = [
    <Logos.HTML5 />, 
    <Logos.CSS3 />, 
    <Logos.JS />, 
    <Logos.React />, 
    <Logos.Tailwind />, 
    <Logos.Node />, 
    <Logos.Mongo />, 
    <Logos.Git />, 
    <Logos.GitHub />, 
    <Logos.VSCode />,
    <Logos.Firebase />
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white py-12 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden relative selection:bg-cyan-500/30">
      
      <div className="w-full mb-20 relative overflow-hidden mask-linear-fade">
        <div className="flex w-max animate-infinite-scroll hover:pause">
          {[...sliderIcons, ...sliderIcons, ...sliderIcons, ...sliderIcons].map((icon, index) => (
            <div key={index} className="mx-8 p-4 w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-110 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              {/* Render the icon directly */}
              <div className="w-12 h-12">
                {icon}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center relative">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 via-slate-400 to-slate-200">
              Technical
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 ml-3">
              Proficiency
            </span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-8 shadow-[0_0_20px_rgba(6,182,212,0.5)]"></div>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Exploration of my technical capabilities and modern development stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative h-full perspective-1000"
            >
              <div className={`
                absolute -inset-0.5 rounded-2xl opacity-50 blur-md transition-all duration-500
                bg-gradient-to-r ${category.gradientColors}
                ${hoveredIndex === index ? 'opacity-100 blur-lg scale-105' : 'opacity-0'}
              `}></div>

              <div className="relative h-full bg-[#0a0a0a] rounded-2xl p-6 md:p-8 border border-white/10 flex flex-col transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl overflow-hidden">
                
                <div className={`absolute top-0 right-0 p-24 bg-gradient-to-br ${category.gradientColors} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2`}></div>

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${category.iconColor} ring-1 ring-white/5 group-hover:ring-white/20 group-hover:scale-110 transition-all duration-500`}>
                    {React.cloneElement(category.icon, { className: "w-8 h-8" })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 tracking-wide group-hover:text-white transition-colors">
                      {category.category}
                    </h3>
                    <div className={`h-0.5 w-8 rounded-full bg-gradient-to-r ${category.gradientColors.split(' ')[0]} to-transparent mt-2 transition-all duration-500 group-hover:w-full`}></div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 relative z-10">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className={`
                        px-3 py-1.5 
                        text-xs font-semibold tracking-wide
                        text-slate-400
                        bg-white/5 
                        border border-white/5 
                        rounded-lg
                        transition-all duration-300
                        hover:text-white hover:bg-white/10 hover:border-white/20
                        cursor-default
                        ${hoveredIndex === index ? 'translate-x-1' : ''}
                      `}
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-0 hover:text-cyan-400 transition-colors cursor-pointer group">
            <Code2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span>Clean & Scalable Code</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 hover:text-purple-400 transition-colors cursor-pointer group">
              <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>Responsive Design</span>
            </div>
            <div className="flex items-center gap-2 hover:text-emerald-400 transition-colors cursor-pointer group">
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>Interactive UI</span>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        
        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }

        .hover\\:pause:hover {
          animation-play-state: paused;
        }

        .mask-linear-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default Skills;