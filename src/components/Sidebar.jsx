import React from 'react';
import { Mail, MapPin, Github, Linkedin, Download, Terminal, Smartphone } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className={`w-full bg-[#111111] border border-white/5 rounded-4xl p-10 flex flex-col shadow-xl relative overflow-hidden group lg:sticky lg:top-8`}>
      
      {/* Subtle Glow Effect */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#EF4444] opacity-[0.05] blur-[80px] rounded-full group-hover:opacity-[0.1] transition-opacity"></div>

      {/* 1. Identity Icon */}
      <div className="mb-8 relative z-10">
        <div className="w-12 h-12 bg-[#1D1D1D] rounded-xl flex items-center justify-center border border-white/10 text-[#EF4444]">
          <Terminal size={24} />
        </div>
      </div>

      {/* 2. Intro Text */}
      <div className="text-left relative z-10">
        <h1 className="text-4xl font-extrabold uppercase tracking-tighter text-white">
          Yuteka<span className="text-[#EF4444]">.</span>
        </h1>
        <p className="text-[#EF4444] text-[10px] font-bold mt-4 px-4 py-2 bg-[#1D1D1D] inline-block rounded-lg uppercase tracking-widest border border-white/5">
          Full Stack Intern
        </p>
      </div>

      {/* 3. Social Links */}
      <div className="flex gap-3 mt-10 relative z-10">
        <a 
          href="https://www.linkedin.com/in/yuteka-jayamadhu-3a6110239/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-[#1D1D1D] rounded-xl flex items-center justify-center border border-white/5 hover:bg-[#EF4444] transition-all duration-300 group hover:scale-105"
        >
          <Linkedin size={18} className="text-gray-400 group-hover:text-white transition-transform duration-300" />
        </a>
        <a 
          href="https://github.com/yutekahemamalini" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-[#1D1D1D] rounded-xl flex items-center justify-center border border-white/5 hover:bg-[#EF4444] transition-all duration-300 group hover:scale-105"
        >
          <Github size={18} className="text-gray-400 group-hover:text-white transition-transform duration-300" />
        </a>
      </div>

      {/* 4. Contact Details */}
      <div className="w-full mt-12 space-y-6 border-t border-white/5 pt-8 relative z-10">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="text-[#EF4444] p-3 bg-[#1D1D1D] rounded-lg border border-white/5 transition-all duration-300 group-hover:bg-[#EF4444] group-hover:text-white group-hover:scale-105"><Smartphone size={18} /></div>
          <div>
            <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Phone</p>
            <p className="text-xs text-white">+91 6369591821</p>
          </div>
        </div>
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="text-[#EF4444] p-3 bg-[#1D1D1D] rounded-lg border border-white/5 transition-all duration-300 group-hover:bg-[#EF4444] group-hover:text-white group-hover:scale-105"><Mail size={18} /></div>
          <div>
            <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Email</p>
            <p className="text-xs text-white">yutekahema003@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="text-[#EF4444] p-3 bg-[#1D1D1D] rounded-lg border border-white/5 transition-all duration-300 group-hover:bg-[#EF4444] group-hover:text-white group-hover:scale-105"><MapPin size={18} /></div>
          <div>
            <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Location</p>
            <p className="text-xs text-white uppercase font-medium">Chennai, Tamil Nadu</p>
          </div>
        </div>
      </div>

      {/* 5. Resume Download Button */}
      <a 
        href="/YUTEKA_resume.pdf" 
        download="Yuteka_Resume.pdf"
        className="w-full mt-12 bg-linear-to-r from-[#FA5252] to-[#DD2476] py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-red-500/10 active:scale-95 text-white relative z-10 text-center"
      >
        <Download size={16} /> Download CV
      </a>
    </aside>
  );
};

export default Sidebar;