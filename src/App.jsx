// App.js
import { useState } from "react";
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

  return (
    <div className="min-h-screen text-white selection:bg-cyan-400 selection:text-black relative">
      {/* 1. Background Animation */}
      {showHome && <Background />}

      {/* 2. Loader */}
      {!showHome && <Loader onComplete={() => setShowHome(true)} />}

      <header>
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <main>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
