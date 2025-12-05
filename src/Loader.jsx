import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const loadingAudio = useRef(new Audio('/loading.mp3'));
  const breakAudio = useRef(new Audio('/glass-break.mp3'));

  useEffect(() => {
    const startSystem = () => {
      loadingAudio.current.loop = true;
      loadingAudio.current.volume = 0.5;
      loadingAudio.current.play().catch(() => {});

      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            triggerBlast();
            return 100;
          }
          return prev + Math.floor(Math.random() * 10 + 2);
        });
      }, 80);
    };

    startSystem();
    return () => { loadingAudio.current.pause(); };
  }, []);

  const triggerBlast = () => {
    loadingAudio.current.pause();
    loadingAudio.current.currentTime = 0;
    breakAudio.current.volume = 0.8;
    breakAudio.current.play().catch(() => {});

    const tl = gsap.timeline({ onComplete: onComplete });
    tl.to(".loading-text", { opacity: 0, duration: 0.2 })
      .to(".reactor-ring", { rotation: 360, duration: 0.8, scale: 1.2, ease: "back.in(1.7)" })
      .to(".flash-overlay", { opacity: 1, duration: 0.1, ease: "power2.in" })
      .to(".loader-container", { opacity: 0, duration: 0.5 });
  };

  return (
    <div className="loader-container fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="flash-overlay fixed inset-0 bg-cyan-100 z-[60] opacity-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="relative w-64 h-64 flex items-center justify-center">
        <div className="reactor-ring absolute w-full h-full rounded-full border border-gray-800 border-t-cyan-500 border-b-purple-500 shadow-[0_0_30px_rgba(6,182,212,0.2)] animate-spin-slow"></div>
        <div className="reactor-ring absolute w-48 h-48 rounded-full border border-gray-700 border-r-cyan-400 border-l-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] animate-spin-reverse"></div>
        <div className="absolute w-32 h-32 rounded-full bg-black border-2 border-cyan-500 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.5)]">
          <div className="w-24 h-24 bg-cyan-900/20 rounded-full flex items-center justify-center backdrop-blur-md animate-pulse">
            <span className="text-cyan-400 font-mono font-bold text-xl">{progress}%</span>
          </div>
        </div>
      </div>
      <div className="loading-text mt-12 text-center z-10 h-16">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 tracking-widest">
            INITIALIZING
          </h2>
          <div className="w-64 h-1 bg-gray-900 rounded mx-auto overflow-hidden">
            <div className="h-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}></div>
          </div>
          <p className="text-gray-600 font-mono text-xs">
            {progress < 50 ? "Loading Modules..." : "Syncing Interface..."}
          </p>
        </div>
      </div>
      <style>{`
        .animate-spin-slow { animation: spin 4s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 3s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes spin-reverse { 100% { transform: rotate(-360deg); } }
      `}</style>
    </div>
  );
};

export default Loader;
