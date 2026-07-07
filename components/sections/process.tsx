"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/shared/section-header"
import { staggerContainer, fadeUp, scaleIn, viewportOnce } from "@/lib/animations"

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We begin with a 30-minute discovery call to understand your current challenges, operational bottlenecks, and strategic objectives.",
  },
  {
    number: "02",
    title: "Diagnose",
    description:
      "We conduct a rapid, data-driven audit of your workflows, technology stack, and metrics to identify the highest leverage improvements.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "We partner with your team in high-velocity implementation sprints to deploy tools, optimize processes, and remove bottlenecks.",
  },
  {
    number: "04",
    title: "Measure",
    description:
      "We build unified reporting dashboards to track progress and verify that each optimization delivers positive, long-term outcomes.",
  },
]

export function Process() {
  return (
    <section id="process" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Process"
          heading="A structured path to predictability"
          subheading="No open-ended consulting agreements. We operate in clear, milestone-driven phases designed to get you results fast."
        />

        <div className="relative mt-16">
          {/* Animated connecting line — desktop only */}
          <div className="absolute top-5 left-12 right-12 hidden h-[1px] md:block -z-10 overflow-hidden">
            <motion.div
              className="h-full border-t border-dashed border-border"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-12 sm:grid-cols-1 md:grid-cols-4 md:gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="flex flex-col items-start text-left"
                custom={index}
              >
                {/* Animated step circle */}
                <motion.div
                  variants={scaleIn}
                  whileHover={{ scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-md"
                >
                  {step.number}
                </motion.div>

                <h3 className="mt-6 text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
