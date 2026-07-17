import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import SectionHeading, { fadeUp } from './SectionHeading'
import { ABOUT_PARAGRAPHS, EXPERIENCE_SUMMARY } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useGlowHandlers } from '../hooks/useGlowHandlers'

export default function About() {
  const reduced = useReducedMotion()
  const { onMouseMove, onMouseLeave } = useGlowHandlers()

  return (
    <section id="sobre" className="section-padding border-t border-deep-border/50" aria-labelledby="about-heading">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionHeading label="Sobre mim" title="De ideias a sistemas funcionais" />
          </div>

          <div className="space-y-6 lg:col-span-3">
            {ABOUT_PARAGRAPHS.map((paragraph, i) => (
              <motion.p
                key={i}
                {...fadeUp(reduced, i * 0.1)}
                className="text-base leading-relaxed text-mist-muted sm:text-lg"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div
              initial={reduced ? {} : { opacity: 0, x: 50, rotateY: -8 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1, type: 'spring', stiffness: 160 }}
              whileHover={reduced ? {} : { y: -6, scale: 1.015 }}
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
              className="about-card glow-card group relative mt-8 overflow-hidden border-l-2 border-l-flow p-5 sm:p-6"
              style={{ perspective: 800 }}
            >
              {!reduced && (
                <>
                  <motion.div
                    className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-flow via-signal to-flow"
                    animate={{ opacity: [0.3, 1, 0.3], scaleY: [0.85, 1, 0.85] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                    aria-hidden="true"
                  />
                  <motion.div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-flow/10 to-transparent"
                    animate={{ x: ['-130%', '230%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
                    aria-hidden="true"
                  />
                  <motion.div
                    className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-flow/5 blur-2xl"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    aria-hidden="true"
                  />
                </>
              )}

              <div className="relative z-[1]">
                <div className="mb-3 flex items-center gap-2">
                  <motion.div
                    animate={reduced ? {} : { rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Sparkles size={16} className="text-flow" aria-hidden="true" />
                  </motion.div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-flow">Experiência prática</p>
                </div>
                <p className="text-sm leading-relaxed text-mist-muted transition-colors duration-300 group-hover:text-mist">
                  {EXPERIENCE_SUMMARY}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
