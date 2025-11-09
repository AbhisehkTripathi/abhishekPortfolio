import React from "react";
import { projects } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";
import { playHoverSound, playClickSound } from "../utils/sounds";

const Project = (props) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setMousePosition({ x: rotateY, y: rotateX });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className="feature-card rounded-3xl p-6 border border-secondary-light/20 dark:border-secondary-dark/30 group overflow-hidden relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm"
      whileInView={{ y: [-30, 0], opacity: [0, 1] }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
      }}
      whileHover={{ scale: 1.02, z: 50 }}
      onMouseEnter={playHoverSound}
    >
      {/* Gradient border effect on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-secondary-light/20 via-secondary-light/10 to-secondary-light/20 dark:from-secondary-dark/20 dark:via-secondary-dark/10 dark:to-secondary-dark/20"></div>
      
      <div className="relative z-10">
        {/* Project thumbnail with parallax effect */}
        <div className="mb-4 overflow-hidden rounded-2xl bg-white/50 dark:bg-gray-800/50 p-4 flex items-center justify-center min-h-[200px]">
          <motion.img
            className="w-full h-auto max-h-48 object-contain rounded-2xl"
            src={props.image}
            alt={props.title}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        
        <h3 className="text-2xl font-bold font-poppins text-textPrimary-light dark:text-textPrimary-dark mb-2 group-hover:text-secondary-light dark:group-hover:text-secondary-dark transition-colors duration-300">
          {props.title}
        </h3>
        <p className="font-poppins font-normal text-textSecondary-light dark:text-textSecondary-dark leading-relaxed mb-4">
          {props.content}
        </p>

        {/* Tech stack badges */}
        <div className="mb-4">
          <p className="font-poppins font-semibold text-sm text-textPrimary-light dark:text-textPrimary-dark mb-3">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {props.stack.map((tech, index) => (
              <motion.div
                key={tech.id}
                className="flex items-center gap-1.5 bg-secondary-light/10 dark:bg-secondary-dark/10 px-2.5 py-1.5 rounded-lg hover:bg-secondary-light/20 dark:hover:bg-secondary-dark/20 transition-colors duration-300 text-xs"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="text-sm text-secondary-light dark:text-secondary-dark">
                  {React.createElement(tech.icon)}
                </div>
                <span className="font-poppins font-medium text-textPrimary-light dark:text-textPrimary-dark">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-6">
          {props.github && (
            <motion.a
              href={props.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-secondary-light dark:bg-secondary-dark text-white dark:text-primary-dark rounded-lg hover:bg-[#8dd4b8] dark:hover:bg-[#00b894] transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={playClickSound}
            >
              <AiFillGithub size={18} />
              <span className="font-poppins font-medium text-sm">View Code</span>
            </motion.a>
          )}
          {props.link && (
            <motion.a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border-2 border-secondary-light dark:border-secondary-dark text-secondary-light dark:text-secondary-dark rounded-lg hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-white dark:hover:text-primary-dark transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={playClickSound}
            >
              <BsLink45Deg size={18} />
              <span className="font-poppins font-medium text-sm">View Live</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 sm:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-textPrimary-light dark:text-textPrimary-dark mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-secondary-light dark:bg-secondary-dark mx-auto rounded-full"></div>
          <p className="font-poppins font-normal text-lg text-textSecondary-light dark:text-textSecondary-dark mt-6 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Project index={index} {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
