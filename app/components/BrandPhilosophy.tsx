"use client"

import { motion } from "framer-motion"
import { Diamond, Crown, Sparkles } from "lucide-react"
import Link from "next/link"

const features = [
  {
    title: "Luxury in Every Detail",
    description: "Rich, plush velvet. Impeccable craftsmanship. Designed for those who move with quiet confidence.",
    icon: Diamond,
  },
  {
    title: "Exclusivity, Redefined",
    description: "Each drop is limited—crafted in small batches. No excess. No overproduction. No compromises.",
    icon: Crown,
  },
  {
    title: "Effortless Sophistication",
    description: "From power dressing to casual luxury, an Aurum Haute bag fits seamlessly into your world.",
    icon: Sparkles,
  },
]

export default function BrandPhilosophy() {
  return (
    <section className="py-24 px-4 bg-cream-50 dark:bg-burgundy-900 subtle-pattern">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="elegant-title"
        >
          The Aurum Haute Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl lg:text-2xl mb-16 font-zingsans text-burgundy-800 dark:text-cream-200 max-w-3xl mx-auto"
        >
          More than a bag. A statement. Aurum Haute embodies timeless elegance, subtle confidence, and an uncompromising
          standard of luxury.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="modern-card p-8"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-gold-500" />
              <h3 className="text-xl md:text-2xl font-zingsans mb-4 text-burgundy-800 dark:text-cream-100">
                {feature.title}
              </h3>
              <p className="text-burgundy-700 dark:text-cream-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <Link href="/craftsmanship">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-12 stylish-button">
            Experience the Craftsmanship
          </motion.button>
        </Link>
      </div>
    </section>
  )
}

