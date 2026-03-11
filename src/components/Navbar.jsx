import { useState, useEffect } from "react";
import { close, abhishek, menu } from "../assets";
import { navLinks } from "../constants";
import { motion } from "motion/react";

const TITLE_LINE = "Full Stack Software Engineer — Associate Solution Architect";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const sections = navLinks.map((link) => link.id);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

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

  const handleLinkClick = (id) => {
    setToggle(false);
    setActiveSection(id);
  };

  return (
    <motion.nav
      className="w-full flex justify-between items-center navbar py-4 px-6 bg-primary-sec/80 backdrop-blur-xl shadow-lg rounded-2xl sticky z-50 border border-glass transition-all duration-300"
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
        top: isVisible ? 16 : -100
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <a
        href="#home"
        className="hover:scale-105 transition-transform duration-300 flex items-center gap-3"
        onClick={() => handleLinkClick("home")}
      >
        <img
          src={abhishek}
          alt="Abhishek Tripathi"
          className="w-[50px] h-[50px] rounded-full border-2 border-secondary/50"
        />
        <div className="hidden sm:block min-w-0 max-w-[180px] ss:max-w-[240px] md:max-w-[340px] lg:max-w-none flex-shrink">
          <h3 className="font-sora font-bold text-xs ss:text-sm md:text-base lg:text-lg text-textPrimary truncate" title={TITLE_LINE}>
            {TITLE_LINE}
          </h3>
        </div>
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-2">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-inter font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-2"
            } transition-colors duration-300`}
          >
            <a
              href={`#${nav.id}`}
              className={`relative group px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === nav.id
                  ? "text-secondary font-semibold"
                  : "text-textSecondary hover:text-white"
              }`}
              onClick={() => handleLinkClick(nav.id)}
            >
              {nav.title}
              <span
                className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ${
                  activeSection === nav.id
                    ? "w-full bg-accent-gradient"
                    : "w-0 group-hover:w-full bg-accent-gradient"
                }`}
              />
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center gap-3">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer invert"
          onClick={() => setToggle((prev) => !prev)}
        />

        <motion.div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-primary-sec/95 backdrop-blur-xl absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-2xl shadow-xl border border-glass sidebar`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: toggle ? 1 : 0, y: toggle ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="list-none flex flex-col justify-end items-start flex-1 w-full gap-2">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-inter font-normal cursor-pointer text-[16px] w-full ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-2"
                } transition-colors duration-300`}
                onClick={() => handleLinkClick(nav.id)}
              >
                <a
                  href={`#${nav.id}`}
                  className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === nav.id
                      ? "text-secondary font-semibold bg-secondary/10"
                      : "text-textSecondary hover:text-white hover:bg-secondary/10"
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
