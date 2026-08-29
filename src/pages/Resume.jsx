import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { Download, GraduationCap, Award, Code, Wrench } from 'lucide-react';

const Resume = () => {
  const sections = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Education',
      color: 'from-blue-500 to-cyan-500',
      items: [
        'MS in Information Systems – Northeastern University (2026)',
        'Bachelors in Computer Engineering – University of Mumbai (2021)',
      ],
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Certifications',
      color: 'from-purple-500 to-pink-500',
      items: [
        'Software Product Management – University of Alberta',
        'Google Project Management Certification',
        'Google Product Management Certification',
      ],
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Technical Skills',
      color: 'from-secondary to-teal-400',
      items: [
        'React, Node.js, MongoDB, Express, JavaScript, Java, SQL, Python',
        'UI/UX – Figma, Moqups, Wireframing, Accessibility',
      ],
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Tools & Methodologies',
      color: 'from-highlight to-amber-500',
      items: [
        'Agile, Scrum, Kanban, Lean',
        'Jira, Confluence, Excel, GitHub, Postman',
      ],
    },
  ];

  return (
    <PageWrapper>
      <section className="pt-24 pb-20 px-6 md:px-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-light to-white" />
        <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
        
        {/* Floating shapes */}
        <motion.div 
          className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-secondary font-semibold text-sm tracking-wider uppercase">My background</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">Resume</h2>
            <p className="text-dark/60 mt-4 max-w-xl mx-auto">
              Download my resume or explore the highlights below
            </p>
          </motion.div>

          {/* Download Button */}
          <motion.div 
            className="flex justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.a
              href="/portfolio-prasad/PrasadShinde_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-secondary to-teal-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              <Download size={22} className="relative z-10" />
              <span className="relative z-10">Download Resume (PDF)</span>
            </motion.a>
          </motion.div>

          {/* Resume Sections Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${section.color} rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500`} />
                
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {section.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary mb-4">{section.title}</h3>
                  
                  {/* Items */}
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-dark/70">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-br ${section.color} mt-2 flex-shrink-0`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
              <p className="text-lg font-semibold mb-2">Want to know more?</p>
              <p className="text-gray-300 text-sm mb-4">Check out my portfolio to see these skills in action</p>
              <a 
                href="#/projects"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-teal-400 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/30"
              >
                View Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Resume;