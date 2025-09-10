import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import yachtSerenityWave from '../assets/images/yacht-serenity-wave.png';
import yachtOceanEmbrace from '../assets/images/yacht-ocean-embrace.png';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const yachts = [
    {
      name: 'Serenity Wave',
      description: 'A harmonious blend of contemporary sophistication and maritime functionality. This transformation features clean geometric lines, premium Italian leather, and hand-selected sustainable materials that create an atmosphere of serene luxury while maintaining the authentic character of life at sea.',
      guests: 'Contemporary Minimalism',
      dimension: '6 Month Transformation',
      image: yachtSerenityWave,
      bgGradient: 'from-gray-50 via-white to-gray-100',
      imageGradient: 'from-gray-100 to-gray-200'
    },
    {
      name: "Ocean's Embrace",
      description: 'An homage to timeless maritime elegance, featuring rich walnut paneling, bespoke brass fixtures, and sumptuous fabrics that echo the golden age of yachting. Every detail has been carefully curated to create spaces that feel both grandly luxurious and intimately welcoming.',
      guests: 'Classic Maritime Heritage',
      dimension: '8 Month Masterpiece',
      image: yachtOceanEmbrace,
      bgGradient: 'from-gray-50 via-white to-gray-100',
      imageGradient: 'from-gray-100 to-gray-200'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl font-bold text-gray-900 mb-8 leading-tight"
            >
              Masterpieces Afloat
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed max-w-4xl"
            >
              Journey through our most celebrated transformations where innovative design meets maritime luxury. 
              Each project represents a unique collaboration, bringing dreams to life through extraordinary craftsmanship 
              and uncompromising attention to detail.
            </motion.p>
          </div>
          <motion.button 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#288EC2] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#1a6b96] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Complete Gallery →
          </motion.button>
        </motion.div>

        {/* Yacht Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {yachts.map((yacht, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`bg-gradient-to-br ${yacht.bgGradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm border border-white/20`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Content */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-2 bg-[#288EC2]/10 text-[#288EC2] rounded-full text-sm font-semibold tracking-wide">
                      FEATURED PROJECT
                    </span>
                    <div className="h-1 flex-1 bg-gradient-to-r from-[#288EC2] to-transparent rounded"></div>
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-6">
                    {yacht.name}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {yacht.description}
                  </p>
                  
                  {/* Project Details */}
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Project Details</h4>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#288EC2] rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">Design Style</span>
                          <p className="text-lg font-semibold text-gray-900 mt-1">{yacht.guests}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#6EBD49] rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">Project Timeline</span>
                          <p className="text-lg font-semibold text-gray-900 mt-1">{yacht.dimension}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#F37E3A] rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">Specialization</span>
                          <p className="text-lg font-semibold text-gray-900 mt-1">Luxury Interior Design</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/90 text-[#288EC2] px-8 py-4 rounded-2xl border-2 border-[#288EC2]/20 hover:bg-white hover:border-[#288EC2] transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
                  >
                    View Case Study →
                  </motion.button>
                </motion.div>

                {/* Right side - Yacht Image */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
                  className="relative"
                >
                  <div className={`h-80 bg-gradient-to-br ${yacht.imageGradient} rounded-3xl shadow-2xl relative overflow-hidden group`}>
                    {/* Yacht Image */}
                    <img 
                      src={yacht.image} 
                      alt={yacht.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    
                    
                    {/* Water reflection effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/20 to-transparent"></div>
                  </div>
                  
                  {/* Shadow effect */}
                  <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/10 rounded-3xl blur-xl"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;