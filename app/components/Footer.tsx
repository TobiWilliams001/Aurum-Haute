"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Facebook, TwitterIcon as TikTok, ShieldCheck, Truck, CreditCard } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-burgundy-950 text-white py-12 px-4">
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
            <Link href="https://www.instagram.com/aurumhaute" target="_blank" rel="noopener noreferrer">
              <button
                className="bg-burgundy-500 text-white p-2 rounded-full hover:bg-burgundy-600 transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </button>
            </Link>
            <Link href="https://www.facebook.com/aurumhaute" target="_blank" rel="noopener noreferrer">
              <button
                className="bg-burgundy-500 text-white p-2 rounded-full hover:bg-burgundy-600 transition-colors duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </button>
            </Link>
            <Link href="https://www.tiktok.com/@aurumhaute" target="_blank" rel="noopener noreferrer">
              <button
                className="bg-burgundy-500 text-white p-2 rounded-full hover:bg-burgundy-600 transition-colors duration-300"
                aria-label="Follow us on TikTok"
              >
                <TikTok size={20} />
              </button>
            </Link>
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
              <Link href="#collection" className="text-sm text-cream-300 hover:text-gold-300 transition-colors">
                🔹 Collections
              </Link>
            </li>
            <li>
              <Link href="/craftsmanship" className="text-sm text-cream-300 hover:text-gold-300 transition-colors">
                🔹 About Aurum Haute
              </Link>
            </li>
            <li>
              <Link href="#faq" className="text-sm text-cream-300 hover:text-gold-300 transition-colors">
                🔹 FAQs
              </Link>
            </li>
            <li>
              <Link
                href={`https://wa.me/447867294989?text=${encodeURIComponent("Hi, I'd like to know more about how to order an Aurum Haute piece.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream-300 hover:text-gold-300 transition-colors"
              >
                🔹 Contact Us
              </Link>
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

