import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../lottie/animation.json";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-start px-10 md:px-20 text-white"
      style={{
        background:
          "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // Modern gradient
      }}
    >
      {/* Floating Shapes */}
      <div className="absolute w-32 h-32 bg-blue-400 rounded-full opacity-20 top-20 left-10 animate-float"></div>
      <div className="absolute w-24 h-24 bg-pink-400 rounded-full opacity-20 top-1/2 right-20 animate-float delay-1000"></div>
      <div className="absolute w-20 h-20 bg-yellow-400 rounded-full opacity-20 bottom-20 left-1/4 animate-float delay-2000"></div>

      
      {/* Left Text Section */}
      <div className="z-20 max-w-xl mt-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-semibold mb-2"
        >
          Hello 👋
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          I'm <span className="text-yellow-300">Akhila Reddy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl mt-4 text-gray-200"
        >
          I'm a Front end Engineer & React Developer focused on creating
          interactive, accessible, and visually stunning web experiences.
        </motion.p>

        <motion.a
          href="./resume.docx"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white font-semibold shadow-lg"
        >
          View my resumé →
        </motion.a>
      </div>

      {/* Lottie Animation on Right */}
      <div className="absolute right-10 bottom-10 md:right-20 md:bottom-20 w-64 h-64 md:w-[420px] md:h-[420px] opacity-90 z-10">
        <Lottie animationData={animationData} loop={true} />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <svg
          className="w-7 h-7 mx-auto text-white opacity-80"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;