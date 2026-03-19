import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href) => {
    setMenuOpen(false);

    setTimeout(() => {
      const section = document.getElementById(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-gradient-to-tr from-black via-purple-900 to-indigo-900 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        
        <a  href="#home"
          className="text-2xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400"
        >
          HARISH
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1 text-xs font-semibold uppercase tracking-widest">

          <li>
            <a href="#home" className="relative px-4 py-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-300 group inline-block">
              Home
              <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </li>

          <li>
            <a href="#about" className="relative px-4 py-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-300 group inline-block">
              About
              <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </li>

          <li>
            <a href="#skills" className="relative px-4 py-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-300 group inline-block">
              Skills
              <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </li>

          <li>
            <a href="#projects" className="relative px-4 py-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-300 group inline-block">
              Projects
              <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </li>

          <li>
            <a href="#contact" className="relative px-4 py-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-300 group inline-block">
              Contact
              <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </li>

        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-300 text-lg transition-all duration-300"
        >
          <FaBars />
        </button>

      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-screen w-72 bg-gradient-to-br from-black via-purple-900 to-indigo-900 border-r border-white/10 shadow-2xl shadow-black/50 transition-transform duration-300 ease-in-out z-[1000]
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >

        {/* Drawer glow */}
        <div className="absolute top-20 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Drawer Header — Logo + Close */}
        <div className="flex items-center justify-between px-6 pt-6">
          <button
            onClick={() => handleNavClick("home")}
            className="text-xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400"
          >
            HARISH
          </button>

          <button
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-300 transition-all duration-300"
          >
            <FaTimes />
          </button>
        </div>

        {/* Divider */}
        <div className="mx-6 mt-4 h-[1px] bg-gradient-to-r from-cyan-400 to-transparent"></div>

        {/* Mobile Nav Links */}
        <ul className="flex flex-col gap-1 mt-8 px-4">

          <li>
            <button
              onClick={() => handleNavClick("home")}
              className="w-full flex items-center px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-200"
            >
              Home
            </button>
          </li>

          <li>
            <button
              onClick={() => handleNavClick("about")}
              className="w-full flex items-center px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-200"
            >
              About
            </button>
          </li>

          <li>
            <button
              onClick={() => handleNavClick("skills")}
              className="w-full flex items-center px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-200"
            >
              Skills
            </button>
          </li>

          <li>
            <button
              onClick={() => handleNavClick("projects")}
              className="w-full flex items-center px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-200"
            >
              Projects
            </button>
          </li>

          <li>
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full flex items-center px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-200"
            >
              Contact
            </button>
          </li>

        </ul>

      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[900]"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

    </nav>
  );
};

export default Navbar;