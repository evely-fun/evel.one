import type { Strings } from '../i18n/strings'
import { RevealItem, RevealList, SectionHead } from '../ui/kit'

export function Security({ t }: { t: Strings }) {
  return (
    <section id="security">
      <SectionHead n={t.security.n} id="security" title={t.security.title} lead={t.security.lead} />

      <RevealList as="ol" className="mt-12 grid gap-x-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-16">
        {t.security.items.map((item, index) => (
          <RevealItem key={item.title} as="li" className="border-t border-rule py-6">
            <span className="label text-ink-3">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="mt-3 text-[clamp(1.0625rem,1.35vw,1.3125rem)]">{item.title}</h3>
            <p className="mt-2.5 text-[clamp(0.9688rem,1.1vw,1.0625rem)] leading-relaxed text-ink-2">{item.body}</p>
          </RevealItem>
        ))}
      </RevealList>
    </section>
  )
}
