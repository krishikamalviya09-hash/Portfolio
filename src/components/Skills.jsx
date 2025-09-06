import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "JavaScript (ES6+)", "React.js", "Node.js", "Express.js",
    "MongoDB", "Tailwind CSS", "REST APIs", "Git & GitHub", "C / C++", "MySQL (Basics)"
  ];

  return (
    <section id="skills" className="p-12 bg-gray-900 text-gray-200">
      <h2 className="text-4xl font-bold text-center mb-10 
        text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 bg-gray-800/60 backdrop-blur-lg rounded-xl shadow-lg border border-gray-700 
                       hover:border-purple-500 hover:scale-105 transition text-center"
          >
            <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
              {skill}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
