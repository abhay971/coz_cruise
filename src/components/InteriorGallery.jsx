import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import interiorBedroom from "../assets/images/interior-bedroom.png";
import interiorLounge from "../assets/images/interior-lounge.png";
import interiorDining from "../assets/images/interior-dining.png";
import interiorDeck from "../assets/images/interior-deck.png";
import interiorBridge from "../assets/images/interior-bridge.png";

const InteriorGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const interiors = [
    {
      image: interiorBedroom,
      alt: "Luxury bedroom with ocean view",
      title: "Master Bedroom",
    },
    { image: interiorLounge, alt: "Modern lounge area", title: "Main Salon" },
    {
      image: interiorDining,
      alt: "Elegant dining space",
      title: "Dining Area",
    },
    { image: interiorDeck, alt: "Outdoor deck space", title: "Deck Area" },
    { image: interiorBridge, alt: "Navigation bridge", title: "Bridge" },
  ];

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            Luxury Interior Design
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600"
          >
            Experience unparalleled comfort with our meticulously designed yacht
            interiors
          </motion.p>
        </motion.div>

        {/* Interior Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {interiors.map((interior, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 relative">
                <img
                  src={interior.image}
                  alt={interior.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg">
                      {interior.title}
                    </p>
                  </div>
                </div>
                {/* Floating color elements */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Refurbishment Services Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        > */}
        {/* <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-3xl font-bold text-gray-900 mb-6"
          >
            Premium Refurbishment Services
          </motion.h3> */}
        {/* <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-lg text-gray-600 max-w-4xl mx-auto mb-12"
          >
            Our expert design team specializes in yacht refurbishment and interior design, 
            creating stunning spaces that combine luxury, functionality, and maritime excellence.
          </motion.p> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: '🎨', title: 'Custom Design', desc: 'Tailored interior solutions for every yacht', color: '[#288EC2]' },
              { icon: '🔧', title: 'Expert Refurbishment', desc: 'Professional restoration and modernization', color: '[#6EBD49]' },
              { icon: '⭐', title: 'Premium Materials', desc: 'Only the finest materials and finishes', color: '[#F37E3A]' }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 + 1.6 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className={`w-20 h-20 bg-${service.color}/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-${service.color}/30 transition-all duration-300`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#288EC2] transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div> */}
        {/* </motion.div> */}
      </div>
    </section>
  );
};

export default InteriorGallery;
