import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Trophy } from 'lucide-react';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen py-16 md:py-20 px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        >
          About CELESTRA 2K25
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {[
            { icon: Calendar, title: "Event Date", desc: "Feb 28th 2025" },
            { icon: Users, title: "5000+", desc: "Expected Participants" },
            { icon: Trophy, title: "20+", desc: "Exciting Events" }
          ].map(({ icon: Icon, title, desc }, index) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 text-center transform transition-all duration-300 hover:shadow-xl"
            >
              <Icon className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-blue-200" />
              <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-300 text-sm md:text-base">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="prose prose-invert max-w-none space-y-4 md:space-y-6 px-2"
        >
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            CELESTRA 2K25 is the flagship technical and cultural festival of our college, bringing together the brightest minds and creative spirits from across the nation. This three-day extravaganza features cutting-edge technical competitions, thought-provoking workshops, and electrifying cultural performances.
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Whether you're a coding enthusiast, a tech innovator, or someone looking to showcase your talents, CELESTRA 2K25 offers a platform for everyone to shine. Join us in this celebration of technology, creativity, and innovation!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;