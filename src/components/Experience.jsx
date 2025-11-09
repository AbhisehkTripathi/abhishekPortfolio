import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "../constants";

const AnimatedProgressBar = ({ label, percentage, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div className="mb-4" ref={ref}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-poppins font-medium text-sm text-textPrimary-light dark:text-textPrimary-dark">
          {label}
        </span>
        <motion.span
          className="font-poppins font-semibold text-sm text-secondary-light dark:text-secondary-dark"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: delay + 0.8, duration: 0.4 }}
        >
          {percentage}%
        </motion.span>
      </div>
      <div className="w-full h-2.5 bg-secondary-light/20 dark:bg-secondary-dark/20 rounded-full overflow-hidden shadow-inner">
        <motion.div
          className="h-full bg-gradient-to-r from-secondary-light via-secondary-light/90 to-secondary-dark dark:from-secondary-dark dark:via-secondary-dark/90 dark:to-secondary-light rounded-full shadow-sm"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ delay: delay, duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 sm:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-textPrimary-light dark:text-textPrimary-dark mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-secondary-light dark:bg-secondary-dark mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, expIndex) => (
            <motion.div
              key={expIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: expIndex * 0.2 }}
              className="group"
            >
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-3xl p-8 border border-secondary-light/30 dark:border-secondary-dark/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Gradient accent border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-light via-accent-light to-secondary-light dark:from-secondary-dark dark:via-accent-dark dark:to-secondary-dark"></div>
                
                {/* Company header */}
                <div className="flex items-center gap-6 mb-6">
                  <motion.a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0"
                  >
                    <img
                      src={exp.logo}
                      alt={exp.organisation}
                      className="w-16 h-16 rounded-xl object-contain border-2 border-secondary-light/20 dark:border-secondary-dark/30 p-2 bg-white dark:bg-gray-800 shadow-sm"
                    />
                  </motion.a>
                  <div>
                    <h3 className="font-poppins font-bold text-2xl text-textPrimary-light dark:text-textPrimary-dark mb-1">
                      {exp.organisation}
                    </h3>
                  </div>
                </div>

                {/* Positions */}
                <div className="space-y-6">
                  {exp.positions.map((position, posIndex) => (
                    <motion.div
                      key={posIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: posIndex * 0.15 }}
                      className="relative pl-6 pb-6 last:pb-0"
                    >
                      {/* Timeline line with gradient */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary-light via-secondary-light/50 to-secondary-light/30 dark:from-secondary-dark dark:via-secondary-dark/50 dark:to-secondary-dark/30 rounded-full"></div>
                      <div className="absolute left-[-4px] top-0 w-3 h-3 bg-secondary-light dark:bg-secondary-dark rounded-full border-2 border-white dark:border-gray-900 shadow-sm"></div>
                      
                      <div className="mb-4">
                        <h4 className="font-poppins font-semibold text-xl text-textPrimary-light dark:text-textPrimary-dark mb-1">
                          {position.title}
                        </h4>
                        <p className="font-poppins font-medium text-sm text-secondary-light dark:text-secondary-dark">
                          {position.duration}
                        </p>
                      </div>

                      {/* Animated Progress Bars for Key Metrics */}
                      {position.metrics && (
                        <div className="mb-4">
                          <AnimatedProgressBar
                            label="Code Quality"
                            percentage={position.metrics.codeQuality || 0}
                            delay={posIndex * 0.1}
                          />
                          <AnimatedProgressBar
                            label="System Design"
                            percentage={position.metrics.systemDesign || 0}
                            delay={posIndex * 0.1 + 0.1}
                          />
                          <AnimatedProgressBar
                            label="Team Collaboration"
                            percentage={position.metrics.teamCollaboration || 0}
                            delay={posIndex * 0.1 + 0.2}
                          />
                        </div>
                      )}

                      {/* Key points */}
                      <ul className="space-y-3">
                        {position.content.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            className="font-poppins font-normal text-sm text-textSecondary-light dark:text-textSecondary-dark leading-relaxed flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: itemIndex * 0.08 }}
                          >
                            <span className="text-secondary-light dark:text-secondary-dark mt-1 text-lg">▸</span>
                            <span>{item.text}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
