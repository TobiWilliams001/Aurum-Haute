"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-burgundy-950 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-serif mb-4 gradient-text">Aurum Haute</h3>
          <p className="text-sm text-cream-300">Luxury redefined for the modern woman.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-serif mb-4 text-gold-400">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-cream-300 hover:text-gold-300 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-cream-300 hover:text-gold-300 transition-colors">
                Collections
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-cream-300 hover:text-gold-300 transition-colors">
                How to Order
              </a>
            </li>
            <li>
              <Link
                href={`https://wa.me/447867294989?text=${encodeURIComponent("Hi, I'd like to secure an Aurum Haute piece. Can you provide more information?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream-300 hover:text-gold-300 transition-colors"
              >
                Secure Your Piece
              </Link>
            </li>
            <li>
              <a href="#" className="text-sm text-cream-300 hover:text-gold-300 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-serif mb-4 text-gold-400">Stay Connected</h4>
          <p className="text-sm text-cream-300 mb-4">Subscribe to our newsletter for exclusive updates and offers.</p>
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

