import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaTwitter, FaPinterestP, FaYoutube, FaEnvelope, FaPhone, FaPhoneAlt } from 'react-icons/fa';
import { FaPhoneFlip } from 'react-icons/fa6';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-dark-light py-8 mt-12"
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-light/70 text-sm">&copy; {new Date().getFullYear()} TechDaddy. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://www.instagram.com/techdaddy.global_/" target="_blank" rel="noopener noreferrer" className="text-light hover:text-neon transition-colors duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/tech-daddy-b7009536b/" target="_blank" rel="noopener noreferrer" className="text-light hover:text-neon transition-colors duration-300">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://x.com/techdaddy2006" target="_blank" rel="noopener noreferrer" className="text-light hover:text-neon transition-colors duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.youtube.com/@TechDaddy.Global" target="_blank" rel="noopener noreferrer" className="text-light hover:text-neon transition-colors duration-300">
            <FaYoutube size={24} />
          </a>
          <a href="https://in.pinterest.com/techdaddy2006/" target="_blank" rel="noopener noreferrer" className="text-light hover:text-neon transition-colors duration-300">
            <FaPinterestP size={24} />
          </a>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left mt-4">
        <p className="text-light/70 text-sm flex items-center"><FaEnvelope className="mr-2" />techdaddy@techdaddy.global</p>
        <p className="text-light/70 text-sm flex items-center"><FaPhoneAlt className="mr-2" />+91 9340003799</p>
      </div>
    </motion.footer>
  );
}
