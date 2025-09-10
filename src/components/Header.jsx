import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/COZ_CRUISE_BLACK.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      
      setIsScrolled(scrollPosition > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.header 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img 
                  src={logo} 
                  alt="COZ CRUISE" 
                  className="h-10 w-auto"
                />
              </motion.div>
              <motion.nav 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="hidden md:flex space-x-8"
              >
                <a href="#home" className="text-gray-700 hover:text-[#288EC2] transition-colors font-medium">Home</a>
                <a href="#about" className="text-gray-700 hover:text-[#288EC2] transition-colors font-medium">About</a>
                <a href="#portfolio" className="text-gray-700 hover:text-[#288EC2] transition-colors font-medium">Portfolio</a>
                <a href="#services" className="text-gray-700 hover:text-[#288EC2] transition-colors font-medium">Services</a>
                <a href="#contact" className="text-gray-700 hover:text-[#288EC2] transition-colors font-medium">Contact</a>
              </motion.nav>
              <motion.button 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#288EC2] text-white px-6 py-3 rounded-lg hover:bg-[#1a6b96] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
              >
                Get Quote
              </motion.button>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;