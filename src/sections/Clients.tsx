import { useGsapReveal } from '@/hooks/useGsapReveal'
import { TESTIMONIALS } from '@/constants'

export default function Clients() {
  const containerRef = useGsapReveal<HTMLDivElement>('article', { stagger: 0.15 })

  return (
    <section
      className="py-24 section-padding bg-white/[0.02]"
      aria-label="Client testimonials"
    >
      <div className="text-center mb-16">
        <p className="text-sm font-mono text-[#cbacf9] tracking-widest uppercase mb-2">Testimonials</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          What clients{' '}
          <span className="text-[#cbacf9]">say</span>
        </h2>
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {TESTIMONIALS.map((t) => (
          <article
            key={t.id}
            className="card-glass p-6 flex flex-col gap-4 hover:border-[#cbacf9]/20 transition-colors duration-300"
          >
            {/* Quote icon */}
            <div className="text-[#cbacf9]/40 text-4xl font-serif leading-none" aria-hidden>&ldquo;</div>

            <blockquote className="text-white/65 text-sm leading-relaxed italic flex-1">
              {t.feedback}
            </blockquote>

            {/* Author */}
            <footer className="flex items-center gap-3 pt-4 border-t border-white/5">
              <img
                src={t.img}
                alt={`Photo of ${t.name}`}
                className="w-10 h-10 rounded-full object-cover border border-white/10"
                loading="lazy"
                width={40}
                height={40}
              />
              <div>
                <cite className="text-white text-sm font-medium not-italic">{t.name}</cite>
                <p className="text-white/40 text-xs mt-0.5">{t.position}</p>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  )
}
