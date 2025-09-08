import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      title: "Bachelor of Computer Application",
      place: "Government Holkar Science College, Indore",
      year: "2020 – 2023",
    },
    {
      title: "Intermediate - PCM",
      place: "Merit Higher Secondary School, Indore",
      year: "2020",
    },
    {
      title: "Secondary Education",
      place: "Merit Higher Secondary School, Indore",
      year: "2018",
    },
  ];

  return (
    <section id="education" className="p-12 bg-gray-900 text-gray-200">
      <h2 className="text-4xl font-bold text-center mb-10 
        text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
        Education
      </h2>

      {/* Single Column Layout */}
      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="p-6 bg-gray-800/60 backdrop-blur-lg rounded-xl shadow-lg 
                       border border-gray-700 hover:border-purple-500 
                       hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              {edu.title}
            </h3>
            <p className="text-gray-400">{edu.place}</p>
            <p className="text-sm text-gray-500">{edu.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
