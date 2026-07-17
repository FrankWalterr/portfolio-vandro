import { motion } from 'framer-motion'
import { ExternalLink, MapPin, Palette, Clapperboard } from 'lucide-react'
import SectionHeading, { fadeUp } from './SectionHeading'
import { PROFESSIONAL_ROLES } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useGlowHandlers } from '../hooks/useGlowHandlers'

function RoleCard({ role, index, reduced }) {
  const isZSystems = role.id === 'zsystems'
  const Icon = isZSystems ? Palette : Clapperboard
  const { onMouseMove, onMouseLeave } = useGlowHandlers()

  return (
    <motion.article
      {...fadeUp(reduced, index * 0.12)}
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`glow-card overflow-hidden ${isZSystems ? 'border-signal/20' : ''}`}
    >
      <div className="relative z-[1] p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-shadow duration-300 group-hover:shadow-glow-sm ${
                isZSystems ? 'bg-signal/10 text-signal' : 'bg-flow/10 text-flow'
              }`}
            >
              <Icon size={22} aria-hidden="true" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-lg font-semibold text-mist sm:text-xl">
                  {role.title}
                </h3>
                {role.current && (
                  <span className="rounded-full bg-flow/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-flow">
                    Actual
                  </span>
                )}
              </div>

              {role.company && (
                <p className="mt-0.5 font-medium text-mist-muted">{role.company}</p>
              )}

              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-mist-faint">
                {role.roleType && (
                  <span className="rounded-md bg-deep-raised px-2 py-0.5">{role.roleType}</span>
                )}
                {role.location && (
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} aria-hidden="true" />
                    {role.location}
                  </span>
                )}
              </div>
            </div>
          </div>

          {role.website && (
            <a
              href={role.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 self-start text-sm font-medium text-flow transition-all duration-300 hover:text-flow-dim hover:drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]"
            >
              {role.websiteLabel}
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          )}
        </div>

        <p className="mt-5 text-sm leading-relaxed text-mist-muted">{role.description}</p>

        {role.focus && (
          <p className="mt-3 text-sm leading-relaxed text-mist">{role.focus}</p>
        )}

        {(role.highlights || role.deliverables) && (
          <div className="mt-5 border-t border-deep-border pt-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-mist-faint">
              {isZSystems ? 'Áreas de actuação' : 'Projetos'}
            </p>
            <ul className="grid gap-2 sm:grid-cols-2" role="list">
              {(role.highlights || role.deliverables).map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-mist-muted before:mt-1.5 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-flow/60 before:content-['']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.article>
  )
}

export default function Experience() {
  const reduced = useReducedMotion()

  return (
    <section
      id="experiencia"
      className="section-padding border-t border-deep-border/50"
      aria-labelledby="experience-heading"
    >
      <div className="section-container">
        <SectionHeading
          label="Experiência"
          title="Onde actuo"
          description="Colabodo pixel ação profissional em tecnologia e produção criativa do pixel da interface ao vídeo promocional.da interface ao vídeo promocional."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {PROFESSIONAL_ROLES.map((role, i) => (
            <RoleCard key={role.id} role={role} index={i} reduced={reduced} />
          ))}
        </div>
      </div>
    </section>
  )
}
