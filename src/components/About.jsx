import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ImageMasking from "./ui/image-masking-1";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

          {/* Right side - Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center"
          >
            <ImageMasking className="w-full max-w-4xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
