import { chromium } from 'playwright'

const BASE = 'http://127.0.0.1:5174/'
const OUT = process.env.OUT ?? 'qa/shots'

const matrix = [
  { name: 'desk-1440', width: 1440, height: 900 },
  { name: 'desk-1920', width: 1920, height: 1080 },
  { name: 'tab-768', width: 768, height: 1024 },
  { name: 'ph-390', width: 390, height: 844 },
  { name: 'ph-360', width: 360, height: 640 },
  { name: 'ph-430', width: 430, height: 932 },
]

const only = process.argv[2]
const themes = (process.argv[3] ?? 'light,dark').split(',')
const langs = (process.argv[4] ?? 'ru,en').split(',')

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' })
const problems = []

for (const view of matrix) {
  if (only && !view.name.includes(only)) continue
  for (const theme of themes) {
    for (const lang of langs) {
      const context = await browser.newContext({
        viewport: { width: view.width, height: view.height },
        deviceScaleFactor: 2,
        locale: lang === 'ru' ? 'ru-RU' : 'en-US',
      })
      await context.addInitScript(
        ([t, l]) => {
          localStorage.setItem('evel-theme', t)
          localStorage.setItem('evel-lang', l)
        },
        [theme, lang],
      )
      const page = await context.newPage()
      const errors = []
      page.on('console', (m) => {
        if (m.type() === 'error') errors.push(m.text())
      })
      page.on('pageerror', (e) => errors.push(String(e)))

      await page.goto(BASE, { waitUntil: 'networkidle' })
      await page.evaluate(async () => {
        await document.fonts.ready
        const root = document.documentElement
        const previous = root.style.scrollBehavior
        root.style.scrollBehavior = 'auto'
        const step = Math.round(window.innerHeight * 0.6)
        for (let y = 0; y < root.scrollHeight; y += step) {
          window.scrollTo(0, y)
          await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 120)))
        }
        window.scrollTo(0, root.scrollHeight)
        await new Promise((r) => setTimeout(r, 700))
        window.scrollTo(0, 0)
        await new Promise((r) => setTimeout(r, 500))
        root.style.scrollBehavior = previous
      })

      const overflow = await page.evaluate(() => {
        const docWidth = document.documentElement.clientWidth
        const wide = []
        for (const el of document.querySelectorAll('body *')) {
          const r = el.getBoundingClientRect()
          if (r.width === 0) continue
          if (r.right > docWidth + 1 || r.left < -1) {
            wide.push(`${el.tagName.toLowerCase()}.${String(el.className).slice(0, 60)} [${Math.round(r.left)}..${Math.round(r.right)}]`)
          }
        }
        return {
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: docWidth,
          wide: wide.slice(0, 6),
        }
      })

      const tag = `${view.name}-${theme}-${lang}`
      if (overflow.scrollWidth > overflow.clientWidth + 1) {
        problems.push(`${tag} OVERFLOW ${overflow.scrollWidth}>${overflow.clientWidth} :: ${overflow.wide.join(' | ')}`)
      }
      if (errors.length) problems.push(`${tag} CONSOLE :: ${errors.slice(0, 3).join(' | ')}`)

      await page.screenshot({ path: `${OUT}/${tag}.png`, fullPage: true })
      await context.close()
    }
  }
}

await browser.close()
console.log(problems.length ? problems.join('\n') : 'clean: no overflow, no console errors')
