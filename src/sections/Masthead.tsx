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

        <h1 className="mt-5 max-w-[22ch] text-[clamp(2.125rem,6vw,4rem)] leading-[1.08]">
          {t.masthead.title}
        </h1>

        <p className="measure mt-7 text-[clamp(1.0625rem,1.7vw,1.1875rem)] text-ink-2">{t.masthead.abstract}</p>

        <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-5 border-t border-rule pt-6 sm:grid-cols-4">
          {t.masthead.meta.map((row) => (
            <div key={row.key}>
              <dt className="label text-ink-3">{row.key}</dt>
              <dd className="mt-1.5 text-[15px] text-ink">{row.value}</dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  )
}

export function Contents({ t }: { t: Strings }) {
  return (
    <section className="mt-16 sm:mt-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.12, ease: ease.doc }}
      >
        <h2 className="label border-t border-rule-strong pt-5 text-ink-3">{t.contents.title}</h2>

        <ol className="mt-2">
          {t.contents.items.map((item) => (
            <li key={item.id} className="border-b border-rule">
              <a
                href={`#${item.id}`}
                className="group flex items-baseline gap-4 py-4 transition-colors sm:gap-6"
              >
                <span className="label w-7 shrink-0 text-ink-3 transition-colors group-hover:text-accent">
                  {item.n}
                </span>
                <span className="flex-1 text-[17px] font-medium transition-colors group-hover:text-accent sm:text-[19px]">
                  {item.label}
                </span>
                <span className="hidden flex-1 text-[15px] text-ink-3 sm:block">{item.hint}</span>
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
