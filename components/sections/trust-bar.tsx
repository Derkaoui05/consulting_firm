"use client"

import { motion } from "framer-motion"
import { fadeUp, viewportOnce } from "@/lib/animations"
import { LogoCloud } from "@/components/shared/logo-cloud"

export function TrustBar() {
  return (
    <section className="border-y border-border bg-muted/10 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8"
        >
          Trusted by teams at
        </motion.p>
        <LogoCloud />
      </div>
    </section>
  )
}