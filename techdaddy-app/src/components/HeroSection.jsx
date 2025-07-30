import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const cloudRef1 = useRef(null);
  const cloudRef2 = useRef(null);
  const cloudRef3 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.fromTo('.hero-text', 
        { opacity: 0, y: 100 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.5, 
          ease: 'power3.out',
          stagger: 0.2
        }
      );

      // Floating animation for clouds
      gsap.to(cloudRef1.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });

      gsap.to(cloudRef2.current, {
        y: -30,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        delay: 1
      });

      gsap.to(cloudRef3.current, {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        delay: 0.5
      });

      // Parallax effect on scroll
      gsap.to(bgRef.current, {
        yPercent: -50,
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden parallax-container"
    >
      {/* Animated Background */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] tech-gradient parallax-slow"
      >
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-lg rotate-45 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-white rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-40 w-28 h-28 bg-white rounded-lg rotate-12 animate-float" style={{animationDelay: '0.5s'}}></div>
        </div>
      </div>

      {/* Floating Cloud Elements */}
      <div 
        ref={cloudRef1}
        className="absolute top-20 left-10 w-20 h-12 bg-white/20 rounded-full blur-sm parallax-fast"
      ></div>
      <div 
        ref={cloudRef2}
        className="absolute top-32 right-20 w-32 h-16 bg-white/15 rounded-full blur-sm parallax-fast"
      ></div>
      <div 
        ref={cloudRef3}
        className="absolute bottom-40 left-1/4 w-24 h-14 bg-white/10 rounded-full blur-sm parallax-fast"
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="hero-text mb-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                <span className="text-white font-bold text-2xl">TD</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-shadow">
                TechDaddy
              </h1>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="hero-text text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-shadow leading-tight">
            WE DELIVER HIGH QUALITY
            <br />
            <span className="text-yellow-300">BUSINESS SOLUTIONS</span>
          </h2>

          {/* Subtitle */}
          <p className="hero-text text-lg md:text-xl lg:text-2xl mb-8 text-white/90 font-light">
            Website | Mobile Apps | Software Development
          </p>

          {/* Description */}
          <p className="hero-text text-base md:text-lg mb-12 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Transform your business with cutting-edge technology solutions. 
            We create beautiful, responsive websites, powerful mobile applications, 
            and custom software that drives growth.
          </p>

          {/* CTA Buttons */}
          <div className="hero-text flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://forms.google.com/d/e/1FAIpQLSe_YOUR_FORM_ID/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Register for Services
            </a>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary text-lg px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white font-semibold shadow-xl"
            >
              Explore Services
            </button>
          </div>

          {/* Stats */}
          <div className="hero-text mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">100+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">50+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">5+</div>
              <div className="text-white/80">Years Experience</div>
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