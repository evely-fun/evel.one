import type { Strings } from '../i18n/strings'
import { Clay, RevealGroup, RevealItem, SectionHead } from '../ui/kit'

export function Security({ t }: { t: Strings }) {
  const items = t.security.items
  const grid = items.slice(0, items.length - 1)
  const closer = items[items.length - 1]

  return (
    <section id="security" className="bg-band py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <SectionHead title={t.security.title} lead={t.security.lead} tone="band" />

        <RevealGroup className="mt-12 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {grid.map((item) => (
            <RevealItem key={item.title} as="article" className="rounded-[20px] bg-band-card p-6 lg:p-7">
              <Clay name={item.icon} size={44} />
              <h3 className="mt-5 text-[clamp(1.0625rem,1.3vw,1.1875rem)] font-extrabold text-band-ink">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[clamp(0.9063rem,1.05vw,1rem)] leading-relaxed text-band-soft">{item.body}</p>
            </RevealItem>
          ))}

          <RevealItem
            as="article"
            className="flex flex-col gap-5 rounded-[20px] bg-band-card p-6 sm:col-span-2 sm:flex-row sm:items-center sm:gap-7 lg:col-span-3 lg:p-7"
          >
            <Clay name={closer.icon} size={56} />
            <div>
              <h3 className="text-[clamp(1.0625rem,1.3vw,1.1875rem)] font-extrabold text-band-ink">{closer.title}</h3>
              <p className="mt-2 max-w-2xl text-[clamp(0.9063rem,1.05vw,1rem)] leading-relaxed text-band-soft">
                {closer.body}
              </p>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  )
}
