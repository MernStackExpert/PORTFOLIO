import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <Code2 className="text-cyan-400 w-8 h-8" />
            <h1 className="text-2xl font-bold text-white tracking-wider">
              NIROB<span className="text-cyan-400">.DEV</span>
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="relative text-slate-300 hover:text-cyan-400 px-1 py-2 text-sm font-medium transition-colors duration-300 group cursor-pointer"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-cyan-400 p-2 rounded-md focus:outline-none transition duration-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden absolute w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 transition-all duration-300 ease-in-out ${
          isOpen ? 'top-16 opacity-100' : '-top-[400px] opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 px-3 py-3 rounded-md text-base font-medium text-center transition duration-300 cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;