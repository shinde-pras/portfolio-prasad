import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { Zap, ExternalLink, ArrowRight, Sparkles, Lock, Shield } from 'lucide-react';

const featured = [
  {
    title: 'Helix Insights',
    subtitle: 'AI-Powered Healthcare Competitive Intelligence',
    icon: Zap,
    description:
      'AI-powered competitive intelligence for healthcare PMs, built and deployed solo with Python, ' +
      'Streamlit, and the FDA/ClinicalTrials.gov APIs. Turned 5 hours of manual research into a ' +
      '15-second analysis, caught a live trademark conflict in AI-suggested names before it became a ' +
      'problem, and handled real production failures along the way.',
    highlights: [
      { value: '15s', label: 'Analysis Time' },
      { value: '1800x', label: 'Faster' },
      { value: '95%', label: 'Success Rate' },
      { value: '$26K', label: 'Annual ROI' },
    ],
    tools: ['Python', 'Streamlit', 'AI/ML', 'FDA API', 'ClinicalTrials.gov', 'Brand Design', 'Vercel'],
    caseStudy: '/helix-insights',
    links: [
      { label: 'Live Demo', href: 'https://helix-insights.streamlit.app/', icon: Zap },
      {
        label: 'Read the Write-up',
        href: 'https://www.linkedin.com/pulse/what-competitive-research-took-15-seconds-prasad-shinde-pbfef',
        icon: ExternalLink,
      },
    ],
  },
  {
    title: 'RoonCyber',
    subtitle: 'AI Product Tooling · 8-Month PM Internship',
    icon: Shield,
    description:
      'Built internal AI tooling as a Product Management Intern at an AI workload security startup — ' +
      'an n8n automation pipeline for continuous competitive intelligence, a PRD generator that turns ' +
      'engineering discussions into structured PRDs and acceptance criteria, and technical ' +
      'documentation tailored to both engineering and security audiences.',
    // 20x is a real figure; the rest are deliverables, not invented metrics.
    highlights: [
      { value: '20x', label: 'Faster Turnaround' },
      { value: 'n8n', label: 'Intel Pipeline' },
      { value: 'PRD', label: 'Generator' },
      { value: 'Docs', label: 'Eng + Security' },
    ],
    tools: ['n8n', 'AI Tooling', 'PRD Generation', 'Technical Writing', 'Competitive Intelligence'],
    caseStudy: null,
    links: [],
    // Internal company tooling — no public link.
    internal: true,
  },
];

const projects = [
  {
    title: 'Craigslist Mobile Redesign',
    description: 'Analyzed user pain points and proposed a complete UX/UI overhaul using Moqups and Figma.',
    tools: ['Figma', 'UX Research', 'Moqups'],
    url: 'https://www.figma.com/design/jnvIOGNln11kPjmBZ48PEf/Craigslist-mobile-app-revamp?node-id=0-1&t=bCv5ys8oWJD86IGa-1',
    color: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    title: 'Resido Real Estate App',
    description: 'Built a modern real estate marketplace app with enhanced features inspired by competitors.',
    tools: ['Figma', 'UI Design', 'Competitive Analysis'],
    url: 'https://www.figma.com/design/C7WVsyyspwmt1M1Y2u28M2/Resido-App-design?node-id=6-17&t=bCv5ys8oWJD86IGa-1',
    color: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    title: 'Disney+ Feature Prototype',
    description: 'Prototyped new features and redesigned key screens to improve user experience.',
    tools: ['Figma', 'UX Design'],
    url: 'https://app.moqups.com/7xg9DLnMSq2Zyd2TQ6mm4aA4MHJdfjQA/view/page/a21527fe8',
    color: 'from-purple-500/10 to-pink-500/10',
  },
  {
    title: 'University Health System',
    description: 'Led product vision and UX for UHCMS to improve scheduling, telehealth, and analytics.',
    tools: ['Product Strategy', 'Wireframing', 'Change Management'],
    url: 'https://drive.google.com/file/d/14VCAeEWvDMkJnYNbNeJxc4tEmotLRklQ/view?usp=sharing',
    color: 'from-orange-500/10 to-amber-500/10',
  },
  {
    title: 'Job Portal App using MERN Stack',
    description: 'Full-stack job portal with user auth, admin/employee dashboards, and modern UI.',
    tools: ['React', 'Node.js', 'MongoDB', 'Redux'],
    url: 'https://github.com/shinde-pras/WebD_Shinde_Prasad_002060693_Assignments',
    color: 'from-indigo-500/10 to-violet-500/10',
  },
];

const Projects = () => {
  return (
    <PageWrapper>
      <section className="pt-24 pb-20 px-6 md:px-20 max-w-6xl mx-auto relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 relative z-10"
        >
          <span className="inline-block text-secondary font-semibold text-sm tracking-wider uppercase mb-4">Selected Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Portfolio</h2>
          <p className="text-dark/70 max-w-2xl mx-auto text-lg">
            A collection of products I've designed, built, and shipped — from concept to deployment.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 relative z-10 items-stretch">
          {featured.map((item, cardIndex) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={cardIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: cardIndex * 0.15 }}
                className="h-full"
              >
                <div className="block group h-full">
                  <div className="relative rounded-3xl h-full">
                    {/* Animated border gradient */}
                    <div
                      className="absolute -inset-[2px] bg-gradient-to-r from-secondary via-accent to-highlight rounded-3xl opacity-70 group-hover:opacity-100 blur-sm group-hover:blur-none transition-all duration-500 animate-gradient"
                      style={{ backgroundSize: '200% 200%' }}
                    />

                    {/* Card content */}
                    <div className="relative h-full bg-gradient-to-br from-primary via-primary to-dark rounded-3xl p-8 text-white overflow-hidden flex flex-col">
                      {/* Background shapes */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

                      {/* Animated particles */}
                      <motion.div
                        className="absolute top-16 right-12 w-2 h-2 bg-secondary rounded-full"
                        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute bottom-32 right-24 w-3 h-3 bg-accent rounded-full"
                        animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                      />

                      {/* Content */}
                      <div className="relative z-10 flex flex-col flex-grow">
                        {/* Featured Badge */}
                        <motion.span
                          className="self-start inline-flex items-center gap-2 bg-highlight text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg mb-6"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Sparkles size={14} /> Featured Project
                        </motion.span>

                        <div className="flex items-center gap-4 mb-6">
                          <motion.div
                            className="w-14 h-14 shrink-0 bg-gradient-to-br from-secondary to-teal-400 rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/30"
                            whileHover={{ rotate: 10, scale: 1.1 }}
                          >
                            <Icon className="w-7 h-7 text-white" />
                          </motion.div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold">{item.title}</h3>
                            <p className="text-gray-300 text-sm">{item.subtitle}</p>
                          </div>
                        </div>

                        <p className="text-gray-200 mb-8 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Highlights */}
                        <div className="grid grid-cols-2 gap-3 mb-8">
                          {item.highlights.map((metric, index) => (
                            <motion.div
                              key={index}
                              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * index }}
                              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                            >
                              <p className="text-2xl md:text-3xl font-bold text-secondary">{metric.value}</p>
                              <p className="text-xs text-gray-400">{metric.label}</p>
                            </motion.div>
                          ))}
                        </div>

                        {/* Tools + CTA pinned to the bottom so both cards line up */}
                        <div className="mt-auto">
                          <div className="flex flex-wrap gap-2 mb-8">
                            {item.tools.map((tool, i) => (
                              <span key={i} className="bg-white/10 backdrop-blur-sm text-gray-200 px-3 py-1.5 rounded-full text-xs border border-white/10">
                                {tool}
                              </span>
                            ))}
                          </div>

                          <div className="flex flex-wrap items-center gap-3">
                            {item.caseStudy && (
                              <Link
                                to={item.caseStudy}
                                className="inline-flex items-center gap-3 text-secondary font-semibold hover:gap-4 transition-all"
                              >
                                View Full Case Study
                                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                              </Link>
                            )}
                            {item.links.map((link, i) => {
                              const LinkIcon = link.icon;
                              return (
                                <a
                                  key={i}
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-gray-200 hover:text-white hover:bg-white/20 px-4 py-2 rounded-full text-sm border border-white/10 transition-colors"
                                >
                                  <LinkIcon size={16} /> {link.label}
                                </a>
                              );
                            })}
                            {item.internal && (
                              <span className="inline-flex items-center gap-2 text-gray-400 text-sm">
                                <Lock size={14} /> Internal tooling — no public demo
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Other Work */}
        <motion.h3
          className="text-2xl font-bold text-primary mb-8 relative z-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Other Work
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-6 relative z-10">
          {projects.map((project, index) => (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Glow effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-secondary/0 via-secondary/50 to-secondary/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" style={{ zIndex: -1 }} />

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{project.title}</h3>
                <p className="text-dark/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="bg-light text-dark/80 px-3 py-1 rounded-full text-sm group-hover:bg-secondary/10 transition-colors">{tool}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-secondary font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  View Project <ExternalLink size={16} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Projects;
