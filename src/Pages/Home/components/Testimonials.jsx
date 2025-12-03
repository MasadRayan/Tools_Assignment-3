import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight, HiStar } from "react-icons/hi";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Food Critic",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    quote:
      "KhanaPina redefines fine dining. Every dish is a masterpiece, and the attention to detail is extraordinary. An unforgettable culinary journey.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Thompson",
    role: "Regular Guest",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    quote:
      "We've celebrated every anniversary here for the past five years. The ambiance, service, and food create magic every single time.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Travel Blogger",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    quote:
      "Having dined at restaurants around the world, KhanaPina stands out for its perfect balance of innovation and classic technique.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 lg:py-32 bg-[#8FABD4]/30">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#4A70A9] font-body text-sm uppercase tracking-[0.3em]">
            Testimonials
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1A1A1A] mt-4">
            What Our Guests Say
          </h2>
        </motion.div>

        {/* Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl p-8 lg:p-12 shadow-lg bg-[#EFECE3] text-center border border-[#4A70A9]/10"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <HiStar key={i} className="text-[#D4A017] text-xl" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-display text-xl lg:text-2xl text-[#1A1A1A] italic mb-8 leading-relaxed">
                  "{testimonials[current].quote}"
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-16 h-16 rounded-full object-cover mb-4 border-4 border-[#4A70A9]/20"
                  />

                  <h4 className="font-display text-lg font-semibold text-[#1A1A1A]">
                    {testimonials[current].name}
                  </h4>

                  <p className="font-body text-sm text-[#6D6D6D]">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-3 rounded-full bg-[#EFECE3] border border-[#4A70A9]/40 hover:border-[#4A70A9] hover:text-[#4A70A9] transition-colors"
              >
                <HiChevronLeft size={24} />
              </button>

              <button
                onClick={next}
                className="p-3 rounded-full bg-[#EFECE3] border border-[#4A70A9]/40 hover:border-[#4A70A9] hover:text-[#4A70A9] transition-colors"
              >
                <HiChevronRight size={24} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current
                      ? "w-8 bg-[#4A70A9]"
                      : "bg-[#6D6D6D]/40 hover:bg-[#6D6D6D]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
