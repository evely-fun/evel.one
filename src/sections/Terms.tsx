import { payments } from '../config'
import type { Strings } from '../i18n/strings'
import { Reveal, RevealItem, RevealList, SectionHead } from '../ui/kit'

export function Terms({ t }: { t: Strings }) {
  return (
    <section id="terms">
      <SectionHead n={t.terms.n} id="terms" title={t.terms.title} lead={t.terms.lead} />

      <RevealList as="ol" className="mt-12 grid gap-x-12 sm:grid-cols-2 xl:gap-x-20">
        {t.terms.items.map((item, index) => (
          <RevealItem
            key={item.title}
            as="li"
            className="border-t border-rule py-6"
          >
            <span className="label pt-1 text-ink-3">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="text-[16.5px] font-semibold">{item.title}</h3>
            <p className="col-start-2 mt-1.5 text-[15.5px] leading-relaxed text-ink-2 sm:col-start-3 sm:mt-0">
              {item.body}
            </p>
          </RevealItem>
        ))}
      </RevealList>

      {payments.length > 0 && (
        <Reveal className="mt-10">
          <h3 className="label text-ink-3">{t.terms.paymentsTitle}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {payments.map((method) => (
              <li
                key={method}
                className="ui rounded-full bg-panel px-3.5 py-1.5 text-[14px] font-semibold text-ink-2"
              >
                {method}
              </li>
            ))}
          </ul>
          <p className="measure mt-4 text-[15px] text-ink-3">{t.terms.paymentsNote}</p>
        </Reveal>
      )}
    </section>
  )
}
