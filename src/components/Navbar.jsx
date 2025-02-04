import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Menu, X } from 'lucide-react';

function Navbar({ activeSection, setActiveSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['home', 'about', 'events', 'contact'];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="sticky top-0 z-50 bg-black/30 backdrop-blur-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              CELESTRA 2K25
            </span>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveSection(item)}
                className={`capitalize ${
                  activeSection === item
                    ? 'text-purple-400 border-b-2 border-purple-400'
                    : 'text-gray-300 hover:text-purple-400'
                } transition-colors duration-200`}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-2 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => {
                  setActiveSection(item);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 capitalize ${
                  activeSection === item
                    ? 'text-purple-400 bg-white/5'
                    : 'text-gray-300 hover:text-purple-400'
                } transition-colors duration-200`}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Navbar;