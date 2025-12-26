import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Get in Touch</h2>

      <p className="text-center text-gray-700 mb-8 max-w-xl mx-auto">
        Feel free to reach out via email or connect with me on LinkedIn or GitHub. I’m always open to discussing new projects, collaborations, or opportunities!
      </p>

      <div className="flex justify-center space-x-6 mb-12">
        <a href="mailto:akhilak436@example.com" className="flex items-center px-6 py-3 bg-white text-red-500 font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-red-50 transition-transform">
          <FaEnvelope className="mr-2" /> Email
        </a>
        <a href="https://github.com/akhilak436" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-gray-100 transition-transform">
          <FaGithub className="mr-2" /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/akhila-reddy-b04aa8216/" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-blue-50 transition-transform">
          <FaLinkedin className="mr-2" /> LinkedIn
        </a>
      </div>

      {/* Optional contact form */}
      {/* <div className="max-w-2xl mx-auto">
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Your Name" className="px-4 py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-purple-400" />
          <input type="email" placeholder="Your Email" className="px-4 py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-purple-400" />
          <textarea placeholder="Your Message" rows="5" className="px-4 py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-purple-400"></textarea>
          <button type="submit" className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-purple-600 transition-transform">
            Send Message
          </button>
        </form>
      </div> */}
    </section>
  );
};

export default Contact;
