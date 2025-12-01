import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiSearch, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Dishes = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMeals = async (query = "") => {
        setLoading(true);
        try {
            const res = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
            );
            const data = await res.json();

            // Prevent crash when API returns null
            setMeals(Array.isArray(data.meals) ? data.meals : []);
        } catch (error) {
            console.error(error);
            setMeals([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMeals();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchMeals(searchQuery);
    };

    const clearSearch = () => {
        setSearchQuery("");
        fetchMeals();
    };

    return (
        <main className="min-h-screen">

            {/* Hero Section */}
            <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-[#EFECE3]">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block text-[#4A70A9] font-body text-sm uppercase tracking-[0.3em] mb-4"
                    >
                        Our Menu
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-display text-4xl md:text-6xl font-bold text-[#4A70A9] mb-6"
                    >
                        Culinary Creations
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="font-body text-[#6e6e6e] max-w-2xl mx-auto"
                    >
                        Explore our carefully curated selection of dishes from around the world.
                    </motion.p>
                </div>
            </section>

            {/* Search Section */}
            <section className="py-8 bg-white border-b sticky top-16 lg:top-20 z-40">
                <div className="container mx-auto px-4 lg:px-8">
                    <form
                        onSubmit={handleSearch}
                        className="flex items-center justify-center gap-3 max-w-xl mx-auto"
                    >
                        <div className="relative flex-1">
                            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search for a meal..."
                                className="w-full pl-12 pr-10 py-3 rounded-full bg-[#EFECE3] text-[#4A70A9] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4A70A9] transition-all"
                            />
                            {searchQuery && (
                                <button
                                    type="button"
                                    onClick={clearSearch}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition-colors"
                                >
                                    <HiX />
                                </button>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="px-6 py-3 rounded-full bg-[#4A70A9] text-white font-body text-sm uppercase tracking-wider hover:bg-[#3c5d8b] transition-colors"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </section>

            {/* Meals Grid */}
            <section className="py-12 lg:py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    {loading ? (
                        // Skeleton Loading
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="bg-[#EFECE3] rounded-2xl animate-pulse">
                                    <div className="h-64 bg-[#d9d6cc]" />
                                    <div className="p-6 space-y-3">
                                        <div className="h-6 bg-[#d9d6cc] rounded w-3/4" />
                                        <div className="h-4 bg-[#d9d6cc] rounded w-1/2" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={searchQuery}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                            >
                                {meals.map((meal, index) => (
                                    <motion.div
                                        key={meal.idMeal}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        className="group bg-[#EFECE3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                                    >
                                        {/* Image */}
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                src={meal.strMealThumb}
                                                alt={meal.strMeal}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />

                                            <div className="absolute top-4 left-4">
                                                <span className="bg-white/80 px-3 py-1 rounded-full text-xs text-[#4A70A9] uppercase">
                                                    {meal.strCategory}
                                                </span>
                                            </div>

                                            <div className="absolute top-4 right-4">
                                                <span className="bg-[#4A70A9]/90 text-white px-3 py-1 rounded-full text-xs">
                                                    {meal.strArea}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="font-display text-xl font-semibold text-[#4A70A9] mb-4">
                                                {meal.strMeal}
                                            </h3>

                                            <Link
                                                to={`/meals/${meal.idMeal}`}
                                                className="inline-block px-6 py-2 rounded-full bg-[#4A70A9] text-white text-sm uppercase hover:bg-[#3c5d8b] transition-colors"
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    )}

                    {!loading && meals.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No meals found. Try another search.</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Dishes;
