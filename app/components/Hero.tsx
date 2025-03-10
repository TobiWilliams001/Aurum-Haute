"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "../hooks/useTheme"
import { Sun, Moon, Instagram } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const { theme, toggleTheme } = useTheme()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const waitlistMessage = encodeURIComponent(
    "I'd love to join the waitlist for Aurum Haute's next drop! Please keep me updated.",
  )

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="/luxury-bag-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative text-center text-white z-20 px-4 max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-hammersmith mb-4 tracking-wider gradient-text">
          Aurum Haute
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-zingsans mb-6 tracking-wide max-w-3xl mx-auto text-cream-100">
          A Statement of Elegance – The Classic Box Bag
        </h2>
        <p className="text-xl md:text-2xl mb-12 font-zingrust text-gold-100">Luxury redefined for the modern woman</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#collection">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-500 text-burgundy-950 px-12 py-4 text-lg uppercase tracking-widest hover:bg-gold-400 transition-all duration-300 rounded-sm hover-grow mb-4 sm:mb-0"
            >
              Shop Now
            </motion.button>
          </Link>

          <Link href="#collection">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-cream-100 text-cream-100 px-8 py-4 text-lg uppercase tracking-widest hover:bg-cream-100/10 transition-all duration-300 rounded-sm"
            >
              See More Details
            </motion.button>
          </Link>
        </div>

        <div className="mt-8 flex justify-center items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="bg-burgundy-500 text-white p-2 rounded-full hover:bg-burgundy-600 transition-colors duration-300"
            aria-label={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <Link href="https://www.instagram.com/aurumhaute" target="_blank" rel="noopener noreferrer">
            <button
              className="bg-burgundy-500 text-white p-2 rounded-full hover:bg-burgundy-600 transition-colors duration-300"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={24} />
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

