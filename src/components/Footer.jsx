import React from "react";
import { motion } from "framer-motion";
import { socialMedia } from "../constants";

const getSocialHref = (link) => {
  if (link.startsWith("mailto:")) return link;
  if (link.includes("@")) return `mailto:${link}`;
  return link;
};

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-secondary-light/25 bg-primary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-16 py-10 md:py-12">
        <div>
          <h3 className="font-poppins font-bold text-xl text-textPrimary-light mb-2">
            Abhishek Tripathi
          </h3>
          <p className="font-poppins font-normal text-sm text-textSecondary-light mb-6">
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
                className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
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
