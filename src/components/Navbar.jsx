import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../data/content'
import { useActiveSection } from '../hooks/useReducedMotion'

const SECTION_IDS = ['sobre', 'stack', 'projetos', 'percurso', 'contacto']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNav = (href) => {
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-deep-border/80 bg-deep/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="section-container flex h-16 items-center justify-between"
        aria-label="Navegação principal"
      >
        <a
          href="#"
          className="group flex items-center gap-2 font-display text-lg font-bold text-mist"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-flow/10 text-sm text-flow">
            VC
          </span>
          <span className="hidden sm:inline">
            Vandro<span className="text-flow">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ href, label }) => {
            const id = href.slice(1)
            const isActive = active === id
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-flow'
                      : 'text-mist-muted hover:text-mist'
                  }`}
                >
                  {label}
                </a>
              </li>
            )
          })}
          <li>
            <a href="#contacto" className="btn-primary ml-2 !py-2 !text-xs">
              Contactar
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded-lg p-2 text-mist-muted hover:bg-deep-raised md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-deep-border bg-deep/95 backdrop-blur-md md:hidden"
          >
            <ul className="section-container flex flex-col gap-1 py-4">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => handleNav(href)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-mist-muted hover:bg-deep-raised hover:text-mist"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href="#contacto" onClick={() => handleNav('#contacto')} className="btn-primary w-full">
                  Contactar
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
