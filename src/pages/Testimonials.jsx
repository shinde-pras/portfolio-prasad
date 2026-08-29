import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Vijay Dalvi',
    role: 'Director, Molex',
    quote: "Prasad's ability to translate user pain points into clean, actionable design solutions is outstanding. His designs are always thoughtful and user-centric.",
    rating: 5,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Rahul Gupta',
    role: 'CEO, Trainity',
    quote: "I worked with Prasad on a complex redesign project. His ownership, collaboration, and sharp product instincts made a huge difference to the final outcome.",
    rating: 5,
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Ms. Nichole Graham',
    role: 'Professor, Northeastern University',
    quote: "Prasad consistently impressed me with his attention to detail, creative thinking, and strong grasp of full-stack product development principles.",
    rating: 5,
    color: 'from-highlight to-amber-500',
  },
];

const Testimonials = () => {
  return (
    <PageWrapper>
      <section className="pt-24 pb-20 px-6 md:px-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-light to-white" />
        <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
        
        {/* Floating shapes */}
        <motion.div 
          className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-secondary font-semibold text-sm tracking-wider uppercase">What people say</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">Testimonials</h2>
            <p className="text-dark/60 mt-4 max-w-xl mx-auto">
              Feedback from mentors, colleagues, and clients I've had the pleasure of working with
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${testimonial.color} rounded-2xl opacity-0 group-hover:opacity-50 blur transition-opacity duration-500`} />
                
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full flex flex-col">
                  {/* Quote icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center mb-6`}>
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-dark/80 leading-relaxed flex-1 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="font-bold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-dark/60">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-gradient-to-r from-primary to-dark rounded-2xl p-8 text-white">
              <p className="text-lg font-semibold mb-2">Want to work together?</p>
              <p className="text-gray-300 text-sm mb-4">I'm always open to new opportunities and collaborations</p>
              <a 
                href="mailto:shinde.pras@northeastern.edu"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-teal-400 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/30"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Testimonials;