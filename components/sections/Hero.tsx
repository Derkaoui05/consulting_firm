"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowDownRight } from "lucide-react"
import Link from "next/link"
import { heroStagger, fadeUp } from "@/lib/animations"

const stats = [
  { value: "200+", label: "Engagements" },
  { value: "94%", label: "Client Retention" },
  { value: "90", label: "Days to Results" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background flex flex-col justify-center">
      {/* Grid pattern background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.97 0 0 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0 0 / 0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated electric glow blob */}
      <motion.div
        className="pointer-events-none absolute right-0 top-0 -z-10 h-[700px] w-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.62 0.21 255 / 0.15) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.62 0.21 255 / 0.08) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="mx-auto w-full max-w-7xl px-6 pt-32 pb-20 lg:px-12">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Label */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Strategy &amp; Operations Consulting
            </span>
          </motion.div>

          {/* Giant headline */}
          <motion.h1
            variants={fadeUp}
            className="text-6xl font-semibold tracking-tight leading-[1.05] sm:text-7xl lg:text-8xl"
          >
            We fix what
            <br />
            slows you{" "}
            <span className="text-outline text-foreground/20 inline-block">
              down.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            We partner with leadership teams to fix operational bottlenecks,
            sharpen strategy, and turn data into decisions — typically within
            90 days.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button asChild size="lg" className="gap-2 rounded-none px-8 py-6 text-base font-semibold">
              <Link href="#contact">
                Book a Free Call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="gap-2 rounded-none px-8 py-6 text-base font-semibold text-muted-foreground hover:text-foreground"
            >
              <Link href="#case-studies">
                See Results
                <ArrowDownRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            className="mt-20 grid grid-cols-3 gap-8 border-t border-border pt-10 max-w-lg"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom diagonal cut */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-muted/20 clip-diagonal-top -z-10" />
    </section>
  )
}