import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white px-8 py-20 flex flex-col md:flex-row items-center justify-between overflow-hidden w-full">

      {/* Left: Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m{" Krishika Malviya"}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
           
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          A passionate MERN Stack Developer creating modern, responsive, and scalable web applications.
        </p>
        <div className="mt-6 flex space-x-4">
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg hover:scale-105 transition"
          >
            Download CV
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl border border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-400 transition"
          >
            View Projects
          </a>
        </div>
      </motion.div>

      {/* Right: Gradient Blob with Photo Inside */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="mt-10 md:mt-0 relative flex items-center justify-center"
      >
        {/* Gradient Blob Background */}
        <div className="w-80 h-80 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>

        {/* Your Photo (inside a rounded rectangle) */}
        <img
          src="/profile.jpg"
          alt="Shon"
className="absolute w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl border-4 border-white shadow-xl"        />
      </motion.div>
    </section>
  );
}
