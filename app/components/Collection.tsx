"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "The Burgundy Classic",
    description: "A deep, bold statement. Rich velvet, gold-plated accents, and refined structure.",
    feature: "A timeless color that speaks of confidence and elegance.",
    image: "/burgundy-classic.jpg",
  },
  {
    id: 2,
    name: "The Midnight Blue Classic",
    description: "Effortless luxury. A subtle yet striking presence in deep midnight blue.",
    feature: "For those who redefine sophistication in their own way.",
    image: "/midnight-blue-classic.jpg",
  },
  {
    id: 3,
    name: "The Black Classic",
    description: "Understated power. The ultimate in quiet luxury—bold yet restrained.",
    feature: "A staple piece for every wardrobe.",
    image: "/black-classic.jpg",
  },
]

export default function Collection() {
  return (
    <section id="collection" className="py-24 px-4 bg-cream-50 dark:bg-burgundy-950">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-hammersmith mb-6 tracking-wide text-center gradient-text"
        >
          The Collection
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl mb-16 font-zingsans text-center text-burgundy-800 dark:text-cream-200"
        >
          🔹 One Signature Design, Three Timeless Colors.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-burgundy-900 p-8 rounded-lg luxury-shadow hover-lift"
            >
              <div className="relative h-80 mb-6 overflow-hidden rounded-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  layout="responsive"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-zingsans mb-2 text-burgundy-800 dark:text-cream-100">{product.name}</h3>
              <p className="text-burgundy-700 dark:text-cream-200 mb-4">{product.description}</p>
              <p className="text-burgundy-600 dark:text-cream-300 mb-6">🔹 {product.feature}</p>
              <Link
                href={`https://wa.me/447867294989?text=${encodeURIComponent(`Hi, I'd like to order the ${product.name}. How do I proceed?`)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold-500 text-burgundy-950 px-6 py-2 text-sm uppercase tracking-widest hover:bg-gold-400 transition-colors duration-300 w-full rounded-sm"
                >
                  Secure Yours Now
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

