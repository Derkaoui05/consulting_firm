"use client"

import { motion } from "framer-motion"
import { testimonials } from "@/data/testimonials"
import { SectionHeader } from "@/components/shared/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { staggerGrid, scaleIn, viewportOnce } from "@/lib/animations"

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Testimonials"
          heading="What leadership teams say"
          subheading="We partner with CFOs, COOs, and CEOs to unlock operational efficiency and accelerate performance. Here is their perspective."
        />

        {/* Responsive masonry grid using CSS columns */}
        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3 space-y-6"
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
                variants={scaleIn}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="inline-block w-full break-inside-avoid"
              >
                <Card className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-md">
                  <CardContent className="p-0">
                    {/* Large opening quote icon */}
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="block text-5xl font-serif text-primary/20 leading-none select-none"
                    >
                      &ldquo;
                    </motion.span>

                    <p className="mt-2 text-base text-foreground leading-relaxed italic">
                      {testimonial.quote}
                    </p>

                    <div className="mt-6 flex items-center gap-3">
                      <Avatar className="h-10 w-10 border">
                        <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                        <AvatarFallback>{initials}</AvatarFallback>
                      </Avatar>

                      <div className="flex flex-col text-left">
                        <span className="text-sm font-semibold leading-none text-foreground">
                          {testimonial.name}
                        </span>
                        <span className="mt-1 text-xs text-muted-foreground">
                          {testimonial.title}, {testimonial.company}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
