import { LogoCloud } from "@/components/shared/logo-cloud"

export function TrustBar() {
  return (
    <section className="border-y bg-muted/30 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by teams at
        </p>
        <LogoCloud className="mt-8" />
      </div>
    </section>
  )
}