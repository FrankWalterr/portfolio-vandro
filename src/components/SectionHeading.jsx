import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function SectionHeading({ label, title, description, align = 'left' }) {
  const reduced = useReducedMotion()
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <motion.header
      className={`mb-12 max-w-2xl ${alignClass}`}
      initial={reduced ? {} : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      {label && (
        <p className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-flow">
          {label}
        </p>
      )}
      <h2 className="font-display text-display-lg font-bold text-mist">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-mist-muted">{description}</p>
      )}
    </motion.header>
  )
}

export function fadeUp(reduced, delay = 0) {
  if (reduced) return {}
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.45, delay },
  }
}
