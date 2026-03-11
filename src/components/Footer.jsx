import React from "react";
import { motion } from "motion/react";
import { socialMedia } from "../constants";

const getSocialHref = (link) => {
  if (link.startsWith("mailto:")) return link;
  if (link.includes("@")) return `mailto:${link}`;
  return link;
};

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-glass bg-primary-sec">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-16 py-10 md:py-12">
        <div>
          <h3 className="font-sora font-bold text-xl text-white mb-2">
            Abhishek Tripathi
          </h3>
          <p className="font-inter font-normal text-sm text-textSecondary mb-6">
            © {new Date().getFullYear()} · Full Stack Software Engineer — Associate Solution Architect
          </p>
          <div className="flex gap-4">
            {socialMedia.map((social) => (
              <motion.a
                key={social.id}
                href={getSocialHref(social.link)}
                target={social.link.startsWith("http") ? "_blank" : undefined}
                rel={social.link.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full border border-glass flex items-center justify-center text-textSecondary hover:text-secondary hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300"
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
