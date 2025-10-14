import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "Extensive", label: "Industry Experience" },
    { number: "Trusted", label: "Brand Relationships" },
    { number: "Dedicated", label: "Professional Support" },
    { number: "Proven", label: "Track Record" },
  ];

  const values = [
    {
      icon: "⭐",
      color: "#F37E3A",
      title: "Innovative Approach",
      description:
        "Our commitment to the highest standards of quality and professionalism drives every aspect of our business relationships and brand representation",
    },
    {
      icon: "🤝",
      color: "#288EC2",
      title: "Integrity Always",
      description:
        "We build lasting partnerships through transparent communication, honest dealings, and unwavering commitment to our professional relationships",
    },
    {
      icon: "🧭",
      color: "#6EBD49",
      title: "Industry Knowledge",
      description:
        "Deep understanding of the yachting industry allows us to anticipate needs, provide valuable insights, and deliver solutions that truly matter",
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
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            CLUB of Yacht Decor Brands
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed"
          >
            We partner with selected brands to deliver exceptional yacht decor
            solutions, <br />
            <span>
              combining innovative design philosophy with meticulous attention
              to product detail.
            </span>
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
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Your Trusted Partner in Luxury Yachting
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 text-justify justify-center">
              Our team has sound experience in yachting interiors, partnering
              with best brands to deliver exceptional solutions. We represent
              luxury brands that craft premium items for yachts, facilitating
              seamless collaboration between manufacturers and yacht designers.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 text-justify justify-center">
              We understand the unique requirements of yacht designers and
              provide comprehensive support including in-person meetings, expert
              product specification, sample coordination, detailed quotations,
              and dedicated after-sales service to ensure project success.
            </p>
            <div className="bg-gradient-to-r from-[#288EC2]/10 to-[#288EC2]/5 rounded-2xl p-8 border-l-4 border-[#288EC2]">
              <p className="text-lg text-gray-700 leading-relaxed font-medium italic text-justify justify-center">
                "We facilitate seamless partnerships between luxury brands and
                yacht designers, ensuring every project meets the highest
                standards of quality and service excellence."
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
          <h3 className="text-4xl font-bold text-gray-900 mb-8">
            Our Approach
          </h3>
          <p className="text-xl text-gray-600 mb-16 max-w-5xl mx-auto leading-relaxed">
            The fundamental values that define who we are and how we conduct
            business in the luxury yachting industry.
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
              className="text-center bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md"
                style={{ backgroundColor: `${value.color}15` }}
              >
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
