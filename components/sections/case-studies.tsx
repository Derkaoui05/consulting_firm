import { caseStudies } from "@/data/case-studies"
import { SectionHeader } from "@/components/shared/section-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export function CaseStudies() {
  return (
    <section id="case-studies" className="bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Case Studies"
          heading="Measurable outcomes, delivered"
          subheading="We partner with ambitious teams to drive real financial and operational impact. Here is what we have achieved together."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Card
              key={study.client}
              className="flex flex-col justify-between rounded-xl border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div>
                <CardHeader className="items-start gap-3 p-0 space-y-0">
                  <Badge variant="outline" className="rounded-md">
                    {study.industry}
                  </Badge>
                  <h3 className="font-semibold tracking-tight text-lg mt-3">
                    {study.client}
                  </h3>
                </CardHeader>
                
                <CardContent className="mt-4 p-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground font-medium block mb-1">Challenge:</strong>
                    {study.challenge}
                  </p>
                  
                  {/* Metrics chips */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {study.metrics.map((metric) => (
                      <span
                        key={metric.label}
                        className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {metric.value} &mdash; {metric.label}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </div>

              <CardFooter className="mt-6 p-0 border-t pt-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground font-medium block mb-1">Result:</strong>
                  {study.result}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
