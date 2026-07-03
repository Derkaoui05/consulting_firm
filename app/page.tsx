import { Hero } from "@/components/sections/hero"
import { TrustBar } from "@/components/sections/trust-bar"
import { Services } from "@/components/sections/services"
import { Process } from "@/components/sections/process"
import { CaseStudies } from "@/components/sections/case-studies"
import { Testimonials } from "@/components/sections/testimonials"
import { Team } from "@/components/sections/team"
import { FAQ } from "@/components/sections/faq"
import { CTA } from "@/components/sections/cta"

export default function Page() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <CaseStudies />
      <Testimonials />
      <Team />
      <FAQ />
      <CTA />
    </main>
  )
}

