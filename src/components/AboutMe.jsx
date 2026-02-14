import { motion } from "framer-motion";
import { aboutMe } from "../constants";
import { abhishekImage } from "../assets";

const FLOATING_SKILLS = [
  { label: "System Design", delay: 0, floatDur: 3.2 },
  { label: "AI Enthusiast", delay: 0.1, floatDur: 4 },
  { label: "ML", delay: 0.2, floatDur: 3.5 },
  { label: "NLLB", delay: 0.3, floatDur: 3.8 },
  { label: "NLP", delay: 0.4, floatDur: 4.2 },
  { label: "RAG", delay: 0.5, floatDur: 3.6 },
  { label: "Cloud", delay: 0.6, floatDur: 4.2 },
  { label: "Backend", delay: 0.7, floatDur: 3.8 },
  { label: "Frontend", delay: 0.8, floatDur: 3.3 },
  { label: "Database", delay: 0.9, floatDur: 4.5 },
];

const AboutMe = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 md:px-16 relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Sun burst backgrounds */}
      <div
        className="absolute inset-0 pointer-events-none animate-sunburst"
        style={{
          background: "radial-gradient(ellipse 120% 80% at 50% 15%, rgba(255, 255, 240, 0.98) 0%, rgba(255, 250, 205, 0.9) 20%, rgba(255, 248, 220, 0.75) 35%, rgba(254, 240, 138, 0.5) 50%, rgba(253, 224, 71, 0.25) 65%, transparent 80%)",
          filter: "blur(1px)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none animate-sunburst-bright"
        style={{
          background: "radial-gradient(circle at 50% 5%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 253, 231, 0.85) 25%, rgba(255, 248, 220, 0.6) 45%, rgba(254, 240, 138, 0.3) 60%, transparent 75%)",
          filter: "blur(35px)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none animate-sunburst"
        style={{
          background: "radial-gradient(circle at 45% 20%, rgba(255, 236, 179, 0.6) 0%, rgba(254, 240, 138, 0.35) 40%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-textPrimary-light mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* Left: profile image – entrance from left + continuous horizontal movement */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex justify-center md:justify-start order-2 md:order-1"
          >
            <motion.div
              className="relative"
              animate={{ x: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                className="absolute inset-0 rounded-full pointer-events-none animate-sunburst"
                style={{
                  background: "radial-gradient(circle at 30% 30%, rgba(255, 248, 200, 0.9) 0%, rgba(254, 240, 138, 0.6) 40%, rgba(253, 224, 71, 0.3) 60%, transparent 75%)",
                  filter: "blur(30px)",
                  transform: "scale(1.8)",
                }}
              />
              <motion.img
                src={abhishekImage}
                alt="Abhishek Tripathi"
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-secondary shadow-2xl z-10"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              />
            </motion.div>
          </motion.div>

          {/* Right: 4+ years + skills – entrance from right + continuous horizontal movement */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="order-1 md:order-2 relative"
          >
            <motion.div
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Single bubble: experience + all skills grouped with movement */}
              <motion.div
                className="rounded-3xl border-2 border-secondary-light/40 bg-white/85 backdrop-blur-sm shadow-xl p-6 sm:p-8"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.p
                  className="font-poppins font-bold text-2xl sm:text-3xl text-secondary mb-5"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {aboutMe.experienceYears} years experience
                </motion.p>

                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {FLOATING_SKILLS.map(({ label, delay, floatDur }) => (
                    <motion.span
                      key={label}
                      className="inline-block font-poppins font-semibold text-base sm:text-lg md:text-xl text-textPrimary-light px-3 py-1.5 rounded-xl bg-secondary/10 border border-secondary-light/30"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay }}
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
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
