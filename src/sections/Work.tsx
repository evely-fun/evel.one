import type { Strings } from '../i18n/strings'
import { Chip, Clay, RevealGroup, RevealItem, SectionHead } from '../ui/kit'

const ART = {
  work: '#1a84f7',
  note: '#8a57f3',
}

function ArtPanel({ tone, icon }: { tone: 'work' | 'note'; icon: string }) {
  return (
    <div
      className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-[18px] lg:aspect-auto lg:h-full lg:min-h-[240px]"
      style={{ background: ART[tone] }}
    >
      <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <ellipse
          cx="150"
          cy="152"
          rx="112"
          ry="70"
          fill="none"
          stroke="#fdf6e8"
          strokeOpacity="0.5"
          strokeWidth="3"
          transform="rotate(-16 150 152)"
        />
        <circle cx="244" cy="82" r="5" fill="#fdf6e8" fillOpacity="0.7" />
        <circle cx="58" cy="216" r="6" fill="#fdf6e8" fillOpacity="0.55" />
      </svg>
      <Clay name={icon} size={112} className="relative" />
    </div>
  )
}

export function Work({ t }: { t: Strings }) {
  const [featured, nda] = t.work.items

  return (
    <section id="work" className="shell py-16 sm:py-20 lg:py-24">
      <SectionHead title={t.work.title} lead={t.work.lead} />

      <RevealGroup className="mt-12 grid gap-4 lg:grid-cols-3 lg:gap-5">
        <RevealItem
          as="article"
          className="rounded-[24px] bg-card p-5 shadow-soft lg:col-span-2 lg:p-6"
        >
          <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
            <ArtPanel tone="work" icon="shield" />

            <div className="lg:py-2">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <h3 className="text-[clamp(1.3125rem,1.8vw,1.625rem)] font-extrabold text-ink">{featured.name}</h3>
                <span className="inline-flex items-center rounded-full bg-work-wash px-3.5 py-1.5 text-[12.5px] font-bold text-work-ink">
                  {featured.status}
                </span>
              </div>

              <p className="mt-4 text-[clamp(0.9375rem,1.1vw,1.0625rem)] leading-relaxed text-ink-soft">{featured.body}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </div>
          </div>
        </RevealItem>

        <RevealItem as="article" className="rounded-[24px] bg-card p-5 shadow-soft lg:p-6">
          <div className="flex h-full flex-col">
            <ArtPanel tone="note" icon="eye" />

            <div className="mt-5 flex flex-1 flex-col lg:py-1">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <h3 className="text-[clamp(1.25rem,1.6vw,1.4375rem)] font-extrabold text-ink">{nda.name}</h3>
                <span className="inline-flex items-center rounded-full bg-note-wash px-3.5 py-1.5 text-[12.5px] font-bold text-note-ink">
                  {nda.status}
                </span>
              </div>

              <p className="mt-4 text-[clamp(0.9375rem,1.1vw,1.0625rem)] leading-relaxed text-ink-soft">{nda.body}</p>
            </div>
          </div>
        </RevealItem>
      </RevealGroup>
    </section>
  )
}
