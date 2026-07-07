"use client"

import { motion } from "framer-motion"
import { LogoCloud } from "@/components/shared/logo-cloud"
import { fadeUp, viewportOnce } from "@/lib/animations"

export function TrustBar() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="border-y bg-muted/30 py-10"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.p
          variants={fadeUp}
          className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground"
        >
          Trusted by teams at
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8">
          <LogoCloud />
        </motion.div>
      </div>
    </motion.section>
  )
}