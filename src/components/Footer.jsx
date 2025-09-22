import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import footerYachtNight from "../assets/images/footer-yacht-night.png";
import cozClubLogo from "../assets/images/coz_club.png";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer
      ref={ref}
      className="relative bg-gray-900 text-white py-12 overflow-hidden"
    >
      {/* Background with yacht */}
      <div className="absolute inset-0">
        <img
          src={footerYachtNight}
          alt="Yacht at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold mb-8 leading-tight"
          >
            Get Set Sail?
          </motion.h2>
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Connect with us to explore professional partnership opportunities in
            luxury yachting
          </motion.p> */}
        </motion.div>

        {/* Links sections */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 justify-items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-[#288EC2] transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-[#288EC2] transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-[#288EC2] transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-[#288EC2] transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-conditions"
                  className="text-gray-300 hover:text-[#288EC2] transition-colors duration-300"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#service-brand-representation"
                  className="text-gray-300 hover:text-[#288EC2] transition-colors duration-300"
                >
                  Brand Representation
                </a>
              </li>
              <li>
                <a
                  href="#service-procurement-management"
                  className="text-gray-300 hover:text-[#288EC2] transition-colors duration-300"
                >
                  Procurement Management
                </a>
              </li>
              <li>
                <a
                  href="#service-product-selection"
                  className="text-gray-300 hover:text-[#288EC2] transition-colors duration-300"
                >
                  Product Selection
                </a>
              </li>
              <li>
                <a
                  href="#service-logistics-management"
                  className="text-gray-300 hover:text-[#288EC2] transition-colors duration-300"
                >
                  Logistics Management
                </a>
              </li>
              <li>
                <a
                  href="#service-shared-services"
                  className="text-gray-300 hover:text-[#288EC2] transition-colors duration-300"
                >
                  Shared Services
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4 text-gray-300">
              <p className="flex items-center gap-3">
                <span className="text-[#288EC2]">📧</span>
                <a
                  href="mailto:info@cozcruise.com"
                  className="hover:text-[#288EC2] transition-colors duration-300"
                >
                  info@cozcruise.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-[#288EC2]">📞</span>
                <a
                  href="tel:+15551234567"
                  className="hover:text-[#288EC2] transition-colors duration-300"
                >
                  +1 (555) 123-4567
                </a>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-[#288EC2]">📍</span>
                <a
                  href="https://maps.google.com/?q=Miami,Florida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#288EC2] transition-colors duration-300"
                >
                  Miami, Florida
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2025 COZ CRUISE. All rights reserved.
            </p>
            <div className="flex items-center space-x-3">
              <span className="text-white font-bold text-2xl">A</span>
              <a
                href="https://www.cozclub.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={cozClubLogo}
                  alt="COZ CLUB Logo"
                  className="h-8 w-auto hover:opacity-80 transition-opacity duration-300"
                />
              </a>
              <span className="text-white font-bold text-2xl">Company</span>
            </div>
          </div>
        </motion.div>

        {/* Floating decorative elements */}
        {/* <motion.div
          animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          // className="absolute top-20 left-20 w-2 h-2 bg-white/30 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          // className="absolute top-32 right-32 w-3 h-3 bg-[#F37E3A] rounded-full"
        ></motion.div>
        <motion.div
          animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-[#288EC2] rounded-full"
        ></motion.div> */}
      </div>
    </footer>
  );
};

export default Footer;
