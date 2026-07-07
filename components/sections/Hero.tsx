"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { heroStagger, fadeUp } from "@/lib/animations"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Animated ambient background orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-40 h-[500px] w-[500px] rounded-full bg-muted/60 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-muted/40 via-background to-background" />
      </div>

      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
        >
          Strategy &amp; Operations Consulting
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
        >
          Helping ambitious companies
          <span className="block text-muted-foreground">
            grow without the guesswork
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          We partner with leadership teams to fix operational bottlenecks,
          sharpen strategy, and turn data into decisions — typically within
          90 days.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button asChild size="lg" className="gap-2">
            <Link href="#contact">
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#case-studies">See Our Results</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}