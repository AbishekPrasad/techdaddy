import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in animations for sections
      gsap.fromTo('.fade-in', 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.fade-in',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Parallax scrolling for background elements
      gsap.to('.parallax-slow', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.parallax-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });

      gsap.to('.parallax-fast', {
        yPercent: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: '.parallax-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });

      // Service cards animation
      gsap.fromTo('.service-card',
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

    }, parallaxRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={parallaxRef} className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Home;