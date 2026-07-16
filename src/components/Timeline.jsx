import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import SectionHeading, { fadeUp } from './SectionHeading'
import { TIMELINE, EDUCATION } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Timeline() {
  const reduced = useReducedMotion()

  return (
    <section id="percurso" className="section-padding bg-deep-raised/30" aria-labelledby="timeline-heading">
      <div className="section-container">
        <SectionHeading
          label="Percurso"
          title="Experiência & formação"
          description="Evolução técnica desde 2023 — cada ano com entregas concretas e novas competências."
        />

        {/* Education block */}
        <motion.div
          {...fadeUp(reduced)}
          className="card-surface mb-12 flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-flow/10 text-flow">
            <GraduationCap size={24} />
          </div>
          <div>
            <p className="font-display text-lg font-semibold text-mist">{EDUCATION.degree}</p>
            <p className="text-sm text-mist-muted">{EDUCATION.institution}</p>
            <span className="mt-2 inline-block rounded-full bg-flow/10 px-3 py-0.5 text-xs font-semibold text-flow">
              {EDUCATION.status}
            </span>
          </div>
        </motion.div>

        {/* Desktop vertical timeline */}
        <div className="relative hidden md:block">
          <div className="absolute left-[7.5rem] top-0 h-full w-px bg-deep-border" aria-hidden="true" />

          <ol className="space-y-0" role="list">
            {TIMELINE.map((item, i) => (
              <motion.li
                key={item.year}
                {...fadeUp(reduced, i * 0.12)}
                className="relative grid grid-cols-[6rem_1fr] gap-8 pb-12 last:pb-0"
              >
                <div className="text-right">
                  <span
                    className={`font-display text-2xl font-bold ${
                      item.current ? 'text-flow' : 'text-mist-faint'
                    }`}
                  >
                    {item.year}
                  </span>
                </div>

                <div className="relative pl-8">
                  <span
                    className={`absolute -left-[0.37rem] top-2 h-3 w-3 rounded-full border-2 ${
                      item.current
                        ? 'border-flow bg-flow shadow-[0_0_12px_rgba(45,212,191,0.5)]'
                        : 'border-deep-border bg-deep-card'
                    }`}
                    aria-hidden="true"
                  />

                  <div className="card-surface p-5">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-base font-semibold text-mist">{item.title}</h3>
                      {item.current && (
                        <span className="rounded-full bg-signal/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-signal">
                          Actual
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-mist-muted">{item.description}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Mobile horizontal scroll timeline */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin">
            {TIMELINE.map((item, i) => (
              <motion.article
                key={item.year}
                {...fadeUp(reduced, i * 0.1)}
                className="card-surface min-w-[260px] flex-shrink-0 snap-start p-5"
              >
                <span
                  className={`font-display text-3xl font-bold ${
                    item.current ? 'text-flow' : 'text-mist-faint'
                  }`}
                >
                  {item.year}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold text-mist">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-muted">{item.description}</p>
                {item.current && (
                  <span className="mt-3 inline-block rounded-full bg-signal/10 px-2 py-0.5 text-[10px] font-bold uppercase text-signal">
                    Actual
                  </span>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
