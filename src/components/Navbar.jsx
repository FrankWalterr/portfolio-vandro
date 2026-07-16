import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../data/content'
import { useActiveSection } from '../hooks/useReducedMotion'

const SECTION_IDS = ['sobre', 'experiencia', 'stack', 'projetos', 'percurso', 'contacto']
const HEADER_OFFSET = 72

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

  const scrollToSection = useCallback((href) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return

    setMobileOpen(false)
    document.body.style.overflow = ''

    requestAnimationFrame(() => {
      setTimeout(() => {
        const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
        window.scrollTo({ top, behavior: 'smooth' })
        window.history.pushState(null, '', href)
      }, 50)
    })
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    scrollToSection(href)
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
            setMobileOpen(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
            window.history.pushState(null, '', '#')
          }}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-flow/10 text-sm text-flow transition-shadow group-hover:shadow-glow-sm">
            VC
          </span>
          <span className="hidden sm:inline">
            Vandro<span className="text-flow">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ href, label }) => {
            const id = href.slice(1)
            const isActive = active === id
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`nav-link rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-flow' : 'text-mist-muted hover:text-mist'
                  }`}
                >
                  {label}
                </a>
              </li>
            )
          })}
          <li>
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, '#contacto')}
              className="btn-primary ml-2 !py-2 !text-xs"
            >
              Contactar
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-mist-muted transition-colors hover:bg-deep-raised hover:text-mist md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 z-40 bg-deep/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="relative z-50 border-b border-deep-border bg-deep/98 backdrop-blur-md md:hidden"
            >
              <ul className="section-container flex flex-col gap-1 py-4">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      className="block rounded-lg px-3 py-3.5 text-base font-medium text-mist-muted transition-colors active:bg-deep-raised active:text-flow hover:bg-deep-raised hover:text-mist"
                    >
                      {label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#contacto"
                    onClick={(e) => handleNavClick(e, '#contacto')}
                    className="btn-primary w-full"
                  >
                    Contactar
                  </a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
