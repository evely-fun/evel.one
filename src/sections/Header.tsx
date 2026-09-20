import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'
import { contact } from '../config'
import type { Strings } from '../i18n/strings'
import { ease, spring } from '../lib/motion'
import { Close, Language, Menu, Moon, Send, Sun } from '../ui/icons'

type HeaderProps = {
  t: Strings
  theme: 'light' | 'dark'
  onTheme: () => void
  onLang: () => void
}

const links = [
  { id: 'work', key: 'work' },
  { id: 'security', key: 'security' },
  { id: 'pricing', key: 'pricing' },
  { id: 'terms', key: 'terms' },
] as const

export function Header({ t, theme, onTheme, onLang }: HeaderProps) {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (value) => {
    setStuck(value > 16)
  })

  const iconButton =
    'inline-flex h-10 w-10 items-center justify-center rounded-xl text-ink-soft transition-colors hover:text-ink hover:bg-well'

  return (
    <header
      className={`sticky top-0 z-50 bg-paper transition-shadow duration-300 ${
        stuck ? 'border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <div className="shell flex h-18 items-center justify-between gap-4">
        <a href="#top" className="text-[17px] font-extrabold tracking-[-0.03em] text-ink">
          evel<span className="text-ink-faint">.one</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-xl px-3.5 py-2 text-[14px] font-semibold text-ink-soft transition-colors hover:bg-well hover:text-ink"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button type="button" onClick={onLang} className={iconButton} aria-label={t.nav.lang} title={t.nav.lang}>
            <Language />
          </button>
          <button type="button" onClick={onTheme} className={iconButton} aria-label={t.nav.theme} title={t.nav.theme}>
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>

          <motion.a
            href={contact.url}
            target="_blank"
            rel="noreferrer noopener"
            whileTap={{ scale: 0.97 }}
            transition={spring.press}
            className="ml-1 hidden h-10 items-center gap-2 rounded-xl bg-action px-4 text-[14px] font-bold text-on-action sm:inline-flex"
          >
            <Send size={17} />
            {t.nav.write}
          </motion.a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className={`${iconButton} lg:hidden`}
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: ease.drawer }}
            className="overflow-hidden border-t border-line lg:hidden"
          >
            <nav className="shell flex flex-col py-3">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-[15px] font-semibold text-ink"
                >
                  {t.nav[link.key]}
                </a>
              ))}
              <a
                href={contact.url}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2 mb-2 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-action text-[15px] font-bold text-on-action sm:hidden"
              >
                <Send size={18} />
                {t.nav.write}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
