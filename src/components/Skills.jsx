import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "JavaScript (ES6+)", level: 90, logo: "/js.png" },
    { name: "React.js", level: 85, logo: "/react.png" },
    { name: "Node.js", level: 80, logo: "/node.png" },
    { name: "Express.js", level: 80, logo: "/express.png" },
    { name: "MongoDB", level: 75, logo: "/mongo.png" },
    { name: "Tailwind CSS", level: 85, logo: "/tailwind.png" },
    { name: "REST APIs", level: 80, logo: "/rest.png" },
    { name: "Git & GitHub", level: 85, logo: "/git.png" },
    { name: "C / C++", level: 70, logo: "/c++.png" },
    { name: "MySQL (Basics)", level: 65, logo: "/mysql.png" },
  ];

  return (
    <section id="skills" className="p-12 bg-gray-900 text-gray-200">
      <h2 className="text-4xl font-bold text-center mb-10 
        text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 bg-gray-800/60 backdrop-blur-lg rounded-xl shadow-lg border border-gray-700 hover:border-purple-500 hover:scale-105 transition flex items-center space-x-4"
          >
            {/* Skill Logo */}
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-12 h-12 object-contain"
            />

            {/* Skill Name + Progress Bar */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                {skill.name}
              </h3>

              <div className="mt-2 bg-gray-700 rounded-full h-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5 }}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 h-4"
                />
              </div>

              <p className="text-gray-400 mt-1">{skill.level}% Proficiency</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
