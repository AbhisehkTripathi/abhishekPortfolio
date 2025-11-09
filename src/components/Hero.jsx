import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
import animationData from "../lotties/person-coding.json";
import { aboutMe } from "../constants";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { useTypewriter } from "../hooks/useTypewriter";
import { playClickSound, playHoverSound } from "../utils/sounds";

// lottie config
const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero = () => {
  const headline = "Hi, I'm Abhishek Tripathi 👋 Building Scalable, Fast, and Elegant Web Experiences.";
  const tagline = "Full Stack Developer | Cloud | AI | Scalable Systems.";
  const displayTagline = useTypewriter(tagline, 50);

  return (
    <section
      id="home"
      className="flex md:flex-row flex-col min-h-screen items-center justify-center px-6 sm:px-16 py-20 relative overflow-hidden transition-colors duration-300"
    >
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 pastel-blue-gradient rounded-full opacity-30 dark:opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 pastel-pink-gradient rounded-full opacity-30 dark:opacity-10 animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary-light/20 dark:bg-secondary-dark/10 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>

      <motion.div
        className="flex-1 flex flex-col xl:px-0 sm:px-16 px-6 relative z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1
            className="font-poppins font-bold ss:text-[56px] text-[36px] text-textPrimary-light dark:text-textPrimary-dark ss:leading-[70px] leading-[50px] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {headline}
          </motion.h1>
          
          <motion.h2
            className="font-poppins font-semibold text-xl sm:text-2xl text-textSecondary-light dark:text-textSecondary-dark mb-6 min-h-[60px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {displayTagline}
            <motion.span
              className="inline-block ml-1 text-secondary-light dark:text-secondary-dark"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ▋
            </motion.span>
          </motion.h2>
          
          <motion.p
            className="font-poppins font-normal text-base text-textSecondary-light dark:text-textSecondary-dark max-w-[600px] mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {aboutMe.intro}
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
          >
            <button className="px-8 py-3 bg-secondary-light dark:bg-secondary-dark text-white dark:text-primary-dark font-poppins font-semibold rounded-full hover:bg-[#8dd4b8] dark:hover:bg-[#00b894] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-pulse-slow">
              View Projects
            </button>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
          >
            <button className="px-8 py-3 bg-white dark:bg-gray-800 border-2 border-secondary-light dark:border-secondary-dark text-secondary-light dark:text-secondary-dark font-poppins font-semibold rounded-full hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-white dark:hover:text-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Contact Me
            </button>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/abhishek-tripathi-843b11217"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-secondary-light dark:border-secondary-dark flex items-center justify-center text-secondary-light dark:text-secondary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-white dark:hover:text-primary-dark transition-all duration-300 hover:scale-110 shadow-md"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={playHoverSound}
          >
            <AiFillLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://github.com/AbhisehkTripathi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-secondary-light dark:border-secondary-dark flex items-center justify-center text-secondary-light dark:text-secondary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-white dark:hover:text-primary-dark transition-all duration-300 hover:scale-110 shadow-md"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={playHoverSound}
          >
            <AiFillGithub size={24} />
          </motion.a>
          <motion.a
            href="mailto:abhishektripathi2096a@gmail.com"
            className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-secondary-light dark:border-secondary-dark flex items-center justify-center text-secondary-light dark:text-secondary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-white dark:hover:text-primary-dark transition-all duration-300 hover:scale-110 shadow-md"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={playHoverSound}
          >
            <AiFillMail size={24} />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex-1 flex items-center justify-center md:my-0 my-10 relative z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="relative w-full max-w-md">
          <div className="relative z-[5]">
            <Lottie {...defaultOptions} className="w-full h-full" />
          </div>
          <div className="absolute z-[1] w-[60%] h-[60%] rounded-full bottom-20 left-1/2 transform -translate-x-1/2 pastel-blue-gradient opacity-40 dark:opacity-20 animate-float"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
