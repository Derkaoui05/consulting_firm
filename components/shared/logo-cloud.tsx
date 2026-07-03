import { cn } from "@/lib/utils"

interface LogoCloudProps {
  className?: string
}

export function LogoCloud({ className }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-5 lg:gap-12",
        className
      )}
    >
      {/* Acme Corp */}
      <div className="flex items-center justify-center text-muted-foreground/60 transition-colors hover:text-muted-foreground">
        <svg
          className="h-8 w-auto fill-current"
          viewBox="0 0 120 30"
          aria-hidden="true"
        >
          <path d="M12 4L2 22h20L12 4zm0 4.5L18.5 20H5.5L12 8.5z" />
          <text x="30" y="21" className="font-semibold tracking-wider text-[14px]">
            ACME
          </text>
        </svg>
      </div>

      {/* Northwind */}
      <div className="flex items-center justify-center text-muted-foreground/60 transition-colors hover:text-muted-foreground">
        <svg
          className="h-8 w-auto fill-current"
          viewBox="0 0 140 30"
          aria-hidden="true"
        >
          <path d="M12 2l4 10h-8l4-10zm0 26l-4-10h8l-4 10zM2 12l10-4v8l-10-4zm20 0l-10 4v-8l10 4z" />
          <text x="32" y="21" className="font-semibold tracking-wider text-[14px]">
            NORTHWIND
          </text>
        </svg>
      </div>

      {/* Globex */}
      <div className="flex items-center justify-center text-muted-foreground/60 transition-colors hover:text-muted-foreground">
        <svg
          className="h-8 w-auto fill-current"
          viewBox="0 0 120 30"
          aria-hidden="true"
        >
          <circle cx="12" cy="15" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M12 6a9 9 0 00-4 8h8a9 9 0 00-4-8z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <text x="30" y="21" className="font-semibold tracking-wider text-[14px]">
            GLOBEX
          </text>
        </svg>
      </div>

      {/* Initech */}
      <div className="flex items-center justify-center text-muted-foreground/60 transition-colors hover:text-muted-foreground">
        <svg
          className="h-8 w-auto fill-current"
          viewBox="0 0 120 30"
          aria-hidden="true"
        >
          <path d="M3 6h8v8H3V6zm10 10h8v8h-8v-8zm-5-5h8v8H8v-8z" />
          <text x="30" y="21" className="font-semibold tracking-wider text-[14px]">
            INITECH
          </text>
        </svg>
      </div>

      {/* Umbrella */}
      <div className="flex items-center justify-center text-muted-foreground/60 transition-colors hover:text-muted-foreground">
        <svg
          className="h-8 w-auto fill-current"
          viewBox="0 0 130 30"
          aria-hidden="true"
        >
          <path d="M12 4a10 10 0 0110 10h-9v10a2 2 0 11-2 0v-10H3a10 10 0 0110-10z" />
          <text x="32" y="21" className="font-semibold tracking-wider text-[14px]">
            UMBRELLA
          </text>
        </svg>
      </div>
    </div>
  )
}
