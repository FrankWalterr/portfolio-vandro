import { motion } from 'framer-motion'
import SectionHeading, { fadeUp } from './SectionHeading'
import { STACK } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'

const CATEGORY_ICONS = {
  Linguagens: '{ }',
  Frameworks: '⚙',
  'Bases de Dados': '◫',
  Ferramentas: '⬡',
  'Outras tecnologias': '↔',
}

export default function Stack() {
  const reduced = useReducedMotion()
  const categories = Object.entries(STACK)

  return (
    <section id="stack" className="section-padding bg-deep-raised/30" aria-labelledby="stack-heading">
      <div className="section-container">
        <SectionHeading
          label="Stack técnico"
          title="Ferramentas por domínio"
          description="Agrupadas por área de actuação — da linguagem base à integração em produção."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(([category, items], catIndex) => (
            <motion.article
              key={category}
              {...fadeUp(reduced, catIndex * 0.08)}
              className="card-surface group p-5 transition-colors hover:border-flow/30 sm:p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-flow/10 font-mono text-sm text-flow"
                  aria-hidden="true"
                >
                  {CATEGORY_ICONS[category] || '·'}
                </span>
                <h3 className="font-display text-base font-semibold text-mist">{category}</h3>
              </div>

              <ul className="flex flex-wrap gap-2" role="list">
                {items.map((tech) => (
                  <li key={tech}>
                    <span className="chip transition-colors group-hover:border-flow/20 group-hover:text-mist">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
