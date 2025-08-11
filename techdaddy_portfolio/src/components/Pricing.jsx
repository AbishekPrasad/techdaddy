import React from 'react'
import { motion } from 'framer-motion';
import { buttonHover, glowEffect } from '../utils/animation';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-light font-mono text-center mb-12"
        >
          Our <span className="text-neon">Pricing</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-3 text-light/80 text-center mb-8"
        >
          Affordable packages—Basic, Standard & Premium—tailored to your needs.
        </motion.p>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          <PricingPlan title="Basic" price="₹4,999" features={['1 Platform', '10 posts + 4 stories']} />
          <PricingPlan title="Standard" price="₹9,999" features={['2 Platforms', '15 posts + 6 reels']} />
          <PricingPlan title="Premium" price="₹14,999" features={['3 Platforms', '20 posts + 8 reels']} />
        </div>
      </div>
    </section>
  );
}

function PricingPlan({ title, price, features }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="p-8 rounded-lg bg-accent/20 border border-primary shadow-xl hover:shadow-neon/40 transition-shadow duration-300 text-center flex flex-col"
    >
      <h3 className="text-2xl font-semibold text-neon font-mono mb-4">{title}</h3>
      <div className="mt-4 text-4xl font-bold text-light mb-6" style={{fontFamily:"monospace"}}>{price}</div>
      <ul className="mt-4 text-light/80 flex-grow space-y-2">
        {features.map((f, index) => (
          <li key={index}>{f}</li>
        ))}
      </ul>
      <div className="mt-8">
        <motion.a
          href="#contact"
          className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-neon to-neon/60 text-dark font-semibold shadow-lg hover:shadow-neon transition-all duration-300"
          whileHover={{ ...buttonHover, ...glowEffect }}
        >
          Start Audit
        </motion.a>
      </div>
    </motion.div>
  );
}
