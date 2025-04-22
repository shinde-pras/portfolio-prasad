import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <PageWrapper>
      <section className="relative flex flex-col items-center justify-center h-screen px-4 text-center overflow-hidden bg-white">

        {/* 💫 Floating Bubbles */}
        <div className="absolute w-72 h-72 bg-blue-300 rounded-full filter blur-3xl opacity-70 top-10 left-[-100px] animate-float z-0" />
        <div className="absolute w-56 h-56 bg-blue-400 rounded-full filter blur-2xl opacity-60 bottom-20 right-[-80px] animate-float-delay z-0" />

        {/* Main Content */}
        <div className="z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 z-10">
          <Typewriter
            words={["Hi, I'm Prasad Shinde", "Aspiring Product Manager", "UX Enthusiast", "Builder of Beautiful Things"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>
          <p className="text-lg text-gray-700 mb-6">
            Aspiring Product Manager with a passion for design, data, and development.
          </p>
          <motion.div
          whileHover={{ scale: 1.05, y: -3 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="z-10"
        >
          <Link
            to="/projects"
            className="bg-primary text-white px-6 py-3 rounded shadow hover:bg-blue-400 transition"
          >
            View My Work
          </Link>
        </motion.div>
        </div>

      </section>
    </PageWrapper>
  );
};

export default Home;