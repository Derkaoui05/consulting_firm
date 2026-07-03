import Image from "next/image"
import Link from "next/link"
import { team } from "@/data/team"
import { SectionHeader } from "@/components/shared/section-header"

export function Team() {
  return (
    <section id="team" className="bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Leadership"
          heading="Partner-led engagements"
          subheading="We don't hand off work to junior analysts. Every client works directly with senior partners who have decades of real-world leadership experience."
        />

        <div className="mt-16 grid gap-8 grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-start text-left">
              {/* Square Avatar */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted">
                {member.avatarUrl ? (
                  <Image
                    src={member.avatarUrl}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 250px"
                    className="object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
                    No Image
                  </div>
                )}
              </div>

              {/* Name and LinkedIn */}
              <div className="mt-4 flex w-full items-center justify-between">
                <h3 className="font-semibold tracking-tight text-base sm:text-lg">
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
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </Link>
                )}
              </div>

              {/* Role */}
              <span className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">
                {member.role}
              </span>

              {/* Short Bio */}
              <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
