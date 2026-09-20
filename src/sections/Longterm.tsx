import type { Strings } from '../i18n/strings'
import { Clay, RevealGroup, RevealItem, SectionHead } from '../ui/kit'

export function Longterm({ t }: { t: Strings }) {
  return (
    <section className="shell pb-16 sm:pb-20 lg:pb-24">
      <SectionHead title={t.longterm.title} lead={t.longterm.lead} />

      <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {t.longterm.items.map((item) => (
          <RevealItem key={item.name} as="article" className="rounded-[22px] bg-card p-7 shadow-soft lg:p-8">
            <div className="flex items-start justify-between gap-4">
              <Clay name={item.icon} size={50} />
              <div className="text-right">
                <div className="tabular text-[clamp(1.625rem,2.1vw,2rem)] font-extrabold leading-none tracking-[-0.03em] text-ink">
                  {item.price}
                </div>
                <div className="mt-1.5 text-[12px] font-semibold text-ink-faint">{item.unit}</div>
              </div>
            </div>

            <h3 className="mt-6 text-[clamp(1.0625rem,1.35vw,1.25rem)] font-extrabold text-ink">{item.name}</h3>
            <p className="mt-2.5 text-[clamp(0.9375rem,1.1vw,1.0625rem)] leading-relaxed text-ink-soft">{item.body}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  )
}
