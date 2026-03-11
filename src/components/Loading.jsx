import { motion } from "motion/react";
import { abhishek } from "../assets";

const Loading = () => {
  return (
    <motion.div
      id="loading"
      className="w-[100vw] h-[100vh] flex items-center justify-center bg-primary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="flex flex-col items-center gap-4"
      >
        <motion.img
          src={abhishek}
          alt="Abhishek Tripathi"
          className="w-20 h-20 rounded-full border-2 border-secondary"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.p
          className="font-sora font-semibold text-white"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Loading;
