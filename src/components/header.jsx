import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      {/* Logo / Name */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold">
          K
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Krishika Malviya
          </h1>
          <p className="text-sm text-gray-100">MERN Stack Developer</p>
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden text-gray-300 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      {/* Navbar Links */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex space-x-6 text-gray-300 font-medium`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <a href="#about" className="hover:text-purple-400 transition">About</a>
        <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
        <a href="#experience" className="hover:text-purple-400 transition">Experience</a>
        <a href="#education" className="hover:text-purple-400 transition">Education</a>
        <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
        <a href="#contact" className="hover:text-purple-400 transition">Contact</a>

        {/* Download CV Button */}
        <a
          href="/resume.pdf"
          download
          className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg hover:scale-105 transition"
        >
          Download CV
        </a>
      </nav>
    </header>
  );
}
