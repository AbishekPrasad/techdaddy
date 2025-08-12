import React from 'react'
import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { buttonHover, glowEffect } from '../utils/animation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fyyo7d1', 'template_hgnw5b7', e.target, 'v_UeQeck9aiZCrJb7')
      .then((result) => {
        console.log(result.text);
        alert('Thank you for your message! We will get back to you soon.');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message, please try again later.');
      });

    setFormData({
      name: '',
      email: '',
      mobile: '',
      message: '',
    });
  };

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
        
        <form onSubmit={handleSubmit} className="mt-6 grid gap-6">
          <motion.input
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-md bg-accent/30 border border-primary text-light placeholder-light/70 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon"
          />
          <motion.input
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-md bg-accent/30 border border-primary text-light placeholder-light/70 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon"
          />
          <motion.input
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }} // Slightly delayed from email
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="p-3 rounded-md bg-accent/30 border border-primary text-light placeholder-light/70 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon"
          />
          <motion.textarea
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
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
