import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { pageTransition } from './utils/animation';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Creativity from './components/Creativity';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="font-sans text-light bg-dark min-h-screen overflow-hidden">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          className="px-6"
          variants={pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Home />
          <Services />
          <Pricing />
          <Creativity />
          <Blog />
          <About />
          <Contact />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}