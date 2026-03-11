import React from "react";
import { motion } from "motion/react";
import { skills } from "../constants";
// Brand colors for tech icons (data-driven; exception to color-token rule) for different tech icons with brand colors
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
    'Playwright': '#2EAD33',
    'GitHub Actions': '#2088FF',
    'Linear': '#5E6AD2',
    'Azure': '#0078D4',
    'AWS': '#FF9900',
    'Google Cloud': '#4285F4',
    'Cosmos DB': '#0078D4',
    'Cursor AI': '#000000',
  };

  return colorMap[name] || '#71717A';
};

const TechStack = () => {
  return (
    <section id="techstack" className="py-16 px-4 sm:px-6 md:px-16 relative overflow-hidden bg-primary">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] blob-cyan rounded-full opacity-15" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="font-sora font-bold text-3xl sm:text-[36px] md:text-[42px] text-white mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="font-inter font-normal text-base sm:text-lg text-textSecondary mt-2">
            Full Stack Software Engineer — Associate Solution Architect
          </p>
          <div className="w-24 h-1 bg-accent-gradient mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="space-y-10 sm:space-y-12">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
            >
              <h3 className="font-space font-semibold text-lg sm:text-xl text-textSecondary mb-4 sm:mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3 sm:gap-4 justify-items-center">
                {category.items.map((item, index) => {
                  const techColor = getTechColor(item.name);
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: index * 0.03 }}
                      whileHover={{ scale: 1.12, y: -6 }}
                      className="relative group"
                    >
                      <div className="relative tooltip">
                        <motion.div
                          className="text-3xl sm:text-4xl md:text-5xl transition-all duration-300 cursor-pointer relative"
                          style={{
                            color: '#71717A',
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                          }}
                          whileHover={{
                            color: techColor,
                            scale: 1.08,
                            filter: `drop-shadow(0 0 12px ${techColor}99) drop-shadow(0 0 24px ${techColor}50)`,
                          }}
                          transition={{ type: "spring", stiffness: 320, damping: 22 }}
                        >
                          {item.icon && React.createElement(item.icon)}
                          <motion.div
                            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-xl -z-10"
                            style={{ backgroundColor: techColor }}
                            whileHover={{ opacity: 0.25 }}
                          />
                        </motion.div>
                        <span className="tooltiptext">{item.name}</span>
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
