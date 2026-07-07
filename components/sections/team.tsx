"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { team } from "@/data/team"
import { SectionHeader } from "@/components/shared/section-header"
import { staggerGrid, fadeUp, viewportOnce } from "@/lib/animations"

export function Team() {
  return (
    <section id="team" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          label="Our Leadership"
          heading="Partner-led engagements"
          subheading="Every client works directly with senior partners who have decades of real-world leadership experience."
          centered={false}
        />

        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-20 grid gap-0 grid-cols-2 lg:grid-cols-4"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              className="group relative overflow-hidden"
            >
              {/* Photo — edge-to-edge, slightly offset on odd items */}
              <div
                className="relative aspect-[3/4] w-full overflow-hidden bg-muted"
              >
                {member.avatarUrl ? (
                  <Image
                    src={member.avatarUrl}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 250px"
                    className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground text-xs">
                    No Image
                  </div>
                )}
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Info — sits below */}
              <div className="p-4 border-r border-b border-border">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold tracking-tight sm:text-base">
                    {member.name}
                  </h3>
                  {member.linkedin && (
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name}'s LinkedIn Profile`}
                    >
                      <motion.svg
                        className="h-3.5 w-3.5 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </motion.svg>
                    </Link>
                  )}
                </div>
                <span className="text-xs text-primary font-semibold uppercase tracking-wider mt-1 block">
                  {member.role}
                </span>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
