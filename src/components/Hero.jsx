import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import ConnectionGraph from './ConnectionGraph'
import HeroBackground from './HeroBackground'
import AvailabilityBanner from './AvailabilityBanner'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Hero() {
  const reduced = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.1 } },
  }

  const item = {
    hidden: reduced ? {} : { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-16" aria-label="Introdução">
      <HeroBackground />

      <div className="section-container relative flex min-h-[calc(100vh-4rem)] flex-col justify-center py-16 lg:py-20">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-8 lg:gap-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div variants={item} className="space-y-5">
              <header>
                <h1 className="font-display text-[clamp(2.25rem,5.5vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-mist">
                  Vandro{' '}
                  <span className="bg-gradient-to-r from-flow to-signal bg-clip-text text-transparent">
                    Correia
                  </span>
                </h1>
                <p className="mt-2 font-display text-base font-medium text-mist-muted sm:text-lg">
                  Desenvolvedor de Software
                  <span aria-hidden="true" className="mx-2 text-flow/40">·</span>
                  UX/UI Designer
                </p>
              </header>

              <AvailabilityBanner />

              <p className="max-w-lg text-base leading-relaxed text-mist-muted sm:text-lg">
                Colaborador na Z-Systems (Beira) — construo APIs REST, aplicações web,
                interfaces e conteúdos visuais para negócios reais.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="#projetos" className="btn-primary">
                  Ver projetos
                  <ArrowDown size={16} />
                </a>
                <a href="#contacto" className="btn-secondary">
                  <Mail size={16} />
                  Contactar
                </a>
              </div>

              <div className="flex flex-wrap gap-6 border-t border-deep-border pt-8">
                {[
                  { value: '5+', label: 'Projetos de software' },
                  { value: 'Z-Systems', label: 'UX/UI · Beira' },
                  { value: 'UCM – FEG', label: 'Formação' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-lg font-semibold text-mist">{stat.value}</p>
                    <p className="text-xs text-mist-faint">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={reduced ? {} : { opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mx-auto w-full max-w-md lg:max-w-none"
            >
              <ConnectionGraph />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
