import { SOCIAL_LINKS, NAV_LINKS } from '@/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-12 section-padding" role="contentinfo">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="text-center md:text-left">
          <p className="text-white font-semibold text-lg">
            Aarya<span className="text-[#cbacf9]">.</span>
          </p>
          <p className="text-white/30 text-xs mt-1">
            Built with React + Three.js + GSAP
          </p>
        </div>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-6 list-none p-0 m-0" role="list">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/40 hover:text-white text-sm transition-colors focus-ring rounded"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Socials */}
        <ul className="flex items-center gap-4 list-none p-0 m-0" role="list">
          {SOCIAL_LINKS.map(({ label, href, icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Visit Aarya on ${label}`}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#cbacf9]/10 hover:border-[#cbacf9]/30 transition-all focus-ring"
              >
                <img src={icon} alt="" className="w-4 h-4 object-contain" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright */}
      <p className="text-center text-white/20 text-xs mt-8">
        &copy; {currentYear} Aarya Gupta. All rights reserved.
      </p>
    </footer>
  )
}
