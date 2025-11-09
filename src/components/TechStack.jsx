import React from "react";
import { motion } from "framer-motion";
import { skills } from "../constants";
import { playHoverSound } from "../utils/sounds";

// Enhanced color mapping for different tech icons with brand colors
const getTechColor = (name) => {
  const colorMap = {
    'JavaScript': '#F7DF1E',
    'PHP': '#777BB4',
    'Python': '#FFD43B',
    'Go': '#00ADD8',
    'React': '#61DAFB',
    'ReactJS': '#61DAFB',
    'TypeScript': '#3178C6',
    'Node.js': '#339933',
    'Tailwind CSS': '#06B6D4',
    'jQuery': '#0769AD',
    'Laravel': '#FF2D20',
    'Kafka': '#FF6F00',
    'Docker': '#2496ED',
    'MySQL': '#4479A1',
    'PostgreSQL': '#336791',
    'MongoDB': '#47A248',
    'DynamoDB': '#4053D6',
    'Supabase': '#3ECF8E',
    'Redis': '#DC382D',
    'Postman': '#FF6C37',
    'VS Code': '#007ACC',
    'Git': '#F05032',
    'GitHub': '#181717',
    'GitLab': '#FC6D26',
    'Vite': '#646CFF',
    'Next.js': '#000000',
    'Elasticsearch': '#005571',
  };
  
  return colorMap[name] || '#a8e6cf';
};

const TechStack = () => {
  return (
    <section id="techstack" className="py-16 px-6 sm:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-textPrimary-light dark:text-textPrimary-dark mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <div className="w-24 h-1 bg-secondary-light dark:bg-secondary-dark mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="font-poppins font-semibold text-xl text-textPrimary-light dark:text-textPrimary-dark mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 justify-items-center">
                {category.items.map((item, index) => {
                  const techColor = getTechColor(item.name);
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.15, y: -5 }}
                      className="relative group"
                      onMouseEnter={playHoverSound}
                    >
                      <div className="relative tooltip">
                        <motion.div
                          className="text-4xl sm:text-5xl transition-all duration-300 cursor-pointer relative"
                          style={{
                            color: '#636e72',
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                          }}
                          whileHover={{
                            color: techColor,
                            scale: 1.1,
                            filter: `drop-shadow(0 0 15px ${techColor}) drop-shadow(0 0 30px ${techColor}60)`,
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          {item.icon && React.createElement(item.icon)}
                          {/* Glow effect on hover */}
                          <motion.div
                            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-25 blur-xl -z-10"
                            style={{ backgroundColor: techColor }}
                            whileHover={{ opacity: 0.3 }}
                          />
                        </motion.div>
                        <span className="tooltiptext">
                          {item.name}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
