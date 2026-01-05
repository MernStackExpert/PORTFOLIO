import React, { useEffect } from 'react';
import { Code2, Server, Database, Wrench, Brain, Layers } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaBootstrap 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTailwindcss, SiDaisyui, SiExpress, SiJsonwebtokens, 
  SiMongodb, SiPostman, SiFirebase, SiNetlify, SiVercel, 
  SiAxios, SiReactquery, SiCloudinary, SiFramer 
} from 'react-icons/si';
import { TbApi, TbBrandVscode } from 'react-icons/tb';

const Skills = () => {

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      skills: [
        { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
        { name: "DaisyUI", icon: <SiDaisyui className="text-yellow-200" /> },
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 text-green-400" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
        { name: "REST API", icon: <TbApi className="text-blue-400" /> },
        { name: "JWT", icon: <SiJsonwebtokens className="text-pink-500" /> },
      ]
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6 text-green-500" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "MongoDB Atlas", icon: <SiMongodb className="text-green-300" /> },
      ]
    },
    {
      title: "Tools",
      icon: <Wrench className="w-6 h-6 text-orange-400" />,
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "VS Code", icon: <TbBrandVscode className="text-blue-500" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
        { name: "Vercel", icon: <SiVercel className="text-white" /> },
        { name: "Chrome DevTools", icon: <Wrench className="text-gray-400" /> },
      ]
    },
    {
      title: "Others",
      icon: <Layers className="w-6 h-6 text-purple-400" />,
      skills: [
        { name: "Axios", icon: <SiAxios className="text-purple-300" /> },
        { name: "Fetch API", icon: <TbApi className="text-yellow-200" /> },
        { name: "TanStack Query", icon: <SiReactquery className="text-red-400" /> },
        { name: "Cloudinary", icon: <SiCloudinary className="text-blue-400" /> },
        { name: "AOS", icon: <Code2 className="text-green-300" /> },
        { name: "Framer Motion", icon: <SiFramer className="text-purple-500" /> },
      ]
    }
  ];
  const softSkills = [
    "Time Management", "Problem Solving", "Teamwork", "Fast Learner", "Communication"
  ];

  const allTechnicalSkills = skillCategories.reduce((acc, category) => [...acc, ...category.skills], []);

  return (
    <section id="skills" className="py-24 relative z-10 overflow-hidden">

      <style>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-infinite-scroll { animation: scroll 60s linear infinite; }
        .animate-infinite-scroll:hover { animation-play-state: paused; }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16" data-aos="zoom-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
            A showcase of my technical expertise and the tools I use.
          </p>
        </div>

        {/* Infinite Scroll */}
        <div className="relative w-full overflow-hidden py-10 mb-20" data-aos="zoom-in-up">
          <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none"></div>

          <div className="flex w-max min-w-full animate-infinite-scroll">
            {[...allTechnicalSkills, ...allTechnicalSkills].map((skill, index) => (
              <div key={index} className="flex items-center gap-3 mx-4 px-4 py-3 bg-slate-800/40 border border-slate-700/50 rounded-full backdrop-blur-md hover:border-cyan-400/50 hover:bg-slate-800 transition-all cursor-pointer min-w-[180px] justify-center">
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-slate-300 font-semibold text-center truncate">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-400/50 hover:shadow-lg transition-all duration-500 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-slate-700/50 pb-4">
                <div className="p-3 bg-slate-800 rounded-lg text-white group-hover:text-cyan-400 group-hover:scale-110 transition duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-200">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 cursor-default min-w-[120px] justify-center">
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-slate-300 text-sm font-medium text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div data-aos="fade-up" data-aos-duration="1400">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              <Brain className="text-purple-400" /> Soft Skills
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
                className="px-6 py-3 bg-slate-800/30 border border-slate-600/50 rounded-full text-slate-300 font-medium hover:text-white hover:border-purple-500 hover:bg-purple-500/10 hover:scale-105 transition-all duration-300 cursor-default shadow-lg"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
