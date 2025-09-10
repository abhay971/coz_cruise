import React from 'react';
import { motion } from 'framer-motion';
import heroYacht from '../assets/images/hero-yacht.jpg';
import logo from '../assets/images/COZ_CRUISE_BLACK.png';

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
            {/* Contact button */}
            <motion.button 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 font-medium"
            >
              Contact
            </motion.button>
          </div>
        </div>
      </motion.div>
      
      {/* Main hero content - Centered */}
      <div className="relative z-10 h-full flex items-center justify-center">
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
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-none mb-8 tracking-tight"
              >
                LUXURY REFINED
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-4xl mx-auto font-light tracking-wide"
              >
                Luxury Yacht Interior Design & Refurbishment
              </motion.p>
            </div>

            {/* Single CTA button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-16 py-6 rounded-full hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 font-bold text-xl inline-flex items-center gap-4 group shadow-2xl"
              >
                Design Your Dream
                <span className="transform group-hover:translate-x-3 transition-transform duration-300 text-2xl">⚓</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;