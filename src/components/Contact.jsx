import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Contact Info Animation State
  const [activeInfoIndex, setActiveInfoIndex] = useState(0);
  
  // Social Links Animation State
  const [activeSocialIndex, setActiveSocialIndex] = useState(0);
  const [isSocialHovered, setIsSocialHovered] = useState(false);

  // Contact Info Interval (Always running)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveInfoIndex((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Social Links Interval (Pauses on Hover)
  useEffect(() => {
    if (!isSocialHovered) {
      const interval = setInterval(() => {
        setActiveSocialIndex((prev) => (prev + 1) % 4); // 4 items because there are 4 social links
      }, 1500); // Slightly faster for social links
      return () => clearInterval(interval);
    }
  }, [isSocialHovered]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:mdnirob30k@gmail.com?subject=Contact from Portfolio&body=${formData.message}`;
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4">
            Have a project in mind or want to discuss something? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          
          <div className="space-y-8 animate-fade-in-left">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            {/* Email Card */}
            <div className={`flex items-center gap-5 p-5 bg-slate-800/40 backdrop-blur-md border rounded-2xl transition-all duration-500 ${activeInfoIndex === 0 ? 'border-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.15)]' : 'border-slate-700/50'}`}>
              <div className={`p-3 rounded-full transition-all duration-500 ${activeInfoIndex === 0 ? 'bg-cyan-500 text-white scale-110' : 'bg-cyan-500/10 text-cyan-400'}`}>
                <Mail size={24} />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Email</p>
                <a href="mailto:mdnirob30k@gmail.com" className="text-white font-medium hover:text-cyan-400 transition">
                  mdnirob30k@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className={`flex items-center gap-5 p-5 bg-slate-800/40 backdrop-blur-md border rounded-2xl transition-all duration-500 ${activeInfoIndex === 1 ? 'border-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.15)]' : 'border-slate-700/50'}`}>
              <div className={`p-3 rounded-full transition-all duration-500 ${activeInfoIndex === 1 ? 'bg-purple-500 text-white scale-110' : 'bg-purple-500/10 text-purple-400'}`}>
                <Phone size={24} />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Phone / WhatsApp</p>
                <a href="tel:01908716502" className="text-white font-medium hover:text-purple-400 transition">
                  01908716502
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className={`flex items-center gap-5 p-5 bg-slate-800/40 backdrop-blur-md border rounded-2xl transition-all duration-500 ${activeInfoIndex === 2 ? 'border-green-400/50 shadow-[0_0_15px_rgba(74,222,128,0.15)]' : 'border-slate-700/50'}`}>
              <div className={`p-3 rounded-full transition-all duration-500 ${activeInfoIndex === 2 ? 'bg-green-500 text-white scale-110' : 'bg-green-500/10 text-green-400'}`}>
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Location</p>
                <p className="text-white font-medium">Rajshahi, Bangladesh</p>
              </div>
            </div>

            {/* Social Links Section */}
            <div 
              className="pt-6"
              onMouseEnter={() => setIsSocialHovered(true)} // Hover করলে পজ হবে
              onMouseLeave={() => setIsSocialHovered(false)} // সরালে আবার চলবে
            >
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                
                {/* GitHub */}
                <a 
                  href="https://github.com/MernStackExpert" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg border transition-all duration-500 ${activeSocialIndex === 0 && !isSocialHovered ? 'bg-slate-700 text-white border-white scale-110 shadow-lg shadow-white/10' : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white hover:-translate-y-1'}`}
                >
                  <Github size={20} />
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/mdnirobsarkar/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg border transition-all duration-500 ${activeSocialIndex === 1 && !isSocialHovered ? 'bg-[#0077b5] text-white border-[#0077b5] scale-110 shadow-lg shadow-[#0077b5]/30' : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-[#0077b5] hover:text-white hover:-translate-y-1'}`}
                >
                  <Linkedin size={20} />
                </a>

                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/MernStackExpert" 
                  className={`p-3 rounded-lg border transition-all duration-500 ${activeSocialIndex === 2 && !isSocialHovered ? 'bg-[#1877F2] text-white border-[#1877F2] scale-110 shadow-lg shadow-[#1877F2]/30' : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-[#1877F2] hover:text-white hover:-translate-y-1'}`}
                >
                  <Facebook size={20} />
                </a>

              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 animate-fade-in-right">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-slate-400 text-sm font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label className="block text-slate-400 text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-slate-400 text-sm font-medium mb-2">Message</label>
                <textarea 
                  name="message"
                  required
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition resize-none"
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;