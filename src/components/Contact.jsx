import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react'
import SectionHeading, { fadeUp } from './SectionHeading'
import { CONTACT } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'

const LINKS = [
  {
    icon: Mail,
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: `@${CONTACT.githubHandle}`,
    href: CONTACT.github,
    external: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Vandro Correia',
    href: CONTACT.linkedin,
    external: true,
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: CONTACT.location,
    href: null,
  },
]

export default function Contact() {
  const reduced = useReducedMotion()

  return (
    <section id="contacto" className="section-padding bg-deep-raised/30" aria-labelledby="contact-heading">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              label="Contacto"
              title="Vamos conversar"
              description="À procura de emprego ou estágio como Desenvolvedor de Software. Aberto a oportunidades em Moçambique, África Austral e remoto."
            />
          </div>

          <motion.div {...fadeUp(reduced)} className="space-y-4">
            {LINKS.map((link, i) => {
              const Icon = link.icon
              const content = (
                <div className="card-surface flex items-center gap-4 p-4 transition-colors hover:border-flow/25 sm:p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-flow/10 text-flow">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-mist-faint">
                      {link.label}
                    </p>
                    <p className="truncate text-sm font-semibold text-mist">{link.value}</p>
                  </div>
                </div>
              )

              if (link.href) {
                return (
                  <motion.div key={link.label} {...fadeUp(reduced, i * 0.08)}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="block focus-visible:rounded-xl"
                    >
                      {content}
                    </a>
                  </motion.div>
                )
              }

              return (
                <motion.div key={link.label} {...fadeUp(reduced, i * 0.08)}>
                  {content}
                </motion.div>
              )
            })}

            <motion.div {...fadeUp(reduced, 0.4)} className="pt-4">
              <a href={`mailto:${CONTACT.email}`} className="btn-primary w-full sm:w-auto">
                <Send size={16} />
                Enviar email
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
