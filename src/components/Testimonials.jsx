import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: 'John Loise',
      location: 'Miami',
      text: 'The yacht was stunning, and the crew was beyond amazing. A truly unforgettable experience!',
      rating: 5,
      date: 'April, 2025',
      avatar: '👨‍💼'
    },
    {
      name: 'Sofia Emily', 
      location: 'California',
      text: 'The sailboat was breathtaking, and the team was incredibly skilled. An experience I\'ll always cherish!',
      rating: 4.9,
      date: 'January, 2025',
      avatar: '👩‍💻'
    },
    {
      name: 'Christopher',
      location: 'New York', 
      text: 'The yacht was stunning, and the crew was beyond amazing. A truly unforgettable experience!',
      rating: 4.9,
      date: 'November, 2025',
      avatar: '👨‍🎨'
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
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
            What Our Clients Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600"
          >
            Tailored Experiences for Every Occasion
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#288EC2]/10 to-[#288EC2]/5 rounded-bl-3xl"></div>
              
              {/* Avatar and Info */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#288EC2]/20 to-[#288EC2]/10 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-3xl">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed text-lg relative z-10">
                "{testimonial.text}"
              </p>
              
              {/* Rating and Date */}
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-xl">⭐</span>
                  <span className="font-bold text-gray-900 text-lg">{testimonial.rating}</span>
                </div>
                <span className="text-sm text-[#288EC2] font-medium">{testimonial.date}</span>
              </div>
              
              {/* Hover effect decoration */}
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex justify-center"
        >
          <div className="flex gap-3">
            <motion.div 
              whileHover={{ scale: 1.2 }}
              className="w-4 h-4 bg-[#288EC2] rounded-full cursor-pointer"
            ></motion.div>
            <motion.div 
              whileHover={{ scale: 1.2 }}
              className="w-4 h-4 bg-gray-300 rounded-full cursor-pointer hover:bg-[#288EC2] transition-colors duration-300"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;