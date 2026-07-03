import { CaseStudy } from "@/types"

export const caseStudies: CaseStudy[] = [
  {
    client: "B2B SaaS Platform, Series B",
    industry: "SaaS & Cloud",
    challenge: "Faced high customer churn and flatlining expansion revenue due to fragmented customer onboarding workflows and poor product usage tracking.",
    result: "Redesigned customer onboarding flows, integrated usage data into CSM dashboards, and introduced custom pricing expansion triggers.",
    metrics: [
      { label: "Churn Reduction", value: "32%" },
      { label: "Expansion Revenue Growth", value: "48%" },
      { label: "Time-to-Value", value: "-40%" }
    ]
  },
  {
    client: "Healthcare Technology Provider",
    industry: "HealthTech",
    challenge: "High delivery margins were eroded by heavily manual customer deployment and compliance processes, leading to multi-month launch backlogs.",
    result: "Developed standardized playbooks, automated compliance validation, and restructured the implementation engineering organization.",
    metrics: [
      { label: "Delivery Margins", value: "+22%" },
      { label: "Backlog Cleared", value: "95%" },
      { label: "Onboarding Speed", value: "3.5x" }
    ]
  },
  {
    client: "Global Supply Chain & Logistics Firm",
    industry: "Logistics & Supply Chain",
    challenge: "Faced rising overhead costs and operational bottlenecks across multi-hub transport scheduling operations.",
    result: "Implemented an algorithmic route-optimization tool, integrated legacy system APIs, and retrained dispatch managers on real-time analytics.",
    metrics: [
      { label: "Overhead Reduction", value: "18%" },
      { label: "Asset Utilization", value: "+24%" },
      { label: "Annual Cost Savings", value: "$3.8M" }
    ]
  }
]
