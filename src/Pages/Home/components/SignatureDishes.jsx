import { motion } from "framer-motion";
import { HiStar, HiArrowRight } from "react-icons/hi";
import { Link } from "react-router";

const dishes = [
  {
    id: 1,
    name: "Truffle Risotto",
    description: "Creamy Arborio rice with black truffle and aged parmesan",
    price: "$38",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=500",
    rating: 4.9,
    category: "Main Course",
  },
  {
    id: 2,
    name: "Seared Salmon",
    description:
      "Atlantic salmon with citrus glaze and seasonal vegetables",
    price: "$42",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=500",
    rating: 4.8,
    category: "Seafood",
  },
  {
    id: 3,
    name: "Wagyu Steak",
    description: "A5 Japanese Wagyu with herb butter and roasted garlic",
    price: "$85",
    image:
      "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?q=80&w=500",
    rating: 5.0,
    category: "Premium",
  },
  {
    id: 4,
    name: "Lobster Bisque",
    description: "Velvety soup with fresh Maine lobster and cognac",
    price: "$28",
    image:
      "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=500",
    rating: 4.7,
    category: "Starter",
  },
];

const SignatureDishes = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#EFECE3]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#4A70A9] font-body text-sm uppercase tracking-[0.3em]">
            Chef's Selection
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1A1A1A] mt-4 mb-6">
            Signature Dishes
          </h2>

          <p className="font-body text-[#555] max-w-2xl mx-auto">
            Discover our most beloved creations, crafted with passion and
            the finest ingredients.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#8FABD4]/20"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#EFECE3]/90 backdrop-blur-sm text-[#1A1A1A] px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                    {dish.category}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#EFECE3]/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <HiStar className="text-[#D4A017] text-sm" />
                  <span className="text-xs font-semibold text-[#1A1A1A]">
                    {dish.rating}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display text-xl font-semibold text-[#1A1A1A]">
                    {dish.name}
                  </h3>

                  <span className="text-[#4A70A9] font-semibold">{dish.price}</span>
                </div>

                <p className="font-body text-sm text-[#666] line-clamp-2">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/dishes"
            className="inline-flex items-center gap-2 text-[#4A70A9] font-body text-sm uppercase tracking-wider hover:gap-4 transition-all group"
          >
            View Full Menu
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SignatureDishes;
