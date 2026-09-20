import { motion } from 'motion/react'
import type { Strings } from '../i18n/strings'
import { ease } from '../lib/motion'
import { Glyph } from '../ui/icons'

export function Masthead({ t }: { t: Strings }) {
  return (
    <section id="top" className="pt-14 sm:pt-20 lg:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: ease.doc }}
      >
        <p className="label text-ink-3">{t.masthead.author}</p>

        <h1 className="mt-5 max-w-[19ch] text-[clamp(2.375rem,6.4vw,5.25rem)] leading-[1.02]">
          {t.masthead.title}
        </h1>

        <p className="measure mt-8 text-[clamp(1.0625rem,1.5vw,1.3125rem)] text-ink-2">{t.masthead.abstract}</p>

      </motion.div>
    </section>
  )
}

export function MastheadMeta({ t }: { t: Strings }) {
  return (
    <motion.dl
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: ease.doc }}
      className="mt-14 grid grid-cols-2 gap-x-10 gap-y-7 border-t border-rule pt-7 sm:grid-cols-4 xl:mt-16"
    >
      {t.masthead.meta.map((row) => (
        <div key={row.key}>
          <dt className="label text-ink-3">{row.key}</dt>
          <dd className="ui mt-2.5 text-[clamp(1rem,1.25vw,1.3125rem)] font-bold text-ink">{row.value}</dd>
        </div>
      ))}
    </motion.dl>
  )
}

export function Contents({ t }: { t: Strings }) {
  return (
    <section className="mt-16 sm:mt-20 xl:mt-0">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.12, ease: ease.doc }}
        className="xl:pb-2"
      >
        <h2 className="label text-ink-3">{t.contents.title}</h2>

        <ol className="mt-2">
          {t.contents.items.map((item) => (
            <li key={item.id} className="border-b border-rule">
              <a
                href={`#${item.id}`}
                className="group flex items-baseline gap-4 py-4 transition-colors sm:gap-6 xl:py-[18px]"
              >
                <span className="label w-7 shrink-0 text-ink-3 transition-colors group-hover:text-accent">
                  {item.n}
                </span>
                <span className="ui flex-1 text-[17px] font-bold transition-colors group-hover:text-accent sm:text-[21px]">
                  {item.label}
                </span>
                <span className="hidden flex-1 text-[15px] text-ink-3 sm:block xl:hidden 2xl:block">{item.hint}</span>
                <Glyph
                  name="arrowRight"
                  size={16}
                  className="shrink-0 text-ink-3 transition-transform group-hover:translate-x-1 group-hover:text-accent"
                />
              </a>
            </li>
          ))}
        </ol>
      </motion.div>
    </section>
  )
}
