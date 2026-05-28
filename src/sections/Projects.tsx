import { useRef, useState } from 'react'
import { useGsapReveal } from '@/hooks/useGsapReveal'
import { PROJECTS, type Project } from '@/constants'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className="card-glass overflow-hidden group cursor-pointer transition-all duration-300 hover:border-[#cbacf9]/30"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={project.title}
    >
      {/* Project image / spotlight */}
      <div className="relative overflow-hidden h-48 bg-gradient-to-br from-white/5 to-transparent">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#cbacf9]/10 to-blue-500/10 transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0 }}
          aria-hidden
        />
        {/* Icon list — tech used */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          {project.iconLists.map((icon, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full bg-black/50 border border-white/10 flex items-center justify-center overflow-hidden"
            >
              <img src={icon} alt="" className="w-5 h-5 object-contain" aria-hidden />
            </div>
          ))}
        </div>
        {/* Placeholder image */}
        <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-20 select-none" aria-hidden>
          {['🚀', '📱', '🤖', '✨'][project.id - 1]}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-white font-semibold text-base mb-2 leading-snug">{project.title}</h3>
        <p className="text-white/50 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 text-[#cbacf9] text-sm font-medium hover:gap-3 transition-all duration-200 focus-ring rounded"
          aria-label={`View ${project.title} on GitHub`}
        >
          View on GitHub
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  )
}

export default function Projects() {
  const containerRef = useGsapReveal<HTMLDivElement>('article', { stagger: 0.12 })

  return (
    <section
      id="work"
      className="py-24 section-padding"
      aria-label="Projects"
    >
      <div className="text-center mb-16">
        <p className="text-sm font-mono text-[#cbacf9] tracking-widest uppercase mb-2">My work</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Things I&apos;ve{' '}
          <span className="text-[#cbacf9]">built</span>
        </h2>
        <p className="text-white/50 mt-4 max-w-xl mx-auto">
          A selection of projects ranging from 3D interactive experiences to full-stack SaaS applications.
        </p>
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* More projects link */}
      <div className="text-center mt-12">
        <a
          href="https://github.com/aaryaa135"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors focus-ring rounded px-2"
        >
          View all projects on GitHub
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
