import FastMarquee from "react-fast-marquee";

const items = [
  "Fine Dining",
  "•",
  "Farm to Table",
  "•",
  "Private Events",
  "•",
  "Wine Pairing",
  "•",
  "Seasonal Menu",
  "•",
  "Chef's Table",
  "•",
  "Organic Ingredients",
  "•",
];

const Marquee = () => {
  return (
    <section className="py-6 bg-[#4A70A9] overflow-hidden overflow-x-hidden">
      <FastMarquee speed={40} gradient={false}>
        <div className="flex items-center gap-10 px-8">
          {items.map((item, index) => (
            <span
              key={index}
              className={`font-display text-xl md:text-2xl whitespace-nowrap 
              ${
                item === "•"
                  ? "text-[#EFECE3]/70 text-3xl" // accent dot subtle
                  : "text-[#EFECE3] tracking-[0.2em] font-semibold uppercase"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </FastMarquee>
    </section>
  );
};

export default Marquee;
