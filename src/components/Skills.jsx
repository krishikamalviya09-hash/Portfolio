export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React.js", logo: "/react.png", level: "90%" },
        { name: "JavaScript (ES6+)", logo: "/js.png", level: "85%" },
        { name: "Tailwind CSS", logo: "/tailwind.png", level: "80%" },
        { name: "HTML5/CSS3", logo: "/html.png", level: "85%" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", logo: "/node.png", level: "80%" },
        { name: "Express.js", logo: "/express.png", level: "75%" },
        { name: "MongoDB", logo: "/mongo.png", level: "70%" },
        { name: "REST APIs", logo: "/rest.png", level: "80%" },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git & GitHub", logo: "/git.png", level: "85%" },
        { name: "C / C++", logo: "/c++.png", level: "70%" },
        { name: "MySQL", logo: "/mysql.png", level: "60%" },
        { name: "VS Code", logo: "/VS.png", level: "90%" },
      ],
    },
  ];

  return (
    <section id="skills" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gray-900 text-white">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-white mb-8">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          Skills & Expertise
        </span>
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {skills.map((section) => (
          <div key={section.category} className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-pink-400">
              {section.category}
            </h3>

            {section.items.map((skill) => (
              <div key={skill.name} className="flex items-center mb-4">
                <img src={skill.logo} alt={skill.name} className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between text-sm sm:text-lg font-medium">
                    <span className="truncate">{skill.name}</span>
                    <span className="ml-2 flex-shrink-0">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded h-2 mt-1">
                    <div
                      className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 h-2 rounded"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
