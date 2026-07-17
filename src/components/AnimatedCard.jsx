import { motion } from 'framer-motion'
import { fadeUp, cardHover } from './SectionHeading'

export function AnimatedCard({
  children,
  className = '',
  delay = 0,
  reduced,
  as: Component = motion.div,
  ...props
}) {
  return (
    <Component
      {...fadeUp(reduced, delay)}
      {...cardHover(reduced)}
      className={`glow-card ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
