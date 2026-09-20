import type { Strings } from '../i18n/strings'
import { RevealItem, RevealList, SectionHead } from '../ui/kit'

export function Services({ t }: { t: Strings }) {
  return (
    <section id="services">
      <SectionHead n={t.services.n} id="services" title={t.services.title} lead={t.services.lead} />

      <RevealList as="ul" className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-3">
        {t.services.items.map((item) => (
          <RevealItem key={item.title} as="li">
            <h3 className="text-[17px] font-semibold">{item.title}</h3>
            <p className="mt-2 text-[15.5px] leading-relaxed text-ink-2">{item.body}</p>
          </RevealItem>
        ))}
      </RevealList>
    </section>
  )
}
