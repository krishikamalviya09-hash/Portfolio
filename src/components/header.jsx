import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      {/* Logo / Name */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm sm:text-base">
          K
        </div>
        <div>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Krishika Malviya
          </h1>
          <p className="text-xs sm:text-sm text-gray-100">MERN Stack Developer</p>
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden text-gray-300 focus:outline-none text-xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Navbar Links */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex md:space-x-4 lg:space-x-6 text-gray-300 font-medium absolute md:relative top-full left-0 right-0 md:top-auto bg-gray-900 md:bg-transparent shadow-lg md:shadow-none`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 lg:space-x-6 p-4 md:p-0">
          <a href="#about" className="hover:text-purple-400 transition py-2 md:py-0" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" className="hover:text-purple-400 transition py-2 md:py-0" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#experience" className="hover:text-purple-400 transition py-2 md:py-0" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#education" className="hover:text-purple-400 transition py-2 md:py-0" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#projects" className="hover:text-purple-400 transition py-2 md:py-0" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" className="hover:text-purple-400 transition py-2 md:py-0" onClick={() => setMenuOpen(false)}>Contact</a>

          {/* Download CV Button */}
          <a
            href="/resume.pdf"
            download
            className="mt-2 md:mt-0 md:ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg hover:scale-105 transition text-center"
            onClick={() => setMenuOpen(false)}
          >
            Download CV
          </a>
        </div>
      </nav>
    </header>
  );
}
