// src/components/Testimonials.jsx
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "IT Manager",
    company: "TechNova Inc.",
    quote: "SoftSell made it so easy to turn our unused licenses into revenue. The process was fast and fully transparent.",
  },
  {
    name: "David Kim",
    role: "Procurement Lead",
    company: "ByteBridge Corp.",
    quote: "A seamless experience from start to finish. Highly recommended for anyone looking to resell software assets.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          What Our Customers Say
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="bg-blue-50 p-8 rounded-xl shadow hover:shadow-lg transition"
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-gray-700 italic text-base mb-6">“{t.quote}”</p>
              <div className="text-blue-800 font-bold text-lg">{t.name}</div>
              <div className="text-sm text-gray-600">
                {t.role}, {t.company}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
