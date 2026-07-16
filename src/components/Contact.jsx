import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react'
import SectionHeading, { fadeUp } from './SectionHeading'
import { CONTACT } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useGlowHandlers } from '../hooks/useGlowHandlers'

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

function ContactCard({ link, delay, reduced }) {
  const Icon = link.icon
  const { onMouseMove, onMouseLeave } = useGlowHandlers()

  const content = (
    <motion.div
      {...fadeUp(reduced, delay)}
      whileHover={{ x: 4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="glow-card flex items-center gap-4 p-4 sm:p-5"
    >
      <div className="relative z-[1] flex w-full items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-flow/10 text-flow transition-shadow duration-300 group-hover:shadow-glow-sm">
          <Icon size={20} />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-mist-faint">
            {link.label}
          </p>
          <p className="truncate text-sm font-semibold text-mist">{link.value}</p>
        </div>
      </div>
    </motion.div>
  )

  if (link.href) {
    return (
      <a
        href={link.href}
        {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="group block focus-visible:rounded-xl"
      >
        {content}
      </a>
    )
  }

  return content
}

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

          <div className="space-y-4">
            {LINKS.map((link, i) => (
              <ContactCard key={link.label} link={link} delay={i * 0.08} reduced={reduced} />
            ))}

            <motion.div {...fadeUp(reduced, 0.4)} className="pt-4">
              <a href={`mailto:${CONTACT.email}`} className="btn-primary w-full sm:w-auto">
                <Send size={16} />
                Enviar email
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
