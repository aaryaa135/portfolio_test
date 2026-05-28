import { useState, useEffect, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { NAV_LINKS } from '@/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('')

  // Scrolled state for background blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const sections = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = useCallback((id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled ? 'bg-black/70 backdrop-blur-md border-b border-white/5' : 'bg-transparent',
      )}
    >
      <nav
        className="section-padding mx-auto flex max-w-7xl items-center justify-between py-4"
        aria-label="Main navigation"
      >
        {/* Logo / name */}
        <a
          href="/"
          className="text-white font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity focus-ring rounded"
          aria-label="Aarya Gupta — home"
        >
          Aarya<span className="text-[#cbacf9]">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0" role="list">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => handleNavClick(id)}
                className={cn(
                  'text-sm transition-colors duration-200 focus-ring rounded px-1',
                  activeId === id
                    ? 'text-[#cbacf9] font-medium'
                    : 'text-white/60 hover:text-white',
                )}
                aria-current={activeId === id ? 'true' : undefined}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Available badge + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <span className="flex items-center gap-2 text-xs text-white/50">
            <span className="status-dot" aria-hidden />
            Available for work
          </span>
          <button
            onClick={() => handleNavClick('contact')}
            className="bg-[#cbacf9] text-black text-sm font-medium px-4 py-2 rounded-full hover:bg-[#b890f5] transition-colors focus-ring"
          >
            Hire me
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 focus-ring rounded"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            {menuOpen
              ? <><path d="M18 6L6 18"/><path d="M6 6l12 12"/></>
              : <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>
            }
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-black/90 backdrop-blur-md border-t border-white/5',
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <ul className="flex flex-col gap-1 p-6 list-none m-0" role="list">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => handleNavClick(id)}
                className={cn(
                  'w-full text-left px-4 py-3 rounded-lg text-sm transition-colors',
                  activeId === id
                    ? 'bg-[#cbacf9]/10 text-[#cbacf9] font-medium'
                    : 'text-white/70 hover:text-white hover:bg-white/5',
                )}
              >
                {label}
              </button>
            </li>
          ))}
          <li className="mt-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full bg-[#cbacf9] text-black text-sm font-medium px-4 py-3 rounded-full hover:bg-[#b890f5] transition-colors"
            >
              Hire me
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}
