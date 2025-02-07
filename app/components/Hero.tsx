"use client"

import { motion } from "framer-motion"
import { useTheme } from "../hooks/useTheme"
import { Sun, Moon, Instagram } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const { theme, toggleTheme } = useTheme()

  const waitlistMessage = encodeURIComponent(
    "I'd love to join the waitlist for Aurum Haute's next drop! Please keep me updated.",
  )

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="/luxury-bag-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-burgundy-950/80 dark:to-burgundy-950/90 z-10"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative text-center text-white z-20 px-4 max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-hammersmith mb-4 tracking-wider gradient-text">
          Aurum Haute
        </h1>
        <p className="text-xl md:text-2xl mb-4 font-zingrust text-gold-100">For the Modern Woman</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-zingsans mb-12 tracking-wide max-w-3xl mx-auto text-cream-100">
        Luxury velvet handbags crafted for the modern woman who knows her presence is enough.        </h2>
        <Link href={`https://wa.me/447867294989?text=${waitlistMessage}`} target="_blank" rel="noopener noreferrer">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold-500 text-burgundy-950 px-12 py-4 text-lg uppercase tracking-widest hover:bg-gold-400 transition-colors duration-300 rounded-sm hover-grow"
          >
            Join the Waitlist
          </motion.button>
        </Link>
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

