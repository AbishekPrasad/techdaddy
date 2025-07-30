import { useEffect, useRef } from 'react';

const NeuronBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const neuronsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    // Neuron class
    class Neuron {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Keep within bounds
        this.x = Math.max(0, Math.min(width, this.x));
        this.y = Math.max(0, Math.min(height, this.y));

        // Update pulse
        this.pulsePhase += 0.02;
      }

      draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;
        const currentRadius = this.radius * pulse;
        const currentOpacity = this.opacity * pulse;

        // Outer glow
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, currentRadius * 3
        );
        gradient.addColorStop(0, `rgba(63, 81, 181, ${currentOpacity * 0.8})`);
        gradient.addColorStop(0.5, `rgba(121, 134, 203, ${currentOpacity * 0.4})`);
        gradient.addColorStop(1, `rgba(197, 202, 233, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core neuron
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();

        // Inner glow
        ctx.fillStyle = `rgba(63, 81, 181, ${currentOpacity * 0.6})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius * 0.6, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize neurons
    const initNeurons = () => {
      neuronsRef.current = [];
      const neuronCount = Math.floor((width * height) / 15000);
      for (let i = 0; i < neuronCount; i++) {
        neuronsRef.current.push(new Neuron());
      }
    };

    // Draw connections between nearby neurons
    const drawConnections = () => {
      const maxDistance = 150;
      
      for (let i = 0; i < neuronsRef.current.length; i++) {
        for (let j = i + 1; j < neuronsRef.current.length; j++) {
          const neuron1 = neuronsRef.current[i];
          const neuron2 = neuronsRef.current[j];
          
          const dx = neuron1.x - neuron2.x;
          const dy = neuron1.y - neuron2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.5;
            
            // Create gradient for connection
            const gradient = ctx.createLinearGradient(
              neuron1.x, neuron1.y,
              neuron2.x, neuron2.y
            );
            gradient.addColorStop(0, `rgba(63, 81, 181, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(121, 134, 203, ${opacity * 0.8})`);
            gradient.addColorStop(1, `rgba(63, 81, 181, ${opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(neuron1.x, neuron1.y);
            ctx.lineTo(neuron2.x, neuron2.y);
            ctx.stroke();

            // Add flowing particles along connections
            const flowProgress = (Date.now() * 0.001) % 1;
            const particleX = neuron1.x + (neuron2.x - neuron1.x) * flowProgress;
            const particleY = neuron1.y + (neuron2.y - neuron1.y) * flowProgress;
            
            if (Math.random() < 0.1) { // Only show some particles
              ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 2})`;
              ctx.beginPath();
              ctx.arc(particleX, particleY, 1, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw neurons
      neuronsRef.current.forEach(neuron => {
        neuron.update();
        neuron.draw();
      });
      
      // Draw connections
      drawConnections();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    initNeurons();
    animate();

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
      initNeurons();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: '#000000' }}
    />
  );
};

export default NeuronBackground;