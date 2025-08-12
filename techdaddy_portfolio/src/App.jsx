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
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <div className="font-sans text-light bg-dark min-h-screen">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key="main-content"
          className="px-6 pb-20"
          variants={pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Home key="home" />
          <Services key="services" />
          <Pricing key="pricing" />
          <Creativity key="creativity" />
          <Blog key="blog" />
          <About key="about" />
          <Contact key="contact" />
        </motion.main>
      </AnimatePresence>
      <Footer key="app-footer" />
      <Chatbot />
    </div>
  );
}
