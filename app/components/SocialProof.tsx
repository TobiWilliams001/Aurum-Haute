"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Emma S.",
    role: "Fashion Stylist",
    image: "/reviewer-1.jpg",
    text: "Absolutely love the texture and feel of this bag. The burgundy color is even more stunning in person. A must-have luxury piece!",
    rating: 5,
  },
  {
    id: 2,
    name: "Olivia R.",
    role: "Fashion Blogger",
    image: "/reviewer-2.jpg",
    text: "The craftsmanship is impeccable. I've received so many compliments on my Aurum Haute bag. Worth every penny.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah J.",
    role: "Creative Director",
    image: "/reviewer-3.jpg",
    text: "This bag elevates any outfit. The gold accents against the velvet create such a luxurious look. Shipping was fast too!",
    rating: 5,
  },
]

const pressLogos = [
  { id: 1, name: "Vogue", image: "/vogue-logo.png" },
  { id: 2, name: "Elle", image: "/elle-logo.png" },
  { id: 3, name: "Harper's Bazaar", image: "/harpers-bazaar-logo.png" },
]

export default function SocialProof() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: activeIndex * containerRef.current.offsetWidth,
        behavior: "smooth",
      })
    }
  }, [activeIndex])

  return (
    <section className="py-24 px-4 bg-cream-100 dark:bg-burgundy-950">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-hammersmith mb-16 tracking-wide text-center gradient-text"
        >
          Seen. Desired. Admired.
        </motion.h2>

        <div className="relative mb-16">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={prevReview}
              className="p-2 bg-white dark:bg-burgundy-800 rounded-full shadow-lg hover:bg-cream-100 dark:hover:bg-burgundy-700 transition-all duration-300"
              aria-label="Previous review"
            >
              <ChevronLeft className="text-burgundy-800 dark:text-cream-100" size={24} />
            </button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={nextReview}
              className="p-2 bg-white dark:bg-burgundy-800 rounded-full shadow-lg hover:bg-cream-100 dark:hover:bg-burgundy-700 transition-all duration-300"
              aria-label="Next review"
            >
              <ChevronRight className="text-burgundy-800 dark:text-cream-100" size={24} />
            </button>
          </div>

          <div ref={containerRef} className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4 md:px-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-burgundy-900 p-8 rounded-lg shadow-lg max-w-3xl mx-auto"
                  >
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                      <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 bg-cream-200">
                        <Image
                          src={testimonial.image || "/placeholder.svg?height=80&width=80"}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${i < testimonial.rating ? "text-gold-500 fill-gold-500" : "text-gray-300"}`}
                            />
                          ))}
                        </div>

                        <p className="text-lg text-burgundy-700 dark:text-cream-200 italic mb-4">
                          "{testimonial.text}"
                        </p>

                        <div>
                          <p className="font-medium text-burgundy-800 dark:text-cream-100">{testimonial.name}</p>
                          <p className="text-sm text-burgundy-600 dark:text-cream-300">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-gold-500 scale-125" : "bg-burgundy-300 dark:bg-burgundy-700"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-hammersmith text-center text-burgundy-800 dark:text-cream-100 mb-8">
            Customer Photos
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: num * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square rounded-lg overflow-hidden"
              >
                <Image
                  src={`/customer-${num}.jpg`}
                  alt={`Customer photo ${num}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="flex justify-center items-center space-x-12 mt-16"
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

