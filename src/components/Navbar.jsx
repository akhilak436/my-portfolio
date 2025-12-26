import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
<nav className="fixed w-full top-0 left-0 bg-slate-900/30 backdrop-blur-md z-50 px-6 py-3 flex justify-between items-center">
      <div className="text-xl font-bold text-white">
        {/* Can replace with logo or initials */}
        <span>Akhila Reddy</span>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#projects" className="text-white hover:text-yellow-300 transition">Projects</a>
        <a href="#skills" className="text-white hover:text-yellow-300 transition">Skills</a>
        <a href="#contact" className="text-white hover:text-yellow-300 transition">Contact</a>
        {/* Icon links */}
        <a href="#" className="text-white hover:text-yellow-300 transition"><FaGithub /></a>
        <a href="#" className="text-white hover:text-blue-500 transition"><FaLinkedin /></a>
        <a href="mailto:akhila@example.com" className="text-white hover:text-red-500 transition"><FaEnvelope /></a>
      </div>
    </nav>
  );
};

export default Navbar;
