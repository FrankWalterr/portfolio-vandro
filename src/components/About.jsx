import { motion } from 'framer-motion'
import SectionHeading, { fadeUp } from './SectionHeading'
import { ABOUT_PARAGRAPHS, EXPERIENCE_SUMMARY } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function About() {
  const reduced = useReducedMotion()

  return (
    <section id="sobre" className="section-padding border-t border-deep-border/50" aria-labelledby="about-heading">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionHeading
              label="Sobre mim"
              title="De ideias a sistemas funcionais"
            />
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
              {...fadeUp(reduced, 0.35)}
              className="card-surface mt-8 border-l-2 border-l-flow p-5 sm:p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-flow">
                Experiência prática
              </p>
              <p className="mt-2 text-sm leading-relaxed text-mist-muted">
                {EXPERIENCE_SUMMARY}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
