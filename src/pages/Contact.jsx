import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <PageWrapper>
      <section className="pt-24 px-6 md:px-20 max-w-xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let’s Connect!
        </motion.h2>

        <p className="text-gray-700 mb-10">
          I'm always open to internship or collaboration opportunities in product, UX, or tech. Feel free to reach out!
        </p>

        {/* Centered Contact Links */}
        <div className="space-y-6 text-gray-700 text-center mx-auto">
          <div className="flex justify-center items-center gap-3 hover:text-primary transition">
            <Mail size={20} />
            <a href="mailto:shinde.pras@northeastern.edu" className="underline">
              shinde.pras@northeastern.edu
            </a>
          </div>
          <div className="flex justify-center items-center gap-3 hover:text-primary transition">
            <Linkedin size={20} />
            <a
              href="https://linkedin.com/in/prasadshinde5"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              linkedin.com/in/prasadshinde5
            </a>
          </div>
          <div className="flex justify-center items-center gap-3 hover:text-primary transition">
            <Github size={20} />
            <a
              href="https://github.com/shinde-pras"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              github.com/shinde-pras
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;