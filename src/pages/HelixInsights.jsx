import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { Clock, Zap, Shield, TrendingUp, ExternalLink, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

const HelixInsights = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Automated FDA Tracking',
      description: 'Real-time monitoring of FDA approvals, 510(k) clearances, and regulatory changes relevant to your market.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '15-Second Analysis',
      description: 'AI-powered competitive analysis that transforms 5+ hours of manual research into instant actionable insights.',
      color: 'from-secondary to-teal-400',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Multi-Factor Threat Scoring',
      description: 'Proprietary algorithm evaluates competitors across 6 dimensions with confidence levels from 60-95%.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Clinical Trial Intelligence',
      description: 'Track competitor clinical trials with automated alerts for phase progressions and results.',
      color: 'from-highlight to-amber-500',
    },
  ];

  const metrics = [
    { value: '15', unit: 'sec', label: 'Analysis Time' },
    { value: '1,800', unit: 'x', label: 'Faster Than Manual' },
    { value: '95', unit: '%', label: 'Success Rate' },
    { value: '$26', unit: 'K', label: 'Annual ROI' },
  ];

  const brandColors = [
    { name: 'Deep Navy', hex: '#2C3E50', usage: 'Primary brand, headers' },
    { name: 'Teal', hex: '#16A085', usage: 'CTAs, interactive elements' },
    { name: 'Sky Blue', hex: '#3498DB', usage: 'Secondary actions' },
    { name: 'Coral Orange', hex: '#E67E22', usage: 'Alerts, highlights' },
  ];

  const lessons = [
    { title: 'Build for Your Own Pain First', description: "The best products come from deeply understanding user frustration—and sometimes, you ARE the user. I didn't need focus groups to validate this problem. I lived it every week." },
    { title: 'Shipping Beats Perfection', description: "My first deployment had bugs. The FDA API still fails occasionally. But shipping a real product taught me more than months of case studies ever would." },
    { title: 'Technical Credibility Opens Doors', description: "Building this gave me technical fluency that transforms conversations with engineering teams. When I discuss API integrations now, I'm speaking from experience, not theory." },
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-6 md:px-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-dark" />
        <div className="absolute inset-0 bg-dots-pattern opacity-10" />
        
        {/* Floating shapes */}
        <motion.div 
          className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
        
        {/* Geometric shapes */}
        <motion.div
          className="absolute top-32 right-1/4 w-16 h-16 border-2 border-secondary/30 rounded-xl"
          animate={{ rotate: 360, y: [0, -20, 0] }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 4, repeat: Infinity } }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-12 h-12 border-2 border-accent/30 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-flex items-center gap-2 bg-highlight text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 shadow-lg"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={16} /> Featured Project
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Helix <span className="text-secondary">Insights</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
              AI-powered competitive intelligence platform for healthcare product managers. 
              Transform <span className="text-secondary font-semibold">5+ hours</span> of manual research into <span className="text-secondary font-semibold">15 seconds</span> of actionable insights.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://helix-insights.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-secondary hover:bg-teal-400 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-secondary/30 transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink size={20} /> Marketing Site
                <ArrowRight size={18} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </motion.a>
              <motion.a
                href="https://helix-insights.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Zap size={20} /> Try Live Demo
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="py-16 px-6 bg-white relative -mt-1">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-5xl md:text-6xl font-bold text-primary">
                  {metric.value}<span className="text-secondary">{metric.unit}</span>
                </p>
                <p className="text-dark/60 mt-2">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 px-6 md:px-20 bg-light relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-red-100"
            >
              <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-3 py-1 rounded-full mb-4">The Problem</span>
              <h2 className="text-2xl font-bold text-primary mb-4">5+ Hours Lost Every Week</h2>
              <p className="text-dark/70 leading-relaxed mb-4">
                Every Tuesday morning, I'd open fifteen browser tabs: FDA 510(k) database, 
                ClinicalTrials.gov, competitor websites, industry newsletters. Five hours later, 
                I'd have a spreadsheet full of data but barely any time left for strategic thinking.
              </p>
              <p className="text-dark/70 leading-relaxed">
                Healthcare product managers waste 20-30% of their time on manual competitive 
                tracking. The data is public. The APIs are free. <span className="font-semibold text-primary">The problem is purely operational.</span>
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-green-100"
            >
              <span className="inline-block bg-green-100 text-green-600 text-sm font-semibold px-3 py-1 rounded-full mb-4">The Solution</span>
              <h2 className="text-2xl font-bold text-primary mb-4">Intelligence in 15 Seconds</h2>
              <p className="text-dark/70 leading-relaxed mb-4">
                Helix Insights automates the entire competitive intelligence workflow. It monitors 
                FDA approvals and clinical trials in real-time, scores competitive threats using 
                a multi-factor algorithm, and generates executive-ready reports instantly.
              </p>
              <p className="text-dark/70 leading-relaxed">
                What if competitive intelligence wasn't a luxury only Fortune 500 companies could afford? 
                <span className="font-semibold text-primary"> What if a solo PM had enterprise-grade capabilities?</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm tracking-wider uppercase">Capabilities</span>
            <h2 className="text-4xl font-bold text-primary mt-2">Key Features</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white p-8 rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-dark/70 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Role */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-primary to-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-10" />
        <motion.div 
          className="absolute top-10 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-secondary font-semibold text-sm tracking-wider uppercase">My Contribution</span>
            <h2 className="text-4xl font-bold text-white mt-2">Built End-to-End</h2>
            <p className="text-gray-300 mt-4 text-lg">Sole creator — research, design, development, and deployment in under 20 hours</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Product Strategy', items: ['Market research', 'Competitive analysis', 'UVP development', 'Brand positioning'] },
              { title: 'Technical Build', items: ['API integration', 'AI implementation', 'Streamlit deployment', 'Error handling'] },
              { title: 'Brand Development', items: ['Logo design', 'Color system', 'Typography', 'Marketing website'] },
            ].map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <h4 className="font-bold text-secondary text-lg mb-4">{role.title}</h4>
                <ul className="space-y-2">
                  {role.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle size={14} className="text-secondary" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Identity */}
      <section className="py-20 px-6 md:px-20 bg-light">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm tracking-wider uppercase">Visual System</span>
            <h2 className="text-4xl font-bold text-primary mt-2">Brand Identity</h2>
            <p className="text-dark/60 mt-4 max-w-2xl mx-auto">Complete visual identity system including logo, color palette, typography, and brand guidelines</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {brandColors.map((color, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-4 shadow-lg overflow-hidden"
              >
                <div 
                  className="w-full h-28 rounded-xl mb-4 shadow-inner"
                  style={{ backgroundColor: color.hex }}
                />
                <p className="font-bold text-primary">{color.name}</p>
                <p className="text-sm text-dark/60 font-mono">{color.hex}</p>
                <p className="text-xs text-dark/50 mt-1">{color.usage}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm tracking-wider uppercase">Reflections</span>
            <h2 className="text-4xl font-bold text-primary mt-2">What I Learned</h2>
          </motion.div>
          
          <div className="space-y-6">
            {lessons.map((lesson, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group bg-light hover:bg-gradient-to-r hover:from-secondary hover:to-teal-500 rounded-2xl p-6 transition-all duration-500"
              >
                <h3 className="text-xl font-bold text-primary group-hover:text-white mb-3 transition-colors">{lesson.title}</h3>
                <p className="text-dark/70 group-hover:text-white/90 leading-relaxed transition-colors">{lesson.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-primary to-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-10" />
        <motion.div 
          className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Zap className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">See It In Action</h2>
            <p className="text-xl text-gray-300 mb-10">
              Helix Insights is live and functional. Try the demo, explore the marketing site,
              or read how it came together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://helix-insights.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-teal-400 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-secondary/30 transition-all"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Zap size={20} /> Try Live Demo
              </motion.a>
              <motion.a
                href="https://helix-insights.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold shadow-lg transition-all"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink size={20} /> Marketing Site
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/pulse/what-competitive-research-took-15-seconds-prasad-shinde-pbfef"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold transition-all"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink size={20} /> Read the Write-up
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default HelixInsights;