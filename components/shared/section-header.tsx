"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations"

interface SectionHeaderProps {
  label?: string
  heading: string
  subheading?: string
  centered?: boolean
}

export function SectionHeader({
  label,
  heading,
  subheading,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "flex flex-col max-w-3xl",
        centered ? "mx-auto items-center text-center" : "items-start text-left"
      )}
    >
      {label && (
        <motion.span
          variants={fadeUp}
          className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={cn(
          "font-semibold tracking-tight text-3xl sm:text-4xl",
          label ? "mt-4" : "mt-0"
        )}
      >
        {heading}
      </motion.h2>
      {subheading && (
        <motion.p variants={fadeUp} className="mt-4 text-lg text-muted-foreground">
          {subheading}
        </motion.p>
      )}
    </motion.div>
  )
}
