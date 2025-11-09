import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./contexts/ThemeContext";

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
  const { theme } = useTheme();

  return (
    <div className="w-full overflow-hidden transition-colors duration-300 min-h-screen">
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

        {/* Footer */}
        <Footer />
      </motion.div>
    </div>
  );
};

export default App;
