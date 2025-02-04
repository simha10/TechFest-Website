import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

function Contact() {
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

  const coordinators = [
    {
      title : 'Chairman of Celestra-2k25',
      fac1 : 'Dr. K.Venkateswara Rao (PRINCIPAL)',
      title2 : 'Convener of Celestra-2k25',
      fac2 : 'Dr. A. yesu Babu (HOD of CSE)',
      title3 : 'Faculty Co-ordinators',
      fac5 : 'Dr. K. N. Madhavi Latha (Associate Professor)',
      fac3 : 'V. Pranav : +91 9966558636 (Assisatant Professor)',
      fac4 : 'M. Ganesh Babu :+91 9948027644 (Assistant Professor)',
    },
    {
      title : 'Student Co-ordinators',
      fac1 : 'B. Yashwanth : +91 7671840282',
      fac2 : 'M. Sai Karthik : +91 9866901223',
      fac3 : 'D. Abhinava Sai :+91 7382939301',
      fac4 : 'Y. L. Narasimha : +91 9912062170',
      fac5 : 'K. Shanthi Kumari',
      fac6 : 'V. Sravani',
    }
    
  ];

  return (
    <div className="min-h-screen py-16 md:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-4xl mx-auto px-4"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        >
          Contact Us
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
        >
          {[
            { icon: Phone, title: "Call Us", info: "+91 9866901223" },
            { icon: Mail, title: "Email", info: "cse.celestra.2k25@gmail.com" },
            { icon: MapPin, title: "Location", info: "Sir C R Reddy College Of Engineering" }
          ].map(({ icon: Icon, title, info }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 text-center transform transition-all duration-300 hover:shadow-xl"
            >
              <Icon className="w-8 h-8 mx-auto mb-3 md:mb-4 text-purple-400" />
              <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-300 text-sm md:text-base">{info}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {coordinators.map((coordinator) => (
  <motion.div
    key={coordinator.title} 
    variants={itemVariants}
    whileHover={{ scale: 1.05 }}
    className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 transform transition-all duration-300 hover:shadow-xl"
  >
    <h3 className="md:text-l font-bold mb-2">{coordinator.title}</h3>
    <p className="text-gray-300 text-sm md:text-base mb-2">{coordinator.fac1}</p>
    <h3 className="md:text-l font-bold mb-2">{coordinator.title2}</h3>
    <p className="text-gray-300 text-sm md:text-base mb-2">{coordinator.fac2}</p>
    <h3 className="md:text-l font-bold mb-2">{coordinator.title3}</h3>
    <p className="text-gray-300 text-sm md:text-base mb-2">{coordinator.fac3}</p>
    <p className="text-gray-300 text-sm md:text-base mb-2">{coordinator.fac4}</p>
    <p className="text-gray-300 text-sm md:text-base mb-2">{coordinator.fac5}</p>
    <p className="text-gray-300 text-sm md:text-base mb-2">{coordinator.fac6}</p>
  </motion.div>
))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;