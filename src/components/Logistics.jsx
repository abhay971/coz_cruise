import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Logistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const logisticsServices = [
    {
      icon: "📦",
      title: "Independent Procurement",
      description:
        "Professional procurement coordination for yacht projects, whether sourcing from our brands or external suppliers.",
      color: "#F37E3A",
    },
    {
      icon: "🏢",
      title: "Flexible Storage",
      description:
        "Secure warehouse facilities available for any yacht project materials, regardless of supplier origin.",
      color: "#288EC2",
    },
    {
      icon: "🚢",
      title: "Project Logistics",
      description:
        "Complete shipping, customs, and delivery management for multi-supplier yacht projects worldwide.",
      color: "#6EBD49",
    },
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
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Operations Management
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Supporting yacht professionals with specialized operational services
            that streamline project execution, regardless of product sourcing
            arrangements.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {logisticsServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md"
                style={{ backgroundColor: `${service.color}15` }}
              >
                <span className="text-4xl">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Standalone Service Solutions
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                These operational services are available independently of our brand representation work. Whether you're sourcing from our portfolio or working with other suppliers, we can provide specialized support to streamline your project execution.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#F37E3A] rounded-full"></div>
                  <span className="text-gray-700 font-medium">Available for any yacht project</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#288EC2] rounded-full"></div>
                  <span className="text-gray-700 font-medium">Independent of product sourcing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#6EBD49] rounded-full"></div>
                  <span className="text-gray-700 font-medium">Flexible engagement options</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#288EC2]/10 to-[#288EC2]/5 rounded-2xl p-8 border-l-4 border-[#288EC2]">
              <p className="text-lg text-gray-700 leading-relaxed font-medium italic">
                "These services operate independently from our brand partnerships - we can support your operational needs even when you're not purchasing through our represented brands."
              </p>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Logistics;
