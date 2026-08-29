import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Calendar, Sparkles } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'shinde.pras@northeastern.edu',
      href: 'mailto:shinde.pras@northeastern.edu',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/prasadshinde5',
      href: 'https://linkedin.com/in/prasadshinde5',
      color: 'from-blue-600 to-blue-400',
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'github.com/shinde-pras',
      href: 'https://github.com/shinde-pras',
      color: 'from-gray-700 to-gray-500',
    },
  ];

  return (
    <PageWrapper>
      <section className="pt-24 pb-20 px-6 md:px-20 relative overflow-hidden min-h-screen">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-light to-white" />
        <div className="absolute inset-0 bg-dots-pattern opacity-30" />
        
        {/* Floating shapes */}
        <motion.div 
          className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
        
        {/* Geometric shapes */}
        <motion.div
          className="absolute top-40 left-1/4 w-16 h-16 border-2 border-secondary/20 rounded-xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-40 right-1/4 w-12 h-12 border-2 border-accent/20 rounded-full"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-secondary font-semibold text-sm tracking-wider uppercase">Get in touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">Let's Connect!</h2>
            <p className="text-dark/60 mt-4 max-w-xl mx-auto text-lg">
              I'm always open to discussing product opportunities, tech innovations, or potential collaborations.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${contact.color} rounded-2xl opacity-0 group-hover:opacity-50 blur transition-opacity duration-500`} />
                
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center h-full flex flex-col items-center justify-center">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {contact.icon}
                  </div>
                  <p className="font-bold text-primary mb-1">{contact.label}</p>
                  <p className="text-dark/60 text-sm break-all">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Location & Availability */}
          <motion.div 
            className="grid md:grid-cols-2 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-primary">Location</p>
                <p className="text-dark/60 text-sm">Boston, Massachusetts</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-primary">Currently</p>
                <p className="text-dark/60 text-sm">Final semester — MS Information Systems @ Northeastern, graduating Fall 2026</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Animated border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-accent to-highlight rounded-3xl opacity-70 blur animate-gradient" style={{ backgroundSize: '200% 200%' }} />
            
            <div className="relative bg-gradient-to-br from-primary to-dark rounded-3xl p-10 text-white text-center overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block mb-4"
                >
                  <Sparkles className="w-12 h-12 text-secondary" />
                </motion.div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Let's Connect!
                </h3>
                <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                  I'm always open to discussing product ideas, collaborations, or just chatting about tech and cybersecurity.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.a
                    href="mailto:shinde.pras@northeastern.edu"
                    className="inline-flex items-center gap-2 bg-secondary hover:bg-teal-400 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-secondary/30 transition-all"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail size={20} /> Email Me
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/prasadshinde5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold transition-all"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Linkedin size={20} /> Connect
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;