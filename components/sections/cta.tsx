"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { contactSchema, type ContactFormValues } from "@/lib/validations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations"

export function CTA() {
  const [isPending, setIsPending] = useState(false)
  const [successMsg, setSuccessMsg] = useState<string | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  })

  async function onSubmit(values: ContactFormValues) {
    setIsPending(true)
    setErrorMsg(null)
    setSuccessMsg(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Something went wrong. Please try again.")
      }

      setSuccessMsg(
        "Thank you! Your message has been sent. A partner will review it and get back to you shortly."
      )
      form.reset()
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Failed to send email. Please check your connection."
      setErrorMsg(errorMessage)
    } finally {
      setIsPending(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-primary py-20 sm:py-28 text-primary-foreground overflow-hidden"
    >
      {/* Animated ambient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary-foreground/5 blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-20 h-[400px] w-[400px] rounded-full bg-primary-foreground/8 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-primary-foreground/4 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center flex flex-col items-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Ready to move faster?
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-lg text-primary-foreground/80">
            Book a 30-minute call. No pitch, no obligation.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                const element = document.getElementById("contact-form-anchor")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Book a Call
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => {
                const element = document.getElementById("contact-form-anchor")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Send a Message
            </Button>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeUp}
            id="contact-form-anchor"
            className="w-full mt-12 text-left bg-primary-foreground/5 border border-primary-foreground/15 rounded-xl p-6 md:p-8 backdrop-blur-sm"
          >
            <AnimatePresence mode="wait">
              {successMsg ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.15 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground"
                  >
                    <Send className="h-5 w-5" />
                  </motion.div>
                  <h3 className="mt-4 text-xl font-semibold">Message Sent</h3>
                  <p className="mt-2 text-sm text-primary-foreground/80 leading-relaxed max-w-md">
                    {successMsg}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-primary-foreground">Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Sarah Jenkins"
                                  className="border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30 focus-visible:border-primary-foreground"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-red-300 font-medium" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-primary-foreground">Email</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="sarah@company.com"
                                  className="border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30 focus-visible:border-primary-foreground"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-red-300 font-medium" />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary-foreground">
                              Company (Optional)
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="ApexFlow Technologies"
                                className="border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30 focus-visible:border-primary-foreground"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-300 font-medium" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary-foreground">Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your operational bottlenecks or strategic goals..."
                                rows={4}
                                className="border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30 focus-visible:border-primary-foreground resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-300 font-medium" />
                          </FormItem>
                        )}
                      />

                      {errorMsg && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="rounded-lg bg-red-500/20 border border-red-500/30 p-3 text-sm text-red-200"
                        >
                          {errorMsg}
                        </motion.div>
                      )}

                      <Button
                        type="submit"
                        variant="secondary"
                        className="w-full font-semibold gap-2 mt-4"
                        disabled={isPending}
                      >
                        {isPending ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>Send Message</>
                        )}
                      </Button>
                    </form>
                  </Form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
