"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Check } from "lucide-react"
import ImageGallery from "./ImageGallery"

const products = [
  {
    id: 1,
    name: "The Burgundy Classic",
    description:
      "Soft, structured, and effortlessly stylish—crafted with premium velvet and gold-plated accents for a timeless statement.",
    feature: "A timeless color that speaks of confidence and elegance.",
    price: "£399 | ₦650,000",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-sP94bwmrUK3SeWd5U9DAdBVC6fH979.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-KxHTPWGboMdjnWBrlEqks1Z0Hh3vey.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-btH0GhOwhuwOZsas7bHg6nWwTXF8lc.png",
    ],
  },
  {
    id: 2,
    name: "The Midnight Blue Classic",
    description:
      "Soft, structured, and effortlessly stylish—crafted with premium velvet and gold-plated accents for a timeless statement.",
    feature: "For those who redefine sophistication in their own way.",
    price: "£399 | ₦650,000",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-TOU39paxJwoVRyR8fQLEmOKhwXjPYK.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-cHfiQJil7aD5PBLwVHRvp61eWQGPFf.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-rFHxiqriX8miro0u8RWRlcM0cBszCy.png",
    ],
  },
  {
    id: 3,
    name: "The Black Classic",
    description:
      "Soft, structured, and effortlessly stylish—crafted with premium velvet and gold-plated accents for a timeless statement.",
    feature: "A staple piece for every wardrobe.",
    price: "£399 | ₦650,000",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-sgT5bnVGXRTWXcM7S8r12v7TrpNdlB.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-I3KH6cry5jW278q9dXy4DN8WUmj9hB.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-dK70PjivhtcLHiHPREsGr9UrFOmgiJ.png",
    ],
  },
]

export default function Collection() {
  const [selectedProduct, setSelectedProduct] = useState<number>(0)
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{ [key: number]: number }>({})
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [isHovering, setIsHovering] = useState<{ [key: number]: boolean }>({})
  const intervalRefs = useRef<{ [key: number]: NodeJS.Timeout }>({})

  const product = products[selectedProduct]

  const handleMouseEnter = useCallback((productId: number) => {
    setIsHovering((prev) => ({ ...prev, [productId]: true }))

    // Clear any existing interval
    if (intervalRefs.current[productId]) {
      clearInterval(intervalRefs.current[productId])
    }

    // Set new interval with a smoother transition time
    intervalRefs.current[productId] = setInterval(() => {
      setCurrentImageIndexes((prev) => {
        const currentIndex = prev[productId] || 0
        const nextIndex = (currentIndex + 1) % products.find((p) => p.id === productId)!.images.length
        return { ...prev, [productId]: nextIndex }
      })
    }, 2500) // Slower transition (2.5 seconds) for a more elegant experience
  }, [])

  const handleMouseLeave = useCallback((productId: number) => {
    setIsHovering((prev) => ({ ...prev, [productId]: false }))

    // Clear interval when mouse leaves
    if (intervalRefs.current[productId]) {
      clearInterval(intervalRefs.current[productId])
      delete intervalRefs.current[productId]
    }
  }, [])

  const handleProductClick = useCallback((productId: number) => {
    setSelectedProduct(productId - 1)
    setGalleryOpen(true)
  }, [])

  const handleColorChange = (index: number) => {
    setSelectedProduct(index)
  }

  // Clean up all intervals on unmount
  useEffect(() => {
    return () => {
      Object.values(intervalRefs.current).forEach(clearInterval)
    }
  }, [])

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-square"
            onMouseEnter={() => handleMouseEnter(product.id)}
            onMouseLeave={() => handleMouseLeave(product.id)}
            onClick={() => handleProductClick(product.id)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndexes[product.id] || 0}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square rounded-lg overflow-hidden shadow-2xl cursor-pointer"
              >
                <Image
                  src={product.images[currentImageIndexes[product.id] || 0] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {product.images.map((_, imgIndex) => (
                <div
                  key={imgIndex}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    imgIndex === (currentImageIndexes[product.id] || 0) ? "bg-gold-500 scale-125" : "bg-cream-200/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-zingsans text-burgundy-800 dark:text-cream-100">{product.name}</h3>

            <p className="text-lg text-burgundy-700 dark:text-cream-200">{product.description}</p>

            <div className="space-y-4">
              <h4 className="text-lg font-medium text-burgundy-800 dark:text-cream-100">Select Color:</h4>
              <div className="flex gap-4">
                <button
                  onClick={() => handleColorChange(0)}
                  className={`w-12 h-12 rounded-full bg-burgundy-700 relative ${
                    selectedProduct === 0 ? "ring-2 ring-gold-500 ring-offset-2" : ""
                  }`}
                  aria-label="Select Burgundy color"
                >
                  {selectedProduct === 0 && <Check className="absolute inset-0 m-auto text-white" size={16} />}
                </button>
                <button
                  onClick={() => handleColorChange(1)}
                  className={`w-12 h-12 rounded-full bg-blue-900 relative ${
                    selectedProduct === 1 ? "ring-2 ring-gold-500 ring-offset-2" : ""
                  }`}
                  aria-label="Select Midnight Blue color"
                >
                  {selectedProduct === 1 && <Check className="absolute inset-0 m-auto text-white" size={16} />}
                </button>
                <button
                  onClick={() => handleColorChange(2)}
                  className={`w-12 h-12 rounded-full bg-gray-900 relative ${
                    selectedProduct === 2 ? "ring-2 ring-gold-500 ring-offset-2" : ""
                  }`}
                  aria-label="Select Black color"
                >
                  {selectedProduct === 2 && <Check className="absolute inset-0 m-auto text-white" size={16} />}
                </button>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-3xl font-zingsans text-gold-500 mb-2">{product.price}</p>
              <p className="text-burgundy-600 dark:text-cream-300 text-sm">Limited Stock Available</p>
            </div>

            <div className="pt-4">
              <Link href="#order">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gold-500 text-burgundy-950 px-8 py-4 text-lg uppercase tracking-widest hover:bg-gold-400 transition-all duration-300 w-full rounded-sm"
                >
                  Secure Yours Now
                </motion.button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <div className="w-16 h-8 bg-white rounded flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <span className="text-xs font-bold text-gray-800">STRIPE</span>
              </div>
              <div className="w-20 h-8 bg-white rounded flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <span className="text-xs font-bold text-gray-800">PAYSTACK</span>
              </div>
              <div className="w-16 h-8 bg-white rounded flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <span className="text-xs font-bold text-gray-800">PAYPAL</span>
              </div>
              <div className="w-16 h-8 bg-white rounded flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <span className="text-xs font-bold text-gray-800">WISE</span>
              </div>
            </div>
          </motion.div>
        </div>

        {selectedProduct !== null && (
          <ImageGallery
            images={products[selectedProduct].images}
            isOpen={galleryOpen}
            onClose={() => setGalleryOpen(false)}
            currentIndex={currentImageIndexes[products[selectedProduct].id] || 0}
            onIndexChange={(index) =>
              setCurrentImageIndexes((prev) => ({
                ...prev,
                [products[selectedProduct].id]: index,
              }))
            }
          />
        )}
      </div>
    </section>
  )
}

