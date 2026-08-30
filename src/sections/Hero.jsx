
import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";

function Hero() {
  const boots = [
    "chealsea1.jpeg",
    "chelsea2.webp",
    "chelsea3.jpg",
    "chelsea4.webp",
  ];

  return (
    <main className="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-4rem)] flex flex-col items-center justify-start px-6 py-7 overflow-hidden">
      
      {/* Heading */}
      <div className="w-full max-w-6xl mb-5 md:mb-10">
        <motion.p
          className="text-lg md:text-xl font-serif text-gray-500 mb-1"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Introducing...
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Chelsea Boots
        </motion.h1>
      </div>

      {/* Boot Images */}
      <div className="w-full max-w-6xl flex flex-wrap justify-center items-center gap-5 md:gap-6 lg:gap-8">
        {boots.map((el, idx) => (
          <motion.div
            key={el}
            initial={{
              opacity: 0,
              x: idx % 2 === 0 ? -100 : 100,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2 + idx * 0.12,
              ease: "easeOut",
            }}
            whileHover={{
              y: -10,
              scale: 1.04,
            }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-2 rounded-2xl bg-primary/20 blur-3xl" />

            {/* Image */}
            <div className="relative h-40 w-40 sm:h-44 sm:w-44 md:h-52 md:w-52 lg:h-60 lg:w-60 overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
              <img
                src={el}
                alt="Chelsea boots"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <Button text="Shop now" />
        <Button  text="Learn more"/>
      </motion.div>
    </main>
  );
}

export default Hero;

