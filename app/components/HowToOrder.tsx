"use client"

import { motion } from "framer-motion"
import { ClipboardList, MessageCircle, Truck } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    title: "Secure your piece",
    description: "Join the waitlist / pre-order before the collection sells out.",
    icon: ClipboardList,
  },
  {
    title: "Personal Confirmation",
    description: "Receive a direct message or email to confirm your order.",
    icon: MessageCircle,
  },
  {
    title: "Luxury Delivered",
    description: "Tracked shipping, luxury packaging, and a seamless experience.",
    icon: Truck,
  },
]

export default function HowToOrder() {
  const preOrderMessage = encodeURIComponent(
    "Hi, I'd like to pre-order an Aurum Haute bag. Can you provide more information?",
  )

  return (
    <section className="py-24 px-4 bg-burgundy-50 dark:bg-burgundy-900 subtle-pattern">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="elegant-title"
        >
          How to Order
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl mb-12 font-light text-burgundy-800 dark:text-cream-200"
        >
          LIMITED RELEASE – ONLY X PIECES AVAILABLE
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="modern-card p-8"
            >
              <step.icon className="w-12 h-12 mx-auto mb-4 text-gold-500" />
              <h3 className="text-2xl font-serif mb-4 text-burgundy-800 dark:text-cream-100">{`Step ${index + 1}: ${step.title}`}</h3>
              <p className="text-burgundy-700 dark:text-cream-200">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <Link href={`https://wa.me/447867294989?text=${preOrderMessage}`} target="_blank" rel="noopener noreferrer">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="stylish-button">
            Pre-Order Now
          </motion.button>
        </Link>
      </div>
    </section>
  )
}

