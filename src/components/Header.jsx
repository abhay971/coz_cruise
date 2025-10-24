import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/COZ_CRUISE_BLACK.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;

      setIsScrolled(scrollPosition > heroHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
            <div className="flex justify-between items-center py-3 md:py-4">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-start"
              >
                <img
                  src={logo}
                  alt="COZ CRUISE"
                  className="h-8 sm:h-10 w-auto"
                />
                <span className="text-sm sm:text-base text-gray-800 font-bold mt-1">
                  CLUB of Yacht Decor Brands
                </span>
              </motion.div>

              {/* Desktop Navigation */}
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="hidden lg:flex space-x-6 xl:space-x-8"
              >
                <a
                  href="#home"
                  className="text-gray-700 hover:text-[#288EC2] transition-colors font-medium text-sm xl:text-base"
                >
                  Home
                </a>
                <a
                  href="#services"
                  className="text-gray-700 hover:text-[#288EC2] transition-colors font-medium text-sm xl:text-base"
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-[#288EC2] transition-colors font-medium text-sm xl:text-base"
                >
                  About Us
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-[#288EC2] transition-colors font-medium text-sm xl:text-base"
                >
                  Contact Us
                </a>
              </motion.nav>

              {/* Desktop CTA Button */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:inline-flex bg-[#288EC2] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg hover:bg-[#1a6b96] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl text-sm lg:text-base"
              >
                Partner With Us
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-700 hover:text-[#288EC2] hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </motion.button>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden border-t border-gray-200 bg-white"
                >
                  <div className="py-4 space-y-4">
                    <a
                      href="#home"
                      className="block px-4 py-2 text-gray-700 hover:text-[#288EC2] hover:bg-gray-50 rounded-lg transition-colors font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </a>
                    <a
                      href="#about"
                      className="block px-4 py-2 text-gray-700 hover:text-[#288EC2] hover:bg-gray-50 rounded-lg transition-colors font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About
                    </a>
                    <a
                      href="#services"
                      className="block px-4 py-2 text-gray-700 hover:text-[#288EC2] hover:bg-gray-50 rounded-lg transition-colors font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Services
                    </a>
                    <a
                      href="#contact"
                      className="block px-4 py-2 text-gray-700 hover:text-[#288EC2] hover:bg-gray-50 rounded-lg transition-colors font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </a>
                    <div className="px-4 pt-2">
                      <button
                        className="w-full bg-[#288EC2] text-white py-3 rounded-lg hover:bg-[#1a6b96] transition-colors font-semibold shadow-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Partner With Us
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
