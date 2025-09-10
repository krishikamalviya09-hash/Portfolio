import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white py-12 sm:py-16 lg:py-20 overflow-hidden w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-xl lg:max-w-2xl z-10 text-center lg:text-left mb-8 lg:mb-0"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                Krishika Malviya
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
              I am a dedicated Full Stack Developer specializing in the MERN stack, building responsive and scalable web applications. I love solving complex problems, writing clean code, and creating engaging user experiences. Continuously learning, I strive to bring modern, efficient solutions to every project I work on.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg hover:scale-105 transition text-center"
              >
                Download CV
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl border border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-400 transition text-center"
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
            className="relative flex items-center justify-center w-full lg:w-auto"
          >
            {/* Gradient Blob Background */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-80 lg:h-80 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>

            {/* Your Photo (inside a rounded rectangle) */}
            <img
              src="/profile.jpg"
              alt="Krishika Malviya"
              className="absolute w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover rounded-2xl border-4 border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
