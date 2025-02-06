"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Craftsmanship() {
  return (
    <div className="min-h-screen bg-cream-100 dark:bg-burgundy-950 py-24 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <Link href="/" className="text-burgundy-500 dark:text-gold-400 hover:underline mb-8 inline-block">
          &larr; Back to Home
        </Link>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="elegant-title text-center mb-12"
        >
          The Aurum Haute Craftsmanship
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl mb-8 text-burgundy-800 dark:text-cream-200 italic"
        >
          Velvet is bold. It demands attention—without saying a word.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-6 text-burgundy-700 dark:text-cream-300"
        >
          <p>
            Each Aurum Haute bag is handcrafted in small batches, ensuring <strong>quality over quantity</strong>. We
            work with skilled artisans who bring years of expertise to every stitch, shaping velvet into something that
            feels as good as it looks.
          </p>
          <p>
            This isn't fast fashion. No overproduction. No shortcuts.{" "}
            <strong>Just thoughtful design, rich textures, and refined details.</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Luxury in Every Detail</strong> – From the soft, structured form to the subtle gold accents, every
              element is intentional.
            </li>
            <li>
              <strong>Exclusivity</strong> – Once a drop sells out, it's gone. No mass production, no restocks.
            </li>
            <li>
              <strong>Effortless Sophistication</strong> – Designed for the modern woman, whether she's stepping into a
              boardroom or a casual night out.
            </li>
          </ul>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-3xl font-serif mt-12 mb-6 text-burgundy-900 dark:text-cream-100"
        >
          The Essence of Aurum Haute
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="space-y-6 text-burgundy-700 dark:text-cream-300"
        >
          <p>
            Aurum Haute isn't just about handbags. It's about presence.{" "}
            <strong>The quiet confidence of knowing you don't need to say much—because your presence is enough.</strong>
          </p>
          <p>
            Our bags are for women who move with intention. Who embrace elegance without needing permission. Who
            understand that true luxury isn't about excess—it's about the details that matter.
          </p>
          <p>This is more than a bag. It's an experience. A piece you reach for because it feels like you.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <Link
            href={`https://wa.me/447867294989?text=${encodeURIComponent("Hi, I'm interested in Aurum Haute's craftsmanship. Can you tell me more about your current collection?")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="stylish-button">
              Inquire About Our Collection
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

