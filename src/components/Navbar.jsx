import React, { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Link } from "react-scroll";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer">
            <Code2 className="text-cyan-400 w-8 h-8" />
            <NavLink to="/">
              <h1 className="text-2xl font-bold text-white tracking-wider">
                NIROB<span className="text-cyan-400">.DEV</span>
              </h1>
            </NavLink>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                activeClass="text-cyan-400"
                className="relative text-slate-300 hover:text-cyan-400 text-sm font-medium cursor-pointer transition group"
              >
                {link.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-cyan-400 duration-300 group-hover:w-full"></span>
                <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-cyan-400 opacity-0 transition-opacity duration-300 [.text-cyan-400_&]:opacity-100"></span>
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-300 hover:text-cyan-400 p-2 transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              spy={true}
              offset={-70}
              duration={500}
              activeClass="text-cyan-400 bg-slate-800/50"
              onClick={() => setIsOpen(false)}
              className="block text-center text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 px-4 py-3 rounded-md text-base font-medium transition"
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