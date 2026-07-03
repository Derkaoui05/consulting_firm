# AGENT.md — Consulting Firm Landing Page

## Project Overview

A landing page for a professional consulting firm built with Next.js (App Router),
shadcn/ui, and Tailwind CSS. The goal is a clean, minimal, high-credibility design
— no flashy animations, no gimmicks. Think McKinsey meets linear.app.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict)
- **UI Components:** shadcn/ui
- **Styling:** Tailwind CSS v4
- **Icons:** lucide-react
- **Form handling:** react-hook-form + zod
- **Email:** Resend (via API route)

---

## Project Structure
consulting-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── api/
│   │       └── contact/route.ts
│   ├── components/
│   │   ├── ui/                    ← shadcn (do not touch)
│   │   ├── sections/
│   │   │   ├── hero.tsx           ✅ done
│   │   │   ├── trust-bar.tsx      ✅ done
│   │   │   ├── services.tsx       ← build this
│   │   │   ├── process.tsx        ← build this
│   │   │   ├── case-studies.tsx   ← build this
│   │   │   ├── testimonials.tsx   ← build this
│   │   │   ├── team.tsx           ← build this
│   │   │   ├── faq.tsx            ← build this
│   │   │   └── cta.tsx            ← build this
│   │   ├── layout/
│   │   │   ├── navbar.tsx         ✅ done
│   │   │   └── footer.tsx         ← build this
│   │   └── shared/
│   │       ├── section-header.tsx ← build this
│   │       └── logo-cloud.tsx     ← build this
│   ├── data/
│   │   ├── services.ts            ← create with mock data
│   │   ├── testimonials.ts        ← create with mock data
│   │   ├── faq.ts                 ← create with mock data
│   │   └── team.ts                ← create with mock data
│   ├── lib/
│   │   ├── utils.ts               ✅ exists (shadcn cn helper)
│   │   ├── constants.ts           ← create
│   │   └── validations.ts         ← create (zod contact schema)
│   └── types/
│       └── index.ts               ← create

---

## shadcn Components to Install

Run these before building if not already installed:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add sheet
npx shadcn@latest add accordion
npx shadcn@latest add badge
npx shadcn@latest add separator
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add label
npx shadcn@latest add form
npx shadcn@latest add avatar
```

---

## Design Tokens & Style Rules

These rules apply across ALL components. Never deviate from them.

### Colors
- Use only Tailwind semantic tokens: `background`, `foreground`, `muted`,
  `muted-foreground`, `border`, `primary`, `primary-foreground`
- No hardcoded colors (no `text-gray-500`, use `text-muted-foreground`)
- Backgrounds alternate: `bg-background` → `bg-muted/30` → `bg-background` per section

### Typography
- Headings: `font-semibold tracking-tight` (never `font-bold`)
- Body text: `text-muted-foreground` for secondary content
- Section labels: `text-xs font-medium uppercase tracking-wider text-muted-foreground`

### Spacing
- All sections: `py-20 sm:py-28`
- All section inner containers: `mx-auto max-w-6xl px-4 sm:px-6 lg:px-8`
- Heading → subheading gap: `mt-4`
- Heading → content gap: `mt-12` or `mt-16`

### Cards
- Use `rounded-xl border bg-card p-6` pattern (shadcn Card)
- Hover: `transition-shadow hover:shadow-md` only — no scale transforms

### Buttons
- Primary CTA: `<Button size="lg">` with `gap-2` and a lucide icon
- Secondary CTA: `<Button variant="outline" size="lg">`
- No custom button colors — use default shadcn theming

---

## Shared Components to Build First

### `components/shared/section-header.tsx`

A reusable header used at the top of every section.

```tsx
interface SectionHeaderProps {
  label?: string      // small uppercase label above heading
  heading: string     // main h2
  subheading?: string // paragraph below heading
  centered?: boolean  // default true
}
```

Usage example:
```tsx
<SectionHeader
  label="What we do"
  heading="Services built around your outcomes"
  subheading="We don't sell retainers. We solve problems."
/>
```

---

## Types — `src/types/index.ts`

Define and export these interfaces:

```ts
export interface Service {
  icon: string           // lucide icon name as string
  title: string
  description: string
  outcomes: string[]     // 2-3 bullet outcomes
}

export interface Testimonial {
  quote: string
  name: string
  title: string
  company: string
  avatarUrl?: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  avatarUrl?: string
  linkedin?: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface CaseStudy {
  client: string          // can be anonymized e.g. "SaaS company, Series B"
  industry: string
  challenge: string
  result: string
  metrics: {
    label: string
    value: string
  }[]
}
```

---

## Data Files — use realistic mock data

### `src/data/services.ts`
Export an array of 5 `Service` objects. Suggested services:
- Strategy & Growth
- Operational Efficiency
- Financial Advisory
- Organizational Design
- Digital Transformation

### `src/data/testimonials.ts`
Export an array of 6 `Testimonial` objects. Use realistic job titles like
"CFO", "VP of Operations", "CEO", "Head of Strategy". Use placeholder
avatars from `https://i.pravatar.cc/100?img=<n>` for `avatarUrl`.

### `src/data/team.ts`
Export an array of 4 `TeamMember` objects. Senior titles (Partner, Managing
Director, Principal). Use `https://i.pravatar.cc/200?img=<n>` for avatars.

### `src/data/faq.ts`
Export an array of 8 `FAQItem` objects. Realistic consulting FAQ questions:
- How long does an engagement typically take?
- How do you price your services?
- Do you work with early-stage startups?
- What industries do you specialize in?
- How do we get started?
- Do you offer ongoing support after the engagement?
- What information do you need from us to begin?
- Can you work with our existing team?

---

## Sections to Build

### 1. `components/sections/services.tsx`

- Section background: `bg-muted/30`
- Layout: `SectionHeader` at top, then a 2-column grid on md+, 1-column on mobile
- Each service is a shadcn `Card` with:
  - lucide icon (rendered dynamically from icon name using a map)
  - Title + description
  - Outcomes listed with a `Check` icon from lucide in `text-primary`
- No CTA inside this section — it's purely informational

### 2. `components/sections/process.tsx`

- Section background: `bg-background`
- Layout: `SectionHeader` at top, then a horizontal stepper on desktop,
  vertical list on mobile
- 4 steps: **Discover → Diagnose → Execute → Measure**
- Each step: step number in a circle, title, short description
- Connect steps with a dashed horizontal line on desktop (CSS only, no libs)
- Step number circle: `bg-primary text-primary-foreground rounded-full w-10 h-10`

### 3. `components/sections/case-studies.tsx`

- Section background: `bg-muted/30`
- Layout: `SectionHeader` at top, then a 3-column grid (1-col mobile, 2-col sm, 3-col lg)
- Each case study card:
  - Industry badge (shadcn `Badge` variant outline)
  - Client description (anonymized)
  - Challenge paragraph
  - Metrics row: 2-3 stat chips showing value + label (e.g. "38% — Cost Reduction")
  - Result paragraph at bottom
- Metrics chips: `rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary`

### 4. `components/sections/testimonials.tsx`

- Section background: `bg-background`
- Layout: `SectionHeader` at top, then a responsive masonry-style grid using
  CSS columns: `columns-1 sm:columns-2 lg:columns-3 gap-6`
- Each testimonial is a `Card` with:
  - A large opening `"` quote character in `text-4xl text-primary/20`
  - Quote text
  - Bottom row: `Avatar` + name + title + company
- Use shadcn `Avatar` with `AvatarImage` and `AvatarFallback`

### 5. `components/sections/team.tsx`

- Section background: `bg-muted/30`
- Layout: `SectionHeader` + 4-column grid (2-col mobile, 4-col lg)
- Each member card (NOT a shadcn Card, just a plain div):
  - Square avatar with `rounded-xl object-cover`
  - Name in `font-semibold`
  - Role in `text-sm text-muted-foreground`
  - Short bio
  - LinkedIn icon link (lucide `Linkedin`) if provided

### 6. `components/sections/faq.tsx`

- Section background: `bg-background`
- Layout: `SectionHeader` + max-w-3xl centered container
- Use shadcn `Accordion` with `type="single"` and `collapsible`
- Each FAQ item is an `AccordionItem`
- Below the accordion, add a small text nudge:
  `"Still have questions? "` + a link to `#contact`

### 7. `components/sections/cta.tsx`

- Section background: `bg-primary` (full bleed)
- ALL text: `text-primary-foreground`
- Centered layout, max-w-2xl
- Large heading: "Ready to move faster?"
- Subheading: "Book a 30-minute call. No pitch, no obligation."
- Two buttons:
  - Primary (inverted): `variant="secondary" size="lg"`
  - Ghost: `variant="ghost" size="lg" className="text-primary-foreground"`
- This section has NO `SectionHeader` — it has its own unique styling

### 8. `components/layout/footer.tsx`

- Full-width, `bg-muted/30 border-t`
- 3-column layout:
  - Col 1: Logo + short firm description + social icons (Twitter, LinkedIn)
  - Col 2: Quick links (same as navbar links)
  - Col 3: Contact info (email, phone, location)
- Bottom bar: copyright + links to `/privacy` and `/terms`
- Use `Separator` between footer body and bottom bar

---

## Contact Form & API Route

### `src/lib/validations.ts`

```ts
import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  company: z.string().optional(),
  message: z.string().min(10, "Message is too short"),
})

export type ContactFormValues = z.infer<typeof contactSchema>
```

### `src/app/api/contact/route.ts`

- Accept POST with `contactSchema` shape
- Validate with zod on the server
- Send email via Resend (`RESEND_API_KEY` from `.env.local`)
- Return `{ success: true }` or `{ error: "..." }` with appropriate status codes

### Contact form UI (embed inside `cta.tsx` or a dedicated section)

- Use `react-hook-form` + `zodResolver`
- shadcn `Form`, `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormMessage`
- Fields: Name, Email, Company (optional), Message (`Textarea`)
- Submit button shows loading state: `disabled` + spinner icon while pending
- On success: show a success message in place of the form
- On error: show an inline error toast or message

---

## `src/app/page.tsx` — Final Assembly

```tsx
import { Hero } from "@/components/sections/hero"
import { TrustBar } from "@/components/sections/trust-bar"
import { Services } from "@/components/sections/services"
import { Process } from "@/components/sections/process"
import { CaseStudies } from "@/components/sections/case-studies"
import { Testimonials } from "@/components/sections/testimonials"
import { Team } from "@/components/sections/team"
import { FAQ } from "@/components/sections/faq"
import { CTA } from "@/components/sections/cta"

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <CaseStudies />
      <Testimonials />
      <Team />
      <FAQ />
      <CTA />
    </main>
  )
}
```

---

## `src/app/layout.tsx`

- Font: use `Inter` from `next/font/google` with `subsets: ["latin"]`
- Apply font variable to `<html>` via `className`
- Include `<Navbar />` before `{children}` and `<Footer />` after
- Set base metadata: title, description, openGraph

---

## `src/lib/constants.ts`

```ts
export const SITE_NAME = "FirmName"
export const SITE_DESCRIPTION = "Strategy & Operations Consulting"
export const CONTACT_EMAIL = "hello@firmname.com"
export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
]
export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/firmname",
  linkedin: "https://linkedin.com/company/firmname",
}
```

---

## Environment Variables

Create `.env.local` with:
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=your@email.com

---

## General Rules for the Agent

1. **Never use hardcoded colors.** Always use Tailwind semantic tokens.
2. **Every section must have an `id` attribute** matching its nav anchor
   (e.g. `<section id="services" ...>`).
3. **All sections are Server Components** unless they use `useState`/`useEffect`.
   Mark `"use client"` only when strictly necessary.
4. **Images:** use `next/image` everywhere. Never `<img>`.
5. **Links:** use `next/link` everywhere. Never `<a>` for internal links.
6. **No placeholder comments** like `// TODO` — implement everything fully.
7. **No inline styles.** Tailwind utility classes only.
8. **Section order in `page.tsx` is fixed** — do not reorder.
9. **Responsive breakpoints:** mobile-first. Design for `sm:` (640px) and `lg:` (1024px).
10. **Build all data files first**, then shared components, then sections, then layout.