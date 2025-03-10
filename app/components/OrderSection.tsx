"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, ShieldCheck, Truck, Clock } from "lucide-react"

export default function OrderSection() {
  const [selectedColor, setSelectedColor] = useState("burgundy")
  const [paymentMethod, setPaymentMethod] = useState("stripe")

  const getColorName = (color: string) => {
    switch (color) {
      case "burgundy":
        return "Burgundy"
      case "blue":
        return "Midnight Blue"
      case "black":
        return "Black"
      default:
        return "Burgundy"
    }
  }

  return (
    <section id="order" className="py-24 px-4 bg-white dark:bg-burgundy-900">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-hammersmith mb-12 text-center gradient-text"
        >
          Order & Payment
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-zingsans text-burgundy-800 dark:text-cream-100">Simple Checkout Process</h3>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-burgundy-950 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-burgundy-800 dark:text-cream-100">Choose your color</h4>
                    <div className="flex gap-4 mt-3">
                      <button
                        onClick={() => setSelectedColor("burgundy")}
                        className={`w-10 h-10 rounded-full bg-burgundy-700 relative ${
                          selectedColor === "burgundy" ? "ring-2 ring-gold-500 ring-offset-2" : ""
                        }`}
                      >
                        {selectedColor === "burgundy" && (
                          <Check className="absolute inset-0 m-auto text-white" size={14} />
                        )}
                      </button>
                      <button
                        onClick={() => setSelectedColor("blue")}
                        className={`w-10 h-10 rounded-full bg-blue-900 relative ${
                          selectedColor === "blue" ? "ring-2 ring-gold-500 ring-offset-2" : ""
                        }`}
                      >
                        {selectedColor === "blue" && <Check className="absolute inset-0 m-auto text-white" size={14} />}
                      </button>
                      <button
                        onClick={() => setSelectedColor("black")}
                        className={`w-10 h-10 rounded-full bg-gray-900 relative ${
                          selectedColor === "black" ? "ring-2 ring-gold-500 ring-offset-2" : ""
                        }`}
                      >
                        {selectedColor === "black" && (
                          <Check className="absolute inset-0 m-auto text-white" size={14} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-burgundy-950 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-burgundy-800 dark:text-cream-100">Click "Order Now"</h4>
                    <p className="text-burgundy-600 dark:text-cream-300 mt-1">Select your preferred payment method</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-burgundy-950 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-burgundy-800 dark:text-cream-100">
                      Enter shipping details & payment
                    </h4>
                    <p className="text-burgundy-600 dark:text-cream-300 mt-1">
                      Secure checkout with your preferred method
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-burgundy-950 font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-burgundy-800 dark:text-cream-100">
                      Receive a confirmation email
                    </h4>
                    <p className="text-burgundy-600 dark:text-cream-300 mt-1">
                      Track your order status and shipping updates
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <h3 className="text-2xl font-zingsans text-burgundy-800 dark:text-cream-100">Why Order from Us?</h3>

              <div className="space-y-4">
                <div className="flex gap-3 items-center">
                  <ShieldCheck className="text-gold-500 flex-shrink-0" size={24} />
                  <p className="text-burgundy-700 dark:text-cream-200">Secure Checkout with multiple payment options</p>
                </div>

                <div className="flex gap-3 items-center">
                  <Truck className="text-gold-500 flex-shrink-0" size={24} />
                  <p className="text-burgundy-700 dark:text-cream-200">
                    Fast & Reliable Shipping to UK, Nigeria & International
                  </p>
                </div>

                <div className="flex gap-3 items-center">
                  <Clock className="text-gold-500 flex-shrink-0" size={24} />
                  <p className="text-burgundy-700 dark:text-cream-200">
                    Exclusive Small-Batch Production (Once sold out, it's gone)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-cream-100 dark:bg-burgundy-800 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-zingsans text-burgundy-800 dark:text-cream-100 mb-6">Checkout</h3>

            <div className="space-y-6">
              <div className="p-4 bg-white dark:bg-burgundy-900 rounded-md">
                <h4 className="text-lg font-medium text-burgundy-800 dark:text-cream-100 mb-4">Order Summary</h4>

                <div className="flex justify-between mb-2">
                  <span className="text-burgundy-700 dark:text-cream-200">
                    The Classic Box Bag - {getColorName(selectedColor)}
                  </span>
                  <span className="text-burgundy-800 dark:text-cream-100 font-medium">£399</span>
                </div>

                <div className="flex justify-between mb-2">
                  <span className="text-burgundy-700 dark:text-cream-200">Shipping</span>
                  <span className="text-burgundy-800 dark:text-cream-100 font-medium">£20</span>
                </div>

                <div className="border-t border-burgundy-200 dark:border-burgundy-700 my-3"></div>

                <div className="flex justify-between">
                  <span className="text-burgundy-800 dark:text-cream-100 font-medium">Total</span>
                  <span className="text-burgundy-800 dark:text-cream-100 font-bold">£419</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-medium text-burgundy-800 dark:text-cream-100">Select Payment Method</h4>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setPaymentMethod("stripe")}
                    className={`p-3 rounded-md flex items-center justify-center ${
                      paymentMethod === "stripe"
                        ? "bg-white dark:bg-burgundy-700 ring-2 ring-gold-500"
                        : "bg-cream-200 dark:bg-burgundy-800 hover:bg-white dark:hover:bg-burgundy-700"
                    } transition-all duration-200`}
                  >
                    <span className="font-bold text-burgundy-800 dark:text-cream-100">STRIPE</span>
                  </button>

                  <button
                    onClick={() => setPaymentMethod("paystack")}
                    className={`p-3 rounded-md flex items-center justify-center ${
                      paymentMethod === "paystack"
                        ? "bg-white dark:bg-burgundy-700 ring-2 ring-gold-500"
                        : "bg-cream-200 dark:bg-burgundy-800 hover:bg-white dark:hover:bg-burgundy-700"
                    } transition-all duration-200`}
                  >
                    <span className="font-bold text-burgundy-800 dark:text-cream-100">PAYSTACK</span>
                  </button>

                  <button
                    onClick={() => setPaymentMethod("paypal")}
                    className={`p-3 rounded-md flex items-center justify-center ${
                      paymentMethod === "paypal"
                        ? "bg-white dark:bg-burgundy-700 ring-2 ring-gold-500"
                        : "bg-cream-200 dark:bg-burgundy-800 hover:bg-white dark:hover:bg-burgundy-700"
                    } transition-all duration-200`}
                  >
                    <span className="font-bold text-burgundy-800 dark:text-cream-100">PAYPAL</span>
                  </button>

                  <button
                    onClick={() => setPaymentMethod("wise")}
                    className={`p-3 rounded-md flex items-center justify-center ${
                      paymentMethod === "wise"
                        ? "bg-white dark:bg-burgundy-700 ring-2 ring-gold-500"
                        : "bg-cream-200 dark:bg-burgundy-800 hover:bg-white dark:hover:bg-burgundy-700"
                    } transition-all duration-200`}
                  >
                    <span className="font-bold text-burgundy-800 dark:text-cream-100">WISE</span>
                  </button>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gold-500 text-burgundy-950 px-8 py-4 text-lg uppercase tracking-widest hover:bg-gold-400 transition-all duration-300 w-full rounded-sm font-medium"
              >
                Order Now
              </motion.button>

              <div className="flex items-center justify-center gap-3 pt-2">
                <ShieldCheck className="text-burgundy-500 dark:text-cream-300" size={16} />
                <p className="text-sm text-burgundy-600 dark:text-cream-300">Secure Checkout</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

