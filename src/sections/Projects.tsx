import type { Strings } from '../i18n/strings'
import { Glyph } from '../ui/icons'
import { Reveal, RevealList, SectionHead, Shot, Tag } from '../ui/kit'

export function Projects({ t }: { t: Strings }) {
  return (
    <section id="projects">
      <SectionHead n={t.projects.n} id="projects" title={t.projects.title} lead={t.projects.lead} />

      <div className="mt-14 flex flex-col gap-16 sm:gap-20">
        {t.projects.items.map((project) => {
          const wide = project.shots.length > 2
          return (
          <article
            key={project.n}
            className={`grid gap-8 border-t border-rule pt-8 ${
              wide ? 'xl:gap-10' : 'xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:gap-16'
            }`}
          >
            <Reveal className={wide ? '' : 'xl:sticky xl:top-28 xl:self-start xl:pt-2'}>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <span className="mono text-[clamp(1rem,1.5vw,1.375rem)] font-extrabold text-accent">{project.n}</span>
                <h3 className="text-[clamp(1.3125rem,2.2vw,1.875rem)]">{project.name}</h3>
              </div>

              <p className="label mt-3 text-ink-3">{project.kind}</p>

              <p className="measure mt-5 text-[clamp(1rem,1.15vw,1.125rem)] leading-relaxed text-ink-2">
                {project.body}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>

              {project.url && project.link && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="ui link-doc mt-7 inline-flex items-center gap-2 text-[16px] font-bold"
                >
                  {project.link}
                  <Glyph name="arrowUpRight" size={15} />
                </a>
              )}
            </Reveal>

            {project.shots.length > 0 && (
              <RevealList
                className={`flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:grid sm:gap-8 sm:overflow-visible sm:pb-0 ${
                  wide ? 'sm:grid-cols-2 xl:grid-cols-3' : 'sm:grid-cols-2'
                }`}
              >
                {project.shots.map((shot) => (
                  <Shot key={shot.src} src={shot.src} caption={shot.caption} />
                ))}
              </RevealList>
            )}
          </article>
          )
        })}
      </div>
    </section>
  )
}
