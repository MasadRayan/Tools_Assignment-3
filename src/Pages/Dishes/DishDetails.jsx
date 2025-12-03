import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import {
    FiArrowLeft,
    FiExternalLink,
    FiYoutube,
    FiClock,
    FiMapPin,
    FiTag,
} from "react-icons/fi";
import PageLoader from "../../components/PageLoader";

const DishDetails = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMealDetails = async () => {
            try {
                const res = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
                );
                const data = await res.json();
                setMeal(data.meals?.[0] || null);
            } catch (error) {
                console.error("Error fetching meal details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMealDetails();
    }, [id]);

    const getIngredients = () => {
        if (!meal) return [];
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient && ingredient.trim()) {
                ingredients.push({
                    ingredient: ingredient.trim(),
                    measure: measure?.trim() || "",
                });
            }
        }
        return ingredients;
    };

    const getYoutubeEmbedUrl = (url) => {
        const videoId = url.split("v=")[1]?.split("&")[0];
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    };

    if (loading) {
        return <PageLoader />;
    }

    if (!meal) {
        return (
            <div className="min-h-screen bg-[#F8F8F8]">
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                    <h2 className="font-display text-3xl text-[#4A70A9] mb-4">
                        Dish Not Found
                    </h2>
                    <p className="text-[#4A70A9]/70 mb-6">
                        The dish you're looking for doesn't exist.
                    </p>
                    <Link
                        to="/dishes"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A70A9] text-white rounded-full hover:bg-[#3c5b8a] transition-colors"
                    >
                        <FiArrowLeft />
                        Back to Menu
                    </Link>
                </div>
            </div>
        );
    }

    const ingredients = getIngredients();
    const youtubeEmbed = meal.strYoutube
        ? getYoutubeEmbedUrl(meal.strYoutube)
        : null;

    return (
        <div className="min-h-screen bg-[#F8F8F8]">

            {/* Hero Section */}
            <section className="pt-24 pb-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <Link
                        to="/dishes"
                        className="inline-flex items-center gap-2 text-[#4A70A9]/70 hover:text-[#4A70A9] transition-colors mb-8"
                    >
                        <FiArrowLeft />
                        Back to Menu
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src={meal.strMealThumb}
                                    alt={meal.strMeal}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#4A70A9]/20 rounded-full blur-3xl -z-10" />
                        </motion.div>

                        {/* Details */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col justify-center"
                        >
                            <div className="flex flex-wrap gap-3 mb-4">
                                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#4A70A9]/10 text-[#4A70A9] rounded-full text-sm font-medium">
                                    <FiTag className="text-xs" />
                                    {meal.strCategory}
                                </span>

                                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#4A70A9]/5 text-[#4A70A9] rounded-full text-sm font-medium">
                                    <FiMapPin className="text-xs" />
                                    {meal.strArea}
                                </span>
                            </div>

                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#4A70A9] mb-6">
                                {meal.strMeal}
                            </h1>

                            {meal.strTags && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {meal.strTags.split(",").map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-white border border-[#4A70A9]/20 text-[#4A70A9] rounded-full text-xs"
                                        >
                                            {tag.trim()}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div className="flex flex-wrap gap-4">
                                {meal.strYoutube && (
                                    <a
                                        href={meal.strYoutube}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                                    >
                                        <FiYoutube />
                                        Watch Video
                                    </a>
                                )}

                                {meal.strSource && (
                                    <a
                                        href={meal.strSource}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 border border-[#4A70A9]/30 text-[#4A70A9] rounded-full hover:bg-[#4A70A9]/10 transition-colors"
                                    >
                                        <FiExternalLink />
                                        View Source
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Ingredients Section */}
            <section className="py-12 px-4 bg-[#4A70A9]/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-display text-3xl md:text-4xl text-[#4A70A9] mb-8 flex items-center gap-3">
                            <span className="w-12 h-12 bg-[#4A70A9]/10 rounded-full flex items-center justify-center">
                                <FiClock className="text-[#4A70A9]" />
                            </span>
                            Ingredients
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {ingredients.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="bg-white rounded-2xl p-4 shadow-sm border border-[#4A70A9]/20 hover:shadow-md transition-shadow"
                                >
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={`https://www.themealdb.com/images/ingredients/${item.ingredient}-Small.png`}
                                            alt={item.ingredient}
                                            className="w-12 h-12 object-contain"
                                        />
                                        <div>
                                            <p className="font-medium text-[#4A70A9] text-sm">
                                                {item.ingredient}
                                            </p>
                                            <p className="text-[#4A70A9]/70 text-xs">
                                                {item.measure}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Instructions Section */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-display text-3xl md:text-4xl text-[#4A70A9] mb-8">
                            Instructions
                        </h2>

                        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-[#4A70A9]/20">
                            <div className="prose prose-lg max-w-none text-[#4A70A9]/80 leading-relaxed">
                                {meal.strInstructions.split("\n").map(
                                    (paragraph, index) =>
                                        paragraph.trim() && (
                                            <p key={index} className="mb-4 last:mb-0">
                                                {paragraph}
                                            </p>
                                        )
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* YouTube Video Section */}
            {youtubeEmbed && (
                <section className="py-12 px-4 bg-[#4A70A9]/5">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="font-display text-3xl md:text-4xl text-[#4A70A9] mb-8 flex items-center gap-3">
                                <span className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                                    <FiYoutube className="text-red-500" />
                                </span>
                                Video Tutorial
                            </h2>

                            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                                <iframe
                                    src={youtubeEmbed}
                                    title={`${meal.strMeal} video tutorial`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

        </div>
    );
};

export default DishDetails;
