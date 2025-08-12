import React, { useState } from 'react';
 import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { buttonHover, glowEffect } from '../utils/animation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // The 'e.target' in emailjs.sendForm automatically includes all form fields with a 'name' attribute.
    // Since the mobile number input has name="mobile", it will be included in the email data.
    emailjs.sendForm('service_fyyo7d1', 'template_hgnw5b7', e.target, 'v_UeQeck9aiZCrJb7')
      .then((result) => {
        console.log(result.text);
        setShowPopup(true); // Show popup on success
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

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section id="contact" className="py-20">
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center max-w-sm mx-auto border border-neon relative">
            <h3 className="text-2xl font-bold text-neon mb-4" style={{fontFamily: 'Intel One Mono'}}>Message Sent!</h3>
            <p className="text-light mb-6">Thank you for contacting us. We will get back to you shortly.</p>
            <button
              onClick={closePopup}
              className="px-6 py-2 rounded-full bg-neon text-dark font-semibold hover:bg-neon/80 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

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
            placeholder="+12 1234567890"
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
