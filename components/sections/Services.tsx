"use client"

import * as React from "react"
import * as Icons from "lucide-react"
import { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import { services } from "@/data/services"
import { SectionHeader } from "@/components/shared/section-header"
import { fadeUp, viewportOnce } from "@/lib/animations"

export function Services() {
  return (
    <section id="services" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          label="What We Do"
          heading="Services built for outcomes"
          subheading="No open-ended retainers. We solve specific problems and deliver measurable results."
          centered={false}
        />

        {/* Services list — bold alternating rows */}
        <div className="mt-20 divide-y divide-border">
          {services.map((service, index) => {
            const IconComponent =
              (Icons[service.icon as keyof typeof Icons] as LucideIcon | undefined) ??
              Icons.HelpCircle

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group grid grid-cols-1 gap-6 py-10 lg:grid-cols-[60px_1fr_1fr_auto] lg:items-start lg:gap-12"
              >
                {/* Big index number */}
                <span className="text-5xl font-semibold text-border group-hover:text-primary transition-colors duration-300 tabular-nums leading-none select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Title + icon */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border text-primary group-hover:border-primary group-hover:bg-primary/10 transition-colors duration-300">
                    <IconComponent size={18} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight pt-1.5">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                {/* Outcomes */}
                <ul className="space-y-2 min-w-max">
                  {service.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icons.ArrowRight className="h-3 w-3 shrink-0 text-primary" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
