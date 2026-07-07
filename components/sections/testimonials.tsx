"use client"

import { motion } from "framer-motion"
import { testimonials } from "@/data/testimonials"
import { SectionHeader } from "@/components/shared/section-header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { staggerGrid, fadeUp, viewportOnce } from "@/lib/animations"

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-muted/10 py-24 sm:py-32 overflow-hidden"
    >
      {/* Diagonal top */}
      <div
        className="absolute top-0 left-0 right-0 h-16 bg-background -z-0"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 40%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          label="Testimonials"
          heading="What leaders say"
          centered={false}
        />

        {/* Horizontal scroll wrapper on mobile, 3-col grid on desktop */}
        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, idx) => {
            const initials = testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()

            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="group relative border border-border bg-card p-8 transition-colors duration-300 hover:border-primary/40"
              >
                {/* Giant quote mark */}
                <span className="absolute -top-4 left-6 text-7xl font-serif text-primary/15 leading-none select-none">
                  &ldquo;
                </span>

                <p className="relative z-10 text-base text-foreground/90 leading-relaxed mt-4">
                  {testimonial.quote}
                </p>

                <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                  <Avatar className="h-10 w-10 border border-border">
                    <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <span className="block text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {testimonial.title}, {testimonial.company}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
