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
    gradient: 'from-flow/8 via-transparent to-signal/5',
    dot: '#2DD4BF',
  },
  audiovisual: {
    badge: 'bg-signal/10 text-signal',
    icon: Clapperboard,
    hover: 'group-hover:text-signal',
    gradient: 'from-signal/8 via-transparent to-flow/5',
    dot: '#F59E0B',
  },
}

function ProjectImagePlaceholder({ domain, categoryId }) {
  const accent = ACCENT[categoryId]

  return (
    <div
      className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-deep-raised"
      aria-hidden="true"
    >
      <div className={`absolute inset-0 bg-gradient-to-br opacity-80 ${accent.gradient}`} />
      <div className="absolute inset-0 opacity-15">
        <svg width="100%" height="100%">
          <defs>
            <pattern id={`dots-${domain}-${categoryId}`} x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.7" fill={accent.dot} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#dots-${domain}-${categoryId})`} />
        </svg>
      </div>
      <div className={`relative flex flex-col items-center gap-1 text-mist-faint transition-colors duration-300 ${accent.hover}`}>
        <ImageIcon size={20} strokeWidth={1.5} />
        <span className="text-[9px] font-bold uppercase tracking-widest">{domain}</span>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  const { onMouseMove, onMouseLeave } = useGlowHandlers()
  const accent = ACCENT[project.category]
  const Icon = accent.icon

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="glow-card group flex h-full flex-col overflow-hidden"
    >
      <ProjectImagePlaceholder domain={project.domain} categoryId={project.category} />

      <div className="relative z-[1] flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${accent.badge}`}>
            <Icon size={10} aria-hidden="true" />
            {project.category === 'software' ? 'Software' : 'Audiovisual'}
          </span>
        </div>

        <h3 className={`font-display text-sm font-semibold leading-snug text-mist transition-colors duration-300 sm:text-base ${accent.hover}`}>
          {project.name}
        </h3>

        <p className="mt-2 flex-1 text-xs leading-relaxed text-mist-muted sm:text-sm">
          {project.description}
        </p>

        <ul className="mt-3 flex flex-wrap gap-1" role="list" aria-label="Tecnologias">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <span className="chip text-[9px] sm:text-[10px]">{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

function ProjectRow({ projects, categoryId, startDelay, reduced }) {
  const rows = []
  for (let i = 0; i < projects.length; i += 3) {
    rows.push(projects.slice(i, i + 3))
  }

  return (
    <div className="space-y-4">
      {rows.map((row, rowIndex) => {
        const isPartialRow = row.length < 3
        const colClass =
          row.length === 1
            ? 'grid-cols-1 max-w-sm mx-auto'
            : row.length === 2
              ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'

        return (
          <div
            key={`${categoryId}-row-${rowIndex}`}
            className={`grid gap-4 xl:gap-5 ${colClass} ${isPartialRow ? 'w-full' : ''}`}
          >
            {row.map((project, i) => (
              <motion.div
                key={project.id}
                {...fadeUp(reduced, startDelay + rowIndex * 0.1 + i * 0.05)}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        )
      })}
    </div>
  )
}

function ProjectGroup({ category, projects, startDelay, reduced }) {
  const accent = ACCENT[category.id]
  const Icon = accent.icon

  return (
    <div className="rounded-2xl border border-deep-border/60 bg-deep-raised/20 p-5 sm:p-6 lg:p-8">
      <motion.div
        {...fadeUp(reduced, startDelay)}
        className="mb-6 flex flex-col gap-3 border-b border-deep-border/80 pb-5 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex items-start gap-3">
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${accent.badge}`}>
            <Icon size={18} aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-mist sm:text-xl">{category.title}</h3>
            <p className="mt-0.5 text-sm text-mist-muted">{category.subtitle}</p>
          </div>
        </div>
        <span className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${accent.badge}`}>
          {projects.length} projectos
        </span>
      </motion.div>

      <ProjectRow
        projects={projects}
        categoryId={category.id}
        startDelay={startDelay + 0.08}
        reduced={reduced}
      />
    </div>
  )
}

export default function Projects() {
  const reduced = useReducedMotion()

  const grouped = PROJECT_CATEGORIES.map((cat) => ({
    category: cat,
    projects: PROJECTS.filter((p) => p.category === cat.id),
  }))

  return (
    <section id="projetos" className="section-padding" aria-labelledby="projects-heading">
      <div className="section-container">
        <SectionHeading
          label="Projetos"
          title="O que construí"
          description="Software e produção audiovisual — organizados por área, com entregas concretas em cada card."
        />

        <div className="space-y-8">
          {grouped.map(({ category, projects }, i) => (
            <ProjectGroup
              key={category.id}
              category={category}
              projects={projects}
              startDelay={i * 0.12}
              reduced={reduced}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
