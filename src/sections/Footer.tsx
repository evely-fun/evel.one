import type { Strings } from '../i18n/strings'
import { Glyph } from '../ui/icons'

export function Footer({ t }: { t: Strings }) {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-rule-strong py-10">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[16px] font-semibold">{t.footer.name}</p>
          <p className="mt-1 text-[15px] text-ink-3">{t.footer.tagline}</p>
        </div>

        <div className="text-[13.5px] text-ink-3 sm:text-right">
          <p className="mono">
            {year} {t.footer.name}. {t.footer.rights}.
          </p>
          <p className="mt-1">{t.footer.built}</p>
          <a href="#top" className="link-doc mt-3 inline-flex items-center gap-1.5 text-ink-2">
            {t.ui.toTop}
            <Glyph name="arrowUpRight" size={13} />
          </a>
        </div>
      </div>
    </footer>
  )
}
