import { contact } from '../config'
import type { Strings } from '../i18n/strings'
import { Glyph } from '../ui/icons'
import { Reveal, RevealItem, RevealList, SectionHead } from '../ui/kit'

export function Pricing({ t }: { t: Strings }) {
  return (
    <section id="pricing">
      <SectionHead n={t.pricing.n} id="pricing" title={t.pricing.title} lead={t.pricing.lead} />

      <div className="mt-12">
        <div className="label hidden border-b border-rule-strong pb-2.5 text-ink-3 sm:grid sm:grid-cols-[minmax(0,1.1fr)_7rem_7rem_8rem_minmax(0,2.2fr)] sm:gap-x-8">
          <span>{t.pricing.head.name}</span>
          <span>{t.pricing.head.price}</span>
          <span>{t.pricing.head.days}</span>
          <span>{t.pricing.head.revisions}</span>
          <span />
        </div>

        <RevealList as="ul">
          {t.pricing.rows.map((row) => (
            <RevealItem key={row.name} as="li" className="border-b border-rule py-5">
              <div className="sm:grid sm:grid-cols-[minmax(0,1.1fr)_7rem_7rem_8rem_minmax(0,2.2fr)] sm:items-baseline sm:gap-x-8">
                <h3 className="text-[clamp(1.125rem,1.5vw,1.4375rem)]">
                  {row.name}
                  {'mark' in row && row.mark && <span className="text-accent">*</span>}
                </h3>

                <div className="mt-2 flex items-baseline gap-4 sm:mt-0 sm:contents">
                  <span className="mono text-[clamp(1.25rem,1.7vw,1.625rem)] font-extrabold">{row.price}</span>
                  <span className="ui text-[15px] font-semibold text-ink-2">{row.days}</span>
                  <span className="ui text-[15px] font-semibold text-ink-2">{row.revisions}</span>
                </div>

                <p className="mt-3 text-[clamp(0.9375rem,1.05vw,1.0625rem)] leading-relaxed text-ink-2 sm:mt-0">
                  {row.body}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealList>

        <Reveal>
          <p className="mt-5 text-[14.5px] text-ink-3">
            <span className="text-accent">*</span> {t.pricing.note}
          </p>
        </Reveal>
      </div>

      <Reveal>
        <a
          href={contact.url}
          target="_blank"
          rel="noreferrer noopener"
          className="ui link-doc mt-8 inline-flex items-center gap-2 text-[16px] font-bold"
        >
          {t.ui.write}
          <Glyph name="arrowUpRight" size={15} />
        </a>
      </Reveal>
    </section>
  )
}

export function Longterm({ t }: { t: Strings }) {
  return (
    <section id="longterm">
      <SectionHead n={t.longterm.n} id="longterm" title={t.longterm.title} lead={t.longterm.lead} />

      <div className="mt-12">
        <div className="label hidden border-b border-rule-strong pb-2.5 text-ink-3 sm:grid sm:grid-cols-[minmax(0,1.1fr)_13rem_minmax(0,2.2fr)] sm:gap-x-8">
          <span>{t.longterm.head.name}</span>
          <span>{t.longterm.head.price}</span>
          <span />
        </div>

        <RevealList as="ul">
          {t.longterm.rows.map((row) => (
            <RevealItem key={row.name} as="li" className="border-b border-rule py-5">
              <div className="sm:grid sm:grid-cols-[minmax(0,1.1fr)_13rem_minmax(0,2.2fr)] sm:items-baseline sm:gap-x-8">
                <h3 className="text-[clamp(1.125rem,1.5vw,1.4375rem)]">{row.name}</h3>
                <p className="mt-2 flex items-baseline gap-2 sm:mt-0">
                  <span className="mono text-[clamp(1.25rem,1.7vw,1.625rem)] font-extrabold">{row.price}</span>
                  <span className="ui text-[14px] font-semibold text-ink-3">{row.unit}</span>
                </p>
                <p className="mt-3 text-[clamp(0.9375rem,1.05vw,1.0625rem)] leading-relaxed text-ink-2 sm:mt-0">
                  {row.body}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealList>
      </div>
    </section>
  )
}
