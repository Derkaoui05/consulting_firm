"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

import { Separator } from "@/components/ui/separator"
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  CONTACT_EMAIL,
  NAV_LINKS,
  SOCIAL_LINKS,
} from "@/lib/constants"
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="w-full border-t bg-muted/30 text-foreground"
    >
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
          {/* Column 1: Logo, description, socials */}
          <motion.div variants={fadeUp} className="flex flex-col items-start gap-4">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              {SITE_NAME.slice(0, 4)}
              <span className="text-muted-foreground">{SITE_NAME.slice(4)}</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              {SITE_DESCRIPTION}. We partner with leadership teams to diagnose bottlenecks,
              implement optimizations, and scale business operations.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <Link
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter Profile"
              >
                <motion.svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </motion.svg>
              </Link>
              <Link
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <motion.svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </motion.svg>
              </Link>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-start gap-4 sm:items-start md:items-center"
          >
            <div className="flex flex-col gap-4 text-left">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground/80">
                Quick Links
              </h3>
              <nav className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div variants={fadeUp} className="flex flex-col items-start gap-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground/80">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0 text-muted-foreground/80" />
                <span>{CONTACT_EMAIL}</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-muted-foreground/80" />
                <span>+1 (555) 382-9400</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-muted-foreground/80" />
                <span>600 Montgomery St, San Francisco, CA</span>
              </div>
            </div>
          </motion.div>
        </div>

        <Separator className="my-10" />

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground"
        >
          <p>
            &copy; {currentYear} {SITE_NAME} Consulting LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
