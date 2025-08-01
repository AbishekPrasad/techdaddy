import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiMessageSquare, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Card from '../components/Card';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'TechDaddy transformed our business with their innovative web platform. The team was professional, responsive, and delivered beyond our expectations. Our online sales increased by 300% within the first quarter.',
      project: 'E-commerce Platform'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      company: 'FinTech Solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The mobile banking app they developed for us exceeded all security requirements and user experience standards. Their expertise in fintech and compliance made the entire process seamless.',
      project: 'Mobile Banking App'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Global Retail',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Working with TechDaddy was a game-changer for our digital marketing efforts. Their AI-powered analytics dashboard gave us insights we never had before, leading to a 40% increase in ROI.',
      project: 'AI Analytics Dashboard'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Operations Manager',
      company: 'CloudCorp',
      image: 'https://images.unsplash.com/photo-1507003211169-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Their cloud infrastructure solution saved us 60% on operational costs while improving our system reliability. The team\'s expertise in AWS and DevOps is unmatched.',
      project: 'Cloud Infrastructure'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Security Officer',
      company: 'SecureNet',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'TechDaddy\'s cybersecurity monitoring system has been crucial for protecting our sensitive data. Their proactive approach to security threats has given us peace of mind.',
      project: 'Security Monitoring System'
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Product Manager',
      company: 'InnovateTech',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The PWA they built for us provides a native app experience while being accessible on any device. User engagement increased by 250% after the launch.',
      project: 'Progressive Web App'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const stats = [
    { number: '98%', label: 'Client Satisfaction' },
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '4.9/5', label: 'Average Rating' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Client <span className="gradient-text">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about 
              their experience working with TechDaddy.
            </p>
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Featured Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card>
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FiStar key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <FiMessageSquare className="w-12 h-12 text-primary-400 mx-auto mb-6" />
                
                <p className="text-lg text-gray-300 mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex items-center justify-center mb-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-white">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-primary-400">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                    <p className="text-gray-400 text-sm">
                      Project: {testimonials[currentIndex].project}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="p-3 rounded-full glass-effect hover:bg-white/10 transition-colors duration-200"
              >
                <FiArrowLeft className="w-6 h-6" />
              </motion.button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? 'bg-primary-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="p-3 rounded-full glass-effect hover:bg-white/10 transition-colors duration-200"
              >
                <FiArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gradient-to-r from-gray-900/30 to-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              More <span className="gradient-text">Reviews</span>
            </h2>
            <p className="text-xl text-gray-300">
              See what other clients are saying about their experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-primary-400 text-sm">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="text-primary-400 text-xs">
                    Project: {testimonial.project}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Join</span> Our Happy Clients?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create something amazing together and add your success story to our portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open(process.env.REACT_APP_GOOGLE_FORM_URL, '_blank')}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 glow-effect text-lg"
              >
                Start Your Project
              </button>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-primary-500 text-primary-400 rounded-lg font-medium hover:bg-primary-500/10 transition-all duration-200 text-lg"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials; 