import { contact } from '../config'
import type { Strings } from '../i18n/strings'

export function Footer({ t }: { t: Strings }) {
  const year = new Date().getFullYear()

  return (
    <footer className="shell flex flex-col gap-6 py-12 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="text-[16px] font-extrabold text-ink">{t.footer.name}</div>
        <p className="mt-1 text-[13.5px] text-ink-soft">{t.footer.tagline}</p>
      </div>

      <div className="text-[12.5px] text-ink-faint sm:text-right">
        <a
          href={contact.url}
          target="_blank"
          rel="noreferrer noopener"
          className="font-semibold text-ink-soft transition-colors hover:text-ink"
        >
          @{contact.telegram}
        </a>
        <p className="tabular mt-2">
          {year} {t.footer.name}. {t.footer.rights}.
        </p>
        <p className="mt-1">{t.footer.built}</p>
      </div>
    </footer>
  )
}
