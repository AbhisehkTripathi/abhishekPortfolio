import React from "react";
import { motion } from "motion/react";

import {
  Navbar,
  Hero,
  AboutMe,
  TechStack,
  Projects,
  Experience,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="w-full overflow-hidden transition-colors duration-300 min-h-screen bg-primary grid-bg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Navbar */}
        <div className="px-4 sm:px-8 lg:px-16 py-4">
          <div className="max-w-7xl mx-auto">
            <Navbar />
          </div>
        </div>

        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <AboutMe />

        {/* Tech Stack Section */}
        <TechStack />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Footer (includes contact form) */}
        <Footer />
      </motion.div>
    </div>
  );
};

export default App;
