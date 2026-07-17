import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import SectionHeading, { fadeUp } from './SectionHeading'
import { TIMELINE, EDUCATION } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useGlowHandlers } from '../hooks/useGlowHandlers'

function TimelineEntry({ item, index, reduced }) {
  const isLeft = index % 2 === 0
  const { onMouseMove, onMouseLeave } = useGlowHandlers()

  return (
    <motion.li
      initial={reduced ? {} : { opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 180 }}
      className="relative"
      style={{ paddingTop: index === 0 ? '2rem' : '5rem' }}
    >
      {/* Ano no eixo central — desktop */}
      <div className="absolute left-1/2 top-8 z-20 hidden -translate-x-1/2 md:block">
        <motion.div
          whileHover={reduced ? {} : { scale: 1.08 }}
          className={`flex h-[3.75rem] w-[4.5rem] items-center justify-center rounded-2xl border-2 font-display text-xl font-bold backdrop-blur-md ${
            item.current
              ? 'border-flow bg-flow/10 text-flow shadow-[0_0_28px_rgba(45,212,191,0.4)]'
              : 'border-deep-border bg-deep-card text-mist-faint'
          }`}
        >
          {item.year}
        </motion.div>
      </div>

      {/* Conector horizontal */}
      <div
        className={`absolute top-[3.25rem] hidden h-px md:block ${
          isLeft
            ? 'right-[calc(50%+2.5rem)] left-0 bg-gradient-to-r from-transparent via-flow/30 to-flow/50'
            : 'left-[calc(50%+2.5rem)] right-0 bg-gradient-to-l from-transparent via-flow/30 to-flow/50'
        }`}
        aria-hidden="true"
      />

      {/* Card alternado esquerda / direita */}
      <motion.div
        whileHover={reduced ? {} : { y: -5, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 400, damping: 22 }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={`glow-card relative w-full md:w-[44%] ${
          isLeft ? 'md:mr-[56%]' : 'md:ml-[56%]'
        }`}
      >
        <span
          className={`mb-3 block font-display text-3xl font-bold md:hidden ${
            item.current ? 'text-flow' : 'text-mist-faint'
          }`}
        >
          {item.year}
        </span>

        <div className="relative z-[1] p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-base font-semibold text-mist sm:text-lg">{item.title}</h3>
            {item.current && (
              <span className="rounded-full bg-signal/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-signal">
                Actual
              </span>
            )}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-mist-muted">{item.description}</p>
        </div>
      </motion.div>
    </motion.li>
  )
}

export default function Timeline() {
  const reduced = useReducedMotion()
  const { onMouseMove, onMouseLeave } = useGlowHandlers()

  return (
    <section id="percurso" className="section-padding bg-deep-raised/30" aria-labelledby="timeline-heading">
      <div className="section-container">
        <SectionHeading
          label="Percurso"
          title="Experiência & formação"
          description="Evolução técnica desde 2023 — cada ano com entregas concretas e novas competências."
        />

        <motion.div
          {...fadeUp(reduced)}
          whileHover={reduced ? {} : { y: -3 }}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className="glow-card mb-20 flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6"
        >
          <motion.div
            animate={reduced ? {} : { rotate: [0, 6, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-flow/10 text-flow"
          >
            <GraduationCap size={24} />
          </motion.div>
          <div className="relative z-[1]">
            <p className="font-display text-lg font-semibold text-mist">{EDUCATION.degree}</p>
            <p className="text-sm text-mist-muted">{EDUCATION.institution}</p>
            <span className="mt-2 inline-block rounded-full bg-flow/10 px-3 py-0.5 text-xs font-semibold text-flow">
              {EDUCATION.status}
            </span>
          </div>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div
            className="absolute bottom-0 left-1/2 top-0 hidden w-0.5 -translate-x-1/2 md:block"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(45,212,191,0.35) 20%, rgba(45,212,191,0.35) 80%, transparent)',
            }}
            aria-hidden="true"
          />
          <ol className="relative" role="list">
            {TIMELINE.map((item, i) => (
              <TimelineEntry key={item.year} item={item} index={i} reduced={reduced} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
