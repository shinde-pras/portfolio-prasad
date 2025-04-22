import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <PageWrapper>
      <section className="pt-24 px-6 md:px-20 max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Resume
        </motion.h2>

        <p className="text-lg text-gray-700 mb-6">
          Download a copy of my latest resume or view key highlights below.
        </p>

        <a
          href="/resume-prasad-shinde.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white px-6 py-3 rounded shadow-md hover:bg-blue-400 transition-all duration-300 mb-12"
        >
          Download Resume (PDF)
        </a>

        {/* Quick Resume Highlights */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h4 className="text-xl font-semibold text-primary mb-2">Education</h4>
            <ul className="text-gray-600 space-y-1">
              <li>🎓 MS in Information Systems – Northeastern University (2026)</li>
              <li>🎓 Bachelors in Computer Engineering – University of Mumbai (2021)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-primary mb-2">Certifications</h4>
            <ul className="text-gray-600 space-y-1">
              <li>📜 Software Product Management – University of Alberta</li>
              <li>📜 Google Project Management Certification</li>
              <li>📜 Google Product Management Certification</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-primary mb-2">Technical Skills</h4>
            <ul className="text-gray-600 space-y-1">
              <li>React, Node.js, MongoDB, Express, JavaScript, Java, SQL, Python</li>
              <li>UI/UX – Figma, Moqups, Wireframing, Accessibility</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-primary mb-2">Tools & Methodologies</h4>
            <ul className="text-gray-600 space-y-1">
              <li>Agile, Scrum, Kanban, Lean</li>
              <li>Jira, Confluence, Excel, GitHub, Postman</li>
            </ul>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Resume;