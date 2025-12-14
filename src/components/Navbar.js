import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import brandLogo from '../assets/brandko.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ];

  // Function to check if a link is active
  const isActive = (path) => {
    // Handle home path separately to avoid partial matches
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-lg shadow-xl py-2 border-b border-gray-800' 
          : 'bg-gray-900/90 py-3'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between relative py-3 md:py-4">
          {/* Logo/Brand - Left side */}
          <motion.div 
            className="flex-shrink-0 z-10"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              to="/" 
              className="hover:opacity-90 transition-opacity"
            >
              <img 
                src={brandLogo} 
                alt="Portfolio Logo" 
                className="h-10 ml-8 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-1 bg-gray-800/60 backdrop-blur-md rounded-full px-2 py-1.5 border border-gray-700/50 shadow-inner">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <motion.div 
                    key={link.name}
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={link.path}
                      className={`relative z-10 block px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                        active
                          ? 'text-white font-semibold'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                    {active && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-full border border-primary-500/30"
                        initial={false}
                        transition={{
                          type: 'spring',
                          bounce: 0.25,
                          duration: 0.5
                        }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </nav>
          
          {/* CTA Button - Right side */}
          <div className="flex items-center space-x-4 z-10">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/contact"
                className="hidden md:flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20"
              >
                Get in Touch
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden mt-3"
            >
              <div className="bg-gray-800/90 backdrop-blur-lg rounded-xl p-2 space-y-1 border border-gray-700/50 shadow-lg">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <motion.div
                      key={link.name}
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                          active
                            ? 'bg-gradient-to-r from-primary-900/30 to-primary-800/20 text-primary-400 border-l-4 border-primary-500 pl-3'
                            : 'text-gray-300 hover:bg-gray-700/50 hover:pl-5'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  className="mt-3"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-4 py-3 text-center text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-primary-500/20"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
