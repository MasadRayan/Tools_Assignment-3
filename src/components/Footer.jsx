import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiMail, HiClock } from "react-icons/hi";

const Footer = () => {
    return (
        <footer id="contact" className="bg-[#4A70A9] text-[#EFECE3]">
            {/* Main Footer */}
            <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div>
                        <Link to="/" className="inline-block mb-6">
                            <span className="font-display text-3xl font-bold text-[#EFECE3]">
                                KhanaPina
                            </span>
                        </Link>
                        <p className="font-body text-[#EFECE3]/80 mb-6 leading-relaxed">
                            Where every dish tells a story. Experience the art of fine dining
                            with our carefully crafted seasonal menus.
                        </p>

                        <div className="flex gap-4">
                            {[FaFacebook, FaInstagram, FaTwitter, FaYoutube].map(
                                (Icon, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        className="p-2 bg-[#EFECE3]/10 rounded-full hover:bg-[#8FABD4] hover:text-[#4A70A9] transition-colors"
                                    >
                                        <Icon size={18} />
                                    </a>
                                )
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display text-lg font-semibold text-[#EFECE3] mb-6">
                            Quick Links
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", path: "/" },
                                { name: "Menu", path: "/dishes" },
                                { name: "Contact", path: "#contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="font-body text-[#EFECE3]/80 hover:text-[#EFECE3] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="font-display text-lg font-semibold text-[#EFECE3] mb-6">
                            Opening Hours
                        </h4>
                        <ul className="space-y-4 font-body text-[#EFECE3]/80">
                            {[
                                { day: "Mon - Thu", hours: "11:00 AM - 10:00 PM" },
                                { day: "Fri - Sat", hours: "11:00 AM - 11:00 PM" },
                                { day: "Sunday", hours: "12:00 PM - 9:00 PM" },
                            ].map(({ day, hours }) => (
                                <li key={day} className="flex items-center gap-3">
                                    <HiClock className="text-[#8FABD4]" />
                                    <div>
                                        <p className="font-semibold text-[#EFECE3]">{day}</p>
                                        <p>{hours}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display text-lg font-semibold text-[#EFECE3] mb-6">
                            Contact Us
                        </h4>
                        <ul className="space-y-4 font-body text-[#EFECE3]/80">
                            <li className="flex items-start gap-3">
                                <HiLocationMarker className="text-[#8FABD4] text-xl shrink-0 mt-0.5" />
                                <p>Mousumi R/A, Noyabazar, Chattogram</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <HiPhone className="text-[#8FABD4] text-xl shrink-0" />
                                <a
                                    href="tel:+12125551234"
                                    className="hover:text-[#EFECE3] transition-colors"
                                >
                                    +880 1709341256
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <HiMail className="text-[#8FABD4] text-xl shrink-0" />
                                <a
                                    href="mailto:reservations@KhanaPina.com"
                                    className="hover:text-[#EFECE3] transition-colors"
                                >
                                    masadrayan2002@gmail.com.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#EFECE3]/10">
                <div className="container mx-auto px-4 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="font-body text-sm text-[#EFECE3]/60">
                            © {new Date().getFullYear()} Masad Rayan. All rights
                            reserved.
                        </p>
                        <div className="flex gap-6">
                            <a
                                href="#"
                                className="font-body text-sm text-[#EFECE3]/60 hover:text-[#EFECE3] transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="font-body text-sm text-[#EFECE3]/60 hover:text-[#EFECE3] transition-colors"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
