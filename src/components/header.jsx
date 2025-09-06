export default function Header() {
  return (
    <header className="bg-gray-900 px-8 py-6 flex justify-between items-center shadow-md">
      {/* Logo / Name */}
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
        Krishika Malviya
      </h1>

      {/* Navbar Links */}
      <nav className="space-x-6 text-gray-300 font-medium">
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
