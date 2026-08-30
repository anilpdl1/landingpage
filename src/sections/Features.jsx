import { motion } from "framer-motion";
import React from "react";
function Features(){

    const features = [
  {
    title: "Premium Leather",
    description: "Crafted from durable, high-quality leather.",
    icon: "👞",
  },
  {
    title: "All-Day Comfort",
    description: "Cushioned for comfort from morning to night.",
    icon: "☁️",
  },
  {
    title: "Built to Last",
    description: "Durable construction made for everyday wear.",
    icon: "🥾",
  },
  {
    title: "Timeless Design",
    description: "A classic silhouette that never goes out of style.",
    icon: "✨",
  },
];
return(
    <section className="min-h-0 max-w-6xl flex flex-col  justify-center items-center  px-6 gap-5 mb:10 md:px-12 lg:px-20" id="features">
        <div className="w-full max-w-6xl mb:8 ">
            <p className="text-4xl font-serif text-center font-bold">Why Chelsea?</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((el,idx)=>(
                <motion.div
                initial={{y:40,scale:0.9,opacity:0}}
                whileInView={{y:0,opacity:1,scale:1}}
                transition={{duration:0.8,delay:0.2+idx*0.2}}
                viewport={{ once: true, amount: 0.2 }}
                className="p-5 flex flex-col items-start  bg-accent/70 justify-center gap-5 max-60 h-60 border-white border-2 rounded-2xl backdrop-blur-2xl shadow-olive-50 hover:scale-105 transition-all ease-in-out " key={idx}>
                <p className="text-3xl">{el.icon}</p>
                <p className="self-start text-xl">{el.title}</p>
                <p className="text-sm  overflow-x-clip">{el.description}</p>

                </motion.div>
            ))}
        </div>
    </section>
)
}
export default Features;