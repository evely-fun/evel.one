import { motion } from 'motion/react'
import { contact } from '../config'
import type { Strings } from '../i18n/strings'
import { spring } from '../lib/motion'
import { Glyph } from '../ui/icons'
import { Reveal, RevealItem, RevealList, SectionHead } from '../ui/kit'

export function Start({ t }: { t: Strings }) {
  return (
    <section id="start">
      <SectionHead n={t.start.n} id="start" title={t.start.title} lead={t.start.lead} />

      <div className="mt-12">
        <Reveal>
          <h3 className="label text-ink-3">{t.start.checklist.title}</h3>
        </Reveal>

        <RevealList as="ul" className="mt-5 grid gap-x-12 sm:grid-cols-2 xl:max-w-6xl xl:gap-x-20">
          {t.start.checklist.items.map((item) => (
            <RevealItem key={item} as="li" className="flex items-start gap-3 border-b border-rule py-3.5">
              <Glyph name="check" size={16} className="mt-[6px] shrink-0 text-accent" />
              <span className="text-[clamp(1rem,1.15vw,1.125rem)] leading-relaxed">{item}</span>
            </RevealItem>
          ))}
        </RevealList>

        <Reveal>
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
            <motion.a
              href={contact.url}
              target="_blank"
              rel="noreferrer noopener"
              whileTap={{ scale: 0.97 }}
              transition={spring.press}
              className="ui inline-flex h-13 items-center gap-2.5 rounded-xl bg-ink px-6 text-[16px] font-bold text-paper"
            >
              <Glyph name="telegram" size={17} />
              {t.start.button}
            </motion.a>
            <a
              href={contact.url}
              target="_blank"
              rel="noreferrer noopener"
              className="ui link-doc text-[15px] font-semibold"
            >
              @{contact.telegram}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
