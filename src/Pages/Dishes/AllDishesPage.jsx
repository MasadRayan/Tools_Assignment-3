import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";
import PageLoader from "../../components/PageLoader";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { ScrollRestoration } from "react-router";


const AllDishesPage = () => {
    const [allMeals, setAllMeals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMeals = async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    "https://www.themealdb.com/api/json/v1/1/search.php?s="
                );
                const data = await res.json();
                console.log(data);

                let mealsArray = [];
                if (Array.isArray(data)) {
                    mealsArray = data;
                } else if (data && Array.isArray(data.data)) {
                    mealsArray = data.data;
                } else if (data && Array.isArray(data.meals)) {
                    mealsArray = data.meals;
                } else if (data && typeof data === "object") {
                    const firstArrayKey = Object.keys(data).find(
                        (key) => Array.isArray(data[key])
                    );
                    if (firstArrayKey) mealsArray = data[firstArrayKey];
                }

                setAllMeals(mealsArray);
            } catch (error) {
                console.error(error);
                setAllMeals([]);
            } finally {
                setLoading(false);
            }
        };
        fetchMeals();
    }, []);

    const safeMeals = Array.isArray(allMeals) ? allMeals : [];

    return (
        <main className="min-h-screen bg-[#F8F8F8]">
            {/* HERO */}
            <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-[#EFECE3]">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <span className="inline-block text-[#4A70A9] text-sm uppercase tracking-widest mb-4">
                        Our Menu
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-[#4A70A9] mb-6">
                        Culinary Creations
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our carefully curated selection of dishes from around the world.
                    </p>
                </div>
            </section>

            {/* MEALS GRID */}
            <section className="py-12 lg:py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    {loading ? (
                        <PageLoader></PageLoader>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {safeMeals.map((dish, index) => (
                                <motion.div
                                    key={dish.idMeal || index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.1 }}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#8FABD4]/20"
                                >
                                    {/* Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={dish.strMealThumb || "./food/noimage.jpg"}
                                            alt={dish.strMeal || "Dish"}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-2 left-2  rounded-full p-2">
                                            <span className="bg-[#EFECE3]/90 backdrop-blur-sm text-[#1A1A1A] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                                {dish.strCategory || "Unknown Category"}
                                            </span>
                                        </div>

                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <div className="flex items-start justify-between gap-2 mb-2">
                                            <h3 className="font-display text-2xl font-semibold text-[#1A1A1A]">
                                                {dish.strMeal || "Unnamed Dish"}
                                            </h3>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="font-body text-sm text-[#666] line-clamp-2">
                                                Area: {dish.strArea || "Unknown Area"}
                                            </p>
                                            <div className="pr-2">
                                                <Link to={`/dishes/${dish.idMeal}`} className="text-[#4A70A9] hover:text-[#1A1A1A] transition-colors duration-300">
                                                    <FaArrowRight size={20} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {!loading && safeMeals.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No meals found.</p>
                        </div>
                    )}
                </div>
            </section>
            <ScrollRestoration />
        </main>
    );
};

export default AllDishesPage;
