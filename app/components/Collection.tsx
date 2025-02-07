"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { Star, ZoomIn } from "lucide-react"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "The Burgundy Classic",
    description: "A deep, bold statement. Rich velvet, gold-plated accents, and refined structure.",
    feature: "A timeless color that speaks of confidence and elegance.",
    price: "£1,299",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-SkE9RWPcR8kAFrpRBMDadpxjXPtPnY.png",
  },
  {
    id: 2,
    name: "The Midnight Blue Classic",
    description: "Effortless luxury. A subtle yet striking presence in deep midnight blue.",
    feature: "For those who redefine sophistication in their own way.",
    price: "£1,299",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-cx6McsPJCMUJRgskYOKj3ZZRnxJvr5.png",
  },
  {
    id: 3,
    name: "The Black Classic",
    description: "Understated power. The ultimate in quiet luxury—bold yet restrained.",
    feature: "A staple piece for every wardrobe.",
    price: "£1,299",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ecommerce%20Hand%20Bag%20Product%20Features%20Instagram%20Post%20(2)-3ewGrm89dfeVsXzewoQb9BeK3HapXo.png",
  },
]

export default function Collection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

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
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative group">
                <div className="relative h-80 mb-6 overflow-hidden rounded-lg bg-gradient-to-b from-cream-100 to-cream-200 dark:from-burgundy-800 dark:to-burgundy-900">
                  <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="object-contain w-full h-full transition-all duration-700 transform group-hover:scale-110"
                    style={{
                      filter: hoveredId === product.id ? "contrast(1.1) brightness(1.05)" : "none",
                      willChange: "transform",
                    }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === product.id ? 1 : 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 dark:bg-white/10 transition-opacity duration-300"
                  >
                    <ZoomIn className="w-8 h-8 text-white/90" />
                  </motion.div>
                </div>
                <div className="absolute top-4 right-4">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-gold-500/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                  >
                    <span className="text-burgundy-950 font-semibold">{product.price}</span>
                  </motion.div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-zingsans text-burgundy-800 dark:text-cream-100">{product.name}</h3>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gold-500 text-gold-500 transition-transform duration-300 hover:scale-110"
                    />
                  ))}
                </div>
                <p className="text-burgundy-700 dark:text-cream-200">{product.description}</p>
                <p className="text-burgundy-600 dark:text-cream-300 italic">🔹 {product.feature}</p>
                <div className="pt-4">
                  <Link
                    href={`https://wa.me/447867294989?text=${encodeURIComponent(`Hi, I'd like to order the ${product.name}. How do I proceed?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gold-500 text-burgundy-950 px-6 py-3 text-sm uppercase tracking-widest hover:bg-gold-400 transition-all duration-300 w-full rounded-sm shadow-lg hover:shadow-xl relative overflow-hidden group"
                    >
                      <span className="relative z-10">Secure Yours Now</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

