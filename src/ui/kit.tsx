import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { rise, spring, stagger, viewport } from '../lib/motion'

export function Clay({ name, size = 48, className = '' }: { name: string; size?: number; className?: string }) {
  return (
    <img
      src={`/art/clay/${name}.webp`}
      width={size}
      height={size}
      alt=""
      loading="lazy"
      decoding="async"
      style={{ width: size, height: size }}
      className={`shrink-0 select-none ${className}`}
    />
  )
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'header'
}) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      variants={rise}
      initial="initial"
      whileInView="animate"
      viewport={viewport}
      transition={{ delay }}
    >
      {children}
    </Tag>
  )
}

export function RevealGroup({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial="initial"
      whileInView="animate"
      viewport={viewport}
    >
      {children}
    </motion.div>
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

type ButtonProps = {
  href: string
  children: ReactNode
  tone?: 'ink' | 'soft' | 'paper'
  icon?: ReactNode
  className?: string
  external?: boolean
}

const buttonTones: Record<string, string> = {
  ink: 'bg-action text-on-action',
  soft: 'bg-well text-ink border border-rim',
  paper: 'bg-card text-ink',
}

export function Button({ href, children, tone = 'ink', icon, className = '', external }: ButtonProps) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer noopener' : undefined}
      whileTap={{ scale: 0.97 }}
      transition={spring.press}
      className={`inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl px-7 text-[15.5px] font-bold ${buttonTones[tone]} ${className}`}
    >
      {children}
      {icon}
    </motion.a>
  )
}

export function SectionHead({
  title,
  lead,
  tone = 'ink',
  align = 'left',
}: {
  title: string
  lead: string
  tone?: 'ink' | 'band'
  align?: 'left' | 'center'
}) {
  const titleColor = tone === 'band' ? 'text-band-ink' : 'text-ink'
  const leadColor = tone === 'band' ? 'text-band-soft' : 'text-ink-soft'
  const alignment = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <Reveal className={alignment}>
      <h2 className={`max-w-[46rem] text-[clamp(1.875rem,4.4vw,3.125rem)] font-extrabold leading-[1.1] ${titleColor}`}>
        {title}
      </h2>
      <p className={`mt-5 max-w-[38rem] text-[clamp(1rem,1.5vw,1.1875rem)] leading-relaxed ${leadColor}`}>{lead}</p>
    </Reveal>
  )
}

export function Chip({ children, tone = 'well' }: { children: ReactNode; tone?: 'well' | 'band' }) {
  const styles =
    tone === 'band'
      ? 'bg-band-rim/40 text-band-soft'
      : 'bg-well text-ink-soft'
  return (
    <span className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-[13px] font-semibold ${styles}`}>
      {children}
    </span>
  )
}
