"use client"

import { useState, useEffect } from "react"
import Hero from "../components/shop/Hero"
import ProductShowcase from "../components/shop/ProductShowcase"
import OrderSection from "../components/shop/OrderSection"
import ReviewsSection from "../components/shop/ReviewsSection"
import FaqSection from "../components/shop/FaqSection"
import FinalCta from "../components/shop/FinalCta"
import Footer from "../components/Footer"
import CustomCursor from "../components/CustomCursor"

export default function ShopPage() {
  const [selectedColor, setSelectedColor] = useState("burgundy")

  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      const SmoothScroll = window.SmoothScroll
      if (SmoothScroll) {
        SmoothScroll({ stepSize: 85, animationTime: 800, accelerationDelta: 30, accelerationMax: 2 })
      }
    }
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Hero selectedColor={selectedColor} />
      <ProductShowcase selectedColor={selectedColor} onColorChange={setSelectedColor} />
      <OrderSection selectedColor={selectedColor} onColorChange={setSelectedColor} />
      <ReviewsSection />
      <FaqSection />
      <FinalCta selectedColor={selectedColor} />
      <Footer />
    </main>
  )
}

