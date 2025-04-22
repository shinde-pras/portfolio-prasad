import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Craigslist Mobile Redesign',
    description: 'Analyzed user pain points and proposed a complete UX/UI overhaul using Moqups and Figma.',
    tools: ['Figma', 'UX Research', 'Moqups'],
    url: 'https://www.figma.com/design/jnvIOGNln11kPjmBZ48PEf/Craigslist-mobile-app-revamp?node-id=0-1&t=bCv5ys8oWJD86IGa-1',
  },
  {
    title: 'Resido Real Estate App',
    description: 'Built a modern real estate marketplace app with enhanced features inspired by competitors.',
    tools: ['Figma', 'UI Design', 'Competitive Analysis'],
    url: 'https://www.figma.com/design/C7WVsyyspwmt1M1Y2u28M2/Resido-App-design?node-id=6-17&t=bCv5ys8oWJD86IGa-1',
  },
  {
    title: 'Disney+ Feature Prototype',
    description: 'Prototyped new features and redesigned key screens to improve user experience.',
    tools: ['Figma', 'UX Design'],
    url: 'https://app.moqups.com/7xg9DLnMSq2Zyd2TQ6mm4aA4MHJdfjQA/view/page/a21527fe8',
  },
  {
    title: 'University Health System',
    description: 'Led product vision and UX for UHCMS to improve scheduling, telehealth, and analytics.',
    tools: ['Product Strategy', 'Wireframing', 'Change Management'],
    url: 'https://drive.google.com/file/d/14VCAeEWvDMkJnYNbNeJxc4tEmotLRklQ/view?usp=sharing',
  },
  {
    title: 'Job Portal App using MERN Stack',
    description: 'Full-stack job portal with user auth, admin/employee dashboards, and modern UI.',
    tools: ['React', 'Node.js', 'MongoDB', 'Redux'],
    url: 'https://github.com/shinde-pras/WebD_Shinde_Prasad_002060693_Assignments',
  },
];

const Projects = () => {
  return (
    <PageWrapper>
      <section className="pt-24 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-100 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm mb-4">
                {project.tools.map((tool, i) => (
                  <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{tool}</span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-blue-400 transition"
              >
                View Case Study
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Projects;