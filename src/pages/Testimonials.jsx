import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Vijay Dalvi',
    role: 'Director, Molex',
    quote: "Prasad's ability to translate user pain points into clean, actionable design solutions is outstanding. His designs are always thoughtful and user-centric.",
  },
  {
    name: 'Rahul Gupta',
    role: 'CEO, Trainity',
    quote: "I worked with Prasad on a complex redesign project. His ownership, collaboration, and sharp product instincts made a huge difference to the final outcome.",
  },
  {
    name: 'Ms. Nichole Graham',
    role: 'Professor, Northeastern University',
    quote: "Prasad consistently impressed me with his attention to detail, creative thinking, and strong grasp of full-stack product development principles.",
  },
];

const Testimonials = () => {
  return (
    <PageWrapper>
      <section className="pt-24 px-6 md:px-20 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-12">Testimonials</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-100 text-left"
            >
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <hr className="my-4 border-primary" />
              <div className="text-sm text-gray-600">
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p>{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Testimonials;