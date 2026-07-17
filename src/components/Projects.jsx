import { motion } from 'framer-motion'
import { Clapperboard, Code2, ImageIcon } from 'lucide-react'
import SectionHeading, { fadeUp } from './SectionHeading'
import { PROJECTS, PROJECT_CATEGORIES } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useGlowHandlers } from '../hooks/useGlowHandlers'

const ACCENT = {
  software: {
    badge: 'bg-flow/10 text-flow',
    icon: Code2,
    hover: 'group-hover:text-flow',
    gradient: 'from-flow/10 via-flow/5 to-transparent',
    bar: 'bg-flow',
  },
  audiovisual: {
    badge: 'bg-signal/10 text-signal',
    icon: Clapperboard,
    hover: 'group-hover:text-signal',
    gradient: 'from-signal/10 via-signal/5 to-transparent',
    bar: 'bg-signal',
  },
}

function ProjectImagePlaceholder({ domain, categoryId }) {
  const accent = ACCENT[categoryId]

  return (
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-deep-raised" aria-hidden="true">
      <div className={`absolute inset-0 bg-gradient-to-br opacity-90 transition-transform duration-700 group-hover:scale-110 ${accent.gradient}`} />
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle, ${categoryId === 'software' ? 'rgba(45,212,191,0.18)' : 'rgba(245,158,11,0.18)'}, transparent 70%)`,
        }}
      />
      <div className={`relative flex flex-col items-center gap-1.5 transition-all duration-300 group-hover:scale-110 ${accent.hover} text-mist-faint`}>
        <ImageIcon size={22} strokeWidth={1.5} />
        <span className="text-[9px] font-bold uppercase tracking-widest">{domain}</span>
      </div>
    </div>
  )
}

function ProjectCard({ project, index, reduced }) {
  const { onMouseMove, onMouseLeave } = useGlowHandlers()
  const accent = ACCENT[project.category]
  const Icon = accent.icon

  return (
    <motion.article
      initial={reduced ? {} : { opacity: 0, y: 32, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.05, type: 'spring', stiffness: 200 }}
      whileHover={reduced ? {} : { y: -8, scale: 1.025 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="glow-card group flex h-full flex-col overflow-hidden"
    >
      <div className={`h-0.5 w-0 transition-all duration-500 group-hover:w-full ${accent.bar}`} />

      <ProjectImagePlaceholder domain={project.domain} categoryId={project.category} />

      <div className="relative z-[1] flex flex-1 flex-col p-4 sm:p-5">
        <span className={`mb-2 inline-flex w-fit items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${accent.badge}`}>
          <Icon size={10} aria-hidden="true" />
          {project.category === 'software' ? 'Software' : 'Audiovisual'}
        </span>

        <h3 className={`font-display text-sm font-semibold leading-snug text-mist transition-colors duration-300 sm:text-base ${accent.hover}`}>
          {project.name}
        </h3>

        <p className="mt-2 flex-1 text-xs leading-relaxed text-mist-muted transition-colors duration-300 group-hover:text-mist/85 sm:text-sm">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5" role="list" aria-label="Tecnologias">
          {project.technologies.map((tech, i) => (
            <motion.li
              key={tech}
              initial={reduced ? {} : { opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.04 }}
            >
              <span className="chip text-[9px] transition-all duration-300 group-hover:border-flow/30 group-hover:text-mist sm:text-[10px]">
                {tech}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

function ProjectGroup({ category, projects, startDelay, reduced, isFirst, startIndex }) {
  const Icon = ACCENT[category.id].icon

  return (
    <div className={isFirst ? '' : 'border-t border-deep-border/50 pt-14'}>
      <motion.div
        {...fadeUp(reduced, startDelay)}
        className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
      >
        <div className="flex items-center gap-3">
          <motion.div whileHover={{ rotate: 8, scale: 1.1 }} transition={{ type: 'spring', stiffness: 400 }}>
            <Icon size={20} className={category.id === 'software' ? 'text-flow' : 'text-signal'} aria-hidden="true" />
          </motion.div>
          <div>
            <h3 className="font-display text-xl font-semibold text-mist sm:text-2xl">{category.title}</h3>
            <p className="mt-0.5 text-sm text-mist-muted">{category.subtitle}</p>
          </div>
        </div>
        <span className={`text-xs font-semibold uppercase tracking-widest ${category.id === 'software' ? 'text-flow' : 'text-signal'}`}>
          {projects.length} projectos
        </span>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-5">
        {projects.map((project, i) => (
          <div key={project.id} className="h-full">
            <ProjectCard project={project} index={startIndex + i} reduced={reduced} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const reduced = useReducedMotion()

  const grouped = PROJECT_CATEGORIES.map((cat) => ({
    category: cat,
    projects: PROJECTS.filter((p) => p.category === cat.id),
  }))

  let runningIndex = 0

  return (
    <section id="projetos" className="section-padding" aria-labelledby="projects-heading">
      <div className="section-container">
        <SectionHeading
          label="Projetos"
          title="O que construí"
          description="Software e produção audiovisual organizados por área, com entregas concretas em cada card."
        />

        <div>
          {grouped.map(({ category, projects }, i) => {
            const startIndex = runningIndex
            runningIndex += projects.length
            return (
              <ProjectGroup
                key={category.id}
                category={category}
                projects={projects}
                startDelay={i * 0.12}
                reduced={reduced}
                isFirst={i === 0}
                startIndex={startIndex}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
