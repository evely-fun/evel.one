import type { Strings } from '../i18n/strings'
import { RevealGroup, RevealItem, SectionHead } from '../ui/kit'

export function Terms({ t }: { t: Strings }) {
  return (
    <section id="terms" className="shell pb-16 sm:pb-20 lg:pb-24">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
        <SectionHead title={t.terms.title} lead={t.terms.lead} />

        <RevealGroup className="overflow-hidden rounded-[22px] bg-card shadow-soft">
          {t.terms.items.map((item, index) => (
            <RevealItem
              key={item.title}
              className={`flex gap-5 p-6 sm:p-7 ${index > 0 ? 'border-t border-line' : ''}`}
            >
              <span className="tabular mt-0.5 w-6 shrink-0 text-[14.5px] font-extrabold text-ink-faint">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-[clamp(1rem,1.25vw,1.1875rem)] font-extrabold text-ink">{item.title}</h3>
                <p className="mt-2 text-[clamp(0.9375rem,1.1vw,1.0625rem)] leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
