import type { Strings } from '../i18n/strings'
import { Clay, RevealGroup, RevealItem, SectionHead } from '../ui/kit'

export function Stack({ t }: { t: Strings }) {
  return (
    <section className="shell py-16 sm:py-20 lg:py-24">
      <SectionHead title={t.stack.title} lead={t.stack.lead} />

      <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {t.stack.items.map((item) => (
          <RevealItem
            key={item.title}
            as="article"
            className="rounded-[22px] bg-card p-7 shadow-soft lg:p-8"
          >
            <Clay name={item.icon} size={52} />
            <h3 className="mt-6 text-[clamp(1.125rem,1.45vw,1.3125rem)] font-extrabold text-ink">{item.title}</h3>
            <p className="mt-3 text-[clamp(0.9375rem,1.1vw,1.0625rem)] leading-relaxed text-ink-soft">{item.body}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  )
}
