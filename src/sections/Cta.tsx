import { motion } from 'motion/react'
import { contact } from '../config'
import type { Strings } from '../i18n/strings'
import { spring } from '../lib/motion'
import { Send } from '../ui/icons'
import { Reveal } from '../ui/kit'

export function Cta({ t }: { t: Strings }) {
  return (
    <section className="bg-close py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <Reveal className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 className="text-[clamp(1.875rem,4.6vw,3.25rem)] font-extrabold leading-[1.06] text-close-ink">
              {t.cta.title}
            </h2>
            <p className="mt-5 max-w-xl text-[clamp(0.9375rem,1.6vw,1.0625rem)] leading-relaxed text-close-soft">
              {t.cta.lead}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
              <motion.a
                href={contact.url}
                target="_blank"
                rel="noreferrer noopener"
                whileTap={{ scale: 0.97 }}
                transition={spring.press}
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-2xl bg-close-ink px-6 text-[15px] font-bold text-close"
              >
                <Send size={18} />
                {t.cta.button}
              </motion.a>
              <span className="text-[13px] font-semibold text-close-soft">@{contact.telegram}</span>
            </div>

            <p className="mt-6 text-[12.5px] text-close-soft/80">{t.cta.note}</p>
          </div>

          <div className="hidden justify-self-center lg:block">
            <img
              src="/art/clay/mail.webp"
              alt=""
              width={176}
              height={176}
              loading="lazy"
              decoding="async"
              className="w-44"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
