import React, { useEffect } from 'react';
import { Target, Code, Gamepad2, Rocket, Layout, Database } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    // Initialize AOS with repeatable animations
    AOS.init({
      duration: 1000,
      once: false, // animation will repeat on scroll
      mirror: true, // animations will play when scrolling up too
    });
    AOS.refresh();
  }, []);

  return (
    <section id="about" className="min-h-screen py-20 px-6 flex flex-col justify-center items-center relative z-10">
      
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down" data-aos-once="false">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
            
          <div className="space-y-8 text-gray-300 leading-relaxed">
            {/* My Journey */}
            <div data-aos="fade-right" data-aos-delay="200" data-aos-once="false">
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
            <div data-aos="fade-right" data-aos-delay="400" data-aos-once="false">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                <Gamepad2 className="text-purple-400" /> Hobbies & Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm hover:border-cyan-400 transition cursor-default text-slate-300 hover:bg-slate-700">Gaming</span>
                <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm hover:border-cyan-400 transition cursor-default text-slate-300 hover:bg-slate-700">3D Web Tech</span>
                <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm hover:border-cyan-400 transition cursor-default text-slate-300 hover:bg-slate-700">Tech Blogs</span>
                <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm hover:border-cyan-400 transition cursor-default text-slate-300 hover:bg-slate-700">Minimalist Design</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* What I Bring */}
            <div data-aos="fade-left" data-aos-delay="200" data-aos-once="false">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                <Rocket className="text-cyan-400" /> What I Bring
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700 hover:border-cyan-400/50 transition duration-300 group hover:-translate-y-1">
                  <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition">
                    <Layout size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Modern Frontend UI</h4>
                    <p className="text-slate-400 text-sm">Responsive, interactive, and aesthetic interfaces using React, Tailwind & Framer Motion.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700 hover:border-purple-400/50 transition duration-300 group hover:-translate-y-1">
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
            <div data-aos="fade-left" data-aos-delay="400" data-aos-once="false">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6 mt-4">
                <Target className="text-red-400" /> Current Goal
              </h3>
              <div className="p-5 bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700 hover:border-cyan-400/30 transition duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
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
