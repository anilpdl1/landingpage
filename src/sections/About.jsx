
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 flex flex-col justify-center items-center gap-16"
    >
      {/* Section Heading */}
      <motion.div
        className="w-full max-w-4xl flex flex-col items-center text-center gap-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm tracking-[0.3em] font-medium text-accent">
          ABOUT THE COLLECTION
        </p>

        <h2 className="text-3xl md:text-5xl font-serif font-medium leading-tight">
          Made to be worn.
          <br />
          <span className="italic">Built to be remembered.</span>
        </h2>

        <div className="w-12 h-px bg-accent mt-3" />
      </motion.div>

      {/* Main Content */}
      <div
        className="
          grid grid-cols-1 md:grid-cols-2
          w-fit max-w-full
          mx-auto
          gap-12 lg:gap-20
          items-center
        "
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Soft glow */}
          <div className="absolute -inset-4 bg-accent/10 blur-2xl rounded-full" />

          <div
            className="
              relative
              h-72 w-72
              md:h-80 md:w-80
              overflow-hidden
              rounded-2xl
              border border-accent/20
              bg-background
              shadow-xl
            "
          >
            <img
              src="/chelsea-about.jpg"
              alt="Chelsea boots"
              className="
                h-full w-full
                object-contain
                mix-blend-multiply
                transition-transform duration-700
                hover:scale-105
              "
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="max-w-md"
        >
          <p className="text-sm tracking-widest text-accent mb-3">
            THE CLASSIC
          </p>

          <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-5">
            A timeless classic
          </h3>

          <p className="text-sm md:text-base text-foreground/70 leading-7 mb-7">
            Chelsea boots are more than just footwear. They're a balance
            between timeless design, everyday comfort, and effortless style.
            Designed to move with you and made to stand the test of time.
          </p>

          {/* Features */}
          <div className="space-y-3 border-l-2 border-accent/30 pl-5">
            <p className="text-sm font-medium">
              Premium materials
            </p>

            <p className="text-sm font-medium">
              Comfortable everyday fit
            </p>

            <p className="text-sm font-medium">
              Built for lasting wear
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

