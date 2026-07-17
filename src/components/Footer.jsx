import { CONTACT } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-deep-border py-8" role="contentinfo">
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-mist-faint">
          © {year} {CONTACT.name}. Tdos os direitos reservados.
        </p>
        <p className="text-xs text-mist-faint">
          Moçambique · Disponível para oportunidades
        </p>
      </div>
    </footer>
  )
}
