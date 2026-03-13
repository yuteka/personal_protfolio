import React, { useState, useEffect } from 'react'; 
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const [activeTab, setActiveTab] = useState('About');
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    if (activeTab === 'Resume') {
      setAnimateSkills(false);
      const timer = setTimeout(() => setAnimateSkills(true), 100);
      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-black text-white font-sans isolation-isolate">
      <style>{BACKGROUND_CSS}</style>
      
      {/* 1. ANIMATED BACKGROUND BLOBS */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-15%] left-[-15%] w-[55%] h-[55%] bg-[#EF4444] opacity-[0.06] blur-[130px] rounded-full animate-blob-1"></div>
        <div className="absolute bottom-[-15%] right-[-15%] w-[55%] h-[55%] bg-[#DD2476] opacity-[0.06] blur-[130px] rounded-full animate-blob-2"></div>
        <div className="absolute top-[25%] right-[10%] w-[45%] h-[45%] bg-[#3B82F6] opacity-[0.04] blur-[110px] rounded-full animate-blob-3"></div>
      </div>

      {/* --- MAIN CONTAINER --- */}
      <div className="max-w-6xl mx-auto p-4 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* --- LEFT SIDEBAR --- */}
          <aside className="lg:w-1/3 w-full">
            <Sidebar />
          </aside>

          {/* --- RIGHT MAIN CONTENT --- */}
          <div className="flex-1">
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

            <main className="mt-8 bg-[#111111] border border-white/5 rounded-4xl p-6 lg:p-10 min-h-[calc(100vh-10rem)]">
              {/* Dynamic Header */}
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold uppercase tracking-widest italic text-white">
                  {activeTab}
                </h2>
                <div className="h-1 w-20 bg-[#EF4444]"></div>
              </div>

              {/* Content Logic */}
              <div className="space-y-6 text-gray-400 leading-relaxed text-sm">
              
                {/* --- ABOUT SECTION --- */}
                {activeTab === 'About' && (
                  <div className="animate-in fade-in duration-500">
                    <p className="text-white font-medium italic">{`> professional_profile.init()`}</p>
                    <p className="mt-4 text-justify">
                      Results-oriented and detail-driven B.Tech graduate in Artificial Intelligence and Data Science.
                      Eager to contribute to building scalable, user-focused applications while enhancing expertise in modern frameworks and full stack technologies within a collaborative and growth-driven environment.
                      Currently working as a MERN Stack Intern at Brain Bric, focused on building scalable and user-focused applications.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                      {ABOUT_CARDS.map((card, idx) => (
                        <div key={idx} className="p-6 bg-[#1D1D1D] rounded-2xl border border-white/5 hover:border-[#EF4444]/30 transition-colors group">
                          <h3 className="text-white font-bold mb-2 group-hover:text-[#EF4444]">{card.title}</h3>
                          <p className="text-xs">{card.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* --- WORK SECTION --- */}
                {activeTab === 'Work' && (
                  <div className="animate-in slide-in-from-bottom-4 duration-500 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {PROJECTS.map((project, idx) => (
                      <div key={idx} className="group bg-[#1D1D1D] border border-white/5 rounded-3xl p-6 hover:border-[#EF4444]/40 transition-all">
                        <div className="h-32 bg-[#111111] rounded-2xl mb-4 flex items-center justify-center border border-white/5 text-[10px] uppercase tracking-widest text-gray-600">
                          {project.label}
                        </div>
                        <p className="text-[#EF4444] text-[10px] font-bold uppercase mb-1">{project.category}</p>
                        <h3 className="text-white font-bold text-lg">{project.title}</h3>
                        <p className="text-xs text-gray-500 mt-2">{project.desc}</p>
                        <div className="mt-4 border-t border-white/5 pt-3">
                          <p className="text-[10px] text-gray-400">
                            <span className="font-bold text-gray-300">Technologies:</span> {project.tech}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* --- RESUME SECTION --- */}
                {activeTab === 'Resume' && (
                  <div className="animate-in fade-in duration-500 space-y-10">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                         <span className="w-2 h-2 bg-[#EF4444] rounded-full"></span> Education
                      </h3>
                      <div className="p-6 bg-[#1D1D1D] rounded-2xl border border-white/5">
                         <p className="text-[#EF4444] font-bold text-xs uppercase tracking-widest">2021 — 2025</p>
                         <h4 className="text-white font-bold mt-1">B.Tech AI & Data Science</h4>
                         <p className="text-xs text-gray-500 mt-1">Bannari Amman Institute of Technology | GPA: 7.04</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                         <span className="w-2 h-2 bg-[#EF4444] rounded-full"></span> Coding Skills
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                        {SKILLS.map((skill) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                              <span className="text-gray-300">{skill.name}</span>
                              <span className="text-gray-500">{skill.level}</span>
                            </div>
                            <div className="h-1.5 w-full bg-[#1D1D1D] rounded-full overflow-hidden border border-white/5">
                              <div className="h-full bg-linear-to-r from-[#FA5252] to-[#DD2476] transition-all duration-1000" style={{ width: animateSkills ? skill.level : '0%' }}></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                         <span className="w-2 h-2 bg-[#EF4444] rounded-full"></span> Paper Presentations
                      </h3>
                      <div className="space-y-4">
                        {PRESENTATIONS.map((paper, idx) => (
                          <div key={idx} className="p-6 bg-[#1D1D1D] rounded-2xl border border-white/5 transition-all duration-300 hover:border-[#EF4444]/40 hover:shadow-[0_0_20px_rgba(239,68,68,0.1)]">
                            <p className="text-[#EF4444] font-bold text-xs uppercase tracking-widest">{paper.loc}</p>
                            <h4 className="text-white font-bold mt-1">{paper.title}</h4>
                            <p className="text-xs text-gray-500 mt-2">{paper.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* --- CONTACT SECTION (Updated) --- */}
                {activeTab === 'Contact' && (
                  <div className="animate-in fade-in duration-500 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Info Cards */}
                      <div className="space-y-4">
                        <div className="p-6 bg-[#1D1D1D] rounded-3xl border border-white/5 hover:border-[#EF4444]/20 transition-all group">
                          <p className="text-[#EF4444] text-[10px] font-bold uppercase tracking-widest mb-1">Phone</p>
                          <p className="text-white font-medium">+91 6369591821</p>
                        </div>
                        <div className="p-6 bg-[#1D1D1D] rounded-3xl border border-white/5 hover:border-[#EF4444]/20 transition-all group">
                          <p className="text-[#EF4444] text-[10px] font-bold uppercase tracking-widest mb-1">Email</p>
                          <p className="text-white font-medium">yutekahema003@gmail.com</p>
                        </div>
                      </div>

                      {/* Form with Labels and Glow */}
                      <div className="p-8 bg-[#1D1D1D] rounded-4xl border border-white/5 shadow-2xl">
                        <form className="space-y-4">
                          <div className="space-y-1">
                            <label className="text-[10px] text-gray-500 uppercase font-bold ml-1">Name</label>
                            <input type="text" placeholder="Your Name" className="w-full bg-[#111111] border border-white/5 rounded-xl p-4 text-xs focus:outline-none focus:border-[#EF4444]/50 focus:ring-1 focus:ring-[#EF4444]/20 transition-all text-white" />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] text-gray-500 uppercase font-bold ml-1">Email</label>
                            <input type="email" placeholder="example@gmail.com" className="w-full bg-[#111111] border border-white/5 rounded-xl p-4 text-xs focus:outline-none focus:border-[#EF4444]/50 focus:ring-1 focus:ring-[#EF4444]/20 transition-all text-white" />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] text-gray-500 uppercase font-bold ml-1">Message</label>
                            <textarea rows="4" placeholder="How can I help you?" className="w-full bg-[#111111] border border-white/5 rounded-xl p-4 text-xs focus:outline-none focus:border-[#EF4444]/50 focus:ring-1 focus:ring-[#EF4444]/20 transition-all resize-none text-white"></textarea>
                          </div>
                          <button type="button" className="w-full bg-linear-to-r from-[#FA5252] to-[#DD2476] py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:opacity-90 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all active:scale-95 text-white">
                            Send Message
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// --- DATA & CONSTANTS ---
const BACKGROUND_CSS = `
  @keyframes blob-1 { 0%, 100% { transform: translate(0, 0) scale(1); } 25% { transform: translate(40px, -60px) scale(1.2); } 50% { transform: translate(10px, 10px) scale(0.8); } 75% { transform: translate(-20px, 40px) scale(1.1); } }
  @keyframes blob-2 { 0%, 100% { transform: translate(0, 0) scale(1); } 25% { transform: translate(-30px, 20px) scale(0.9); } 50% { transform: translate(40px, -30px) scale(1.2); } 75% { transform: translate(-10px, -50px) scale(1); } }
  @keyframes blob-3 { 0%, 100% { transform: translate(0, 0) scale(1); } 25% { transform: translate(20px, 20px) scale(1.1); } 50% { transform: translate(-20px, -20px) scale(0.9); } 75% { transform: translate(10px, -10px) scale(1.05); } }
  .animate-blob-1 { animation: blob-1 20s infinite ease-in-out; }
  .animate-blob-2 { animation: blob-2 25s infinite ease-in-out 3s; }
  .animate-blob-3 { animation: blob-3 18s infinite ease-in-out 6s; }
`;

const ABOUT_CARDS = [
  { title: 'Java Full Stack', desc: 'Skilled in Java, SQL, and database management for robust backend systems.' },
  { title: 'AI Engineering', desc: 'Expertise in LSTM, OpenCV, and intelligent optimization algorithms.' },
];

const PROJECTS = [
  { category: 'AI Research', label: 'Deep_Learning_Model', title: 'Energy Detection System', desc: 'LSTM-BWO model for precise energy prediction with 1.34% RMSE.', tech: 'LSTM, BWO, Deep Learning, Optimization Algorithms' },
  { category: 'Real-Time Systems', label: 'OpenCV_Project', title: 'Ambulance Rescue', desc: 'Intelligent traffic control system using Python threading and OpenCV.', tech: 'OpenCV, Python, Real-Time Systems, Traffic Management Systems' }
];

const SKILLS = [
  { name: 'Java / SQL', level: '85%' },
  { name: 'React / MERN Stack', level: '80%' },
  { name: 'Python / OpenCV', level: '75%' },
  { name: 'Tailwind / CSS', level: '95%' }
];

const PRESENTATIONS = [
  { loc: 'VIT Institutions, Chennai', title: 'Heart Disease Prediction using Machine Learning', desc: 'Presented a comparative study on Random Forest, Logistic Regression, and KNN, achieving 85% predictive accuracy.' },
  { loc: 'ICAIHMS’25, Karpagam Tech', title: 'Advanced Ambulance Rescue System', desc: 'Showcased an innovative real-time system for ambulance detection and intelligent traffic management.' }
];
