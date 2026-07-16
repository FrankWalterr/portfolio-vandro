import { motion } from 'framer-motion'
import SectionHeading, { fadeUp } from './SectionHeading'
import { DEV_STACK, DESIGN_STACK } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useGlowHandlers } from '../hooks/useGlowHandlers'

const DEV_ICONS = {
  Linguagens: '{ }',
  Frameworks: '⚙',
  'Bases de Dados': '◫',
  Ferramentas: '⬡',
  'Outras tecnologias': '↔',
}

const DESIGN_ICONS = {
  Competências: '◈',
  Ferramentas: '✦',
}

function StackCard({ category, items, icon, delay, reduced }) {
  const { onMouseMove, onMouseLeave } = useGlowHandlers()

  return (
    <motion.article
      {...fadeUp(reduced, delay)}
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="glow-card group p-5 sm:p-6"
    >
      <div className="relative z-[1]">
        <div className="mb-4 flex items-center gap-3">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-flow/10 font-mono text-sm text-flow transition-shadow duration-300 group-hover:shadow-glow-sm"
            aria-hidden="true"
          >
            {icon}
          </span>
          <h4 className="font-display text-base font-semibold text-mist transition-colors duration-300 group-hover:text-flow">
            {category}
          </h4>
        </div>

        <ul className="flex flex-wrap gap-2" role="list">
          {items.map((tech) => (
            <li key={tech}>
              <span className="chip transition-all duration-300 group-hover:border-flow/25 group-hover:text-mist">
                {tech}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

function StackGroup({ title, subtitle, stack, icons, startDelay, reduced }) {
  const categories = Object.entries(stack)

  return (
    <div>
      <div className="mb-6">
        <h3 className="font-display text-display-md font-semibold text-mist">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-mist-muted">{subtitle}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(([category, items], catIndex) => (
          <StackCard
            key={category}
            category={category}
            items={items}
            icon={icons[category] || '·'}
            delay={startDelay + catIndex * 0.06}
            reduced={reduced}
          />
        ))}
      </div>
    </div>
  )
}

export default function Stack() {
  const reduced = useReducedMotion()

  return (
    <section id="stack" className="section-padding bg-deep-raised/30" aria-labelledby="stack-heading">
      <div className="section-container">
        <SectionHeading
          label="Stack técnico"
          title="Ferramentas por domínio"
          description="Competências de desenvolvimento e de design/audiovisual — agrupadas por área de actuação."
        />

        <div className="space-y-14">
          <StackGroup
            title="Desenvolvimento de software"
            subtitle="Da linguagem base à integração em produção."
            stack={DEV_STACK}
            icons={DEV_ICONS}
            startDelay={0}
            reduced={reduced}
          />

          <StackGroup
            title="Design & audiovisual"
            subtitle="Conteúdos visuais, identidade de marca e produção multimédia."
            stack={DESIGN_STACK}
            icons={DESIGN_ICONS}
            startDelay={0.15}
            reduced={reduced}
          />
        </div>
      </div>
    </section>
  )
}
