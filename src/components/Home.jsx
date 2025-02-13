import React from "react";
import Marquee from "react-marquee-slider";
import { motion } from "framer-motion";
import { Sparkles, Star, } from "lucide-react";

function Home({ scrollToSection }) {

  const HnadleRegisterClick = () => {
    console.log("working")
    scrollToSection('events');
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 text-white">
      {/* Background Stars Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center z-10 w-full max-w-3xl"
      >
        {/* Animated Icon */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity },
          }}
          className="inline-block mb-6"
        >
          <Sparkles className="w-16 h-16 text-yellow-400" />
        </motion.div>

        {/* Event Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-5xl md:text-3xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent tracking-wide"
        >
          Sir C R Reddy College of Engineering <span className="text-yellow-500 font-bold">(Autonomous)</span>
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent tracking-wide"
        >
          CELESTRA 2K25
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xl md:text-2xl mb-6 text-yellow-400 font-semibold"
        >
          Unleash Your Potential, Ignite Your Future
        </motion.p>

        {/* Event Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-l mb-8 text-white px-6"
        >
          The Department of <span className="text-pink-600 font-bold">Computer Science & Engineering</span> at <span className="text-pink-600 font-bold">Sir C R Reddy College of Engineering </span> presents an electrifying blend of technical and non-technical events that will challenge your creativity, innovation, and skills.
        </motion.p>

        {/* Event Details */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl text-white mb-6"
        >
              Event Date: <span className="text-red-400 font-bold">28th Feb, 2025</span> <br />
          ⏳ Registration Deadline: <span className="text-red-400 font-bold">27th Feb, 2025</span><br/>
              Event Venue : <span className="text-red-400 font-bold">Department of CSE</span><br/><br/>
              <div className="border-2 border-gray-400 p-2 rounded-lg">
              Free bus facility for participants can be available from :<br/>
              <marquee behavior="" direction="">Vijayawada, Nuzvid, Katrenipadu, Kaikaluru, Kamavarapu kota, Bhimadolu, Jalipudi, Kondalarao Palem, Dharmaji Gudem, GunduGolanu, Galayagudem, Gudivada </marquee>
              </div>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-l mb-8 text-white px-6"
        >
          Don't miss out on the opportunity to be part of our exciting <span className="font-bold text-pink-400">CELESTRA 2k25</span> Join us for an unforgettable celebration of innovation, learning, and technology in action!
        </motion.p>

        {/* Call to Action Button */}
        <motion.button
          onClick={HnadleRegisterClick}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-900 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-xl"
        >
          <div className="flex">
            Register Now</div>
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Home;
