import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12 bg-gray-900 text-gray-200">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10 
        text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
        Contact
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto bg-gray-800/60 backdrop-blur-lg rounded-xl shadow-lg 
                   border border-gray-700 p-6 sm:p-8 text-center"
      >
        <p className="mb-6 text-gray-300 text-sm sm:text-base">
          Let's connect! Whether you want to collaborate, discuss a project, or just say hi —
          feel free to reach out.
        </p>

        {/* Contact Links */}
        <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
          <li className="break-words">
            📧 Email:{" "}
            <a
              href="mailto:krishikamalviya09@gmail.com"
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 hover:underline"
            >
              krishikamalviya09@gmail.com
            </a>
          </li>
          <li>
            📞 Phone:{" "}
            <a
              href="tel:9179689369"
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 hover:underline"
            >
              +91 9179689369
            </a>
          </li>
          <li className="break-words">
            💼 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/krishika-malviya-0641ab24b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 hover:underline"
            >
              linkedin.com/in/krishika
            </a>
          </li>
          <li className="break-words">
            💻 GitHub:{" "}
            <a
              href="https://github.com/krishikamalviya09-hash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 hover:underline"
            >
              github.com/krishikamalviya09-hash
            </a>
          </li>
        </ul>

        {/* Call To Action */}
        <div className="mt-6 sm:mt-8">
          <a
            href="mailto:krishikamalviya09@gmail.com"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg hover:scale-105 transition inline-block"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
}
