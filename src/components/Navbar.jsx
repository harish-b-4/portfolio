import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-[999] bg-[#020617] border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">

        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide text-cyan-400">
          HARISH
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium uppercase tracking-widest">

          <li>
            <NavLink to="/" className={({ isActive }) => `pb-1 transition-all duration-300 ${isActive
              ? "text-cyan-400 border-b-2 border-cyan-400" : "text-gray-400 hover:text-cyan-400"}`
            } >HOME
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={({ isActive }) => `pb-1 transition-all duration-300 ${isActive
              ? "text-cyan-400 border-b-2 border-cyan-400" : "text-gray-400 hover:text-cyan-400"}`
            }>ABOUT
            </NavLink>
          </li>

          <li>
            <NavLink to="/project" className={({ isActive }) => `pb-1 transition-all duration-300 ${isActive
              ? "text-cyan-400 border-b-2 border-cyan-400" : "text-gray-400 hover:text-cyan-400"}`
            }>
              PROJECTS
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={({ isActive }) => `pb-1 transition-all duration-300 ${isActive
              ? "text-cyan-400 border-b-2 border-cyan-400" : "text-gray-400 hover:text-cyan-400"}`
            }>
              CONTACT
            </NavLink>
          </li>

        </ul>

        {/* Mobile Menu Icon */}
        <button onClick={() => setMenuOpen(true)}
          className="md:hidden text-2xl" >
          <FaBars />
        </button>

      </div>


      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-[#020617] text-white transition-transform duration-300 z-[1000]
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>


        {/* Close Icon */}
        <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-2xl" >
          <FaTimes />
        </button>


        <ul className="flex flex-col gap-8 mt-24 ml-12 text-sm font-medium uppercase tracking-widest">

          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive
              ? "text-cyan-400 font-semibold" : "text-gray-400 hover:text-cyan-400"}>
              HOME
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive
              ? "text-cyan-400 font-semibold" : "text-gray-400 hover:text-cyan-400"} >
              ABOUT
            </NavLink>
          </li>

          <li>
            <NavLink to="/project" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive
              ? "text-cyan-400 font-semibold"
              : "text-gray-400 hover:text-cyan-400"}>
              PROJECTS
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive
              ? "text-cyan-400 font-semibold"
              : "text-gray-400 hover:text-cyan-400"}>
              CONTACT
            </NavLink>
          </li>

        </ul>

      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[900]"
          onClick={() => setMenuOpen(false)}>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
