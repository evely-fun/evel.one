import type { Strings } from '../i18n/strings'
import { RevealItem, RevealList, SectionHead } from '../ui/kit'

export function Services({ t }: { t: Strings }) {
  return (
    <section id="services">
      <SectionHead n={t.services.n} id="services" title={t.services.title} lead={t.services.lead} />

      <RevealList as="ul" className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-3 xl:gap-x-20">
        {t.services.items.map((item) => (
          <RevealItem key={item.title} as="li">
            <h3 className="text-[clamp(1.125rem,1.5vw,1.4375rem)]">{item.title}</h3>
            <p className="mt-3 text-[clamp(0.9688rem,1.1vw,1.0625rem)] leading-relaxed text-ink-2">{item.body}</p>
          </RevealItem>
        ))}
      </RevealList>
    </section>
  )
}
