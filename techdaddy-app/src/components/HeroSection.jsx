import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import NeuronBackground from './NeuronBackground';

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.fromTo('.hero-text', 
        { opacity: 0, y: 60 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: 'power3.out',
          stagger: 0.2
        }
      );

      // Logo animation
      gsap.fromTo('.hero-logo', 
        { opacity: 0, scale: 0.8 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 1, 
          ease: 'back.out(1.7)',
          delay: 0.3
        }
      );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated Neuron Background */}
      <NeuronBackground />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white container-custom section-padding">
        <div className="max-w-5xl mx-auto">
          {/* Logo */}
          <div className="hero-logo mb-8">
            <img 
              src="/images/logo.svg" 
              alt="TechDaddy Logo" 
              className="mx-auto h-16 md:h-20 lg:h-24 neuron-glow"
            />
          </div>

          {/* Tagline */}
          <div className="hero-text mb-6">
            <p className="text-lg md:text-xl text-primary-300 font-medium tracking-wide uppercase text-glow">
              Grow Your Impact. Grow Your Value.
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="hero-text text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-shadow-lg leading-tight">
            Unlock the Growth Hiding Inside Your{' '}
            <span className="text-primary-400 text-glow">Business</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-text text-xl md:text-2xl lg:text-3xl mb-12 text-gray-200 font-light max-w-4xl mx-auto leading-relaxed">
            Real Solutions. Transformational Results. Measurable Growth.
          </p>

          {/* CTA Buttons */}
          <div className="hero-text flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="https://forms.google.com/d/e/1FAIpQLSe_YOUR_FORM_ID/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-5 shadow-2xl transform hover:scale-105 transition-all duration-300 neuron-glow"
            >
              Unlock Growth
            </a>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline text-lg px-10 py-5"
            >
              Book A Free Strategy Call
            </button>
          </div>

          {/* Key Points */}
          <div className="hero-text grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
            <div className="text-center md:text-left bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-primary-500/20">
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mx-auto md:mx-0 mb-4 neuron-pulse">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-primary-400">Root Cause Analysis</h3>
              <p className="text-gray-300 text-sm">We diagnose the real constraint, not just the symptoms.</p>
            </div>
            <div className="text-center md:text-left bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-primary-500/20">
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mx-auto md:mx-0 mb-4 neuron-pulse" style={{animationDelay: '0.5s'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-primary-400">Solution Engineering</h3>
              <p className="text-gray-300 text-sm">Custom solutions aimed specifically at your constraint.</p>
            </div>
            <div className="text-center md:text-left bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-primary-500/20">
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mx-auto md:mx-0 mb-4 neuron-pulse" style={{animationDelay: '1s'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-primary-400">Future-Proof Testing</h3>
              <p className="text-gray-300 text-sm">Pressure-tested solutions for sustainable success.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;