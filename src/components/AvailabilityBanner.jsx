import { motion } from 'framer-motion'
import { MapPin, Briefcase } from 'lucide-react'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function AvailabilityBanner({ variants, className = '' }) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      variants={variants}
      className={`group relative w-full overflow-hidden rounded-2xl ${className}`}
    >
      {!reduced && (
        <motion.div
          className="absolute -inset-[1px] rounded-2xl opacity-70"
          style={{
            background: 'conic-gradient(from 0deg, #2DD4BF, #F59E0B, #2DD4BF)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          aria-hidden="true"
        />
      )}

      <div className="absolute inset-[1px] rounded-2xl bg-deep-card/98 backdrop-blur-xl" />

      <div className="relative px-6 py-6 sm:px-10 sm:py-7">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
          {/* Left: status */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-flow/10">
              <Briefcase size={18} className="text-flow" aria-hidden="true" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  {!reduced && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flow opacity-60" />
                  )}
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-flow shadow-[0_0_8px_rgba(45,212,191,0.9)]" />
                </span>
                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-flow">
                  Disponível
                </span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-mist">para emprego &amp; estágio</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden h-10 w-px bg-gradient-to-b from-transparent via-deep-border to-transparent sm:block" aria-hidden="true" />

          {/* Right: location */}
          <div className="flex items-center gap-2.5 rounded-xl border border-deep-border/60 bg-deep-raised/50 px-4 py-2.5">
            <MapPin size={16} className="text-signal" aria-hidden="true" />
            <span className="text-sm font-medium text-mist-muted">Moçambique</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
