// src/components/HowItWorks.jsx
import { motion } from "framer-motion";

const steps = [
  {
    title: "Upload License",
    description: "Easily and securely upload your unused software license with just a few clicks.",
    icon: "📤",
  },
  {
    title: "Get Valuation",
    description: "We analyze and provide a real-time valuation using our proprietary algorithm.",
    icon: "📈",
  },
  {
    title: "Get Paid",
    description: "Approve the quote and receive payment instantly via your preferred method.",
    icon: "💰",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: "spring",
    },
  }),
};

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-blue-800 mb-14 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 text-center border border-blue-100"
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-5xl mb-5">{step.icon}</div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
