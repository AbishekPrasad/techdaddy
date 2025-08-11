import React from 'react'
import { motion } from 'framer-motion';
import { buttonHover, glowEffect } from '../utils/animation';

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-12 relative">
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.h1
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-light font-mono leading-tight"
          >
          Empower Your Digital Presence with <span className="text-neon">TechDaddy</span>
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-lg text-light/80 max-w-3xl mx-auto"
        >
          Welcome to TechDaddy. Info Tech, your partner for end-to-end social media marketing, website development, and search engine optimization (SEO). We blend AI-powered tools, creative video editing, and data-driven strategies to boost your visibility, engagement, and conversions.
        </motion.p>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8 flex justify-center gap-4"
        >
          <motion.a
            href="#contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-neon to-neon/60 text-dark font-semibold shadow-lg hover:shadow-neon transition-all duration-300"
            whileHover={{ ...buttonHover, ...glowEffect }}
          >
            Get Your Free Audit
          </motion.a>
        </motion.div>
        <div className="mt-12 grid md:grid-cols-4 gap-6 text-left">
          <Feature title="Full-Stack Services" text="Social media management, web development, SEO, PPC" />
          <Feature title="3-Step Success System" text="Audit → Diagnose → Customized Strategy" />
          <Feature title="AI & Automation" text="Hyper-personalized content, platform-specific campaigns" />
          <Feature title="Transparent Reporting" text="Real-time analytics dashboards" />
        </div>
      </div>
    </section>
  );
}

function Feature({ title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-6 bg-accent/30 rounded-lg border border-primary shadow-lg hover:shadow-neon/30 transition-shadow duration-300"
    >
      <h3 className="font-semibold text-neon text-lg font-mono">{title}</h3>
      <p className="mt-2 text-sm text-light/70">{text}</p>
    </motion.div>
  );
}