import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "Xcoder IT PVT. LTD",
      year: "Jan 2025 – Present | Indore",
      tasks: [
        "Built responsive front-end interfaces using React.js, HTML, CSS, and JavaScript.",
        "Collaborated in an Agile environment, contributing to user-focused design.",
        "Strengthened expertise in Git version control for efficient workflow.",
      ],
    },
  ];

  return (
    <section id="experience" className="p-12 bg-gray-900 text-gray-200">
      <h2 className="text-4xl font-bold text-center mb-10 
        text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
        Experience
      </h2>

      {experiences.map((exp, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: idx * 0.2 }}
          className="p-6 mb-6 bg-gray-800/60 backdrop-blur-lg rounded-xl 
                     shadow-lg border border-gray-700 hover:border-purple-500 
                     hover:scale-105 transition"
        >
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            {exp.role}
          </h3>
          <p className="text-gray-400">{exp.company}</p>
          <p className="text-sm text-gray-500">{exp.year}</p>
          <ul className="list-disc list-inside mt-3 text-gray-300 space-y-1">
            {exp.tasks.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </section>
  );
}
