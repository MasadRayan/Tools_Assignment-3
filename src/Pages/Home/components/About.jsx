import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";

const features = [
    "Farm-to-table fresh ingredients",
    "Award-winning culinary team",
    "Sustainable sourcing practices",
    "Private dining experiences",
];

const About = () => {
    return (
        <section id="about" className="py-20 lg:py-5 bg-[#EFECE3]">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center "
                >
                    <span className="text-[#4A70A9] font-body text-sm uppercase tracking-[0.3em]">
                        Our Story
                    </span>

                    <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1A1A1A] mt-4 mb-6">
                        About Us
                    </h2>
                </motion.div>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Images */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10">
                            <img
                                src="./aboutUs1.jpg"
                                alt="Chef preparing dish"
                                className="rounded-2xl shadow-xl w-full lg:w-4/5"
                            />
                        </div>

                        <div className="absolute top-1/2 -right-4 lg:right-0 -translate-y-1/2 z-20">
                            <img
                                src="./aboutUs2.jpg"
                                alt="Fine dining"
                                className="rounded-2xl shadow-lg w-32 lg:w-48 border-4 border-[#EFECE3]"
                            />
                        </div>

                        {/* Decorative Circles */}
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#4A70A9]/15 rounded-full -z-10" />
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#8FABD4]/20 rounded-full -z-10" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        

                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 mb-6 leading-tight">
                            A Legacy of
                            <span className="block text-[#4A70A9]">Culinary Excellence</span>
                        </h2>

                        <p className="font-body text-[#555] mb-6 leading-relaxed">
                            Founded in 2010, Savoria has become a beacon of culinary innovation.
                            Our passion for exceptional cuisine and warm hospitality has earned
                            us recognition from critics and food lovers alike.
                        </p>

                        <p className="font-body text-[#555] mb-8 leading-relaxed">
                            Every dish reflects dedication, creativity, and respect for ingredients.
                            We believe in the power of food to bring people together.
                        </p>

                        {/* Features */}
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <HiCheckCircle className="text-[#4A70A9] text-xl" />
                                    <span className="font-body text-[#1A1A1A]">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8">
                            <div>
                                <span className="font-display text-4xl font-bold text-[#4A70A9]">
                                    15+
                                </span>
                                <p className="font-body text-sm text-[#555] mt-1">
                                    Years of Excellence
                                </p>
                            </div>

                            <div>
                                <span className="font-display text-4xl font-bold text-[#4A70A9]">
                                    50k+
                                </span>
                                <p className="font-body text-sm text-[#555] mt-1">
                                    Happy Guests
                                </p>
                            </div>

                            <div>
                                <span className="font-display text-4xl font-bold text-[#4A70A9]">
                                    12
                                </span>
                                <p className="font-body text-sm text-[#555] mt-1">
                                    Awards Won
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
