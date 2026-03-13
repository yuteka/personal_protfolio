import { User, FileText, Briefcase, Mail } from 'lucide-react';

// Props receive param

const Navbar = ({ activeTab, setActiveTab }) => {
  const navLinks = [
    { name: 'About', icon: <User size={18} /> },
    { name: 'Resume', icon: <FileText size={18} /> },
    { name: 'Work', icon: <Briefcase size={18} /> },
    { name: 'Contact', icon: <Mail size={18} /> },
  ];

  return (
    <nav>
      <div className="p-1 rounded-xl flex flex-row gap-4 shadow-2xl justify-center">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => setActiveTab(link.name)} // CLICK LOGIC
            className={`flex flex-col items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-lg transition-all duration-300 group
              ${activeTab === link.name 
                ? 'bg-linear-to-r from-[#FA5252] to-[#DD2476] text-white shadow-lg' 
                : 'bg-[#212425] text-[#A6A6A6] hover:text-white hover:bg-linear-to-r hover:from-[#FA5252] hover:to-[#DD2476]'
              }`}
          >
            <span className="mb-1 group-hover:scale-110 transition-transform">
              {link.icon}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-tight">
              {link.name}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};
export default Navbar;