import { discordInvite } from '../config'
import type { Strings } from '../i18n/strings'
import { Glyph } from '../ui/icons'
import { Reveal, RevealList, SectionHead, Shot, Tag } from '../ui/kit'

export function Projects({ t }: { t: Strings }) {
  return (
    <section id="projects">
      <SectionHead n={t.projects.n} id="projects" title={t.projects.title} lead={t.projects.lead} />

      <div className="mt-12 flex flex-col gap-14 sm:gap-16">
        {t.projects.items.map((project) => (
          <article key={project.n} className="border-t border-rule pt-7">
            <Reveal>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="label text-accent">{project.n}</span>
                <h3 className="text-[clamp(1.1875rem,2.2vw,1.5rem)] font-semibold">{project.name}</h3>
                <span className="label text-ink-3">{project.kind}</span>
              </div>

              <p className="measure mt-4 text-[16px] leading-relaxed text-ink-2">{project.body}</p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </Reveal>

            {project.shots.length > 0 && (
              <RevealList className="mt-8 grid max-w-3xl gap-6 sm:grid-cols-2 sm:gap-8">
                {project.shots.map((shot) => (
                  <Shot key={shot.src} src={shot.src} caption={shot.caption} />
                ))}
              </RevealList>
            )}

            {'link' in project && project.link && discordInvite && (
              <Reveal>
                <a
                  href={discordInvite}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-doc mt-6 inline-flex items-center gap-2 text-[16px] font-medium"
                >
                  {project.link}
                  <Glyph name="arrowUpRight" size={15} />
                </a>
              </Reveal>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
