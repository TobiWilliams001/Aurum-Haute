"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function FinalCta() {
  const [stockCount, setStockCount] = useState(12)
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 8,
    minutes: 45,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds -= 1
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes -= 1
          } else {
            minutes = 59
            if (hours > 0) {
              hours -= 1
            } else {
              hours = 23
              if (days > 0) {
                days -= 1
              }
            }
          }
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 px-4 bg-burgundy-950 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-hammersmith mb-6 tracking-wide text-gold-400"
        >
          Secure Yours Before This Drop Sells Out
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-cream-100 mb-8"
        >
          The Classic Box Bag is a limited edition piece. Once sold out, restocks take 6+ weeks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-lg text-gold-300 mb-2">Only {stockCount} Left in Stock!</p>

          <div className="flex justify-center gap-4 text-center">
            <div className="bg-burgundy-900 p-3 rounded-lg w-20">
              <div className="text-2xl font-bold text-white">{timeLeft.days}</div>
              <div className="text-xs text-cream-300">Days</div>
            </div>

            <div className="bg-burgundy-900 p-3 rounded-lg w-20">
              <div className="text-2xl font-bold text-white">{timeLeft.hours}</div>
              <div className="text-xs text-cream-300">Hours</div>
            </div>

            <div className="bg-burgundy-900 p-3 rounded-lg w-20">
              <div className="text-2xl font-bold text-white">{timeLeft.minutes}</div>
              <div className="text-xs text-cream-300">Minutes</div>
            </div>

            <div className="bg-burgundy-900 p-3 rounded-lg w-20">
              <div className="text-2xl font-bold text-white">{timeLeft.seconds}</div>
              <div className="text-xs text-cream-300">Seconds</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="#collection">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-500 text-burgundy-950 px-12 py-5 text-xl uppercase tracking-widest hover:bg-gold-400 transition-all duration-300 rounded-sm font-medium"
            >
              Buy Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
