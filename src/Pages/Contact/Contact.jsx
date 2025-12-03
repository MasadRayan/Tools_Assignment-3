
import React, { useState, useEffect } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiClipboard } from "react-icons/fi";
import { ScrollRestoration } from "react-router";

const Contact = () => {
  const [copied, setCopied] = useState("");
  useEffect(() => {
    document.title = "Contact";
  }, [])

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 1500);
  };

  return (
    <section className="bg-[#EFECE3]">
      <div className="max-w-6xl mx-auto py-20 px-5 md:mt-20 mt-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contact <span className="text-[#4A70A9]">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SECTION — ABOUT DEVELOPER */}
          <div>
            <div className="flex items-center gap-5">
              <img src="./masad.jpg" alt="Masad Rayan" className="rounded-full border-4 border-[#4A70A9]/30 shadow-lg h-40 w-40" />

              <div>
                <h3 className="text-2xl font-semibold">Masad Rayan</h3>
                <p className="text-[#4A70A9] font-medium">
                  MERN STACK DEVELOPER · PROBLEM SOLVER
                </p>
              </div>
            </div>

            <p className="mt-6 text-gray-900 leading-relaxed">
              A passionate MERN Stack Developer with a focus on creating
              efficient, scalable web applications that deliver exceptional user
              experiences.
            </p>

            <h4 className="mt-5 font-semibold text-lg">Development Philosophy</h4>
            <p className="text-gray-900 mt-2">
              I strive to build solutions that merge logic with creativity—writing
              clean, modular, and scalable code that delivers real value.
            </p>

            {/* SOCIAL LINKS */}
            <div className="flex gap-5 mt-6 text-2xl">
              <a href="https://www.linkedin.com/in/masad-rayan/" target="_blank" className="hover:text-[#4A70A9]">
                <FaLinkedin />
              </a>
              <a href="https://www.facebook.com/masad.rayan.2024" target="_blank" className="hover:text-[#4A70A9]">
                <FaFacebook />
              </a>
              <a href="https://github.com/masadrayan" target="_blank" className="hover:text-[#4A70A9]">
                <FaGithub />
              </a>
            </div>

            {/* CONTACT INFO */}
            <div className="mt-8 space-y-4 text-lg">

              {/* Location */}
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt size={22} />
                <span>Chittagong, Bangladesh</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 relative">
                <FaWhatsapp size={22} />
                <span>+880 1709341256</span>

                <button
                  onClick={() => handleCopy("+880 1709341256")}
                  className="text-gray-400 "
                >
                  <FiClipboard />
                </button>

                <span
                  className={`absolute right-0 text-sm text-green-400 transition-opacity ${copied === "+880 1709341256" ? "opacity-100" : "opacity-0"
                    }`}
                >
                  Copied!
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 relative">
                <MdEmail size={22} />
                <span className="text-sm md:text-base">masadrayan2002@gmail.com</span>

                <button
                  onClick={() => handleCopy("masadrayan2002@gmail.com")}
                  className="text-gray-400 "
                >
                  <FiClipboard />
                </button>

                <span
                  className={`absolute right-0 text-sm text-green-400 transition-opacity ${copied === "masadrayan2002@gmail.com" ? "opacity-100" : "opacity-0"
                    }`}
                >
                  Copied!
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION — CONTACT FORM */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3  border border-gray-700 rounded-lg"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3  border border-gray-700 rounded-lg"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3  border border-gray-700 rounded-lg"
            ></textarea>

            <button className="w-full bg-[#4A70A9] text-white font-semibold py-3 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
        <ScrollRestoration></ScrollRestoration>
      </div>
    </section>
  );
};

export default Contact;