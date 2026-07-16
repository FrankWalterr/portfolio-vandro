import { motion } from 'framer-motion'
import { Target, ArrowRight } from 'lucide-react'
import SectionHeading, { fadeUp } from './SectionHeading'
import { CERTIFICATION_GOALS } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Certifications() {
  const reduced = useReducedMotion()

  return (
    <section id="certificacoes" className="section-padding" aria-labelledby="certs-heading">
      <div className="section-container">
        <SectionHeading
          label="Certificações"
          title="Próximo marco"
          description="Ainda sem certificações formais — mas com objectivos definidos para validar competências em cloud, redes e dados."
        />

        <motion.div
          {...fadeUp(reduced)}
          className="card-surface overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-deep-border p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signal">
                  <Target size={22} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-mist">
                    A construir credenciais verificáveis
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-muted">
                    {/* TODO: cliente deve adicionar certificações quando obtidas */}
                    A experiência vem de projetos reais. As certificações abaixo são metas
                    activas para complementar o portfólio com validação industry-standard.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-mist-faint">
                Objectivos 2026
              </p>
              <ul className="space-y-3" role="list">
                {CERTIFICATION_GOALS.map((goal, i) => (
                  <motion.li
                    key={goal.provider}
                    {...fadeUp(reduced, 0.1 + i * 0.06)}
                    className="flex items-center justify-between rounded-lg border border-deep-border/60 bg-deep-raised/40 px-4 py-3 transition-colors hover:border-flow/20"
                  >
                    <div>
                      <p className="text-sm font-semibold text-mist">{goal.provider}</p>
                      <p className="text-xs text-mist-faint">{goal.focus}</p>
                    </div>
                    <ArrowRight size={16} className="text-mist-faint" aria-hidden="true" />
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
