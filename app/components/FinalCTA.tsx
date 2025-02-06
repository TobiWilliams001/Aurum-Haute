"use client"

import { motion } from "framer-motion"

export default function FinalCTA() {
  return (
    <section className="py-24 px-4 bg-burgundy-950 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-serif mb-8 tracking-wide gradient-text">
          Luxury isn't loud. It's a quiet confidence that speaks volumes.
        </h2>
        <p className="text-xl mb-12 font-light text-cream-100">
          This isn't just another handbag—it's a collector's piece. Each drop is limited. Each bag tells a story.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gold-500 text-burgundy-950 px-12 py-4 text-lg uppercase tracking-widest hover:bg-gold-400 transition-colors duration-300 rounded-sm"
        >
          Secure Your Piece
        </motion.button>
      </motion.div>
    </section>
  )
}

