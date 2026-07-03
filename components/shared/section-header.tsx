import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  label?: string      // small uppercase label above heading
  heading: string     // main h2
  subheading?: string // paragraph below heading
  centered?: boolean  // default true
}

export function SectionHeader({
  label,
  heading,
  subheading,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl",
        centered ? "mx-auto items-center text-center" : "items-start text-left"
      )}
    >
      {label && (
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
      )}
      <h2
        className={cn(
          "font-semibold tracking-tight text-3xl sm:text-4xl",
          label ? "mt-4" : "mt-0"
        )}
      >
        {heading}
      </h2>
      {subheading && (
        <p className="mt-4 text-lg text-muted-foreground">
          {subheading}
        </p>
      )}
    </div>
  )
}
