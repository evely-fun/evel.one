import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import { rise, stagger, viewport } from '../lib/motion'

export function Reveal({
  children,
  className = '',
  as = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'li' | 'article' | 'header'
}) {
  const Tag = motion[as]
  return (
    <Tag className={className} variants={rise} initial="initial" whileInView="animate" viewport={viewport}>
      {children}
    </Tag>
  )
}

export function RevealList({
  children,
  className = '',
  as = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'ul' | 'ol'
}) {
  const Tag = motion[as]
  return (
    <Tag className={className} variants={stagger} initial="initial" whileInView="animate" viewport={viewport}>
      {children}
    </Tag>
  )
}

export function RevealItem({
  children,
  className = '',
  as = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'li' | 'article'
}) {
  const Tag = motion[as]
  return (
    <Tag className={className} variants={rise}>
      {children}
    </Tag>
  )
}

export function SectionHead({ n, id, title, lead }: { n: string; id: string; title: string; lead: string }) {
  return (
    <Reveal as="header" className="border-t border-rule-strong pt-6">
      <div className="flex items-baseline gap-4">
        <span className="label text-accent">{n}</span>
        <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)]">
          <a href={`#${id}`} className="group inline-flex items-baseline gap-2">
            {title}
            <span className="label text-ink-3 opacity-0 transition-opacity group-hover:opacity-100">#</span>
          </a>
        </h2>
      </div>
      <p className="measure mt-4 text-[clamp(1rem,1.25vw,1.1875rem)] text-ink-2">{lead}</p>
    </Reveal>
  )
}

export function Shot({ src, caption }: { src: string; caption: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const shift = useTransform(scrollYProgress, [0, 1], ['-3%', '3%'])

  return (
    <motion.figure className="m-0 w-[74%] shrink-0 snap-start sm:w-auto sm:shrink" variants={rise}>
      <div ref={ref} className="overflow-hidden rounded-[10px]">
        <div
          className="relative aspect-[390/844] w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to bottom, #000 84%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, #000 84%, transparent 100%)',
          }}
        >
          <motion.img
            src={src}
            alt={caption}
            loading="lazy"
            decoding="async"
            style={reduced ? undefined : { y: shift }}
            className="absolute inset-x-0 top-0 h-[106%] w-full object-cover object-top"
          />
        </div>
      </div>
      <figcaption className="ui mt-3 text-[13.5px] leading-snug text-ink-3">{caption}</figcaption>
    </motion.figure>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="mono rounded-[4px] border border-rule px-2 py-[3px] text-[12px] text-ink-2">{children}</span>
}
