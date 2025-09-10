import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "15+", label: "Years of Maritime Excellence" },
    { number: "200+", label: "Luxury Transformations" },
    { number: "50+", label: "Bespoke Yacht Interiors" },
    { number: "98%", label: "Client Satisfaction Rate" },
  ];

  const values = [
    {
      icon: "✨",
      title: "Artisan Excellence",
      description:
        "Every detail is meticulously crafted to exceed the highest standards of luxury and sophistication",
    },
    {
      icon: "🤝",
      title: "Partnership Legacy",
      description:
        "We forge enduring relationships built on trust, transparency, and shared vision for maritime luxury",
    },
    {
      icon: "🎯",
      title: "Innovation Mastery",
      description:
        "Pioneering design solutions that seamlessly blend cutting-edge technology with timeless elegance",
    },
  ];

  return (
    <section ref={ref} id="about" className="py-24 bg-white">
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
            About
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Where artistry meets maritime excellence. We transform luxury yachts into 
            personalized sanctuaries that reflect your unique vision and elevate every moment at sea.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-8">Crafting Excellence at Sea</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Born from a passion for maritime luxury and architectural innovation, COZ CRUISE 
              has redefined yacht interior design for over 15 years. We don't just create spaces—we 
              curate experiences that seamlessly blend sophisticated aesthetics with functional excellence.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our philosophy centers on understanding that your yacht is more than a vessel; it's your 
              floating residence, entertainment sanctuary, and personal retreat. Every project begins with 
              your story, translating your lifestyle and dreams into bespoke interiors that stand the test of time.
            </p>
            <div className="bg-gradient-to-r from-[#288EC2]/10 to-[#288EC2]/5 rounded-2xl p-8 border-l-4 border-[#288EC2]">
              <p className="text-lg text-gray-700 leading-relaxed font-medium italic">
                "Excellence isn't just our standard—it's our signature. From the initial concept sketch 
                to the final installation, we ensure every detail reflects uncompromising quality and 
                timeless elegance."
              </p>
            </div>
          </motion.div>

          {/* Right side - Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-[#288EC2] mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl font-bold text-gray-900 mb-8">Our Foundation</h3>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            Three pillars that anchor our commitment to transforming your maritime dreams into extraordinary reality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-20 h-20 bg-[#288EC2]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">{value.icon}</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
