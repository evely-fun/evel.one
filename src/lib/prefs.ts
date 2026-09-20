import { useCallback, useEffect, useState } from 'react'
import type { Lang } from '../i18n/strings'

type Theme = 'light' | 'dark'

const THEME_KEY = 'evel-theme'
const LANG_KEY = 'evel-lang'

function readStored(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function writeStored(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    return
  }
}

function initialTheme(): Theme {
  const stored = readStored(THEME_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  if (typeof matchMedia === 'function' && matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
  return 'light'
}

function initialLang(): Lang {
  const stored = readStored(LANG_KEY)
  if (stored === 'ru' || stored === 'en') return stored
  const nav = typeof navigator === 'object' ? navigator.languages ?? [navigator.language] : []
  return nav.some((code) => /^(ru|uk|be|kk)\b/i.test(code ?? '')) ? 'ru' : 'en'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#14161d' : '#f9f7f3')
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      writeStored(THEME_KEY, next)
      return next
    })
  }, [])

  return { theme, toggle }
}

export function useLang() {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const toggle = useCallback(() => {
    setLang((current) => {
      const next: Lang = current === 'ru' ? 'en' : 'ru'
      writeStored(LANG_KEY, next)
      return next
    })
  }, [])

  return { lang, toggle }
}
