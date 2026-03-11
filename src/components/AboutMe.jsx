import { motion } from "motion/react";
import { aboutMe } from "../constants";
import { abhishekImage } from "../assets";
import { fadeUp, slideLeft, slideRight } from "../animations/fadeUp";
import { staggerContainer, staggerItem } from "../animations/stagger";

const FLOATING_SKILLS = [
  { label: "System Design", delay: 0, floatDur: 3.2 },
  { label: "Healthcare / ABDM", delay: 0.1, floatDur: 4 },
  { label: "Enterprise AI", delay: 0.2, floatDur: 3.5 },
  { label: "NLP & LLMs", delay: 0.3, floatDur: 3.8 },
  { label: "RAG Pipelines", delay: 0.4, floatDur: 4.2 },
  { label: "Cloud-Native", delay: 0.5, floatDur: 3.6 },
  { label: "Document Intelligence", delay: 0.6, floatDur: 4.2 },
  { label: "Full Stack", delay: 0.7, floatDur: 3.8 },
  { label: "Solution Architecture", delay: 0.8, floatDur: 3.3 },
  { label: "HealthTech", delay: 0.9, floatDur: 4.5 },
];

const AboutMe = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 md:px-16 relative overflow-hidden min-h-[85vh] flex items-center bg-primary-sec">
      {/* Gradient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-accent rounded-full opacity-20" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] blob-purple rounded-full opacity-15" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="font-sora font-bold text-3xl sm:text-[36px] md:text-[42px] text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent-gradient mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* Left: profile image */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-center md:justify-start order-2 md:order-1"
          >
            <motion.div
              className="relative"
              animate={{ x: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 rounded-full pointer-events-none blob-accent opacity-30" style={{ transform: "scale(1.8)", filter: "blur(40px)" }} />
              <motion.img
                src={abhishekImage}
                alt="Abhishek Tripathi"
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full object-cover border-2 border-glass shadow-2xl shadow-secondary/20 z-10"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              />
            </motion.div>
          </motion.div>

          {/* Right: experience & skills */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-1 md:order-2 relative"
          >
            <motion.div
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="glass-card rounded-3xl p-6 sm:p-8"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.p
                  className="font-sora font-bold text-2xl sm:text-3xl text-gradient mb-5"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {aboutMe.experienceYears} years experience
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-3 sm:gap-4"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {FLOATING_SKILLS.map(({ label, delay, floatDur }) => (
                    <motion.span
                      key={label}
                      className="inline-block font-inter font-semibold text-base sm:text-lg md:text-xl text-textSecondary px-3 py-1.5 rounded-xl bg-secondary/10 border border-glass"
                      variants={staggerItem}
                    >
                      <motion.span
                        className="inline-block"
                        animate={{ y: [0, -6, 0], x: [0, 6, 0] }}
                        transition={{
                          y: { duration: floatDur, repeat: Infinity, ease: "easeInOut" },
                          x: { duration: floatDur * 1.1, repeat: Infinity, ease: "easeInOut", delay: delay * 0.5 },
                        }}
                      >
                        {label}
                      </motion.span>
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
