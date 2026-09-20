import { contact } from '../config'
import type { Strings } from '../i18n/strings'
import { Check, Send } from '../ui/icons'
import { Button, RevealGroup, RevealItem, SectionHead } from '../ui/kit'

function plural(count: number, one: string, few: string) {
  const last = count % 10
  const teen = count % 100
  if (last === 1 && teen !== 11) return one
  return few
}

export function Pricing({ t }: { t: Strings }) {
  return (
    <section id="pricing" className="shell py-16 sm:py-20 lg:py-24">
      <SectionHead title={t.pricing.title} lead={t.pricing.lead} />

      <RevealGroup className="mt-12 grid gap-4 lg:grid-cols-3 lg:gap-5">
        {t.pricing.tiers.map((tier) => (
          <RevealItem
            key={tier.name}
            as="article"
            className={`relative flex flex-col rounded-[24px] p-7 lg:p-8 ${
              tier.featured
                ? 'border-2 border-price bg-price-wash lg:-mt-4 lg:pb-9 lg:pt-9'
                : 'bg-card shadow-soft'
            }`}
          >
            {tier.featured && (
              <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-price px-3 py-1 text-[11.5px] font-extrabold text-on-price">
                {t.pricing.badge}
              </span>
            )}

            <h3 className="text-[clamp(1.125rem,1.45vw,1.3125rem)] font-extrabold text-ink">{tier.name}</h3>
            <p className="mt-2 min-h-[2.7em] text-[clamp(0.875rem,1.05vw,0.9688rem)] leading-snug text-ink-soft">
              {tier.summary}
            </p>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="tabular text-[clamp(2.375rem,3.2vw,3rem)] font-extrabold leading-none tracking-[-0.03em] text-ink">
                {tier.price}
              </span>
              <span className={`text-[13px] font-semibold ${tier.featured ? 'text-ink-soft' : 'text-ink-faint'}`}>
                {t.pricing.per}
              </span>
            </div>

            <p className={`tabular mt-3 text-[13px] font-semibold ${tier.featured ? 'text-ink-soft' : 'text-ink-faint'}`}>
              {tier.days} {tier.days === 2 ? t.pricing.daysTwo : t.pricing.days}
              {' · '}
              {tier.revisions} {plural(tier.revisions, t.pricing.revisionsOne, t.pricing.revisionsFew)}
            </p>

            <ul className="mt-6 flex flex-1 flex-col gap-3 border-t border-line pt-6">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-[clamp(0.9063rem,1.05vw,1rem)] leading-snug text-ink">
                  <Check size={17} className={`mt-0.5 shrink-0 ${tier.featured ? 'text-price' : 'text-ok'}`} />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              href={contact.url}
              external
              tone={tier.featured ? 'ink' : 'soft'}
              icon={<Send size={17} />}
              className="mt-7 w-full"
            >
              {t.nav.write}
            </Button>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  )
}
