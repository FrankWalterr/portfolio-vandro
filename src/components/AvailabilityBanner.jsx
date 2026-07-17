import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function AvailabilityBanner({ variants, className = '' }) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      variants={variants}
      className={`group relative inline-flex w-full max-w-md overflow-hidden rounded-xl sm:max-w-lg ${className}`}
    >
      {!reduced && (
        <motion.div
          className="absolute -inset-px rounded-xl opacity-60"
          style={{ background: 'conic-gradient(from 0deg, #2DD4BF, #F59E0B, #2DD4BF)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          aria-hidden="true"
        />
      )}

      <div className="absolute inset-px rounded-xl bg-deep-card/98 backdrop-blur-md" />

      <div className="relative flex flex-wrap items-center gap-x-3 gap-y-2 px-4 py-3 sm:gap-x-4 sm:px-5 sm:py-3.5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2 shrink-0">
            {!reduced && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flow opacity-50" />
            )}
            <span className="relative inline-flex h-2 w-2 rounded-full bg-flow shadow-[0_0_6px_rgba(45,212,191,0.8)]" />
          </span>
          <span className="font-display text-[11px] font-bold uppercase tracking-[0.15em] text-flow sm:text-xs">
            Disponível
          </span>
        </div>

        <span className="hidden h-3.5 w-px bg-deep-border sm:block" aria-hidden="true" />

        <span className="text-xs text-mist-muted sm:text-sm">para emprego &amp; estágio</span>

        <span className="hidden h-3.5 w-px bg-deep-border sm:block" aria-hidden="true" />

        <div className="flex items-center gap-1.5 text-xs text-mist-faint sm:text-sm">
          <MapPin size={12} className="shrink-0 text-signal" aria-hidden="true" />
          Moçambique
        </div>
      </div>
    </motion.div>
  )
}
