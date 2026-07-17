import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function HeroBackground() {
  const reduced = useReducedMotion()

  const float = (duration, delay = 0) =>
    reduced
      ? {}
      : {
          animate: {
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.08, 0.95, 1],
          },
          transition: { duration, delay, repeat: Infinity, ease: 'easeInOut' },
        }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Base depth gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-[#0d1828] to-deep" />

      {/* Ambient colour wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(45,212,191,0.09),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_50%,rgba(245,158,11,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_0%_80%,rgba(45,212,191,0.05),transparent_45%)]" />

      {/* Floating orbs */}
      <motion.div
        {...float(18, 0)}
        className="absolute -left-24 top-[15%] h-[420px] w-[420px] rounded-full bg-flow/[0.07] blur-[100px]"
      />
      <motion.div
        {...float(22, 2)}
        className="absolute -right-20 top-[30%] h-[380px] w-[380px] rounded-full bg-signal/[0.06] blur-[90px]"
      />
      <motion.div
        {...float(26, 4)}
        className="absolute bottom-[10%] left-[35%] h-[320px] w-[320px] rounded-full bg-flow/[0.05] blur-[80px]"
      />

      {/* Soft light beam behind headline */}
      <motion.div
        {...float(20, 1)}
        className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.12)_0%,transparent_70%)] blur-2xl"
      />

      {/* Subtle film grain */}
      <div className="hero-noise absolute inset-0 opacity-[0.035]" />

      {/* Edge vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(11,20,32,0.4)_100%)]" />
    </div>
  )
}
