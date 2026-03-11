import { motion } from "motion/react";
import Lottie from "react-lottie-player";
import animationData from "../lotties/person-coding.json";
import { aboutMe, resumeLink } from "../constants";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { useTypewriter } from "../hooks/useTypewriter";
import { playClickSound, playHoverSound } from "../utils/sounds";
import { fadeUp } from "../animations/fadeUp";

const defaultLottieOptions = {
  loop: true,
  play: true,
  animationData,
  rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
};

const TITLE_LINE = "Full Stack Software Engineer — Associate Solution Architect";

const Hero = () => {
  const headline = "Hi, I'm Abhishek Tripathi";
  const tagline = TITLE_LINE;
  const displayTagline = useTypewriter(tagline, 40);

  return (
    <section
      id="home"
      className="flex md:flex-row flex-col min-h-screen items-center justify-center px-6 sm:px-16 py-20 relative overflow-hidden bg-primary"
    >
      {/* Gradient background blobs */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] blob-accent rounded-full opacity-40 animate-float" />
      <div className="absolute bottom-20 right-10 w-[600px] h-[600px] blob-purple rounded-full opacity-30 animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 blob-cyan rounded-full opacity-20 blur-3xl animate-pulse-slow" />

      <motion.div
        className="flex-1 flex flex-col xl:px-0 sm:px-16 px-6 relative z-10"
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.h1
            className="font-sora font-bold ss:text-[64px] text-[36px] sm:text-[48px] text-white ss:leading-[76px] leading-[48px] mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            {headline}{" "}
            <span className="text-gradient">👋</span>
          </motion.h1>
          
          <motion.h2
            className="font-space font-semibold text-base sm:text-xl md:text-2xl text-textSecondary mb-6 min-h-[48px] sm:min-h-[60px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {displayTagline}
            <motion.span
              className="inline-block ml-1 text-accent"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ▋
            </motion.span>
          </motion.h2>
          
          <motion.p
            className="font-inter font-normal text-base text-textSecondary max-w-[600px] mb-8 leading-relaxed"
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
            <button className="px-6 sm:px-8 py-3 bg-accent-gradient text-white font-inter font-semibold rounded-full hover:opacity-90 transition-all duration-300 shadow-lg shadow-secondary/25 hover:shadow-secondary/40">
              View Projects
            </button>
          </motion.a>
          <motion.a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
          >
            <button className="px-6 sm:px-8 py-3 bg-transparent border border-glass text-white font-inter font-semibold rounded-full hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300">
              Resume
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
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-glass flex items-center justify-center text-textSecondary hover:text-secondary hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300"
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
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-glass flex items-center justify-center text-textSecondary hover:text-secondary hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={playHoverSound}
          >
            <AiFillGithub size={24} />
          </motion.a>
          <motion.a
            href="mailto:abhishektripathi2096a@gmail.com"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-glass flex items-center justify-center text-textSecondary hover:text-secondary hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300"
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
            <Lottie {...defaultLottieOptions} className="w-full h-full" />
          </div>
          <div className="absolute z-[1] w-[60%] h-[60%] rounded-full bottom-20 left-1/2 -translate-x-1/2 blob-accent opacity-40 animate-float" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
