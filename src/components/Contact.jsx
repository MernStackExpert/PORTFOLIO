import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
        
        {/* Header */}
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
          
          {/* Contact Info (Left Side) */}
          <div className="space-y-8 animate-fade-in-left">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            {/* Email Card */}
            <div className="flex items-center gap-5 p-5 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl hover:border-cyan-400/50 transition duration-300 group">
              <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition duration-300">
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
            <div className="flex items-center gap-5 p-5 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl hover:border-cyan-400/50 transition duration-300 group">
              <div className="p-3 bg-purple-500/10 rounded-full text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition duration-300">
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
            <div className="flex items-center gap-5 p-5 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl hover:border-cyan-400/50 transition duration-300 group">
              <div className="p-3 bg-green-500/10 rounded-full text-green-400 group-hover:bg-green-500 group-hover:text-white transition duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Location</p>
                <p className="text-white font-medium">Rajshahi, Bangladesh</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/MernStackExpert" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white hover:-translate-y-1 transition-all duration-300 border border-slate-700"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mdnirobsarkar/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 rounded-lg text-slate-300 hover:bg-[#0077b5] hover:text-white hover:-translate-y-1 transition-all duration-300 border border-slate-700"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-slate-800 rounded-lg text-slate-300 hover:bg-[#1877F2] hover:text-white hover:-translate-y-1 transition-all duration-300 border border-slate-700"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-slate-800 rounded-lg text-slate-300 hover:bg-black hover:text-white hover:-translate-y-1 transition-all duration-300 border border-slate-700"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (Right Side) */}
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