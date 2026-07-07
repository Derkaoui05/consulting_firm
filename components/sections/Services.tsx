import * as React from "react"
import * as Icons from "lucide-react"
import { LucideIcon } from "lucide-react"
import { services } from "@/data/services" // wait, let's look at the imports, we shouldn't change the imports of other things. Let's check lines 1-6.
import { SectionHeader } from "@/components/shared/section-header"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function Services() {
  return (
    <section id="services" className="bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Services"
          heading="Expertise built around your business outcomes"
          subheading="We don't sell open-ended advice or boilerplate plans. We deliver specific, measurable solutions to your most pressing growth bottlenecks."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            // Dynamically resolve the Lucide icon component
            const IconComponent = (Icons[service.icon as keyof typeof Icons] as LucideIcon | undefined) ??
  Icons.HelpCircle

            return (
              <Card
                key={service.title}
                className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <CardHeader className="flex flex-row items-center gap-4 p-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-background text-primary">
                    <IconComponent size={24} strokeWidth={1.5} />
                  </div>
                  <CardTitle className="font-semibold tracking-tight text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="mt-4 p-0">
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <Icons.Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
