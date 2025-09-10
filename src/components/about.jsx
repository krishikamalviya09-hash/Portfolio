import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12 bg-gray-900 text-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 
          text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          About Me
        </h2>

        <p className="text-base sm:text-lg text-gray-300 leading-relaxed px-4 sm:px-0">
          I'm <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Krishika Malviya</span>, 
          a passionate MERN Stack Developer with experience in building 
          responsive full-stack applications using <span className="text-purple-400">MongoDB</span>, 
          <span className="text-blue-400"> Express.js</span>, 
          <span className="text-pink-400"> React.js</span>, and 
          <span className="text-purple-400"> Node.js</span>.  
          I love creating <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">modern, scalable, and user-friendly</span> 
          applications with a strong focus on performance and clean architecture.
        </p>

        <div className="mt-6 sm:mt-8">
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg hover:scale-105 transition inline-block"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}
