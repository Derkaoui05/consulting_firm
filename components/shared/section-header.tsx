"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations"

interface SectionHeaderProps {
  label?: string
  heading: string
  subheading?: string
  centered?: boolean
  /** If true, heading is displayed in massive display size */
  display?: boolean
}

export function SectionHeader({
  label,
  heading,
  subheading,
  centered = true,
  display = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "flex flex-col",
        centered ? "items-center text-center" : "items-start text-left"
      )}
    >
      {label && (
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
        >
          <span className="h-px w-8 bg-primary inline-block" />
          {label}
          <span className="h-px w-8 bg-primary inline-block" />
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={cn(
          "font-semibold tracking-tight",
          label ? "mt-4" : "mt-0",
          display
            ? "text-5xl sm:text-6xl lg:text-7xl"
            : "text-4xl sm:text-5xl"
        )}
      >
        {heading}
      </motion.h2>
      {subheading && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "mt-5 text-lg text-muted-foreground leading-relaxed",
            centered ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {subheading}
        </motion.p>
      )}
    </motion.div>
  )
}
