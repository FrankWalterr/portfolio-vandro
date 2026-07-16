import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import ConnectionGraph from './ConnectionGraph'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Hero() {
  const reduced = useReducedMotion()

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduced ? 0 : 0.12 },
    },
  }

  const item = {
    hidden: reduced ? {} : { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-16"
      aria-label="Introdução"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-60" />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-flow/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-1/4 h-80 w-80 rounded-full bg-signal/5 blur-3xl" />

      <div className="section-container relative flex min-h-[calc(100vh-4rem)] flex-col justify-center py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p
              variants={item}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-deep-border bg-deep-raised/50 px-4 py-1.5 text-sm text-mist-muted"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-flow" />
              Disponível para emprego &amp; estágio · Moçambique
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display text-display-xl font-bold text-mist"
            >
              Sistemas que ligam{' '}
              <span className="bg-gradient-to-r from-flow to-signal bg-clip-text text-transparent">
                pessoas, processos e dados
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-lg leading-relaxed text-mist-muted"
            >
              Desenvolvedor de Software — APIs REST, aplicações web e bases de dados
              para contextos académicos, hoteleiros, logísticos e analíticos.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <a href="#projetos" className="btn-primary">
                Ver projetos
                <ArrowDown size={16} />
              </a>
              <a href="#contacto" className="btn-secondary">
                <Mail size={16} />
                Contactar
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-12 flex flex-wrap gap-6 border-t border-deep-border pt-8"
            >
              {[
                { value: '5+', label: 'Projetos completos' },
                { value: 'Java · React · FastAPI', label: 'Stack principal' },
                { value: 'UCM – FEG', label: 'Formação' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-lg font-semibold text-mist">{stat.value}</p>
                  <p className="text-xs text-mist-faint">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduced ? {} : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto w-full max-w-lg lg:max-w-none"
          >
            <ConnectionGraph />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
