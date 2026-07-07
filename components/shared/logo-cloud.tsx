"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LogoCloudProps {
  className?: string
}

const logos = [
  {
    name: "ACME",
    icon: (
      <>
        <path d="M12 4L2 22h20L12 4zm0 4.5L18.5 20H5.5L12 8.5z" />
        <text x="30" y="21" className="font-semibold tracking-wider text-[14px]">ACME</text>
      </>
    ),
    viewBox: "0 0 120 30",
  },
  {
    name: "NORTHWIND",
    icon: (
      <>
        <path d="M12 2l4 10h-8l4-10zm0 26l-4-10h8l-4 10zM2 12l10-4v8l-10-4zm20 0l-10 4v-8l10 4z" />
        <text x="32" y="21" className="font-semibold tracking-wider text-[14px]">NORTHWIND</text>
      </>
    ),
    viewBox: "0 0 140 30",
  },
  {
    name: "GLOBEX",
    icon: (
      <>
        <circle cx="12" cy="15" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M12 6a9 9 0 00-4 8h8a9 9 0 00-4-8z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="30" y="21" className="font-semibold tracking-wider text-[14px]">GLOBEX</text>
      </>
    ),
    viewBox: "0 0 120 30",
  },
  {
    name: "INITECH",
    icon: (
      <>
        <path d="M3 6h8v8H3V6zm10 10h8v8h-8v-8zm-5-5h8v8H8v-8z" />
        <text x="30" y="21" className="font-semibold tracking-wider text-[14px]">INITECH</text>
      </>
    ),
    viewBox: "0 0 120 30",
  },
  {
    name: "UMBRELLA",
    icon: (
      <>
        <path d="M12 4a10 10 0 0110 10h-9v10a2 2 0 11-2 0v-10H3a10 10 0 0110-10z" />
        <text x="32" y="21" className="font-semibold tracking-wider text-[14px]">UMBRELLA</text>
      </>
    ),
    viewBox: "0 0 130 30",
  },
  {
    name: "APEX",
    icon: (
      <>
        <path d="M6 22L12 4l6 18M8.5 15h7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <text x="30" y="21" className="font-semibold tracking-wider text-[14px]">APEX</text>
      </>
    ),
    viewBox: "0 0 110 30",
  },
]

// Duplicate for seamless loop
const allLogos = [...logos, ...logos]

export function LogoCloud({ className }: LogoCloudProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-muted/30 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-muted/30 to-transparent" />

      <motion.div
        className="flex gap-12 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 28,
          ease: "linear",
        }}
      >
        {allLogos.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex items-center justify-center text-muted-foreground/50 transition-colors hover:text-muted-foreground shrink-0"
          >
            <svg
              className="h-7 w-auto fill-current"
              viewBox={logo.viewBox}
              aria-label={logo.name}
            >
              {logo.icon}
            </svg>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
