import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Facebook, Mail } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";
import img from '/bg-remove-nirob.png';

const Hero = () => {
  const resumeLink = "https://drive.google.com/file/d/17kTrQMIeicG46jATs0T7bKgf0lvzmi-l/view?usp=sharing";

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Full Stack Developer (MERN)",
    "Interactive 3D Designer",
    "Frontend Specialist",
    "React.js Enthusiast"
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      if (isDeleting) setTypingSpeed(40);
      else setTypingSpeed(100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section 
      id="home" 
      className="relative z-10 min-h-screen flex items-center pt-24 md:pt-0 overflow-hidden"
      data-aos="fade-down"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

          {/* LEFT CONTENT */}
          <div 
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
            data-aos="fade-right"
          >
            <div className="space-y-2">
              <h3 className="text-lg text-cyan-400 font-medium">Hi there, I am</h3>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                MD NIROB <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">SARKAR</span>
              </h1>

              <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 min-h-[40px]">
                I am a <span className="text-cyan-400">{text}</span>
                <span className="animate-pulse text-cyan-400 ml-1">|</span>
              </h2>
            </div>

            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
              I craft interactive, scalable, and responsive web applications. Specialized in building modern digital experiences using the MERN stack.
            </p>

            {/* BUTTONS */}
            <div 
              className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2"
              data-aos="fade-up"
            >
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Download size={18} /> Download CV
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full font-bold hover:bg-cyan-400/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Mail size={18} /> Contact Me
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div 
              className="flex items-center justify-center md:justify-start gap-5 pt-4"
              data-aos="fade-up"
            >
              {[
                { Icon: Github, href: "https://github.com/MernStackExpert" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/mdnirobsarkar/" },
                { Icon: Facebook, href: "https://www.facebook.com/MernStackExpert" }
              ].map(({Icon, href}, idx) => (
                <a key={idx} href={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 p-2 bg-slate-900/50 rounded-lg border border-slate-800">
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE IMAGE (Fixed for Tablet) */}
          <div 
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            data-aos="zoom-in"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-2xl animate-pulse"></div>

              <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-br from-cyan-400 to-blue-600 overflow-hidden shadow-2xl">
                <div className="w-full h-full rounded-full bg-slate-950 overflow-hidden">
                  <img 
                    src={img}
                    alt="MD NIROB"
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 hidden lg:flex">
         <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll Down</span>
         <div className="w-px h-12 bg-gradient-to-b from-cyan-400 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;