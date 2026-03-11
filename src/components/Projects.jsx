import React from "react";
import { projects } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg, BsArrowUpRight } from "react-icons/bs";
import { motion } from "motion/react";
import { fadeUp } from "../animations/fadeUp";
import { hoverCard } from "../animations/hoverCard";

const Project = (props) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    setMousePosition({ x: rotateY, y: rotateX });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => setIsHovered(true);

  return (
    <motion.div
      className="feature-card rounded-3xl p-6 group overflow-hidden relative"
      variants={hoverCard}
      initial="rest"
      whileHover="hover"
      whileInView={{ y: [-30, 0], opacity: [0, 1] }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
      }}
    >
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-secondary/10 via-accent/5 to-secondary/10" />

      <div className="relative z-10">
        <div className="mb-4 overflow-hidden rounded-2xl bg-card p-4 flex items-center justify-center min-h-[200px] relative">
          <motion.img
            className="w-full h-auto max-h-48 object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105"
            src={props.image}
            alt={props.title}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          {/* View Case Study / View Live overlay on hover */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center rounded-2xl bg-secondary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <div className="flex flex-wrap gap-3 justify-center p-4">
              {props.link && (
                <motion.a
                  href={props.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-accent-gradient text-white font-inter font-semibold rounded-xl shadow-lg hover:opacity-90 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View Case Study</span>
                  <BsArrowUpRight size={18} />
                </motion.a>
              )}
              {props.github && (
                <motion.a
                  href={props.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 border border-glass text-white font-inter font-semibold rounded-xl backdrop-blur-sm hover:border-secondary/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <AiFillGithub size={18} />
                  <span>View Code</span>
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold font-sora text-white mb-2 group-hover:text-gradient transition-colors duration-300">
          {props.title}
        </h3>
        <p className="font-inter font-normal text-textSecondary leading-relaxed mb-4 line-clamp-3">
          {props.content}
        </p>

        <div className="mb-4">
          <p className="font-inter font-semibold text-sm text-textSecondary mb-3">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {props.stack.map((tech) => (
              <motion.div
                key={tech.id}
                className="flex items-center gap-1.5 bg-secondary/10 px-2.5 py-1.5 rounded-lg hover:bg-secondary/20 transition-colors duration-300 text-xs border border-glass"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-sm text-secondary">
                  {React.createElement(tech.icon)}
                </div>
                <span className="font-inter font-medium text-textSecondary">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          {props.github && (
            <motion.a
              href={props.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-accent-gradient text-white font-inter font-medium rounded-lg hover:opacity-90 transition-all duration-300 shadow-md shadow-secondary/20"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <AiFillGithub size={18} />
              <span className="text-sm">View Code</span>
            </motion.a>
          )}
          {props.link && (
            <motion.a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-transparent border border-glass text-textSecondary font-inter font-medium rounded-lg hover:border-secondary/50 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <BsLink45Deg size={18} />
              <span className="text-sm">View Live</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 md:px-16 relative overflow-hidden bg-primary-sec">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] blob-accent rounded-full opacity-15" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-sora font-bold text-3xl sm:text-[36px] md:text-[42px] text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="font-inter font-normal text-base sm:text-lg text-textSecondary mt-6 max-w-2xl mx-auto">
            Full Stack Software Engineer — Associate Solution Architect
          </p>
          <div className="w-24 h-1 bg-accent-gradient mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Project {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
