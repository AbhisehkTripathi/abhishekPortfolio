import React from "react";
import { motion } from "framer-motion";
import { socialMedia, aboutMe } from "../constants";
import { playHoverSound, playClickSound } from "../utils/sounds";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 sm:px-16 border-t border-secondary-light/20 dark:border-secondary-dark/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <h3 className="font-poppins font-bold text-lg text-textPrimary-light dark:text-textPrimary-dark mb-2">
              Abhishek Tripathi
            </h3>
            <p className="font-poppins font-normal text-sm text-textSecondary-light dark:text-textSecondary-dark">
              © 2025
            </p>
            <p className="font-poppins font-normal text-sm text-textSecondary-light dark:text-textSecondary-dark">
              All rights reserved
            </p>
          </div>

          <div className="flex gap-4">
            {socialMedia.map((social, index) => (
              <motion.a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-secondary-light/10 dark:bg-secondary-dark/10 flex items-center justify-center text-secondary-light dark:text-secondary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-white dark:hover:text-primary-dark transition-all duration-300"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
              >
                {React.createElement(social.icon, { size: 20 })}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
