"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "For UK orders, shipping typically takes 2-3 business days. International shipping to Nigeria takes 5-7 business days, and other international destinations take 7-14 business days. All orders include tracking information.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide! We offer express shipping options to most countries. Please note that import duties and taxes may apply depending on your location, and these are the responsibility of the customer.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Stripe, Paystack, PayPal, and Wise transfers. All payment methods are secure and encrypted to ensure your information is protected.",
  },
  {
    question: "What if my order is delayed?",
    answer:
      "In the rare event of a shipping delay, we'll notify you immediately via email with updated tracking information. If your order is significantly delayed, please contact our customer service team, and we'll work to resolve the issue promptly.",
  },
  {
    question: "Can I return or exchange my bag?",
    answer:
      "We accept returns within 14 days of delivery if the item is in its original condition with tags attached. Exchanges are subject to availability. Please note that custom orders are non-refundable.",
  },
  {
    question: "How do I care for my velvet bag?",
    answer:
      "To maintain the luxurious appearance of your velvet bag, keep it away from water and direct sunlight. Gently brush the velvet with a soft cloth to remove dust. For storage, use the dust bag provided and keep it in a cool, dry place.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 px-4 bg-white dark:bg-burgundy-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif mb-12 text-center gradient-text"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-burgundy-200 dark:border-burgundy-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex justify-between items-center bg-cream-50 dark:bg-burgundy-800 hover:bg-cream-100 dark:hover:bg-burgundy-700 transition-colors duration-300"
              >
                <h3 className="text-lg font-medium text-burgundy-800 dark:text-cream-100">{faq.question}</h3>
                <ChevronDown
                  className={`text-burgundy-600 dark:text-cream-300 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white dark:bg-burgundy-900 text-burgundy-700 dark:text-cream-200">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

