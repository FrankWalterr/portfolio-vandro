import { motion } from 'framer-motion'
import { ExternalLink, Github, ImageIcon } from 'lucide-react'
import SectionHeading, { fadeUp } from './SectionHeading'
import { PROJECTS, CONTACT } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'

function ProjectImagePlaceholder({ domain, featured }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-deep-raised ${
        featured ? 'aspect-[16/10]' : 'aspect-[16/9]'
      }`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-flow/5 via-transparent to-signal/5" />
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#2DD4BF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      <div className="relative flex flex-col items-center gap-2 text-mist-faint">
        <ImageIcon size={featured ? 32 : 24} strokeWidth={1.5} />
        <span className="text-xs font-medium uppercase tracking-wider">{domain}</span>
      </div>
    </div>
  )
}

function ProjectCard({ project, featured = false }) {
  // TODO: cliente deve enviar link do repo + screenshots deste projeto
  const repoUrl = CONTACT.github

  return (
    <article
      className={`card-surface group flex flex-col overflow-hidden transition-colors hover:border-flow/25 ${
        featured ? 'lg:flex-row' : ''
      }`}
    >
      <div className={featured ? 'lg:w-1/2' : ''}>
        <ProjectImagePlaceholder domain={project.domain} featured={featured} />
      </div>

      <div className={`flex flex-1 flex-col p-5 sm:p-6 ${featured ? 'lg:justify-center' : ''}`}>
        {featured && (
          <span className="mb-2 w-fit rounded-full bg-signal/10 px-2.5 py-0.5 text-xs font-semibold text-signal">
            Destaque
          </span>
        )}

        <h3 className="font-display text-lg font-semibold text-mist sm:text-xl">
          {project.name}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-muted">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5" role="list" aria-label="Tecnologias">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <span className="chip text-[11px]">{tech}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-flow transition-colors hover:text-flow-dim"
            aria-label={`Ver código de ${project.name} no GitHub`}
          >
            <Github size={16} />
            GitHub
          </a>
          <span className="inline-flex items-center gap-1.5 text-sm text-mist-faint">
            <ExternalLink size={16} />
            Demo em breve
          </span>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const reduced = useReducedMotion()
  const featured = PROJECTS.filter((p) => p.featured)
  const others = PROJECTS.filter((p) => !p.featured)

  return (
    <section id="projetos" className="section-padding" aria-labelledby="projects-heading">
      <div className="section-container">
        <SectionHeading
          label="Projetos"
          title="O que construí"
          description="Sistemas reais para contextos académicos, hoteleiros, logísticos e analíticos — cada um resolve um fluxo concreto."
        />

        <div className="space-y-6">
          {featured.map((project, i) => (
            <motion.div key={project.id} {...fadeUp(reduced, i * 0.1)}>
              <ProjectCard project={project} featured />
            </motion.div>
          ))}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((project, i) => (
              <motion.div key={project.id} {...fadeUp(reduced, 0.2 + i * 0.08)}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
