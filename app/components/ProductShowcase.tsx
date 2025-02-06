"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

const products = [
  { id: 1, name: "The Classic", image: "/classic.jpg" },
  { id: 2, name: "The Minimalist", image: "/minimalist.jpg" },
  { id: 3, name: "The Statement", image: "/statement.jpg" },
]

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProduct(product)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-center mt-6 text-2xl font-light tracking-wide">{product.name}</h3>
            </motion.div>
          ))}
        </motion.div>
        {selectedProduct && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-16 text-center">
            <h3 className="text-3xl mb-6 font-light tracking-wide">{selectedProduct.name}</h3>
            <p className="mb-8 text-gray-700">Handcrafted from the finest velvet. Limited pieces available.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors duration-300"
            >
              Secure yours before the drop
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

