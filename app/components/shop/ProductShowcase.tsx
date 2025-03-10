"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

interface ProductShowcaseProps {
  selectedColor: string
  onColorChange: (color: string) => void
}

const products = {
  burgundy: {
    name: "The Burgundy Classic",
    description:
      "Soft, structured, and effortlessly stylish—crafted with premium velvet and gold-plated accents for a timeless statement.",
    price: "£399 | ₦650,000",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-sP94bwmrUK3SeWd5U9DAdBVC6fH979.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-KxHTPWGboMdjnWBrlEqks1Z0Hh3vey.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-btH0GhOwhuwOZsas7bHg6nWwTXF8lc.png",
    ],
  },
  blue: {
    name: "The Midnight Blue Classic",
    description:
      "Soft, structured, and effortlessly stylish—crafted with premium velvet and gold-plated accents for a timeless statement.",
    price: "£399 | ₦650,000",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-TOU39paxJwoVRyR8fQLEmOKhwXjPYK.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-cHfiQJil7aD5PBLwVHRvp61eWQGPFf.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-rFHxiqriX8miro0u8RWRlcM0cBszCy.png",
    ],
  },
  black: {
    name: "The Black Classic",
    description:
      "Soft, structured, and effortlessly stylish—crafted with premium velvet and gold-plated accents for a timeless statement.",
    price: "£399 | ₦650,000",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-sgT5bnVGXRTWXcM7S8r12v7TrpNdlB.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-I3KH6cry5jW278q9dXy4DN8WUmj9hB.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-dK70PjivhtcLHiHPREsGr9UrFOmgiJ.png",
    ],
  },
}

export default function ProductShowcase({ selectedColor, onColorChange }: ProductShowcaseProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const product = products[selectedColor as keyof typeof products]

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isHovering) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
      }, 2000)
    }

    return () => clearInterval(interval)
  }, [isHovering, product.images.length])

  return (
    <section id="product" className="py-24 px-4 bg-cream-50 dark:bg-burgundy-950">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif mb-6 text-center gradient-text"
        >
          The Classic Box Bag
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-square"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square rounded-lg overflow-hidden shadow-2xl"
              >
                <Image
                  src={product.images[currentImageIndex] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {product.images.map((_, imgIndex) => (
                <button
                  key={imgIndex}
                  onClick={() => setCurrentImageIndex(imgIndex)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    imgIndex === currentImageIndex ? "bg-gold-500 scale-125" : "bg-cream-200/50"
                  }`}
                  aria-label={`View image ${imgIndex + 1}`}
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
            <h3 className="text-3xl font-serif text-burgundy-800 dark:text-cream-100">{product.name}</h3>

            <p className="text-lg text-burgundy-700 dark:text-cream-200">{product.description}</p>

            <div className="space-y-4">
              <h4 className="text-lg font-medium text-burgundy-800 dark:text-cream-100">Select Color:</h4>
              <div className="flex gap-4">
                <button
                  onClick={() => onColorChange("burgundy")}
                  className={`w-12 h-12 rounded-full bg-burgundy-700 relative ${
                    selectedColor === "burgundy" ? "ring-2 ring-gold-500 ring-offset-2" : ""
                  }`}
                  aria-label="Select Burgundy color"
                >
                  {selectedColor === "burgundy" && <Check className="absolute inset-0 m-auto text-white" size={16} />}
                </button>
                <button
                  onClick={() => onColorChange("blue")}
                  className={`w-12 h-12 rounded-full bg-blue-900 relative ${
                    selectedColor === "blue" ? "ring-2 ring-gold-500 ring-offset-2" : ""
                  }`}
                  aria-label="Select Midnight Blue color"
                >
                  {selectedColor === "blue" && <Check className="absolute inset-0 m-auto text-white" size={16} />}
                </button>
                <button
                  onClick={() => onColorChange("black")}
                  className={`w-12 h-12 rounded-full bg-gray-900 relative ${
                    selectedColor === "black" ? "ring-2 ring-gold-500 ring-offset-2" : ""
                  }`}
                  aria-label="Select Black color"
                >
                  {selectedColor === "black" && <Check className="absolute inset-0 m-auto text-white" size={16} />}
                </button>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-3xl font-serif text-gold-500 mb-2">{product.price}</p>
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
              <Image
                src="/stripe-logo.svg"
                alt="Stripe"
                width={60}
                height={30}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/paystack-logo.svg"
                alt="Paystack"
                width={80}
                height={30}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/paypal-logo.svg"
                alt="PayPal"
                width={80}
                height={30}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/wise-logo.svg"
                alt="Wise"
                width={60}
                height={30}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

