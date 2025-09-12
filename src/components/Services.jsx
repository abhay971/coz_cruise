import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import serviceInteriorDesign from "../assets/images/service-interior-design.png";
import serviceRefurbishment from "../assets/images/service-refurbishment.png";
import serviceCustomFurniture from "../assets/images/service-custom-furniture.png";
import serviceMaterialSelection from "../assets/images/service-material-selection.png";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      id: "01",
      title: "Interior Design",
      description:
        "Transform your yacht with our bespoke interior design services, creating luxurious spaces that reflect your personal style and vision.",
      image: serviceInteriorDesign,
      gradient: "from-gray-200 via-gray-300 to-gray-400",
    },
    {
      id: "02",
      title: "Material Selection",
      description:
        "Expert guidance in selecting premium marine-grade materials, fabrics, and finishes that withstand the marine environment while maintaining luxury.",
      image: serviceMaterialSelection,
      gradient: "from-gray-200 via-gray-300 to-gray-400",
    },
    {
      id: "03",
      title: "Custom Furnishing",
      description:
        "Bespoke furnishing design and manufacturing tailored specifically for your yacht, combining functionality with elegant marine aesthetics.",
      image: serviceCustomFurniture,
      gradient: "from-gray-200 via-gray-300 to-gray-400",
    },
    {
      id: "04",
      title: "Complete Refurbishment",
      description:
        "Full-scale yacht interior renovation from concept to completion, breathing new life into every space with premium materials and craftsmanship.",
      image: serviceRefurbishment,
      gradient: "from-gray-200 via-gray-300 to-gray-400",
    },
  ];

  return (
    <section ref={ref} id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative mb-32"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-1/4 w-32 h-32 bg-[#288EC2]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-[#288EC2]/3 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10 text-center">
            {/* Top badge with enhanced styling */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-4 bg-white border-2 border-[#288EC2]/20 rounded-full px-8 py-4 mb-8 shadow-lg"
            >
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#288EC2] to-transparent"></div>
              <span className="text-[#288EC2] font-bold tracking-widest text-sm uppercase">
                Comprehensive Design Solutions
              </span>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#288EC2] to-transparent"></div>
            </motion.div> */}

            {/* Main heading with enhanced typography */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl font-bold text-gray-900 mb-6 leading-[0.9] tracking-tight"
            >
              <span className="block">Initial Concept to Final Cruise</span>
              {/* <span className="block">in Maritime Design</span> */}
            </motion.h2>

            {/* Enhanced description with better layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Our comprehensive suite of services ensures your yacht interior
                transformation exceeds every expectation.
              </p>
              <div className="flex items-center justify-center gap-8 text-sm text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#F37E3A] rounded-full"></div>
                  <span>Design Excellence</span>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#288EC2] rounded-full"></div>
                  <span>Premium Quality</span>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#6EBD49] rounded-full"></div>
                  <span>Timeless Luxury</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Services */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-16 items-center`}
            >
              {/* Content side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.8 }}
                className="flex-1 space-y-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-3 bg-[#288EC2]/10 rounded-full px-4 py-2">
                    <span className="w-8 h-8 bg-[#288EC2] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {service.id}
                    </span>
                    <div className="w-12 h-px bg-gradient-to-r from-[#288EC2] to-transparent"></div>
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
                  {service.title}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl mb-8">
                  {service.description}
                </p>

                {/* Service highlights */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-[#F37E3A] rounded-full"></div>
                    <span className="font-medium">Premium Products</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-[#288EC2] rounded-full"></div>
                    <span className="font-medium">Project Management</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-[#6EBD49] rounded-full"></div>
                    <span className="font-medium">
                      Personalized Consultation{" "}
                    </span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-[#288EC2] text-white px-10 py-5 rounded-2xl hover:bg-[#1a6b96] hover:shadow-xl transition-all duration-300 font-semibold text-lg inline-flex items-center gap-3 shadow-lg"
                >
                  <span>Explore Service</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </motion.button>
              </motion.div>

              {/* Image side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 + 1 }}
                className="flex-1"
              >
                <div className="relative group">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className={`w-full h-96 bg-gradient-to-br ${service.gradient} rounded-3xl shadow-2xl relative overflow-hidden`}
                  >
                    {/* Service Image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                    {/* Floating particles */}
                    <motion.div
                      animate={{ y: [0, -10, 0], opacity: [0.4, 0.8, 0.4] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute top-8 right-12 w-2 h-2 bg-white/60 rounded-full"
                    ></motion.div>
                    <motion.div
                      animate={{ y: [0, 10, 0], opacity: [0.3, 0.7, 0.3] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                      className="absolute bottom-16 left-8 w-3 h-3 bg-white/50 rounded-full"
                    ></motion.div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </motion.div>

                  {/* Shadow */}
                  <div className="absolute -bottom-6 left-8 right-8 h-12 bg-black/10 rounded-3xl blur-2xl transform scale-90 group-hover:scale-100 transition-transform duration-500"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
