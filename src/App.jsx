import { useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  const [showHome, setShowHome] = useState(false);

  return (
    <div className="min-h-screen text-white selection:bg-cyan-400 selection:text-black relative">
      
      {/* 1. Background Animation (Home show hole dekhabe) */}
      {showHome && <Background />}

      {/* 2. Loader Logic */}
      {!showHome && <Loader onComplete={() => setShowHome(true)} />}

      {/* 3. Main Content (Loader sesh hole ashbe) */}
      <div 
        className={`transition-opacity duration-1000 ease-in-out ${showHome ? 'opacity-100' : 'opacity-0'}`}
      >
        <Navbar />

        {/* --- HERO SECTION --- */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
            {/* Background Glow */}
           <Hero></Hero>
        </section>

        {/* --- Other Sections --- */}
        <section id="about" className="min-h-screen flex items-center justify-center bg-slate-900/40 backdrop-blur-sm border-t border-white/5">
           <About></About>
        </section>

        <section id="skills" className="min-h-screen flex items-center justify-center border-t border-white/5 relative">
            <Skills></Skills>
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center bg-slate-900/40 backdrop-blur-sm border-t border-white/5">
            <h2 className="text-4xl font-bold text-gray-300">Projects Section Loading...</h2>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center border-t border-white/5">
            <h2 className="text-4xl font-bold text-gray-300">Contact Section Loading...</h2>
        </section>

      </div>
    </div>
  );
}

export default App;