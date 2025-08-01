import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, FiSmartphone, FiCloud, FiCpu, FiShield, 
  FiTrendingUp, FiCheck, FiArrowRight
} from 'react-icons/fi';
import Card from '../components/Card';
import Button from '../components/Button';

const Services = () => {
  const services = [
    {
      icon: FiCode,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      features: [
        'Custom website development',
        'E-commerce solutions',
        'Progressive Web Apps (PWA)',
        'API development and integration',
        'Performance optimization',
        'SEO optimization'
      ],
      price: 'Starting from $5,000',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiSmartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: [
        'iOS app development',
        'Android app development',
        'React Native development',
        'Flutter development',
        'App store optimization',
        'Maintenance and updates'
      ],
      price: 'Starting from $8,000',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiCloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps services for modern applications.',
      features: [
        'AWS/Azure/GCP setup',
        'Serverless architecture',
        'Container orchestration',
        'CI/CD pipelines',
        'Monitoring and logging',
        'Security implementation'
      ],
      price: 'Starting from $3,000',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiCpu,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
      features: [
        'Custom AI models',
        'Data analysis and visualization',
        'Predictive analytics',
        'Natural language processing',
        'Computer vision',
        'Chatbot development'
      ],
      price: 'Starting from $10,000',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FiShield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: [
        'Security audits',
        'Penetration testing',
        'Vulnerability assessment',
        'Security monitoring',
        'Compliance consulting',
        'Incident response'
      ],
      price: 'Starting from $4,000',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: FiTrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your business and reach.',
      features: [
        'SEO optimization',
        'Social media marketing',
        'Content marketing',
        'PPC campaigns',
        'Analytics and reporting',
        'Conversion optimization'
      ],
      price: 'Starting from $2,000',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We understand your requirements and business goals through detailed consultation.'
    },
    {
      number: '02',
      title: 'Planning',
      description: 'We create a comprehensive project plan with timelines and deliverables.'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Our expert team builds your solution using the latest technologies.'
    },
    {
      number: '04',
      title: 'Testing',
      description: 'Rigorous testing ensures your solution works flawlessly.'
    },
    {
      number: '05',
      title: 'Deployment',
      description: 'We deploy your solution and provide ongoing support.'
    }
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We offer comprehensive technology solutions tailored to your business needs. 
              From web development to AI solutions, we have the expertise to bring your 
              vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-white">What's included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <FiCheck className="w-4 h-4 text-primary-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-primary-400 font-semibold mb-4">{service.price}</p>
                    <Button 
                      variant="secondary" 
                      size="sm"
                      onClick={() => window.open(process.env.REACT_APP_GOOGLE_FORM_URL, '_blank')}
                      className="w-full"
                    >
                      Get Started
                      <FiArrowRight className="ml-2" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/30 to-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-300">
              How we deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
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
              Ready to <span className="gradient-text">Start</span> Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your requirements and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => window.open(process.env.REACT_APP_GOOGLE_FORM_URL, '_blank')}
                className="text-lg px-8 py-4"
              >
                Get Free Consultation
                <FiArrowRight className="ml-2" />
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-8 py-4"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 