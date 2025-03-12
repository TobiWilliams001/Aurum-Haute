"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Instagram, Facebook, ShieldCheck, Truck, CreditCard } from "lucide-react"

export default function Footer() {
  // Smooth scroll to section
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()

    // If it's an external link (starts with http or /), use default behavior
    if (sectionId.startsWith("http") || sectionId.startsWith("/")) {
      window.location.href = sectionId
      return
    }

    // For hash links, scroll to the section
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })

      // Update URL without page reload
      window.history.pushState({}, "", `#${sectionId}`)
    }
  }

  return (
    <footer className="bg-burgundy-950 text-white py-12 px-4" id="footer">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="col-span-1 md:col-span-1"
        >
          <h3 className="text-2xl font-hammersmith mb-4 gradient-text">Aurum Haute</h3>
          <p className="text-sm text-cream-300 font-zingsans">Luxury redefined for the modern woman.</p>
          <div className="mt-4 flex items-center space-x-3">
            <a href="https://www.instagram.com/aurumhaute" target="_blank" rel="noopener noreferrer">
              <button
                className="bg-burgundy-500 text-white p-2 rounded-full hover:bg-burgundy-600 transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </button>
            </a>
            <a href="https://www.facebook.com/aurumhaute" target="_blank" rel="noopener noreferrer">
              <button
                className="bg-burgundy-500 text-white p-2 rounded-full hover:bg-burgundy-600 transition-colors duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </button>
            </a>
            <a href="https://www.tiktok.com/@aurumhaute" target="_blank" rel="noopener noreferrer">
              <button
                className="bg-burgundy-500 text-white p-2 rounded-full hover:bg-burgundy-600 transition-colors duration-300"
                aria-label="Follow us on TikTok"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M19.321 5.562a5.124 5.124 0 0 1-3.414-1.267 5.124 5.124 0 0 1-1.537-3.168h-3.766v13.206c0 .625-.263 1.184-.684 1.591a2.363 2.363 0 0 1-1.68.695c-1.306 0-2.364-1.058-2.364-2.364 0-1.306 1.058-2.364 2.364-2.364.214 0 .421.029.618.084v-3.86a6.175 6.175 0 0 0-1.796-.013c-1.625.233-3.098 1.127-4.028 2.446a6.129 6.129 0 0 0-.64 5.87 6.13 6.13 0 0 0 3.476 3.313c1.249.483 2.58.483 3.829 0a6.13 6.13 0 0 0 3.476-3.313 6.128 6.128 0 0 0 .582-2.39V9.273c1.234.836 2.695 1.33 4.273 1.33v-3.771a5.126 5.126 0 0 1-1.709-.27z" />
                </svg>
              </button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="col-span-1 md:col-span-1"
        >
          <h4 className="text-lg font-zingsans mb-4 text-gold-400">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#collection"
                onClick={(e) => scrollToSection(e, "collection")}
                className="text-sm text-cream-300 hover:text-gold-300 transition-colors"
              >
                🔹 Collections
              </a>
            </li>
            <li>
              <a href="/craftsmanship" className="text-sm text-cream-300 hover:text-gold-300 transition-colors">
                🔹 About Aurum Haute
              </a>
            </li>
            <li>
              <a
                href="#faq"
                onClick={(e) => scrollToSection(e, "faq")}
                className="text-sm text-cream-300 hover:text-gold-300 transition-colors"
              >
                🔹 FAQs
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/447867294989?text=${encodeURIComponent("Hi, I'd like to know more about how to order an Aurum Haute piece.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream-300 hover:text-gold-300 transition-colors"
              >
                🔹 Contact Us
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="col-span-1 md:col-span-1"
        >
          <h4 className="text-lg font-zingsans mb-4 text-gold-400">Shipping & Payment</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Truck size={16} className="text-gold-500" />
              <span className="text-sm text-cream-300">Worldwide Shipping</span>
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-gold-500" />
              <span className="text-sm text-cream-300">Secure Checkout</span>
            </li>
            <li className="flex items-center gap-2">
              <CreditCard size={16} className="text-gold-500" />
              <span className="text-sm text-cream-300">Multiple Payment Options</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="col-span-1 md:col-span-1"
        >
          <h4 className="text-lg font-zingsans mb-4 text-gold-400">Stay Connected</h4>
          <p className="text-sm text-cream-300 mb-4">Be the first to access exclusive releases and offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="bg-burgundy-900 text-white px-4 py-2 rounded-l-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
            <button
              type="submit"
              className="bg-gold-500 text-burgundy-950 px-4 py-2 rounded-r-sm hover:bg-gold-400 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      <div className="mt-12 text-center text-sm text-cream-400">
        &copy; {new Date().getFullYear()} Aurum Haute. All rights reserved.
      </div>
    </footer>
  )
}

