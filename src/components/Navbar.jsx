import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  // Rendered separately as the highlighted CTA at the end of the nav.
  const highlightLink = { name: 'Portfolio', path: '/projects' };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-primary/95 backdrop-blur-lg shadow-lg shadow-primary/20' 
        : 'bg-primary'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="text-xl font-bold text-white hover:text-secondary transition-colors duration-300 flex items-center gap-2"
          >
            <span className="w-8 h-8 bg-gradient-to-br from-secondary to-teal-400 rounded-lg flex items-center justify-center text-sm font-bold">
              PS
            </span>
            <span className="hidden sm:inline">Prasad Shinde</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-secondary font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-secondary rounded-full" />
                )}
              </Link>
            ))}
            <Link
              to={highlightLink.path}
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary via-teal-400 to-accent animate-gradient text-white rounded-lg font-semibold shadow-lg shadow-secondary/30 hover:shadow-xl hover:shadow-secondary/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              {highlightLink.name}
              <motion.span
                animate={{ scale: [1, 1.3, 1], rotate: [0, 18, 0], opacity: [0.75, 1, 0.75] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles size={16} />
              </motion.span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-secondary focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pb-4 space-y-1 bg-primary/95 backdrop-blur-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-3 px-4 rounded-lg text-lg transition-colors ${
                location.pathname === link.path
                  ? 'text-secondary font-semibold bg-white/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to={highlightLink.path}
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 py-3 px-4 mt-2 bg-gradient-to-r from-secondary via-teal-400 to-accent animate-gradient text-white rounded-lg font-semibold text-center shadow-lg shadow-secondary/30"
          >
            {highlightLink.name}
            <motion.span
              animate={{ scale: [1, 1.3, 1], rotate: [0, 18, 0], opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles size={16} />
            </motion.span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;