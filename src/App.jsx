import { useState } from "react";
import Loader from "./components/Loader";
import Background from "./components/Background";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showHome, setShowHome] = useState(false);

  return (
    <div className="min-h-screen text-white selection:bg-cyan-400 selection:text-black relative overflow-x-hidden">
      
      {/* Background Animation */}
      {showHome && <Background />}

      {/* Loader */}
      {!showHome && <Loader onComplete={() => setShowHome(true)} />}

      <header >
        <Hero />
      </header>

      <main className="max-w-7xl mx-auto">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
