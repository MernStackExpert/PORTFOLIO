import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react'; // lucide-react আইকন ব্যবহার করা হয়েছে

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // স্ক্রল করলে ন্যাভবারের ব্যাকগ্রাউন্ড একটু গাড় হবে
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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
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
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <Code2 className="text-cyan-400 w-8 h-8" /> {/* আইকন লোগো হিসেবে */}
            <h1 className="text-2xl font-bold text-white tracking-wider">
              NIROB<span className="text-cyan-400">.DEV</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-slate-300 hover:text-cyan-400 px-1 py-2 text-sm font-medium transition-colors duration-300 group"
                >
                  {link.name}
                  {/* হোভার এফেক্ট (Underline Animation) */}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 transition-all duration-300 ease-in-out ${
          isOpen ? 'top-16 opacity-100' : '-top-[400px] opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 px-3 py-3 rounded-md text-base font-medium text-center transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;