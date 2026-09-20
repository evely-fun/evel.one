import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { contact } from '../config'
import type { Strings } from '../i18n/strings'
import { ease } from '../lib/motion'
import { ArrowDown, Send } from '../ui/icons'
import { Button } from '../ui/kit'

const ART_BLUE = '#1a84f7'

function Constellation() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const lift = useTransform(scrollYProgress, [0, 1], [18, -18])
  const drift = useTransform(scrollYProgress, [0, 1], [26, -26])
  const counter = useTransform(scrollYProgress, [0, 1], [-20, 20])
  const spin = useTransform(scrollYProgress, [0, 1], [-8, 8])

  const still = { y: 0, rotate: 0 }
  const main = reduced ? still : { y: lift }
  const orbitSpin = reduced ? still : { rotate: spin }

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] sm:aspect-[5/4] lg:aspect-square"
      style={{ background: ART_BLUE }}
    >
      <motion.svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        style={orbitSpin}
        aria-hidden="true"
      >
        <ellipse
          cx="200"
          cy="205"
          rx="150"
          ry="96"
          fill="none"
          stroke="#fdf6e8"
          strokeOpacity="0.55"
          strokeWidth="3"
          transform="rotate(-18 200 205)"
        />
        <circle cx="330" cy="120" r="6" fill="#fdf6e8" fillOpacity="0.75" />
        <circle cx="72" cy="268" r="8" fill="#fdf6e8" fillOpacity="0.6" />
        <circle cx="118" cy="96" r="5" fill="#fdf6e8" fillOpacity="0.5" />
        <circle cx="296" cy="318" r="5" fill="#fdf6e8" fillOpacity="0.55" />
      </motion.svg>

      <motion.img
        src="/art/clay/lock.webp"
        alt=""
        width={320}
        height={320}
        decoding="async"
        style={main}
        className="absolute left-1/2 top-1/2 w-[46%] max-w-[260px] -translate-x-1/2 -translate-y-1/2"
      />

      <motion.img
        src="/art/clay/key.webp"
        alt=""
        width={160}
        height={160}
        loading="lazy"
        decoding="async"
        style={reduced ? still : { y: drift }}
        className="absolute right-[10%] top-[16%] w-[19%] max-w-[104px]"
      />

      <motion.img
        src="/art/clay/link.webp"
        alt=""
        width={160}
        height={160}
        loading="lazy"
        decoding="async"
        style={reduced ? still : { y: counter }}
        className="absolute bottom-[13%] left-[9%] w-[20%] max-w-[110px]"
      />

      <motion.img
        src="/art/clay/sparkles.webp"
        alt=""
        width={160}
        height={160}
        loading="lazy"
        decoding="async"
        style={reduced ? still : { y: drift }}
        className="absolute left-[14%] top-[13%] w-[14%] max-w-[76px]"
      />
    </div>
  )
}

export function Hero({ t }: { t: Strings }) {
  return (
    <section id="top" className="shell pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-32">
      <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: ease.out }}
        >
          <p className="text-[13.5px] font-semibold text-ink-faint">{t.hero.kicker}</p>

          <h1 className="mt-4 text-[clamp(2.25rem,5.8vw,4.25rem)] font-extrabold leading-[1.04] text-ink">
            {t.hero.title}
          </h1>

          <p className="mt-7 max-w-xl text-[clamp(1.0625rem,1.75vw,1.25rem)] leading-relaxed text-ink-soft">
            {t.hero.lead}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href={contact.url} external icon={<Send size={18} />} className="w-full sm:w-auto">
              {t.hero.primary}
            </Button>
            <Button href="#pricing" tone="soft" icon={<ArrowDown size={18} />} className="w-full sm:w-auto">
              {t.hero.secondary}
            </Button>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-7">
            {t.hero.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="tabular text-[clamp(1.125rem,2.1vw,1.5rem)] font-extrabold leading-tight text-ink">
                  {fact.value}
                </dt>
                <dd className="mt-1.5 text-[13px] font-semibold text-ink-faint">{fact.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: ease.out }}
          className="lg:order-none"
        >
          <Constellation />
        </motion.div>
      </div>
    </section>
  )
}
