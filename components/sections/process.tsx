"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/shared/section-header"
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations"

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We begin with a 30-minute discovery call to understand your current challenges, operational bottlenecks, and strategic objectives.",
    tag: "Week 1",
  },
  {
    number: "02",
    title: "Diagnose",
    description:
      "A rapid, data-driven audit of your workflows, technology stack, and metrics to identify the highest-leverage improvements.",
    tag: "Weeks 2–3",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "High-velocity implementation sprints to deploy tools, optimize processes, and remove the bottlenecks killing your margins.",
    tag: "Weeks 4–10",
  },
  {
    number: "04",
    title: "Measure",
    description:
      "We build unified reporting dashboards to verify each optimization delivers positive, long-term, compounding outcomes.",
    tag: "Week 12+",
  },
]

export function Process() {
  return (
    <section
      id="process"
      className="relative bg-muted/10 py-24 sm:py-32 overflow-hidden"
    >
      {/* Diagonal top clip */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-background clip-diagonal-bottom -z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          label="How It Works"
          heading="Four phases. Ninety days."
          centered={false}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-20 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="relative border-l border-border pl-8 pb-12 lg:border-l lg:border-t-0 first:border-l-0 first:pl-0 lg:first:border-l lg:first:pl-8"
            >
              {/* Step number — massive */}
              <span className="block text-[5rem] font-semibold leading-none text-border select-none">
                {step.number}
              </span>

              {/* Tag */}
              <span className="mt-2 inline-block rounded-none border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
                {step.tag}
              </span>

              <h3 className="mt-4 text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Animated connector dot */}
              <motion.div
                className="absolute -left-[5px] top-10 h-2.5 w-2.5 rounded-full bg-primary first:left-auto"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={viewportOnce}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 300 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Diagonal bottom clip */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{ clipPath: "polygon(0 100%, 100% 40%, 100% 100%)" }} />
    </section>
  )
}
