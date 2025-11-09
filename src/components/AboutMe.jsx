import { motion } from "framer-motion";
import { aboutMe } from "../constants";
import { abhishekImage } from "../assets";

// Component to highlight key phrases with gradient
const HighlightText = ({ children, delay = 0 }) => {
  return (
    <motion.span
      className="text-gradient font-semibold"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      {children}
    </motion.span>
  );
};

const AboutMe = () => {
  const textParts = aboutMe.intro.split(/(Full Stack Developer|Elasticsearch|Node\.js)/g);

  return (
    <section id="about" className="py-20 px-6 sm:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-textPrimary-light dark:text-textPrimary-dark mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-secondary-light dark:bg-secondary-dark mx-auto rounded-full"></div>
        </motion.div>

        {/* Split Layout: Photo Left, Content Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image with Hover Glow Effect - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-start order-2 md:order-1"
          >
            <div className="relative group">
              {/* Soft blurred gradient ring behind image */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle, rgba(168, 230, 207, 0.3) 0%, rgba(255, 211, 182, 0.2) 50%, transparent 70%)',
                  filter: 'blur(30px)',
                  transform: 'scale(1.3)',
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Circular shadow/glow effect */}
              <motion.div
                className="absolute -inset-8 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(168, 230, 207, 0.2), rgba(255, 211, 182, 0.2))',
                  filter: 'blur(40px)',
                }}
              />
              
              {/* Main circular image */}
              <motion.img
                src={abhishekImage}
                alt="Abhishek Tripathi"
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-secondary-light dark:border-secondary-dark shadow-2xl z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              />
              
              {/* Decorative glow dots */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-light dark:bg-secondary-dark rounded-full opacity-20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Content with Animated Text - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-lg border border-secondary-light/20 dark:border-secondary-dark/30"
            >
              <motion.p
                className="font-poppins font-normal text-lg text-textSecondary-light dark:text-textSecondary-dark leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {textParts.map((part, index) => {
                  if (part === "Full Stack Developer" || part === "Elasticsearch" || part === "Node.js") {
                    return <HighlightText key={index} delay={0.5 + index * 0.1}>{part}</HighlightText>;
                  }
                  return <span key={index}>{part}</span>;
                })}
              </motion.p>
              
              <motion.p
                className="font-poppins font-normal text-lg text-textSecondary-light dark:text-textSecondary-dark leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                I specialize in building scalable web and mobile applications using modern frameworks like{" "}
                <HighlightText delay={0.7}>React</HighlightText>, <HighlightText delay={0.75}>Node.js</HighlightText>, and{" "}
                <HighlightText delay={0.8}>Python</HighlightText>. My approach to development focuses on writing clean, maintainable code that follows best practices and SOLID principles.
              </motion.p>
              
              <motion.p
                className="font-poppins font-normal text-lg text-textSecondary-light dark:text-textSecondary-dark leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                I'm passionate about continuous learning, staying up-to-date with the latest technologies, and delivering solutions 
                that drive business success. Whether it's frontend interfaces, backend APIs, or full-stack applications, I bring 
                creativity and technical expertise to every project.
              </motion.p>
            </motion.div>

            {/* Skills highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {[
                "Full Stack Development",
                "Clean Code",
                "Problem Solving",
                "Team Collaboration",
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-4 text-center border border-secondary-light/20 dark:border-secondary-dark/30 hover:bg-white/80 dark:hover:bg-gray-900/80 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                >
                  <p className="font-poppins font-semibold text-sm sm:text-base text-textPrimary-light dark:text-textPrimary-dark">
                    {skill}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
