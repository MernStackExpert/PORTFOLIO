import React from 'react';
import { Target, Code, Gamepad2, Rocket, Layout, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-6 flex flex-col justify-center items-center relative z-10">
      
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
            
            {/* Left Column: Journey & Hobbies */}
            <div className="space-y-8 text-gray-300 leading-relaxed animate-fade-in-left">
                
                {/* My Journey */}
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                      <Code className="text-cyan-400" /> My Journey
                  </h3>
                  <p className="text-slate-400 mb-4 text-justify">
                      I started my programming journey with a curiosity for how things work on the web. 
                      Since then, I have dedicated myself to mastering the <strong>MERN Stack</strong>.
                      I love building applications from scratch, handling everything from the database to the user interface.
                  </p>
                  <p className="text-slate-400 text-justify">
                      I am passionate about creating <strong>3D interactive websites</strong> and clean, modern UIs. 
                      Coding isn't just a skill for me; it's a way to solve real-world problems and bring creative ideas to life.
                  </p>
                </div>

                {/* Hobbies */}
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                      <Gamepad2 className="text-purple-400" /> Hobbies & Interests
                  </h3>
                  <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm hover:border-cyan-400 transition cursor-default text-slate-300">Gaming</span>
                      <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm hover:border-cyan-400 transition cursor-default text-slate-300">3D Web Tech</span>
                      <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm hover:border-cyan-400 transition cursor-default text-slate-300">Tech Blogs</span>
                      <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm hover:border-cyan-400 transition cursor-default text-slate-300">Minimalist Design</span>
                  </div>
                </div>
            </div>

            {/* Right Column: Expertise & Goal */}
            <div className="space-y-8 animate-fade-in-right">
                
                {/* My Expertise (Replaced Education) */}
                <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                        <Rocket className="text-cyan-400" /> What I Bring
                    </h3>
                    
                    <div className="space-y-4">
                        {/* Expertise Item 1 */}
                        <div className="flex gap-4 p-4 bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700 hover:border-cyan-400/50 transition duration-300 group">
                            <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition">
                                <Layout size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Modern Frontend UI</h4>
                                <p className="text-slate-400 text-sm">Responsive, interactive, and aesthetic interfaces using React, Tailwind & Framer Motion.</p>
                            </div>
                        </div>

                        {/* Expertise Item 2 */}
                        <div className="flex gap-4 p-4 bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700 hover:border-purple-400/50 transition duration-300 group">
                            <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition">
                                <Database size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Scalable Backend</h4>
                                <p className="text-slate-400 text-sm">Secure REST APIs, Database Management, and Authentication using Node.js & MongoDB.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Current Goal */}
                <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6 mt-4">
                        <Target className="text-red-400" /> Current Goal
                    </h3>
                     <div className="p-5 bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700 hover:border-cyan-400/30 transition duration-300">
                        <h4 className="font-bold text-white mb-2">Seeking Internship / Junior Role</h4>
                        <p className="text-slate-400 text-sm">
                           I am actively looking for opportunities to apply my MERN stack skills in a professional environment. I am eager to learn from experienced developers and contribute to real-world projects.
                        </p>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default About;