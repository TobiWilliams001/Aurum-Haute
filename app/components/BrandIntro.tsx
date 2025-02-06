"use client"

import { motion } from "framer-motion"

export default function BrandIntro() {
  return (
    <section className="py-24 px-4 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl mb-8 font-light tracking-wide">Introducing Aurum Haute</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Not just a bag. A piece designed for the woman who appreciates understated luxury. Our velvet handbags bring
          together craftsmanship, elegance, and exclusivity—crafted for those who move with quiet confidence.
        </p>
      </motion.div>
    </section>
  )
}

