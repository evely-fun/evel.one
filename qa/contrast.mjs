import { chromium } from 'playwright'

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' })
const report = []

for (const theme of ['light', 'dark']) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  await context.addInitScript((t) => localStorage.setItem('evel-theme', t), theme)
  const page = await context.newPage()
  await page.goto('http://127.0.0.1:5174/', { waitUntil: 'networkidle' })
  await page.evaluate(async () => {
    document.documentElement.style.scrollBehavior = 'auto'
    for (let y = 0; y < document.documentElement.scrollHeight; y += 400) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 40))
    }
  })

  const failures = await page.evaluate(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 1
    canvas.height = 1
    const ctx = canvas.getContext('2d', { willReadFrequently: true })

    const resolve = (css) => {
      ctx.clearRect(0, 0, 1, 1)
      ctx.fillStyle = '#000'
      ctx.fillStyle = css
      ctx.fillRect(0, 0, 1, 1)
      const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data
      return [r, g, b, a / 255]
    }

    const over = (fg, bg) => {
      const a = fg[3]
      return [
        fg[0] * a + bg[0] * (1 - a),
        fg[1] * a + bg[1] * (1 - a),
        fg[2] * a + bg[2] * (1 - a),
        1,
      ]
    }

    const lum = ([r, g, b]) => {
      const f = (c) => {
        const v = c / 255
        return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
      }
      return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)
    }

    const backdrop = (el) => {
      const layers = []
      let node = el
      while (node) {
        const style = getComputedStyle(node)
        const colour = resolve(style.backgroundColor)
        const image = style.backgroundImage
        if (image && image !== 'none') layers.push([128, 128, 128, 1])
        if (colour[3] > 0) layers.push(colour)
        if (colour[3] >= 0.999) break
        node = node.parentElement
      }
      let base = layers.length ? layers[layers.length - 1] : [255, 255, 255, 1]
      for (let i = layers.length - 2; i >= 0; i -= 1) base = over(layers[i], base)
      return base
    }

    const out = []
    for (const el of document.querySelectorAll('p, h1, h2, h3, li, dd, dt, span, a, div, button')) {
      const hasText = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())
      if (!hasText) continue
      const style = getComputedStyle(el)
      if (style.visibility === 'hidden' || style.display === 'none') continue
      if (el.getBoundingClientRect().width === 0) continue

      const size = parseFloat(style.fontSize)
      const weight = Number(style.fontWeight) || 400
      const bg = backdrop(el)
      const fg = over(resolve(style.color), bg)
      const l1 = lum(fg)
      const l2 = lum(bg)
      const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
      const large = size >= 24 || (size >= 18.66 && weight >= 700)
      const need = large ? 3 : 4.5
      if (ratio < need) {
        out.push(
          `${ratio.toFixed(2)} < ${need} :: ${el.tagName.toLowerCase()} "${el.textContent.trim().slice(0, 40)}" ${size}px/${weight} fg=rgb(${fg.slice(0, 3).map(Math.round)}) bg=rgb(${bg.slice(0, 3).map(Math.round)})`,
        )
      }
    }
    return out
  })

  for (const f of failures) report.push(`${theme} ${f}`)
  await context.close()
}

await browser.close()
console.log(report.length ? [...new Set(report)].join('\n') : 'contrast: all sampled text passes AA in both themes')
