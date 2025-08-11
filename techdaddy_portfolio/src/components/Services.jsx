import React from 'react'
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-light font-mono text-center mb-12"
        >
          Our <span className="text-neon">Services</span>
        </motion.h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard title="Social Media Marketing & Management" items={[
            'Profile Optimization (bio, highlights, branding)',
            'Content Creation (Reels, carousels, stories)',
            'Paid Social Ads & Remarketing',
            'Community Engagement & Growth'
          ]} />
          <ServiceCard title="Website Development" items={[
            'Mobile-First, Responsive Design',
            'Progressive Web Apps & E-commerce',
            'Reliable Hosting & Security',
            'Ongoing Maintenance & Support'
          ]} />
          <ServiceCard title="Search Engine Optimization (SEO)" items={[
            'Technical Site Audit & Fixes',
            'Keyword Research & On-Page SEO',
            'Content Strategy & Link Building',
            'Local SEO & Google Business Profile'
          ]} />
          <ServiceCard title="Digital Marketing & PPC" items={[
            'Google Ads, Display & Video Campaigns',
            'AI-Driven Bid Optimization',
            'Conversion Tracking & Attribution',
            'ROI-Focused Strategy'
          ]} />
          <ServiceCard title="Creative Studio" items={[
            'Video Editing & Animations',
            'AI-Powered Visuals & Graphics',
            'Banner, Poster & Logo Design',
            'Brand Style Guides'
          ]} />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, items }) {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      transitionEasing="cubic-bezier(.03,.98,.52,.99)"
      scale={1.02}
      gyroscope={true}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-6 rounded-lg bg-accent/20 border border-primary shadow-xl hover:shadow-neon/40 transition-shadow duration-300 h-full flex flex-col"
      >
        <h3 className="font-semibold text-neon text-xl font-mono mb-4">{title}</h3>
        <ul className="mt-3 text-light/80 list-disc list-inside flex-grow">
          {items.map((item, index) => (
            <li key={index} className="mb-2 last:mb-0">
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </Tilt>
  );
}