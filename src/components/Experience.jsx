import { motion } from "motion/react";
import { experiences } from "../constants";
import { fadeUp } from "../animations/fadeUp";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 md:px-16 relative overflow-hidden bg-primary">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] blob-purple rounded-full opacity-15" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-sora font-bold text-3xl sm:text-[36px] md:text-[42px] text-white mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="font-inter font-normal text-base sm:text-lg text-textSecondary mt-2">
            Full Stack Software Engineer — Associate Solution Architect
          </p>
          <div className="w-24 h-1 bg-accent-gradient mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.organisation}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="relative glass-card rounded-3xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent-gradient" />

                <div className="flex items-center gap-4 sm:gap-6 mb-6">
                  <motion.a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    className="flex-shrink-0"
                  >
                    <img
                      src={exp.logo}
                      alt={exp.organisation}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-contain border border-glass p-2 bg-card shadow-sm"
                    />
                  </motion.a>
                  <h3 className="font-sora font-bold text-xl sm:text-2xl text-white">
                    {exp.organisation}
                  </h3>
                </div>

                <div className="space-y-6">
                  {exp.positions.map((position) => (
                    <motion.div
                      key={`${position.title}-${position.duration}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      className="relative pl-6 pb-6 last:pb-0"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary via-secondary/60 to-secondary/30 rounded-full" />
                      <div className="absolute left-[-4px] top-0 w-3 h-3 bg-secondary rounded-full border-2 border-white shadow-sm" />

                      <div className="mb-3">
                        <h4 className="font-space font-semibold text-lg sm:text-xl text-white mb-1">
                          {position.title}
                        </h4>
                        <p className="font-inter font-medium text-sm text-secondary">
                          {position.duration}
                        </p>
                      </div>

                      <ul className="space-y-2 sm:space-y-3">
                        {position.content.map((item) => (
                          <motion.li
                            key={item.text}
                            className="font-inter font-normal text-sm text-textSecondary leading-relaxed flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                          >
                            <span className="text-secondary mt-1 text-lg flex-shrink-0">▸</span>
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
