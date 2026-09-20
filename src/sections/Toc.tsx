import type { Strings } from '../i18n/strings'

export function Toc({ t, active }: { t: Strings; active: string }) {
  return (
    <aside className="hidden lg:block">
      <nav className="sticky top-24">
        <p className="label text-ink-3">{t.ui.contents}</p>
        <ol className="mt-4 border-l border-rule">
          {t.contents.items.map((item) => {
            const on = active === item.id
            return (
              <li key={item.id} className="relative">
                {on && <span className="absolute inset-y-0 -left-px w-px bg-accent" />}
                <a
                  href={`#${item.id}`}
                  className={`flex items-baseline gap-2.5 py-1.5 pl-4 text-[14px] leading-snug transition-colors ${
                    on ? 'text-accent' : 'text-ink-3 hover:text-ink'
                  }`}
                >
                  <span className="mono text-[11px]">{item.n}</span>
                  {item.label}
                </a>
              </li>
            )
          })}
        </ol>
      </nav>
    </aside>
  )
}
