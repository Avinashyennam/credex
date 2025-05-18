// src/components/Hero.jsx
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="text-center py-20 bg-blue-50">
      <motion.h1
        className="text-4xl font-bold mb-4 text-blue-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Sell Your Unused Software Licenses
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        Turn your unused digital assets into cash in just a few clicks
      </motion.p>

      <motion.button
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Sell My Licenses
      </motion.button>
    </section>
  );
};

export default Hero;
