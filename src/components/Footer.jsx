import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10 text-sm text-gray-600">
      <div className="flex justify-center gap-6 mb-3">
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/prasadshinde5"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          <Linkedin size={20} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/shinde-pras"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          <Github size={20} />
        </a>

        {/* Email */}
        <a
          href="mailto:shinde.pras@northeastern.edu"
          className="hover:text-primary transition"
        >
          <Mail size={20} />
        </a>
      </div>

      {/* Copyright */}
      <p className="font-medium">
        © {new Date().getFullYear()} Prasad Shinde. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;