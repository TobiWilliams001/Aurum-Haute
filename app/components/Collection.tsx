"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import ImageGallery from "./ImageGallery"

const products = [
  {
    id: 1,
    name: "The Burgundy Classic",
    description: "A deep, bold statement. Rich velvet, gold-plated accents, and refined structure.",
    feature: "A timeless color that speaks of confidence and elegance.",
    price: 399,
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-sP94bwmrUK3SeWd5U9DAdBVC6fH979.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-KxHTPWGboMdjnWBrlEqks1Z0Hh3vey.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-btH0GhOwhuwOZsas7bHg6nWwTXF8lc.png",
    ],
  },
  {
    id: 2,
    name: "The Midnight Blue Classic",
    description: "Effortless luxury. A subtle yet striking presence in deep midnight blue.",
    feature: "For those who redefine sophistication in their own way.",
    price: 399,
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-TOU39paxJwoVRyR8fQLEmOKhwXjPYK.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-cHfiQJil7aD5PBLwVHRvp61eWQGPFf.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-rFHxiqriX8miro0u8RWRlcM0cBszCy.png",
    ],
  },
  {
    id: 3,
    name: "The Black Classic",
    description: "Understated power. The ultimate in quiet luxury—bold yet restrained.",
    feature: "A staple piece for every wardrobe.",
    price: 399,
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-sgT5bnVGXRTWXcM7S8r12v7TrpNdlB.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-I3KH6cry5jW278q9dXy4DN8WUmj9hB.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-dK70PjivhtcLHiHPREsGr9UrFOmgiJ.png",
    ],
  },
]

export default function Collection() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null)
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{ [key: number]: number }>({})
  const [galleryOpen, setGalleryOpen] = useState(false)

  const handleMouseEnter = useCallback((productId: number) => {
    const intervalId = setInterval(() => {
      setCurrentImageIndexes((prev) => ({
        ...prev,
        [productId]: (prev[productId] || 0) + 1 < products[productId - 1].images.length ? prev[productId] + 1 : 0,
      }))
    }, 1500) // Change image every 1.5 seconds

    return () => clearInterval(intervalId)
  }, [])

  const handleProductClick = useCallback((productId: number) => {
    setSelectedProduct(productId - 1)
    setGalleryOpen(true)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (galleryOpen) {
        if (e.key === "ArrowLeft") {
          setCurrentImageIndexes((prev) => ({
            ...prev,
            [selectedProduct + 1]:
              prev[selectedProduct + 1] > 0
                ? prev[selectedProduct + 1] - 1
                : products[selectedProduct].images.length - 1,
          }))
        } else if (e.key === "ArrowRight") {
          setCurrentImageIndexes((prev) => ({
            ...prev,
            [selectedProduct + 1]:
              (prev[selectedProduct + 1] || 0) + 1 < products[selectedProduct].images.length
                ? prev[selectedProduct + 1] + 1
                : 0,
          }))
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [galleryOpen, selectedProduct])

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
              <div
                className="relative h-96 mb-6 overflow-hidden rounded-lg cursor-pointer"
                onMouseEnter={() => handleMouseEnter(product.id)}
                onClick={() => handleProductClick(product.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10"></div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndexes[product.id] || 0}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={product.images[currentImageIndexes[product.id] || 0]}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      priority={index === 0}
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 z-20">
                  {product.images.map((_, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`w-1.5 h-1.5 rounded-full ${
                        imgIndex === (currentImageIndexes[product.id] || 0) ? "bg-gold-500" : "bg-cream-200/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <h3 className="text-2xl font-zingsans mb-2 text-burgundy-800 dark:text-cream-100">{product.name}</h3>
              <p className="text-burgundy-700 dark:text-cream-200 mb-4">{product.description}</p>
              <p className="text-burgundy-600 dark:text-cream-300 mb-4">🔹 {product.feature}</p>
              <p className="text-2xl font-zingsans mb-6 text-gold-500">£{product.price}</p>
              <Link
                href={`https://wa.me/447867294989?text=${encodeURIComponent(`Hi, I'd like to order the ${product.name}. How do I proceed?`)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold-500 text-burgundy-950 px-6 py-3 text-sm uppercase tracking-widest hover:bg-gold-400 transition-colors duration-300 w-full rounded-sm font-medium"
                >
                  Secure Yours Now
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProduct !== null && (
        <ImageGallery
          images={products[selectedProduct].images}
          isOpen={galleryOpen}
          onClose={() => setGalleryOpen(false)}
          currentIndex={currentImageIndexes[selectedProduct + 1] || 0}
          onIndexChange={(index) =>
            setCurrentImageIndexes((prev) => ({
              ...prev,
              [selectedProduct + 1]: index,
            }))
          }
        />
      )}
    </section>
  )
}

