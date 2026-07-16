import { useCallback } from 'react'

export function useGlowHandlers() {
  const onMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--glow-x', `${x}px`)
    e.currentTarget.style.setProperty('--glow-y', `${y}px`)
  }, [])

  const onMouseLeave = useCallback((e) => {
    e.currentTarget.style.removeProperty('--glow-x')
    e.currentTarget.style.removeProperty('--glow-y')
  }, [])

  return { onMouseMove, onMouseLeave }
}
