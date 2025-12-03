import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="relative min-h-svh flex items-center pt-24 overflow-hidden mt-10 md:mt-20">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/herobg.jpg"
          alt="Restaurant ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-4xl px-6 lg:px-24">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-[#4A70A9] font-semibold tracking-[0.25em] text-sm mb-4"
        >
          Welcome to KhanaPina
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
        >
          A Taste of
          <span className="block text-[#4A70A9]">Timeless Elegance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl text-lg text-white/80 leading-relaxed mb-10"
        >
          Discover fine dining crafted with passion, seasonal ingredients, and
          rich culinary heritage.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/dishes"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#4A70A9] text-white font-semibold tracking-wider hover:bg-[#3a5a87] transition-all shadow-lg"
          >
            Explore Menu
            <HiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#4A70A9] text-[#4A70A9] font-semibold tracking-wider hover:bg-[#4A70A9] hover:text-white transition-all"
          >
            Our Story
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
