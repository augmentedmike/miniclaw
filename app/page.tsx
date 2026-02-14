import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { LogosBar } from "@/components/logos-bar"
import { Features } from "@/components/features"
import { Personalize } from "@/components/personalize"
import { HowItWorks } from "@/components/how-it-works"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { Press } from "@/components/press"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogosBar />
      <Features />
      <Personalize />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Press />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
