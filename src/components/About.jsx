import React from 'react';
import { BookOpen, Target, Code, Gamepad2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-6 flex flex-col justify-center items-center relative z-10">
      
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
            
            {/* Left Column: Journey & Hobbies */}
            <div className="space-y-8 text-gray-300 leading-relaxed">
                
                {/* My Journey */}
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                      <Code className="text-cyan-400" /> My Journey
                  </h3>
                  <p className="text-slate-400 mb-4 text-justify">
                      I started my programming journey with a curiosity for how things work on the web. 
                      Currently, I am a student but deeply passionate about <strong>MERN Stack Development</strong>.
                      I have learned HTML, CSS, JavaScript, and React, and now I am building full-stack applications.
                  </p>
                  <p className="text-slate-400 text-justify">
                      I enjoy creating <strong>3D interactive websites</strong> and clean user interfaces. 
                      My goal is to become a proficient Full Stack Developer and solve real-world problems through code.
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
                      <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm hover:border-cyan-400 transition cursor-default text-slate-300">Learning New Tech</span>
                      <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm hover:border-cyan-400 transition cursor-default text-slate-300">Minimalist Design</span>
                  </div>
                </div>
            </div>

            {/* Right Column: Education & Goal */}
            <div className="space-y-8">
                
                {/* Education Section */}
                <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                        <BookOpen className="text-cyan-400" /> Education
                    </h3>
                    
                    {/* Timeline Item */}
                    <div className="relative pl-8 border-l-2 border-slate-700 pb-2">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50"></div>
                        <h4 className="text-xl font-bold text-white">Higher Secondary Certificate (HSC)</h4>
                        <p className="text-cyan-400 text-sm mb-2">Adorsho Degree Honors College | 2nd Year</p>
                        <p className="text-slate-400 text-sm">
                            Currently studying in the Science group. Alongside my academic studies, I am consistently learning and practicing Web Development technologies.
                        </p>
                    </div>
                </div>

                {/* Current Goal (Replaced Experience) */}
                <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6 mt-4">
                        <Target className="text-red-400" /> Current Goal
                    </h3>
                     <div className="p-5 bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700 hover:border-cyan-400/30 transition duration-300">
                        <h4 className="font-bold text-white mb-2">Seeking Internship / Junior Role</h4>
                        <p className="text-slate-400 text-sm">
                           I am looking for opportunities to apply my MERN stack skills in a professional environment. I am eager to learn from experienced developers and contribute to real projects.
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