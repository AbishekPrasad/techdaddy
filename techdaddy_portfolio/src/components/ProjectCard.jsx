import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export default function ProjectCard({ project, index }) {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      transitionEasing="cubic-bezier(.03,.98,.52,.99)"
      scale={1.02}
      gyroscope={true}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
        className="bg-accent/20 rounded-lg border border-primary shadow-xl hover:shadow-neon/40 transition-shadow duration-300 h-full flex flex-col"
      >
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-light mb-2">{project.title}</h3>
          <p className="text-light/80 text-sm mb-4 flex-grow">{project.description}</p>

        </div>
      </motion.div>
    </Tilt>
  );
}