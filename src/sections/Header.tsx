import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import { useState } from 'react'
import { contact } from '../config'
import type { Strings } from '../i18n/strings'
import { ease, spring } from '../lib/motion'
import { Glyph } from '../ui/icons'

type HeaderProps = {
  t: Strings
  theme: 'light' | 'dark'
  onTheme: () => void
  onLang: () => void
  active: string
}

export function Header({ t, theme, onTheme, onLang, active }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 280, damping: 40, restDelta: 0.001 })

  const iconButton =
    'inline-flex h-9 w-9 items-center justify-center rounded-md text-ink-3 transition-colors hover:bg-panel hover:text-ink'

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper">
      <motion.div
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-accent"
        style={{ scaleX: progress }}
      />

      <div className="page flex h-14 items-center justify-between gap-4">
        <a href="#top" className="mono text-[13px] font-medium tracking-tight">
          evel<span className="text-ink-3">.one</span>
        </a>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="label inline-flex h-9 items-center gap-2 rounded-md px-2 text-ink-3 transition-colors hover:bg-panel hover:text-ink lg:hidden"
            aria-expanded={open}
            aria-label={open ? t.ui.close : t.ui.menu}
          >
            <Glyph name={open ? 'close' : 'list'} size={17} />
            <span className="hidden sm:inline">{open ? t.ui.close : t.ui.menu}</span>
          </button>

          <button type="button" onClick={onLang} className={iconButton} aria-label={t.ui.lang} title={t.ui.lang}>
            <Glyph name="translate" size={17} />
          </button>
          <button type="button" onClick={onTheme} className={iconButton} aria-label={t.ui.theme} title={t.ui.theme}>
            <Glyph name={theme === 'dark' ? 'sun' : 'moon'} size={17} />
          </button>

          <motion.a
            href={contact.url}
            target="_blank"
            rel="noreferrer noopener"
            whileTap={{ scale: 0.97 }}
            transition={spring.press}
            className="ml-1.5 inline-flex h-9 items-center gap-2 rounded-md bg-ink px-3 text-[14px] font-medium text-paper sm:ml-2 sm:px-3.5"
          >
            <Glyph name="telegram" size={15} />
            {t.ui.write}
          </motion.a>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: ease.doc }}
            className="overflow-hidden border-t border-rule lg:hidden"
          >
            <ol className="page py-2">
              {t.contents.items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-baseline gap-3 py-2.5 ${
                      active === item.id ? 'text-accent' : 'text-ink'
                    }`}
                  >
                    <span className="label text-ink-3">{item.n}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
