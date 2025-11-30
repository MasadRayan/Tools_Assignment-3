import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const chefs = [
  {
    name: "Marcus Chen",
    role: "Executive Chef",
    image: "./Chef/1.jpg",
    bio: "With 20 years of experience across three continents, Chef Marcus brings a fusion of Eastern and Western techniques.",
    social: { instagram: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Isabella Romano",
    role: "Pastry Chef",
    image: "./Chef/2.jpg",
    bio: "Trained in Paris and Milan, Isabella crafts desserts that are as beautiful as they are delicious.",
    social: { instagram: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "David Kim",
    role: "Sous Chef",
    image: "./Chef/3.jpg",
    bio: "A rising star in the culinary world, David's innovative approach to classic dishes has won numerous accolades.",
    social: { instagram: "#", twitter: "#", linkedin: "#" },
  },
];

const ChefSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#EFECE3]">
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
            Meet Our Team
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1A1A1A] mt-4 mb-6">
            Master Chefs
          </h2>
          <p className="font-body text-[#6D6D6D] max-w-2xl mx-auto">
            The culinary artists behind our extraordinary dishes, each bringing
            their unique expertise and passion to every plate.
          </p>
        </motion.div>

        {/* Chefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chefs.map((chef, index) => (
            <motion.div
              key={chef.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group text-center"
            >
              {/* Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full aspect-3/4 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#1A1A1A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <div className="flex gap-4">
                    <a
                      className="p-2 bg-[#EFECE3]/90 rounded-full text-[#1A1A1A] hover:bg-[#4A70A9] hover:text-white transition-colors"
                    >
                      <FaInstagram size={18} />
                    </a>
                    <a
                      className="p-2 bg-[#EFECE3]/90 rounded-full text-[#1A1A1A] hover:bg-[#4A70A9] hover:text-white transition-colors"
                    >
                      <FaTwitter size={18} />
                    </a>
                    <a
                      className="p-2 bg-[#EFECE3]/90 rounded-full text-[#1A1A1A] hover:bg-[#4A70A9] hover:text-white transition-colors"
                    >
                      <FaLinkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-display text-xl font-semibold text-[#1A1A1A] mb-1">
                {chef.name}
              </h3>
              <p className="text-[#4A70A9] font-body text-sm uppercase tracking-wider mb-3">
                {chef.role}
              </p>
              <p className="font-body text-[#6D6D6D] text-sm leading-relaxed">
                {chef.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
