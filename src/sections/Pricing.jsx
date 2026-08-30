import { motion,easeInOut} from 'framer-motion'
import Button from '../components/Button';
function Pricing(){
    const products = [
  {
    name: "Classic Chelsea",
    price: "$129",
    image: "/chealsea1.jpeg",
    description: "A timeless silhouette for everyday wear.",
  },
  {
    name: "Heritage Chelsea",
    price: "$149",
    image: "/chelsea2.webp",
    description: "Crafted for character and durability.",
  },
  {
    name: "Premium Chelsea",
    price: "$179",
    image: "/chelsea3.jpg",
    description: "Elevated materials with a refined finish.",
  },
];
    return(
        <section id="pricing" className='flex min-h-[calc(100vh-4rem)] mt-5 px-6 py-12 flex-col items-center justify-start gap-10'>
            < motion.div
            initial={{y:40,opacity:0,scale:0.7}}
            whileInView={{y:0,opacity:1,scale:1}}
            transition={{ease:easeInOut,delay:0.2,duration:0.8}}
            className='flex flex-col items-center'>
                <p className="text-md tracking-[0.3em] text-accent">
  THE COLLECTION
</p>

<h2 className="mt-2 text-3xl font-serif">
  Find your perfect pair.
</h2>
            </motion.div>
            <div className='w-fit  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {products.map((el,idx)=>(
                <motion.div className=' group flex flex-col w-72  items-center justify-start border-2 relative border-black backdrop-blur-2xl px-6 py-4 rounded-2xl ' key={idx}
                initial={{y:40,opacity:0,scale:0.9}}
                whileInView={{y:0,opacity:1,scale:1}}
                transition={{duration:0.6,delay:0.1*idx,ease:easeInOut}}
                viewport={{once:true}}
                whileHover={{y:-8,scale:1.05}}
                
                >
                  <div className="absolute -inset-2 rounded-2xl bg-primary/20 blur-3xl" />  
                    <div className=" mb-4 h-40 w-40 sm:h-44 sm:w-44 md:h-52 md:w-52 lg:h-60 lg:w-60 overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
              <img
                src={el.image}
                alt="Chelsea boots"
                className=" h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-serif font-semibold">
  {el.name}
</h3>

<p className="mt-2 max-w-xs text-center text-sm text-foreground/60 leading-relaxed">
  {el.description}
</p>

<p className="mt-4 text-2xl font-semibold">
  {el.price}
</p>
            <Button text="Shop Now"/>
                </motion.div>
            ))}

            </div>

        </section>
    )
}
export default Pricing;