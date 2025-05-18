// src/components/WhyChooseUs.jsx
import { motion } from "framer-motion";

const features = [
  {
    icon: "✅",
    title: "Verified Buyers",
    description: "We work with trusted buyers to ensure safe and secure transactions.",
  },
  {
    icon: "⚡",
    title: "Instant Quotes",
    description: "Get real-time quotes with our proprietary valuation algorithm.",
  },
  {
    icon: "🔐",
    title: "100% Secure",
    description: "Your license data and information are protected with encryption.",
  },
  {
    icon: "💬",
    title: "24/7 Support",
    description: "Our support team is here for you anytime you need help.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
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

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center text-blue-800 mb-14"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="p-8 rounded-xl border border-blue-100 bg-blue-50 shadow-sm hover:shadow-md transition text-center"
              custom={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
