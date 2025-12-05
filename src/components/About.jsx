import React from 'react';
import { BookOpen, Coffee, Code, Gamepad2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-6 flex flex-col justify-center items-center bg-slate-900/40 backdrop-blur-sm border-t border-white/5">
      
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Code className="text-cyan-400" /> My Journey
                </h3>
                <p>
                    I started my programming journey with a curiosity for how things work on the web. 
                    From writing my first line of HTML to building complex full-stack applications, 
                    it has been an exciting ride. I enjoy solving problems and creating efficient, 
                    scalable software solutions.
                </p>
                <p>
                    When I'm not coding, I love exploring new technologies and contributing to open-source.
                    I believe in continuous learning and always strive to write clean, maintainable code.
                </p>

                <h3 className="text-2xl font-bold text-white flex items-center gap-2 mt-8">
                    <Gamepad2 className="text-purple-400" /> Hobbies & Interests
                </h3>
                <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm hover:bg-cyan-900/30 transition">Gaming</span>
                    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm hover:bg-cyan-900/30 transition">Travel</span>
                    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm hover:bg-cyan-900/30 transition">Tech Blogs</span>
                    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm hover:bg-cyan-900/30 transition">Photography</span>
                </div>
            </div>

            <div className="space-y-8">
                
                <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                        <BookOpen className="text-cyan-400" /> Education
                    </h3>
                    
                    <div className="relative pl-8 border-l-2 border-slate-700 pb-8">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500"></div>
                        <h4 className="text-xl font-bold text-white">B.Sc. in Computer Science</h4>
                        <p className="text-cyan-400 text-sm mb-2">2019 - 2023 | University Name</p>
                        <p className="text-gray-400 text-sm">
                            Completed with a focus on Software Engineering and Data Structures.
                            Built multiple projects and participated in hackathons.
                        </p>
                    </div>

                    <div className="relative pl-8 border-l-2 border-slate-700">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                        <h4 className="text-xl font-bold text-white">Higher Secondary Certificate</h4>
                        <p className="text-purple-400 text-sm mb-2">2017 - 2019 | College Name</p>
                        <p className="text-gray-400 text-sm">
                            Science Group. Achieved GPA 5.00.
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6 mt-8">
                        <Coffee className="text-yellow-400" /> Experience
                    </h3>
                     <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                        <h4 className="font-bold text-white">Frontend Developer Intern</h4>
                        <p className="text-gray-400 text-xs mb-2">Tech Company Ltd | Jan 2023 - Jun 2023</p>
                        <p className="text-gray-400 text-sm">
                           Worked on UI/UX improvements and React component optimization.
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