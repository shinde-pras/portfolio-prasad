import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import profileImage from '../assets/profile.png';

const About = () => {
  return (
    <PageWrapper>
      <section className="pt-24 px-6 md:px-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-8">About Me</h2>

        {/* Profile & Intro */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <img
            src={profileImage}
            alt="Prasad Shinde"
            className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-md"
          />
          <div className="text-center md:text-left">
            <p className="text-lg text-gray-700">
              I'm <span className="font-semibold text-primary">Prasad</span>, an aspiring Product Manager with a background in Product, UI/UX, Full-Stack Development, and Data Analysis. I thrive at the intersection of Technology and User Experience — translating user pain points into innovative, scalable Product solutions.
            </p>
            <p className="text-md text-gray-600 mt-4 italic">
              Driven by curiosity, design thinking, and good coffee ☕
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-3 gap-6 text-left mb-16">
          <div>
            <h4 className="text-xl font-semibold text-primary mb-2">Technical Skills</h4>
            <ul className="text-gray-600 space-y-1">
              <li>Figma, Moqups, Full-stack (MERN)</li>
              <li>Java, JavaScript, Python, SQL</li>
              <li>Wireframing, UI/UX Design Principles</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-primary mb-2">Methodologies & Tools</h4>
            <ul className="text-gray-600 space-y-1">
              <li>Agile, Scrum, Kanban, Lean</li>
              <li>Excel, Jira, Confluence, GitHub</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-primary mb-2">Certifications</h4>
            <ul className="text-gray-600 space-y-1">
              <li>Software Product Management (University of Alberta)</li>
              <li>Google Project Management Certification</li>
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h4 className="text-2xl font-bold text-primary mb-6 text-center">My Journey</h4>
          <div className="relative border-l-4 border-primary pl-6 space-y-8">

            {/* Entry 1 */}
            <div className="flex flex-col md:flex-row gap-4">
              <span className="text-primary font-semibold min-w-[160px]">2018 – 2021</span>
              <div>
                <h5 className="text-lg font-semibold text-gray-800">Bachelors in Computer Engineering</h5>
                <p className="text-gray-600">University of Mumbai, Mumbai, India</p>
              </div>
            </div>

            {/* Entry 2 */}
            <div className="flex flex-col md:flex-row gap-4">
              <span className="text-primary font-semibold min-w-[160px]">2022 – 2024</span>
              <div>
                <h5 className="text-lg font-semibold text-gray-800">Product Experience in Ed-Tech</h5>
                <p className="text-gray-600">Led Redesigns, Stakeholder Alignment, and Product Delivery.</p>
              </div>
            </div>

            {/* Entry 3 */}
            <div className="flex flex-col md:flex-row gap-4">
              <span className="text-primary font-semibold min-w-[160px]">2024 – Present</span>
              <div>
                <h5 className="text-lg font-semibold text-gray-800">Masters in Information Systems</h5>
                <p className="text-gray-600">Northeastern University, Boston, MA — Focused on Product & Project Management.</p>
              </div>
            </div>

            {/* Entry 4 */}
            <div className="flex flex-col md:flex-row gap-4">
              <span className="text-primary font-semibold min-w-[160px]">2025</span>
              <div>
                <h5 className="text-lg font-semibold text-gray-800">Built Products from Scratch</h5>
                <p className="text-gray-600">Redesigned Craigslist, Disney+, created Resido & Job Portal apps.</p>
              </div>
            </div>

            {/* Final Highlighted Entry with Animation */}
            <div className="flex flex-col md:flex-row gap-4">
              <span className="text-primary font-semibold min-w-[160px]">Now</span>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                viewport={{ once: true }}
                className="bg-blue-50 border-l-4 border-primary p-5 rounded-md shadow-sm"
              >
                <p className="text-gray-800 font-semibold text-lg">
                  🚀 <span className="text-primary font-bold">Currently seeking</span> Summer/Fall/Spring <strong>Internship / Co-Op</strong> opportunities to solve real User Problems and deliver impactful solutions.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default About;