import React from "react";
import { motion } from "framer-motion";
import heroYacht from "../assets/images/hero-yacht.jpg";
import logo from "../assets/images/COZ_CRUISE_BLACK.png";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Full background yacht image */}
      <div className="absolute inset-0">
        <img
          src={heroYacht}
          alt="Luxury yacht on turquoise ocean"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Top navigation - only logo and contact */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-0 left-0 right-0 z-30 py-6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                src={logo}
                alt="COZ CRUISE"
                className="h-12 w-auto filter invert brightness-0 drop-shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main hero content - Centered */}
      <div className="relative z-10 h-full flex items-center justify-center -mt-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="text-white space-y-12"
          >
            {/* Main heading */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-none mb-8 tracking-tight"
              >
                LUXURY REDEFINED
              </motion.h1>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom center content area */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        {/* Subtitle text */}
        {/* <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-white text-lg md:text-xl font-light tracking-wide mb-4"
        >
          Luxury Yacht Interior Design & Refurbishment
        </motion.p> */}

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-900 px-6 sm:px-4 py-3 sm:py-4 rounded-full hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 font-bold text-base sm:text-lg inline-flex items-center gap-2 sm:gap-3 group shadow-2xl"
          >
            Partner With Us
            <span
              className="transform group-hover:translate-x-3 transition-transform duration-300 text-xl"
              style={{ color: "#2563eb" }}
            >
              ⚓
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
