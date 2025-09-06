import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Car Trade",
      stack: "JavaScript, React.js, Tailwind CSS",
      details: [
        "Developed a dynamic car dealership website using React.js.",
        "Implemented React Router DOM and react-slick for carousels.",
        "Organized with modular file architecture for scalability.",
      ],
    },
    {
      name: "E-Commerce",
      stack: "React.js, JavaScript, Tailwind CSS",
      details: [
        "Built a responsive e-commerce site with cart and payment flow.",
        "Implemented form validation for better UX.",
        "Optimized performance and ensured cross-browser compatibility.",
      ],
    },
    {
      name: "Swiggy Clone",
      stack: "React.js, JavaScript, Tailwind CSS",
      details: [
        "Developed a food delivery app inspired by Swiggy.",
        "Added restaurant listing, menu display, and cart functionality.",
        "Focused on reusable components and clean code.",
      ],
    },
  ];

  return (
    <section id="projects" className="p-12 bg-gray-900 text-gray-200">
      <h2 className="text-4xl font-bold text-center mb-10 
        text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="p-6 bg-gray-800/60 backdrop-blur-lg rounded-xl 
                       shadow-lg border border-gray-700 hover:border-purple-500 
                       hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              {proj.name}
            </h3>
            <p className="text-gray-400 italic">{proj.stack}</p>
            <ul className="list-disc list-inside mt-3 text-gray-300 space-y-1">
              {proj.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
