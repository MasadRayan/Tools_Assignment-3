import { motion } from "framer-motion";
import { GiKnifeFork } from "react-icons/gi";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#EFECE3] min-h-screen w-full">
      <div className="text-center">
        {/* Rotating Fork Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="inline-block mb-6"
        >
          <GiKnifeFork className="text-6xl text-[#4A70A9]" />
        </motion.div>

        {/* Restaurant Name */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-display text-2xl text-[#1A1A1A] mb-4"
        >
          KhanaPina
        </motion.h2>

        {/* Bouncing Dots */}
        <div className="flex items-center justify-center gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-[#4A70A9]"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
