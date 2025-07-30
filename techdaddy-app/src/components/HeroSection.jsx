import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);

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

      // Parallax effect on scroll
      gsap.to(bgRef.current, {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden maxreach-gradient hero-pattern"
    >
      {/* Background Pattern */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/20 to-primary-900/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white container-custom section-padding">
        <div className="max-w-5xl mx-auto">
          {/* Tagline */}
          <div className="hero-text mb-6">
            <p className="text-lg md:text-xl text-secondary-400 font-medium tracking-wide uppercase">
              Grow Your Impact. Grow Your Value.
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="hero-text text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-shadow-lg leading-tight">
            Unlock the Growth Hiding Inside Your{' '}
            <span className="text-secondary-400">Business</span>
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
              className="btn-secondary text-lg px-10 py-5 shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Unlock Growth
            </a>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline text-lg px-10 py-5 bg-transparent border-white text-white hover:bg-white hover:text-primary-900"
            >
              Book A Free Strategy Call
            </button>
          </div>

          {/* Key Points */}
          <div className="hero-text grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-2 text-secondary-400">Root Cause Analysis</h3>
              <p className="text-gray-300 text-sm">We diagnose the real constraint, not just the symptoms.</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-2 text-secondary-400">Solution Engineering</h3>
              <p className="text-gray-300 text-sm">Custom solutions aimed specifically at your constraint.</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-2 text-secondary-400">Future-Proof Testing</h3>
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