import React from "react";
import { motion } from "framer-motion";
import image from "../assets/image.avif";
const HeroSection = () => {
  return (
    <motion.div
      className="min-h-full flex flex-col relative overflow-hidden"
      initial={{ backgroundPosition: "0% 0%" }}
      animate={{ backgroundPosition: "100% 100%" }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      }}
      style={{
        background: "linear-gradient(180deg, #000 0%,  #11302A 100%)",
        backgroundSize: "200% 200%",
      }}
    >
      <div className="flex-grow flex items-center py-16 pt-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
            <motion.div
              className="lg:w-1/2 z-10 mb-12 lg:mb-0 lg:pr-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                className="text-4xl lg:text-[44px] font-extrabold  mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                H1 Lorem Ipsum Dolor <br></br>Sit Amet Diam
              </motion.h1>
              <motion.p
                className="mb-8 text-gray-300 text-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliquam
                erat, sed diam voluptua.
              </motion.p>
              <motion.button
                className="bg-[#ff8000] text-black px-8 py-3 rounded-full hover:bg-[#ff9933] transition duration-300 text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>
            <motion.div
              className="lg:w-1/2 z-10 flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="rounded-full overflow-hidden w-64 h-64 lg:w-80 lg:h-80"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={image}
                  alt="Hero"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            className="flex flex-col lg:flex-row justify-between mt-auto z-10 space-y-6 lg:space-y-0 lg:space-x-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                className="bg-[#0e3b3c] border-2 border-green-200 rounded-3xl p-10 w-full lg:w-1/3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="font-semibold mb-4 text-base text-white">
                  Lorem Ipsum
                </h3>
                <p className="mb-4 text-gray-300 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
                <a
                  href="#"
                  className="text-[#ff8000] hover:text-[#ff9933] transition duration-300 font-semibold"
                >
                  Learn More &rarr;
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <svg
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="100%"
          cy="0"
          r="30%"
          fill="#0e3b3c"
          fillOpacity="0.5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.circle
          cx="0"
          cy="100%"
          r="30%"
          fill="#0e3b3c"
          fillOpacity="0.5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.circle
          cx="50%"
          cy="50%"
          r="10%"
          fill="#ff8000"
          fillOpacity="0.3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <motion.circle
          cx="25%"
          cy="25%"
          r="5%"
          fill="#3e9a9c"
          fillOpacity="0.3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </svg>
    </motion.div>
  );
};

export default HeroSection;
