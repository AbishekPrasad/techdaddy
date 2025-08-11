import React from 'react'
import { motion } from 'framer-motion';
import { buttonHover, glowEffect } from '../utils/animation';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-light font-mono text-center mb-8"
        >
          Let’s Talk <span className="text-neon">Digital Growth</span>
        </motion.h2>
        
        <form className="mt-6 grid gap-6">
          <motion.input
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            placeholder="Name"
            className="p-3 rounded-md bg-accent/30 border border-primary text-light placeholder-light/70 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon"
          />
          <motion.input
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            placeholder="Email"
            className="p-3 rounded-md bg-accent/30 border border-primary text-light placeholder-light/70 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon"
          />
          <motion.textarea
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            placeholder="Message"
            className="p-3 rounded-md bg-accent/30 border border-primary text-light placeholder-light/70 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon h-32"
          ></motion.textarea>
          <div className="text-center">
            <motion.button
              type="submit"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-neon to-neon/60 text-dark font-semibold shadow-lg hover:shadow-neon transition-all duration-300"
              whileHover={{ ...buttonHover, ...glowEffect }}
            >
              Request a Quote
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}