"use client"

import { motion } from "framer-motion"

const features = ["Soft, yet structured.", "Classic, yet modern.", "Refined, yet expressive."]

export default function WhyVelvet() {
  return (
    <section className="py-24 px-4 bg-burgundy-50 dark:bg-burgundy-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-serif mb-8 tracking-wide gradient-text"
        >
          The Texture of Elegance
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl mb-12 font-light text-burgundy-800 dark:text-cream-200 italic"
        >
          "Velvet is bold. It demands attention—without saying a word."
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg mb-12 text-burgundy-700 dark:text-cream-300"
        >
          Aurum Haute embraces texture, richness, and depth. Each bag is designed to feel as luxurious to touch as it is
          to carry.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-burgundy-800 p-6 rounded-lg luxury-shadow hover-lift"
            >
              <p className="text-burgundy-800 dark:text-cream-100 font-serif text-lg">{feature}</p>
            </motion.div>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-burgundy-500 text-white px-12 py-4 text-lg uppercase tracking-widest hover:bg-burgundy-600 transition-colors duration-300 rounded-sm"
        >
          Experience the Craftsmanship
        </motion.button>
      </div>
    </section>
  )
}

