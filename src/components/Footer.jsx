import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/prasadshinde5', label: 'LinkedIn' },
    { icon: <Github size={20} />, href: 'https://github.com/shinde-pras', label: 'GitHub' },
    { icon: <Mail size={20} />, href: 'mailto:shinde.pras@northeastern.edu', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'About', path: '/' },
    { name: 'Portfolio', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-gradient-to-br from-secondary to-teal-400 rounded-lg flex items-center justify-center text-sm">
                PS
              </span>
              Prasad Shinde
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Product Manager & Builder. Passionate about creating products that solve real problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4">
              MS Information Systems @ Northeastern
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Prasad Shinde. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Built with <Heart size={14} className="text-red-400 fill-red-400" /> using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;