import React from "react";
import { Download, Github, Linkedin, Facebook, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-20 relative overflow-hidden">
      
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left z-10">
        <h2 className="text-cyan-400 font-mono tracking-widest text-lg mb-2 animate-fade-in-up">
          HELLO, I AM
        </h2>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white animate-fade-in-up delay-100">
          MD NIROB ISLAM
        </h1>
        <h3 className="text-2xl md:text-4xl font-bold text-gray-400 mb-6 animate-fade-in-up delay-200">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            MERN Stack Developer
          </span>
        </h3>
        <p className="text-gray-400 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed animate-fade-in-up delay-300">
          I build scalable web applications with clean code and modern UI. 
          Focusing on React, Node.js, and immersive user experiences.
        </p>

        {/* Buttons & Socials */}
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start animate-fade-in-up delay-500">
          
          {/* Resume Button */}
          <a 
            href="/resume.pdf" // public ফোল্ডারে resume.pdf রাখতে হবে
            download="Nirob_Resume.pdf"
            className="flex items-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            <Download size={20} />
            Download Resume
          </a>

          {/* Social Links */}
          <div className="flex gap-4">
            <SocialIcon href="https://github.com" icon={<Github size={24} />} />
            <SocialIcon href="https://linkedin.com" icon={<Linkedin size={24} />} />
            <SocialIcon href="https://facebook.com" icon={<Facebook size={24} />} />
            <SocialIcon href="https://twitter.com" icon={<Twitter size={24} />} />
          </div>
        </div>
      </div>

      {/* Image / Avatar Section */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0 relative z-10 animate-fade-in-up delay-700">
        <div className="relative w-64 h-64 md:w-96 md:h-96">
            {/* Glowing Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-spin-slow"></div>
            <div className="absolute inset-4 rounded-full border-2 border-purple-500/30 animate-spin-reverse"></div>
            
            {/* Profile Image */}
            <img 
                src="https://placehold.co/400x400/1e293b/22d3ee?text=Profile+Pic" // এখানে তোমার ছবির পাথ দিবে
                alt="Profile" 
                className="w-full h-full rounded-full object-cover border-4 border-slate-800 shadow-[0_0_50px_rgba(6,182,212,0.3)]"
            />
        </div>
      </div>

    </section>
  );
};

// Small Helper Component for Social Icons
const SocialIcon = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="p-3 bg-slate-800/50 border border-slate-700 rounded-full text-gray-400 hover:text-cyan-400 hover:border-cyan-400 hover:scale-110 transition-all"
  >
    {icon}
  </a>
);

export default Hero;