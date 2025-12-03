import { useState } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import useAuth from "../Hooks/useAuth";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/dishes" },
    { name: "Contact", path: "/contact" },
];

const Navbar = () => {
    const { user, loading, logOut } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const handleLogOut = () => {
        logOut();
        setIsOpen(false);
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#EFECE3]/70 border-b border-[#8FABD4]/40 ">
            <div className="px-4 lg:px-8 container mx-auto">
                <div className="flex items-center justify-between h-16 lg:h-20">

                    {/* LOGO */}
                    <Link to="/" className="flex items-center">
                        <span className="text-3xl font-bold text-[#4A70A9]">
                            KhanaPina
                        </span>
                    </Link>

                    {/* DESKTOP NAVIGATION */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) =>
                        (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm uppercase tracking-wider font-medium transition ${location.pathname === link.path
                                    ? "text-[#4A70A9]"
                                    : "text-[#1A1A1A]/80 hover:text-[#4A70A9]"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        )
                        )}
                    </div>

                    {/* CTA BUTTON */}
                    <div className="hidden md:flex items-center">
                        {
                            user ? (<>
                                <div className="flex justify-center items-center gap-3">
                                    <img referrerPolicy="no-referrer" src={user.photoURL} alt={user.displayName} className="h-12 w-12 rounded-full" />
                                    <button onClick={handleLogOut} className="bg-[#4A70A9] text-white px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider shadow-md hover:bg-[#3e5c8d] transition-all">
                                        LogOut
                                    </button>
                                </div>
                            </>) : (<>
                                <div className="flex items-center gap-2">
                                    <Link
                                        to="/login"
                                        className="bg-[#4A70A9] text-white px-6 py-2.5 rounded-full font-semibold text-sm uppercase tracking-wider shadow-md hover:bg-[#3e5c8d] transition-all"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to={'/register'}
                                        className="px-6 py-2.5 rounded-full border border-[#4A70A9] text-[#4A70A9] text-sm font-semibold uppercase tracking-wider hover:bg-[#4A70A9] hover:text-white transition-all"
                                    >
                                        Register
                                    </Link>
                                </div>
                            </>)
                        }
                    </div>

                    {/* MOBILE BUTTON */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-[#1A1A1A]"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden backdrop-blur-xl bg-[#EFECE3]/80 border-t border-[#8FABD4]/40"
                    >
                        <div className="px-4 py-6 flex flex-col gap-4">
                            {navLinks.map((link, index) =>
                            (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: -15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.09 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg text-[#1A1A1A]/90 hover:text-[#4A70A9] transition py-2 font-medium"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            )
                            )}

                            {/* Mobile CTA */}
                            <div className="flex items-center">
                                {
                                    user ? (<>
                                        <div className="flex flex-col mx-auto justify-center items-center gap-3">
                                            <img referrerPolicy="no-referrer" src={user.photoURL} alt={user.displayName} className="h-12 w-12 rounded-full" />
                                            <button onClick={handleLogOut} className="bg-[#4A70A9] text-white px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider shadow-md hover:bg-[#3e5c8d] transition-all">
                                                LogOut
                                            </button>
                                        </div>
                                    </>) : (<>
                                        <div className="flex items-center gap-2">
                                            <Link
                                                to="/login"
                                                className="bg-[#4A70A9] text-white px-6 py-2.5 rounded-full font-semibold text-sm uppercase tracking-wider shadow-md hover:bg-[#3e5c8d] transition-all"
                                            >
                                                Login
                                            </Link>
                                            <Link
                                                to={'/register'}
                                                className="px-6 py-2.5 rounded-full border border-[#4A70A9] text-[#4A70A9] text-sm font-semibold uppercase tracking-wider hover:bg-[#4A70A9] hover:text-white transition-all"
                                            >
                                                Register
                                            </Link>
                                        </div>
                                    </>)
                                }
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
