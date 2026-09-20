import { MotionConfig } from 'motion/react'
import { useEffect } from 'react'
import { sectionIds, strings } from './i18n/strings'
import type { Strings } from './i18n/strings'
import { useLang, useTheme } from './lib/prefs'
import { useActiveSection } from './lib/toc'
import { Footer } from './sections/Footer'
import { Header } from './sections/Header'
import { Contents, Masthead } from './sections/Masthead'
import { Longterm, Pricing } from './sections/Pricing'
import { Projects } from './sections/Projects'
import { Security } from './sections/Security'
import { Services } from './sections/Services'
import { Start } from './sections/Start'
import { Terms } from './sections/Terms'
import { Toc } from './sections/Toc'

export default function App() {
  const { theme, toggle: toggleTheme } = useTheme()
  const { lang, toggle: toggleLang } = useLang()
  const t = strings[lang] as unknown as Strings
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    document.title = t.meta.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', t.meta.description)
  }, [t])

  return (
    <MotionConfig reducedMotion="user">
      <Header t={t} theme={theme} onTheme={toggleTheme} onLang={toggleLang} active={active} />

      <main className="page pb-4">
        <Masthead t={t} />
        <Contents t={t} />

        <div className="mt-20 grid gap-x-14 sm:mt-24 lg:grid-cols-[190px_minmax(0,1fr)] xl:grid-cols-[210px_minmax(0,1fr)]">
          <Toc t={t} active={active} />

          <div className="flex min-w-0 flex-col gap-20 sm:gap-24">
            <Services t={t} />
            <Projects t={t} />
            <Security t={t} />
            <Pricing t={t} />
            <Longterm t={t} />
            <Terms t={t} />
            <Start t={t} />
          </div>
        </div>

        <Footer t={t} />
      </main>
    </MotionConfig>
  )
}
