"use client"

import { motion } from "framer-motion"
import { caseStudies } from "@/data/case-studies"
import { SectionHeader } from "@/components/shared/section-header"
import { Badge } from "@/components/ui/badge"
import { fadeUp, staggerGrid, viewportOnce } from "@/lib/animations"

export function CaseStudies() {
  return (
    <section id="case-studies" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          label="Results"
          heading="Measurable outcomes, delivered"
          subheading="We partner with ambitious teams to drive real financial and operational impact."
          centered={false}
        />

        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-20 grid gap-0 divide-y divide-border lg:grid-cols-3 lg:divide-y-0 lg:divide-x"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.client}
              variants={fadeUp}
              className="group relative px-0 py-10 lg:px-8 lg:py-0 first:pl-0 last:pr-0"
            >
              {/* Industry badge */}
              <Badge
                variant="outline"
                className="rounded-none border-primary/30 bg-primary/5 text-primary text-[10px] uppercase tracking-widest font-semibold"
              >
                {study.industry}
              </Badge>

              {/* Big metrics front and center */}
              <div className="mt-8 flex flex-wrap gap-6">
                {study.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Client */}
              <h3 className="mt-8 text-base font-semibold tracking-tight">
                {study.client}
              </h3>

              {/* Challenge */}
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {study.challenge}
              </p>

              {/* Result */}
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Result: </span>
                  {study.result}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
