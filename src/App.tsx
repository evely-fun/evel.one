import { useEffect } from 'react'
import { MotionConfig } from 'motion/react'
import { strings } from './i18n/strings'
import type { Strings } from './i18n/strings'
import { useLang, useTheme } from './lib/prefs'
import { Cta } from './sections/Cta'
import { Footer } from './sections/Footer'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Longterm } from './sections/Longterm'
import { Pricing } from './sections/Pricing'
import { Security } from './sections/Security'
import { Stack } from './sections/Stack'
import { Terms } from './sections/Terms'
import { Work } from './sections/Work'

export default function App() {
  const { theme, toggle: toggleTheme } = useTheme()
  const { lang, toggle: toggleLang } = useLang()
  const t = strings[lang] as unknown as Strings

  useEffect(() => {
    document.title = t.meta.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', t.meta.description)
  }, [t])

  return (
    <MotionConfig reducedMotion="user">
      <Header t={t} theme={theme} onTheme={toggleTheme} onLang={toggleLang} />
      <main>
        <Hero t={t} />
        <Stack t={t} />
        <Security t={t} />
        <Work t={t} />
        <Pricing t={t} />
        <Longterm t={t} />
        <Terms t={t} />
        <Cta t={t} />
      </main>
      <Footer t={t} />
    </MotionConfig>
  )
}
