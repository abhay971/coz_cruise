import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import featuresYachtAerial from "../assets/images/features-yacht-aerial.png";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      number: "01",
      title: "Assistance to Designers",
      description: "Bespoke interior solutions for every yacht",
    },
    {
      number: "02",
      title: "Products Selection",
      description: "Only the finest finishes and craftsmanship",
    },
    {
      number: "03",
      title: "Rapid Refinement",
      description: "On time worldwide delivery from the direct source",
    },
    {
      number: "04",
      title: "Shared Services",
      description: "Cost competitive back office support, throughout the year",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Main content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              {/* <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-3 bg-[#288EC2]/10 rounded-full px-6 py-3 mb-8"
              >
                <span className="text-[#288EC2] font-semibold tracking-wide text-sm uppercase">
                  Why Choose COZ CRUISE
                </span>
              </motion.div> */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl font-bold text-gray-900 mb-8 leading-tight"
              >
                Elevating Maritime Experience
                {/* <br />
                Luxury Standards */}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-gray-600 leading-relaxed max-w-2xl"
              >
                We don't just design interiors—we craft extraordinary
                experiences. Our comprehensive approach combines innovative
                design philosophy with meticulous attention to product details,
                ensuring every element reflects your unique vision while
                exceeding maritime luxury standards.
              </motion.p>
            </div>

            {/* Large yacht image card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative"
            >
              <div className="bg-gray-100 rounded-3xl p-0 overflow-hidden shadow-2xl">
                <div className="h-96 relative">
                  {/* Background yacht image */}
                  <img
                    src={featuresYachtAerial}
                    alt="Aerial view of luxury yacht"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Feature cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="text-center group cursor-pointer"
              >
                {/* Number circle with brand color */}
                <div className="w-20 h-20 bg-[#288EC2]/10 border-2 border-[#288EC2] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:bg-[#288EC2] group-hover:scale-110">
                  <span className="text-2xl font-bold text-[#288EC2] group-hover:text-white transition-colors duration-300">
                    {feature.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#288EC2] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
