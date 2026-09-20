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

      <div className="mt-10 max-w-4xl">
        <Reveal>
          <h3 className="label text-ink-3">{t.start.checklist.title}</h3>
        </Reveal>

        <RevealList as="ul" className="mt-4">
          {t.start.checklist.items.map((item) => (
            <RevealItem key={item} as="li" className="flex items-start gap-3 border-b border-rule py-3.5">
              <Glyph name="check" size={16} className="mt-[6px] shrink-0 text-accent" />
              <span className="text-[16px] leading-relaxed">{item}</span>
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
              className="inline-flex h-12 items-center gap-2.5 rounded-md bg-ink px-5 text-[16px] font-medium text-paper"
            >
              <Glyph name="telegram" size={17} />
              {t.start.button}
            </motion.a>
            <a
              href={contact.url}
              target="_blank"
              rel="noreferrer noopener"
              className="mono link-doc text-[15px]"
            >
              @{contact.telegram}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
