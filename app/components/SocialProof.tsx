"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const testimonials = [
  { id: 1, text: "Aurum Haute redefines luxury. Their bags are a work of art.", author: "Emma S., Fashion Stylist" },
  {
    id: 2,
    text: "The epitome of understated elegance. A must-have for any fashion enthusiast.",
    author: "Olivia R., Fashion Blogger",
  },
]

const pressLogos = [
  { id: 1, name: "Vogue", image: "/vogue-logo.png" },
  { id: 2, name: "Elle", image: "/elle-logo.png" },
  { id: 3, name: "Harper's Bazaar", image: "/harpers-bazaar-logo.png" },
]

export default function SocialProof() {
  return (
    <section className="py-24 px-4 bg-cream-100">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-serif mb-16 tracking-wide text-center gradient-text"
        >
          Seen. Desired. Admired.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg luxury-shadow hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="mb-4 italic text-lg text-burgundy-800">&ldquo;{testimonial.text}&rdquo;</p>
              <p className="text-sm text-burgundy-600">- {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="flex justify-center items-center space-x-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {pressLogos.map((logo) => (
            <Image
              key={logo.id}
              src={logo.image || "/placeholder.svg"}
              alt={logo.name}
              width={100}
              height={50}
              className="opacity-50 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

