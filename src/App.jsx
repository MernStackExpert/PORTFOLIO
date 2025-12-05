import { useState, useEffect } from "react";
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen text-white selection:bg-cyan-400 selection:text-black relative">
      {showHome && <Background />}
      
      {!showHome && <Loader onComplete={() => setShowHome(true)} />}

      <div className={`transition-opacity duration-1000 ${showHome ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <header>
          <Navbar />
          <Hero />
        </header>
        <main>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;