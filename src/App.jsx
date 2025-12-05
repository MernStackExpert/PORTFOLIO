import { useState } from 'react';
import Loader from './Loader';

function App() {
  const [showHome, setShowHome] = useState(false);

  return (
    <div className="bg-slate-900 min-h-screen text-white overflow-hidden">
      
      {/* যতক্ষণ না showHome true হচ্ছে, ততক্ষণ Loader দেখাবে */}
      {!showHome && <Loader onComplete={() => setShowHome(true)} />}

      {/* Home Content (এটা Loader এর নিচে বা পরে লোড হবে) */}
      <div 
        className={`transition-opacity duration-1000 ${showHome ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Navbar */}
        <nav className="p-6 flex justify-between items-center fixed w-full z-40 bg-slate-900/50 backdrop-blur-md">
            <h1 className="text-2xl font-bold text-cyan-400">NIROB.DEV</h1>
            <button className="bg-cyan-500 text-black px-4 py-2 rounded font-bold hover:bg-cyan-400">Let's Talk</button>
        </nav>

        {/* Hero Section */}
        <div className="h-screen flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">MD NIROB ISLAM</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl">
              MERN Stack Developer | React Specialist | Creative UI Designer
            </p>
            <div className="flex gap-4">
               <button className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition">View Projects</button>
               <button className="px-6 py-3 bg-gray-800 rounded-full hover:bg-gray-700 transition">Contact Me</button>
            </div>
        </div>
      </div>

    </div>
  );
}

export default App;