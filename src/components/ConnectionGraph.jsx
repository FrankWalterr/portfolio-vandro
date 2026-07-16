import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

const NODES = [
  { id: 'academico', label: 'Académico', x: 50, y: 20, primary: true },
  { id: 'hotelaria', label: 'Hotelaria', x: 85, y: 45 },
  { id: 'porto', label: 'Porto', x: 75, y: 80 },
  { id: 'ocr', label: 'OCR', x: 25, y: 75 },
  { id: 'bi', label: 'BI', x: 15, y: 45 },
]

const EDGES = [
  ['academico', 'hotelaria'],
  ['academico', 'bi'],
  ['academico', 'ocr'],
  ['hotelaria', 'porto'],
  ['ocr', 'bi'],
  ['porto', 'bi'],
]

function getNode(id) {
  return NODES.find((n) => n.id === id)
}

export default function ConnectionGraph() {
  const reduced = useReducedMotion()

  return (
    <div className="relative aspect-square w-full max-w-md lg:max-w-none" aria-hidden="true">
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full"
        role="img"
        aria-label="Grafo de sistemas conectados"
      >
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid dots */}
        {Array.from({ length: 36 }).map((_, i) => {
          const row = Math.floor(i / 6)
          const col = i % 6
          return (
            <circle
              key={i}
              cx={10 + col * 16}
              cy={10 + row * 16}
              r="0.4"
              fill="#2DD4BF"
              opacity="0.15"
            />
          )
        })}

        {/* Edges */}
        {EDGES.map(([from, to], i) => {
          const a = getNode(from)
          const b = getNode(to)
          if (!a || !b) return null

          return (
            <g key={`${from}-${to}`}>
              <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="#243B55"
                strokeWidth="0.5"
              />
              {!reduced && (
                <motion.circle
                  r="0.8"
                  fill="#2DD4BF"
                  filter="url(#glow)"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    cx: [a.x, b.x],
                    cy: [a.y, b.y],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.6,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: 'linear',
                  }}
                />
              )}
            </g>
          )
        })}

        {/* Nodes */}
        {NODES.map((node, i) => (
          <g key={node.id}>
            <circle cx={node.x} cy={node.y} r="6" fill="url(#nodeGlow)" />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.primary ? 4 : 3}
              fill={node.primary ? '#2DD4BF' : '#132033'}
              stroke={node.primary ? '#2DD4BF' : '#F59E0B'}
              strokeWidth="0.8"
              initial={reduced ? {} : { scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.15, type: 'spring', stiffness: 200 }}
            />
            <text
              x={node.x}
              y={node.y + (node.y > 50 ? 8 : -6)}
              textAnchor="middle"
              fill="#94A3B8"
              fontSize="3.2"
              fontFamily="Sora, sans-serif"
              fontWeight="500"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
