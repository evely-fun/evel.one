import type { Strings } from '../i18n/strings'
import { RevealItem, RevealList, SectionHead } from '../ui/kit'

export function Security({ t }: { t: Strings }) {
  return (
    <section id="security">
      <SectionHead n={t.security.n} id="security" title={t.security.title} lead={t.security.lead} />

      <RevealList as="ol" className="mt-10 max-w-4xl">
        {t.security.items.map((item, index) => (
          <RevealItem
            key={item.title}
            as="li"
            className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-2 border-t border-rule py-5 sm:grid-cols-[3rem_14rem_minmax(0,1fr)] sm:gap-x-6"
          >
            <span className="label pt-1 text-ink-3">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="text-[16.5px] font-semibold">{item.title}</h3>
            <p className="col-start-2 mt-1.5 text-[15.5px] leading-relaxed text-ink-2 sm:col-start-3 sm:mt-0">
              {item.body}
            </p>
          </RevealItem>
        ))}
      </RevealList>
    </section>
  )
}
