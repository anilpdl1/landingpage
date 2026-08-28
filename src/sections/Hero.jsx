import React from "react";
import {motion} from 'framer-motion'

function Hero(){
    return(
        <main className="flex flex-col justify-center items-center min-h[calc(100vh-4rem)]">
            
            <div className="md:mr-100 md:mt-5 mr-20 ">
                <motion.h2 className="text=2xl md:text-4xl font-serif font-medium"
                initial={{opacity:0,x:-30}}
                animate={{opacity:1,x:0}}
                transition={{duration:1}}
                >Introducing...</motion.h2>
                <motion.h1 className="text-3xl md:text-6xl font-serifs"
                initial={{opacity:0 ,y:30}}
                animate={{opacity:1,y:0}}
                transition={{duration:0.6}}
                >Chelsea Boots</motion.h1>

            </div>
          <div className="flex items-center justify-center lg:justify-end">
  <motion.div
    initial={{ opacity: 0, x: 30, scale: 0.9 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    className="relative"
  >
    {/* Glow */}
    <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />

    {/* Image */}
    <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-4 border-white shadow-2xl md:h-72 md:w-72 lg:h-80 lg:w-80">
      <img
        src="/chealsea1.jpeg"
        alt="Chelsea"
        className="h-full w-full object-cover"
      />
    </div>
  </motion.div>
</div>
        </main>
    )
}
export default Hero;