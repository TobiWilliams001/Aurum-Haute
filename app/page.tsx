"use client"

import Hero from "@/components/Hero"
import BrandPhilosophy from "@/components/BrandPhilosophy"
import Collection from "@/components/Collection"
import WhyVelvet from "@/components/WhyVelvet"
import OrderSection from "@/components/OrderSection"
import SocialProof from "@/components/SocialProof"
import FaqSection from "@/components/FaqSection"
import FinalCta from "@/components/FinalCta"
import Footer from "@/components/Footer"
import CustomCursor from "@/components/CustomCursor"
import ParallaxText from "@/components/ParallaxText"


export default function Home() {
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
      <Hero />
      <ParallaxText baseVelocity={5}>Luxury Redefined</ParallaxText>
      <BrandPhilosophy />
      <Collection />
      <ParallaxText baseVelocity={-5}>Elegance in Every Detail</ParallaxText>
      <OrderSection />
      <WhyVelvet />
      <SocialProof />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  )
}

