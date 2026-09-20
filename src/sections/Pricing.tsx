import { contact } from '../config'
import type { Strings } from '../i18n/strings'
import { Glyph } from '../ui/icons'
import { Reveal, RevealItem, RevealList, SectionHead } from '../ui/kit'

export function Pricing({ t }: { t: Strings }) {
  return (
    <section id="pricing">
      <SectionHead n={t.pricing.n} id="pricing" title={t.pricing.title} lead={t.pricing.lead} />

      <div className="mt-10 max-w-4xl">
        <div className="label hidden border-b border-rule-strong pb-2 text-ink-3 sm:grid sm:grid-cols-[minmax(0,1fr)_6rem_6rem_7rem] sm:gap-x-6">
          <span>{t.pricing.head.name}</span>
          <span>{t.pricing.head.price}</span>
          <span>{t.pricing.head.days}</span>
          <span>{t.pricing.head.revisions}</span>
        </div>

        <RevealList as="ul">
          {t.pricing.rows.map((row) => (
            <RevealItem key={row.name} as="li" className="border-b border-rule py-5">
              <div className="sm:grid sm:grid-cols-[minmax(0,1fr)_6rem_6rem_7rem] sm:items-baseline sm:gap-x-6">
                <h3 className="text-[17.5px] font-semibold">
                  {row.name}
                  {'mark' in row && row.mark && <span className="text-accent">*</span>}
                </h3>

                <div className="mt-2 flex items-baseline gap-4 sm:mt-0 sm:contents">
                  <span className="mono text-[19px] font-medium sm:text-[17px]">{row.price}</span>
                  <span className="mono text-[14px] text-ink-2">{row.days}</span>
                  <span className="mono text-[14px] text-ink-2">{row.revisions}</span>
                </div>
              </div>

              <p className="measure mt-3 text-[15.5px] leading-relaxed text-ink-2">{row.body}</p>
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
          className="link-doc mt-7 inline-flex items-center gap-2 text-[16px] font-medium"
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

      <div className="mt-10 max-w-4xl">
        <div className="label hidden border-b border-rule-strong pb-2 text-ink-3 sm:grid sm:grid-cols-[minmax(0,1fr)_11rem] sm:gap-x-6">
          <span>{t.longterm.head.name}</span>
          <span>{t.longterm.head.price}</span>
        </div>

        <RevealList as="ul">
          {t.longterm.rows.map((row) => (
            <RevealItem key={row.name} as="li" className="border-b border-rule py-5">
              <div className="sm:grid sm:grid-cols-[minmax(0,1fr)_11rem] sm:items-baseline sm:gap-x-6">
                <h3 className="text-[17.5px] font-semibold">{row.name}</h3>
                <p className="mt-2 flex items-baseline gap-2 sm:mt-0">
                  <span className="mono text-[19px] font-medium sm:text-[17px]">{row.price}</span>
                  <span className="text-[14px] text-ink-3">{row.unit}</span>
                </p>
              </div>
              <p className="measure mt-3 text-[15.5px] leading-relaxed text-ink-2">{row.body}</p>
            </RevealItem>
          ))}
        </RevealList>
      </div>
    </section>
  )
}
