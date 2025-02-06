"use client"

import { motion } from "framer-motion"

const features = [
  { title: "Exclusivity", description: "Limited, handcrafted pieces." },
  { title: "Velvet Luxury", description: "Not your everyday bag—distinct, bold, timeless." },
  { title: "Modern Design", description: "Designed for the modern woman who knows her presence is enough." },
]

export default function WhyAurumHaute() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl mb-16 font-light tracking-wide"
        >
          Why Aurum Haute?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl mb-4 font-light tracking-wide">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

