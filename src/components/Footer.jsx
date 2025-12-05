import React from 'react';
import { Github, Linkedin, Facebook, Twitter, ArrowUp, Code2 } from 'lucide-react';

const Footer = () => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative z-10 bg-slate-950 border-t border-slate-800 pt-10 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          
          {/* Logo & Name */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-slate-900 rounded-lg border border-slate-800 text-cyan-400">
               <Code2 size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-wider">
                NIROB<span className="text-cyan-400">.DEV</span>
              </h2>
              <p className="text-slate-500 text-xs">Full Stack Web Developer</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://github.com/MernStackExpert" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-full transition-all">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mdnirobsarkar/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0077b5] hover:bg-slate-800 p-2 rounded-full transition-all">
              <Linkedin size={20} />
            </a>
            <a href="https://www.facebook.com/MernStackExpert" className="text-slate-400 hover:text-[#1877F2] hover:bg-slate-800 p-2 rounded-full transition-all">
              <Facebook size={20} />
            </a>
           
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-cyan-400">MD NIROB ISLAM</span>. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 text-sm hover:text-cyan-400 transition-colors group"
          >
            Back to Top
            <span className="p-1 bg-slate-800 rounded group-hover:bg-cyan-500 group-hover:text-white transition-all">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;