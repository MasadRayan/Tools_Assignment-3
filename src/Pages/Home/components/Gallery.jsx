import { motion } from "framer-motion";

const images = [
  {
    src: "./food/restaurant.jpg",
    alt: "Restaurant interior",
    span: "col-span-2 row-span-2",
  },
  {
    src: "./food/gourmet.jpg",
    alt: "Gourmet dish",
    span: "col-span-1 row-span-1",
  },
  {
    src: "./food/salad.jpg",
    alt: "Fresh salad",
    span: "col-span-1 row-span-1",
  },
  {
    src: "./food/cooking.jpg",
    alt: "Chef cooking",
    span: "col-span-1 row-span-1",
  },
  {
    src: "./food/wine2.jpg",
    alt: "Wine selection",
    span: "col-span-1 row-span-1",
  },
  {
    src: "./food/pizza.jpg",
    alt: "Pizza",
    span: "col-span-2 row-span-1",
  },
  {
    src: "./food/pasta.jpg",
    alt: "Pasta",
    span: "col-span-2 row-span-1",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 lg:py-2 bg-[#EFECE3]">
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
            Visual Journey
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1A1A1A] mt-4 mb-6">
            Our Gallery
          </h2>

          <p className="font-body text-[#6D6D6D] max-w-2xl mx-auto">
            A glimpse into the Savoria experience — from our elegant ambiance to
            our meticulously crafted dishes.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 auto-rows-[200px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Premium overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#1A1A1A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
