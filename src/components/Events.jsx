import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Mic, Presentation as PresentationScreen, ChevronRight as ChessKnight, Map, Trophy } from 'lucide-react';

function Events() {
  const [activeTab, setActiveTab] = useState('technical');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const technicalEvents = [
    {
      title: "Tech Trivia",
      icon: Brain,
      description: "Test your technical knowledge in this exciting quiz competition",
      members: "Team of 2",
      fee: "₹200",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      link: 'https://forms.gle/abqcqxHKJjXT1Mhp7'
    },
    {
      title: "CodeClash",
      icon: Code,
      description: "Battle it out in this intense coding competition",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      link : 'https://forms.gle/GnaKzeoz2giStKEe7',
      members: "Individual",
      fee: "₹100"
    },
    {
      title: "TechXhibit",
      icon: PresentationScreen,
      description: "Showcase your innovative technical projects",
      image: "https://media.istockphoto.com/id/1641611860/photo/asian-event-participants-guest-registering-at-reception-desk-attending-business-conference.webp?a=1&b=1&s=612x612&w=0&k=20&c=o9CJ1XSYSqoKm55uhnku4H2wnCuiYPwFZymwaqL7WmY=",
      link: 'https://forms.gle/quYXbcFWX4H1VLVq9',
      members: "Team of 2",
      fee: "₹200",
    },
    {
      title: "BrainStorm Battle",
      icon: Brain,
      description: "Engage in thought-provoking group discussions",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      link : 'https://forms.gle/aSFBGgHisgaS7wSV7',
      members: "Individual",
      fee: "₹100"
    },
    {
      title: "Speak Up",
      icon: Mic,
      description: "Showcase your public speaking skills",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
      link : 'https://forms.gle/QD1W3QZEhdMDtBqY6',
      members: "Individual",
      fee: "₹100"
    },
    {
      title: "Paper Presentation",
      icon: PresentationScreen,
      description: "Present your research and ideas",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
      link : 'https://forms.gle/Q79kapyTyv9dNqr29',
      members: "Team of 2",
      fee: "₹200",
    }
  ];

  const nonTechnicalEvents = [
    {
      title: "Treasure Hunt",
      icon: Map,
      description: "Embark on an exciting adventure across campus",
      image: "https://media.istockphoto.com/id/1126694541/photo/ancient-wooden-box-with-glowing-light.webp?a=1&b=1&s=612x612&w=0&k=20&c=zArt6TXN4NQh31TYJ5YdTUmiwyQVMC5mJhsLjgW9bNM=",
      link:'https://forms.gle/96jNkUwZ9DGaBvex7',
      members: "Individual",
      fee: "₹100"
    },
    {
      title: "Customized Chess",
      icon: ChessKnight,
      description: "Show off your strategic thinking",
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800",
      link:'https://forms.gle/HxPNdtsSuWYh9V8F9',
      members: "Individual",
      fee: "₹100"
    },
    {
      title: "Sight on Site",
      icon: Trophy,
      description: "On-spot photography competition",
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=800",
      link : 'https://forms.gle/yubQ1Fs9XpNkN3VD6',
      members: "Individual",
      fee: "₹100"
    },
  ];

  const currentEvents = activeTab === 'technical' ? technicalEvents : nonTechnicalEvents;

  return (
    <div className="min-h-screen py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        >
          Events
        </motion.h2>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-full p-1">
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'technical'
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Technical Events
            </button>
            <button
              onClick={() => setActiveTab('non-technical')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'non-technical'
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Non-Technical Events
            </button>
          </div>
        </motion.div>

        <motion.div 
          key={activeTab}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentEvents.map((event, index) => (
            <motion.div
              key={event.title}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <event.icon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-300">{event.description}</p>
                <p className="text-gray-100 font-bold">Team : {event.members}</p>
                <p className="text-gray-100 font-bold mb-4">Regisration Fee : {event.fee}</p>
                <div className="flex justify-between items-center">
                  <motion.a
                    href={event.link}
                    target = "_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-600 transition-colors duration-200"
                  >
                    Register Now
                  </motion.a>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Events;
