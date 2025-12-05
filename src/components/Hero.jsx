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
      className="relative z-10 min-h-[90vh] flex items-center pt-20 md:pt-0 overflow-hidden"
      data-aos="fade-down"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">

          <div 
            className="w-full md:w-1/2 space-y-6 sm:space-y-8 text-center md:text-left"
            data-aos="fade-right"
          >
            <div>
              <h3 className="text-lg sm:text-xl text-cyan-400 font-medium mb-1">Hi there, I am</h3>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight leading-tight">
                MD NIROB <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">SARKAR</span>
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 min-h-[35px]">
                I am a <span className="text-cyan-400">{text}</span>
                <span className="animate-pulse text-cyan-400">|</span>
              </h2>
            </div>

            <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0 leading-relaxed">
              I craft interactive, scalable, and responsive web applications. Specialized in building modern digital experiences using the MERN stack and 3D technologies.
            </p>

            <div 
              className="flex flex-wrap items-center justify-center md:justify-start gap-4"
              data-aos="fade-up"
            >
              <a
                href={resumeLink}
                download="Nirob_Islam_Resume.pdf"
                className="flex items-center gap-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
              >
                <Download size={20} />
                Download CV
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 sm:px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-full font-medium hover:bg-cyan-400/10 transition-all duration-300"
              >
                <Mail size={20} />
                Contact Me
              </a>
            </div>

            <div 
              className="flex items-center justify-center md:justify-start gap-5 sm:gap-6 pt-3"
              data-aos="fade-up"
            >
              <a href="https://github.com/MernStackExpert" className="text-slate-400 hover:text-cyan-400 transition duration-300 hover:scale-110">
                <Github size={26} />
              </a>
              <a href="https://www.linkedin.com/in/mdnirobsarkar/" className="text-slate-400 hover:text-cyan-400 transition duration-300 hover:scale-110">
                <Linkedin size={26} />
              </a>
              <a href="https://www.facebook.com/MernStackExpert" className="text-slate-400 hover:text-cyan-400 transition duration-300 hover:scale-110">
                <Facebook size={26} />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE (Fully Responsive) */}
          <div 
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            data-aos="zoom-in"
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[420px] md:h-[420px] lg:w-[460px] lg:h-[460px]">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-2xl animate-pulse"></div>

              <div className="relative w-full h-full rounded-full p-2 border-2 border-cyan-400/50 bg-slate-900/50 backdrop-blur-sm overflow-hidden">
                <img 
                  src={img}
                  alt="MD NIROB ISLAM"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" className="text-slate-500 hover:text-cyan-400 transition">
          <span className="text-sm">Scroll Down</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
