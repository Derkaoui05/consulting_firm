"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { faqItems } from "@/data/faq"
import { SectionHeader } from "@/components/shared/section-header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations"

export function FAQ() {
  return (
    <section id="faq" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="FAQ"
          heading="Frequently asked questions"
          subheading="Everything you need to know about our engagements, pricing, and how we deliver results."
        />

        <div className="mx-auto mt-16 max-w-3xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, idx) => (
                <motion.div key={idx} variants={fadeUp}>
                  <AccordionItem value={`item-${idx}`} className="border-b">
                    <AccordionTrigger className="text-left font-medium py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-center text-sm text-muted-foreground"
          >
            Still have questions?{" "}
            <Link
              href="#contact"
              className="font-medium text-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              Book a call
            </Link>{" "}
            to speak directly with a partner.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
