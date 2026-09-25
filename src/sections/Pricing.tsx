import { contact } from '../config'
import type { Strings } from '../i18n/strings'
import { Glyph } from '../ui/icons'
import { Reveal, RevealItem, RevealList, SectionHead } from '../ui/kit'

const GRID = 'sm:grid sm:grid-cols-[minmax(0,2.3fr)_repeat(3,minmax(0,1fr))] sm:gap-x-8'
const EXTRA_GRID = 'sm:grid sm:grid-cols-[minmax(0,2.3fr)_minmax(0,1fr)] sm:items-baseline sm:gap-x-8'

export function Pricing({ t }: { t: Strings }) {
  const columns = [
    { key: 'once' as const, label: t.pricing.head.once },
    { key: 'bundle' as const, label: t.pricing.head.bundle },
    { key: 'contract' as const, label: t.pricing.head.contract },
  ]

  return (
    <section id="pricing">
      <SectionHead n={t.pricing.n} id="pricing" title={t.pricing.title} lead={t.pricing.lead} />

      <div className="mt-12">
        <div className={`label hidden border-b border-rule-strong pb-2.5 text-ink-3 ${GRID}`}>
          <span>{t.pricing.head.name}</span>
          {columns.map((column) => (
            <span key={column.key}>{column.label}</span>
          ))}
        </div>

        <RevealList as="ul">
          {t.pricing.rows.map((row) => (
            <RevealItem key={row.name} as="li" className={`border-b border-rule py-6 ${GRID} sm:items-start`}>
              <div>
                <h3 className="text-[clamp(1.0625rem,1.35vw,1.3125rem)]">{row.name}</h3>
                <p className="mt-2 text-[clamp(0.9375rem,1.05vw,1.0625rem)] leading-relaxed text-ink-2">{row.body}</p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-4 border-t border-rule pt-4 sm:mt-0 sm:contents sm:border-0 sm:pt-0">
                {columns.map((column) => (
                  <div key={column.key}>
                    <p className="label text-ink-3 sm:hidden">{column.label}</p>
                    <p className="mono mt-1.5 text-[clamp(1.125rem,1.6vw,1.5rem)] font-extrabold sm:mt-0">
                      {row[column.key]}
                    </p>
                  </div>
                ))}
              </div>
            </RevealItem>
          ))}
        </RevealList>

        <Reveal>
          <p className="measure mt-6 text-[15px] text-ink-3">{t.pricing.note}</p>
        </Reveal>

        <div className="mt-14">
          <Reveal>
            <h3 className="label text-ink-3">{t.pricing.extras.title}</h3>
            <p className="measure mt-3 text-[clamp(0.9688rem,1.1vw,1.0625rem)] text-ink-2">{t.pricing.extras.note}</p>
          </Reveal>

          <RevealList as="ul" className="mt-6 border-t border-rule-strong">
            {t.pricing.extras.items.map((item) => (
              <RevealItem key={item.name} as="li" className={`border-b border-rule py-5 ${EXTRA_GRID}`}>
                <div>
                  <h4 className="text-[clamp(1rem,1.2vw,1.1875rem)]">{item.name}</h4>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2">{item.body}</p>
                </div>
                <p className="mono mt-3 text-[clamp(1.0625rem,1.35vw,1.25rem)] font-extrabold sm:mt-0">{item.price}</p>
              </RevealItem>
            ))}
          </RevealList>
        </div>

        <Reveal>
          <a
            href={contact.telegramUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="ui link-doc mt-10 inline-flex items-center gap-2 text-[16px] font-bold"
          >
            {t.ui.write}
            <Glyph name="arrowUpRight" size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export function Longterm({ t }: { t: Strings }) {
  return (
    <section id="longterm">
      <SectionHead n={t.longterm.n} id="longterm" title={t.longterm.title} lead={t.longterm.lead} />

      <RevealList as="ol" className="mt-12 grid gap-x-12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-14">
        {t.longterm.items.map((item) => (
          <RevealItem key={item.title} as="li" className="border-t border-rule py-6">
            <h3 className="text-[clamp(1.0625rem,1.35vw,1.3125rem)]">{item.title}</h3>
            <p className="mt-2.5 text-[clamp(0.9688rem,1.1vw,1.0625rem)] leading-relaxed text-ink-2">{item.body}</p>
          </RevealItem>
        ))}
      </RevealList>
    </section>
  )
}
