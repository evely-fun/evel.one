import { chromium } from 'playwright'
import { cp } from 'node:fs/promises'

const exe = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'
const browser = await chromium.launch({ executablePath: exe })

await cp('qa/gen/og.html', 'public/__og.html')

const og = await browser.newContext({ viewport: { width: 1200, height: 630 } })
const ogPage = await og.newPage()
await ogPage.goto('http://127.0.0.1:5174/__og.html', { waitUntil: 'networkidle' })
await ogPage.evaluate(() => document.fonts.ready)
await ogPage.waitForTimeout(400)
await ogPage.screenshot({ path: 'public/og.png' })
await og.close()

const icon = await browser.newContext({ viewport: { width: 180, height: 180 }, deviceScaleFactor: 1 })
const iconPage = await icon.newPage()
await iconPage.goto('http://127.0.0.1:5174/favicon.svg', { waitUntil: 'networkidle' })
await iconPage.evaluate(() => {
  document.documentElement.style.background = '#1a84f7'
  const svg = document.querySelector('svg')
  if (svg) {
    svg.setAttribute('width', '180')
    svg.setAttribute('height', '180')
  }
})
await iconPage.screenshot({ path: 'public/apple-touch-icon.png' })
await icon.close()

await browser.close()
console.log('rendered og.png and apple-touch-icon.png')
