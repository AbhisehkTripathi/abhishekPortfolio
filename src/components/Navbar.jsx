import { useState, useEffect } from "react";
import { close, abhishek, menu } from "../assets";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { playToggleSound, playHoverSound, playClickSound } from "../utils/sounds";
import { HiSun, HiMoon } from "react-icons/hi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const sections = navLinks.map((link) => link.id);

      // Hide navbar on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Active section detection
      const scrollPosition = currentScrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleThemeToggle = () => {
    playToggleSound();
    toggleTheme();
  };

  const handleLinkClick = (id) => {
    playHoverSound();
    setToggle(false);
    setActiveSection(id);
  };

  return (
    <motion.nav
      className="w-full flex justify-between items-center navbar py-4 px-6 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg dark:shadow-cyan-500/10 rounded-2xl sticky z-50 border border-secondary-light/20 dark:border-secondary-dark/30 transition-all duration-300"
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
        top: isVisible ? 16 : -100
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Logo */}
      <a
        href="#home"
        className="hover:scale-105 transition-transform duration-300 flex items-center gap-3"
        onClick={() => handleLinkClick("home")}
      >
        <img
          src={abhishek}
          alt="Abhishek Tripathi"
          className="w-[50px] h-[50px] rounded-full border-2 border-secondary-light dark:border-secondary-dark"
        />
        <div className="hidden sm:block">
          <h3 className="font-poppins font-bold text-base sm:text-lg text-textPrimary-light dark:text-textPrimary-dark">
            Abhishek Tripathi | Full Stack Developer
          </h3>
        </div>
      </a>

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-2">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-2"
            } transition-colors duration-300`}
          >
            <a
              href={`#${nav.id}`}
              className={`relative group px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === nav.id
                  ? "text-secondary-light dark:text-secondary-dark font-semibold"
                  : "text-textPrimary-light dark:text-textPrimary-dark hover:text-secondary-light dark:hover:text-secondary-dark"
              }`}
              onClick={() => handleLinkClick(nav.id)}
              onMouseEnter={playHoverSound}
            >
              {nav.title}
              <span
                className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ${
                  activeSection === nav.id
                    ? "w-full bg-secondary-light dark:bg-secondary-dark"
                    : "w-0 group-hover:w-full bg-secondary-light dark:bg-secondary-dark"
                }`}
              ></span>
            </a>
          </li>
        ))}
        
        {/* Theme Toggle */}
        <li className="ml-4">
          <motion.button
            onClick={handleThemeToggle}
            className="w-10 h-10 rounded-full bg-secondary-light/20 dark:bg-secondary-dark/20 flex items-center justify-center text-textPrimary-light dark:text-textPrimary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-white dark:hover:text-primary-dark transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={playHoverSound}
          >
            {theme === "light" ? (
              <HiMoon size={20} className="transition-transform duration-300" />
            ) : (
              <HiSun size={20} className="transition-transform duration-300" />
            )}
          </motion.button>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center gap-3">
        {/* Theme Toggle Mobile */}
        <motion.button
          onClick={handleThemeToggle}
          className="w-10 h-10 rounded-full bg-secondary-light/20 dark:bg-secondary-dark/20 flex items-center justify-center text-textPrimary-light dark:text-textPrimary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-white dark:hover:text-primary-dark transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onMouseEnter={playHoverSound}
        >
          {theme === "light" ? (
            <HiMoon size={20} />
          ) : (
            <HiSun size={20} />
          )}
        </motion.button>

        {/* Mobile Menu Toggle */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => {
            playClickSound();
            setToggle((prev) => !prev);
          }}
        />

        <motion.div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-2xl shadow-xl dark:shadow-cyan-500/10 border border-secondary-light/20 dark:border-secondary-dark/30 sidebar`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: toggle ? 1 : 0, y: toggle ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="list-none flex flex-col justify-end items-start flex-1 w-full gap-2">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] w-full ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-2"
                } transition-colors duration-300`}
                onClick={() => handleLinkClick(nav.id)}
              >
                <a
                  href={`#${nav.id}`}
                  className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === nav.id
                      ? "text-secondary-light dark:text-secondary-dark font-semibold bg-secondary-light/10 dark:bg-secondary-dark/10"
                      : "text-textPrimary-light dark:text-textPrimary-dark hover:text-secondary-light dark:hover:text-secondary-dark hover:bg-secondary-light/10 dark:hover:bg-secondary-dark/10"
                  }`}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
