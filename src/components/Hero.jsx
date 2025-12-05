import React from 'react';
import { Download, Github, Linkedin, Facebook, Twitter, Mail } from 'lucide-react';

const Hero = () => {
  // তোমার রেজুমের লিঙ্ক এখানে দিবে (আপাতত '#' রাখা হলো)
  const resumeLink = "#"; 
  
  return (
    <section id="home" className="relative z-10 min-h-screen flex items-center pt-16 md:pt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 space-y-8 text-center md:text-left animate-fade-in-up">
            <div>
              <h3 className="text-xl text-cyan-400 font-medium mb-2">Hi there, I am</h3>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                MD NIROB <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">ISLAM</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-300">
                Full Stack Developer <span className="text-cyan-400">(MERN)</span>
              </h2>
            </div>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
              I craft interactive, scalable, and responsive web applications. Specialized in building modern digital experiences using the MERN stack and 3D technologies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              {/* Resume Download Button */}
              <a 
                href={resumeLink}
                download="Nirob_Islam_Resume.pdf" // এখানে ফাইলের নাম দিবে
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
              >
                <Download size={20} />
                Download CV
              </a>
              {/* Contact Button (Optional) */}
              <a 
                href="#contact"
                className="flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-full font-medium hover:bg-cyan-400/10 transition-all duration-300"
              >
                <Mail size={20} />
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition duration-300 hover:scale-110">
                <Github size={28} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition duration-300 hover:scale-110">
                <Linkedin size={28} />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition duration-300 hover:scale-110">
                <Facebook size={28} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition duration-300 hover:scale-110">
                <Twitter size={28} />
              </a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
              {/* Glowing Background Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-2xl animate-pulse"></div>
              
              {/* Image Container with Border */}
              <div className="relative w-full h-full rounded-full p-2 border-2 border-cyan-400/50 bg-slate-900/50 backdrop-blur-sm overflow-hidden">
                {/* এখানে তোমার নিজের প্রফেশনাল ছবি বসাবে */}
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="MD NIROB ISLAM" 
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Scroll Down Indicator (Optional decoration) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" className="text-slate-500 hover:text-cyan-400 transition">
          <span className="text-sm">Scroll Down</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;