import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import profileImage from '../assets/profile.png';
import { Code, Briefcase, Award, Target } from 'lucide-react';

const Home = () => {
  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Technical Skills',
      items: ['Figma, Moqups, Full-stack (MERN)', 'Java, JavaScript, Python, SQL', 'Wireframing, UI/UX Design Principles'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Methodologies & Tools',
      items: ['Agile, Scrum, Kanban, Lean', 'Excel, Jira, Confluence, GitHub'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Certifications',
      items: ['Software Product Management (UAlberta)', 'Google Project Management'],
      color: 'from-highlight to-amber-500',
    },
  ];

  const timeline = [
    { year: '2018 – 2021', title: 'Bachelors in Computer Engineering', desc: 'University of Mumbai, Mumbai, India', icon: '🎓' },
    { year: '2022 – 2024', title: 'Product Experience in Ed-Tech', desc: 'Led Redesigns, Stakeholder Alignment, and Product Delivery.', icon: '💼' },
    { year: 'Fall 2024 – Fall 2026', title: 'Masters in Information Systems', desc: 'Northeastern University, Boston, MA — Product & Project Management.', icon: '📚' },
    { year: '2025', title: 'Built Products from Scratch', desc: 'Redesigned Craigslist, Disney+, created Resido & Job Portal apps.', icon: '🚀' },
    { year: 'Jan – Aug 2026', title: 'Product Management Intern @ RoonCyber', desc: '8-month internship building internal AI tooling for an AI workload security startup — competitive intelligence automation, PRD generation, and technical documentation.', icon: '🎯' },
    { year: 'Now', title: 'Final Semester @ Northeastern', desc: 'Back on campus this September, graduating Fall 2026 with my Master\'s in Information Systems.', icon: '🎓', highlight: true },
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 md:px-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-light to-white" />
        <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
        
        {/* Floating shapes */}
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-secondary font-semibold text-sm tracking-wider uppercase">Get to know me</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">About Me</h2>
          </motion.div>

          {/* Profile Card */}
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-secondary to-accent rounded-full blur opacity-30" />
              <img
                src={profileImage}
                alt="Prasad Shinde"
                className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl"
              />
            </motion.div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold text-primary mb-1">Prasad Shinde</h3>
              <p className="text-secondary font-semibold mb-3">
                Product Manager · MS Information Systems @ Northeastern, Fall 2026
              </p>
              <p className="text-lg text-dark/80 leading-relaxed">
                I'm a <span className="text-secondary font-semibold">Product Manager</span> with a background in UI/UX, Full-Stack Development, and Data Analysis. I just wrapped an 8-month co-op at <span className="font-semibold">RoonCyber</span> building internal AI tooling, and I ship my own products end to end — translating user pain points into scalable, real-world solutions.
              </p>
              <p className="text-dark/60 mt-4 italic flex items-center justify-center md:justify-start gap-2">
                <span>Driven by curiosity, design thinking, and good coffee</span> ☕
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm tracking-wider uppercase">What I bring</span>
            <h3 className="text-3xl font-bold text-primary mt-2">Skills & Expertise</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-light hover:bg-white rounded-2xl p-6 border border-transparent hover:border-secondary/20 hover:shadow-xl transition-all duration-500"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{skill.title}</h4>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-dark/70 text-sm">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 md:px-20 bg-light relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-30" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm tracking-wider uppercase">Where I've been</span>
            <h3 className="text-3xl font-bold text-primary mt-2">My Journey</h3>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-accent to-highlight" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-lg z-10" />
                
                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border ${
                    item.highlight 
                      ? 'bg-gradient-to-r from-primary to-dark text-white border-transparent' 
                      : 'bg-white border-gray-100'
                  }`}>
                    <span className="text-4xl mb-3 block">{item.icon}</span>
                    <span className={`font-semibold text-sm ${item.highlight ? 'text-secondary' : 'text-secondary'}`}>{item.year}</span>
                    <h4 className={`text-lg font-bold mt-1 ${item.highlight ? 'text-white' : 'text-primary'}`}>{item.title}</h4>
                    <p className={`mt-2 text-sm ${item.highlight ? 'text-gray-300' : 'text-dark/70'}`}>{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}


          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;