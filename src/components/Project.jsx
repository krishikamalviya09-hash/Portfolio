import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Car Trade",
      stack: "JavaScript, React.js, Tailwind CSS",
      image: "/car.png",
      details: [
        "Dynamic car dealership website built using React.js.",
        "Implemented React Router DOM and react-slick for carousels.",
        "Modular architecture for scalability.",
      ],
    },
    {
      name: "E-Commerce",
      stack: "React.js, JavaScript, Tailwind CSS",
      image: "/ecommerce.png",
      details: [
        "Responsive e-commerce site with cart and payment flow.",
        "Form validation for improved UX.",
        "Cross-browser compatibility ensured.",
      ],
    },
    {
      name: "Swiggy Clone",
      stack: "React.js, JavaScript, Tailwind CSS",
      image: "swiggy.png",
      details: [
        "Food delivery app inspired by Swiggy.",
        "Restaurant listing, menu display, and cart functionality.",
        "Reusable components and clean architecture.",
      ],
    },
  ];

  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12 bg-gray-900 text-gray-200">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10 
        text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
        Projects
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="p-4 sm:p-6 bg-gray-800/60 backdrop-blur-lg rounded-xl shadow-lg 
                       border border-gray-700 hover:border-purple-500 hover:scale-105 transition"
          >
            {/* Project Image */}
            <img
              src={proj.image}
              alt={proj.name}
              className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4 shadow-lg"
            />

            <h3 className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              {proj.name}
            </h3>
            <p className="text-gray-400 italic mb-2 text-sm sm:text-base">{proj.stack}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
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
