import { useGsapReveal } from '@/hooks/useGsapReveal'
import { WORK_EXPERIENCE } from '@/constants'

export default function Experience() {
  const containerRef = useGsapReveal<HTMLOListElement>('li', { stagger: 0.15 })

  return (
    <section
      id="experience"
      className="py-24 section-padding"
      aria-label="Work experience"
    >
      <div className="text-center mb-16">
        <p className="text-sm font-mono text-[#cbacf9] tracking-widest uppercase mb-2">Career</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Where I&apos;ve{' '}
          <span className="text-[#cbacf9]">worked</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <ol ref={containerRef} className="relative list-none p-0 m-0">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#cbacf9]/40 via-white/10 to-transparent" aria-hidden />

          {WORK_EXPERIENCE.map((job, index) => (
            <li key={job.id} className="relative pl-16 pb-12 last:pb-0">
              {/* Timeline dot */}
              <div
                className="absolute left-0 top-0 w-12 h-12 rounded-xl flex items-center justify-center border border-white/10"
                style={{ background: job.iconBg }}
                aria-hidden
              >
                <img src={job.icon} alt="" className="w-6 h-6 object-contain" />
              </div>

              {/* Index badge */}
              <span className="absolute left-[52px] top-0 text-[10px] text-white/30 font-mono">
                0{index + 1}
              </span>

              <article className="card-glass p-6">
                <header className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-base">{job.title}</h3>
                    <p className="text-[#cbacf9] text-sm mt-0.5">{job.company}</p>
                  </div>
                  <time
                    className="text-white/40 text-xs font-mono bg-white/5 px-3 py-1 rounded-full whitespace-nowrap"
                    dateTime={job.date}
                  >
                    {job.date}
                  </time>
                </header>

                <ul className="space-y-2 list-none p-0 m-0" role="list">
                  {job.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/60 text-sm leading-relaxed">
                      <span className="text-[#cbacf9] mt-1.5 shrink-0" aria-hidden>▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
