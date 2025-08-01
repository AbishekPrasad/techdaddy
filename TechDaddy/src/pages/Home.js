import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiArrowRight, FiCode, FiDatabase, FiCloud, 
  FiSmartphone, FiCpu, FiShield,
  FiTrendingUp
} from 'react-icons/fi';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
  const features = [
    {
      icon: FiCode,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiSmartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiCloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps services.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiCpu,
      title: 'AI & ML',
      description: 'Intelligent solutions powered by artificial intelligence.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FiShield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for your digital assets.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: FiTrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your business.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">TechDaddy</span>
              <br />
              <span className="text-white">Technology Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading technology solutions and digital innovation. We specialize in web development, 
              mobile apps, and cutting-edge tech solutions that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => window.open(process.env.REACT_APP_GOOGLE_FORM_URL, '_blank')}
                className="text-lg px-8 py-4"
              >
                Register for Service
                <FiArrowRight className="ml-2" />
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-8 py-4"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 text-primary-400/20 text-4xl"
        >
          <FiCode />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-40 right-20 text-secondary-400/20 text-3xl"
        >
          <FiDatabase />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-40 left-20 text-primary-400/20 text-2xl"
        >
          <FiCloud />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive technology solutions to help your business thrive in the digital age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
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
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of satisfied clients who have already taken their business to the next level with TechDaddy.
            </p>
            <Button 
              size="xl" 
              onClick={() => window.open(process.env.REACT_APP_GOOGLE_FORM_URL, '_blank')}
              className="text-xl px-10 py-5"
            >
              Get Started Today
              <FiArrowRight className="ml-3" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 