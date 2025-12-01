import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    q: "What makes your dishes special?",
    a: "Every dish is crafted with fresh ingredients, authentic techniques, and attention to detail to give you a memorable culinary experience.",
  },
  {
    q: "Do you offer reservations?",
    a: "Yes, we offer table reservations. You can book directly through our website or contact our team for special requests.",
  },
  {
    q: "Are there vegan or gluten-free options?",
    a: "Absolutely. We have a curated selection of vegan, vegetarian, and gluten-free dishes prepared with equal care and creativity.",
  },
  {
    q: "Can I host private events?",
    a: "Yes! We offer private event setups for birthdays, corporate dinners, and intimate gatherings. Custom menus are available.",
  },
  {
    q: "Do you provide home delivery?",
    a: "We provide delivery in selected zones through our official partners. More zones are being added soon.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-20 lg:py-20 bg-[#EFECE3]">
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
            Support
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Frequently Asked Questions
          </h2>

          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Find quick answers about our service, dining experience, and
            reservation process.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-border rounded-2xl p-6 bg-[#EFECE3]/60 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="font-display text-lg font-semibold text-foreground">
                  {item.q}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="font-body text-muted-foreground">
                  {item.a}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
