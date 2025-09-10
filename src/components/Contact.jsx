import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import contactYachtMarina from '../assets/images/contact-yacht-marina.png';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch"
        >
          {/* Left side - CTA Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-[#288EC2]/20 via-[#288EC2]/10 to-[#288EC2]/5 rounded-3xl p-12 flex flex-col justify-center shadow-2xl relative overflow-hidden border border-[#288EC2]/10"
          >
            {/* Background image */}
            <div className="absolute inset-0 opacity-30">
              <img 
                src={contactYachtMarina} 
                alt="Yacht marina" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/10"></div>
            </div>
            
            <div className="relative z-10 space-y-8">
              {/* Premium badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30"
              >
                <div className="w-2 h-2 bg-[#288EC2] rounded-full"></div>
                <span className="text-[#288EC2] font-bold text-sm uppercase tracking-wider">Premium Design Services</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-6xl font-bold text-gray-900 leading-[0.9]"
              >
                Transform Your<br />
                Yacht Interior
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-gray-700 leading-relaxed max-w-lg"
              >
                Ready to create your dream yacht interior? Let's discuss your vision 
                and bring your luxury design dreams to life with our expert team.
              </motion.p>

              {/* Features list */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-[#288EC2] rounded-full"></div>
                  <span className="font-medium">Free consultation & design concept</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-[#6EBD49] rounded-full"></div>
                  <span className="font-medium">Custom 3D visualizations included</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-[#F37E3A] rounded-full"></div>
                  <span className="font-medium">Full project management support</span>
                </div>
              </motion.div>

              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#288EC2] text-white px-10 py-5 rounded-2xl hover:bg-[#1a6b96] hover:shadow-xl transition-all duration-300 font-bold text-lg inline-flex items-center gap-3 group shadow-lg"
              >
                Start Your Project 
                <span className="transform group-hover:translate-x-2 transition-transform duration-300 text-xl">→</span>
              </motion.button>
            </div>
            
            {/* Decorative elements */}
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 relative overflow-hidden"
          >
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#288EC2]/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Share Your<br />
                Design Vision
              </h3>
              <p className="text-gray-600 mb-8">
                Tell us about your yacht interior dreams and let our expert designers 
                create a personalized proposal for your luxury transformation.
              </p>
            </motion.div>
            
            <motion.form 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#288EC2] focus:border-transparent transition-all duration-300 text-lg placeholder-gray-400 hover:border-[#288EC2]/50"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#288EC2] focus:border-transparent transition-all duration-300 text-lg placeholder-gray-400 hover:border-[#288EC2]/50"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <input
                  type="text"
                  placeholder="Number of guests"
                  className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#288EC2] focus:border-transparent transition-all duration-300 text-lg placeholder-gray-400 hover:border-[#288EC2]/50"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <textarea
                  placeholder="Write message"
                  rows="5"
                  className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#288EC2] focus:border-transparent resize-none transition-all duration-300 text-lg placeholder-gray-400 hover:border-[#288EC2]/50"
                ></textarea>
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#288EC2] text-white py-5 rounded-2xl font-semibold hover:bg-[#1a6b96] hover:shadow-xl transition-all duration-300 text-lg inline-flex items-center justify-center gap-2 group"
              >
                Send Us 
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;