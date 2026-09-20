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

        <RevealList as="ul" className="mt-5 grid gap-x-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-16">
          {t.start.checklist.items.map((item) => (
            <RevealItem key={item} as="li" className="flex items-start gap-3 border-b border-rule py-3.5">
              <Glyph name="check" size={16} className="mt-[6px] shrink-0 text-accent" />
              <span className="text-[clamp(1rem,1.15vw,1.125rem)] leading-relaxed">{item}</span>
            </RevealItem>
          ))}
        </RevealList>

        <Reveal>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <motion.a
              href={contact.telegramUrl}
              target="_blank"
              rel="noreferrer noopener"
              whileTap={{ scale: 0.97 }}
              transition={spring.press}
              className="ui inline-flex h-13 items-center justify-center gap-2.5 rounded-xl bg-ink px-6 text-[16px] font-bold text-paper"
            >
              <Glyph name="telegram" size={17} />
              {t.start.button}
            </motion.a>

            <motion.a
              href={contact.discordServer}
              target="_blank"
              rel="noreferrer noopener"
              whileTap={{ scale: 0.97 }}
              transition={spring.press}
              className="ui inline-flex h-13 items-center justify-center gap-2.5 rounded-xl border border-rule-strong px-6 text-[16px] font-bold text-ink"
            >
              <Glyph name="discord" size={17} />
              {t.start.discordButton}
            </motion.a>
          </div>

          <dl className="mt-8 grid max-w-2xl gap-x-10 gap-y-5 sm:grid-cols-2">
            <div>
              <dt className="label text-ink-3">Telegram</dt>
              <dd className="ui mt-1.5 text-[15.5px] font-semibold">
                <a
                  href={contact.telegramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-doc"
                >
                  @{contact.telegram}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label text-ink-3">Discord</dt>
              <dd className="ui mt-1.5 text-[15.5px] font-semibold">
                {contact.discord}
                <span className="text-ink-3"> · </span>
                <a
                  href={contact.discordServer}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-doc"
                >
                  {t.start.serverLink}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
