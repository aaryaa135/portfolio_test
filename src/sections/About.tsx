import { useRef } from 'react'
import { useGsapReveal } from '@/hooks/useGsapReveal'

const TECH_STACK_LEFT = ['ReactJS', 'Next.js', 'TypeScript', 'Three.js', 'Node.js']
const TECH_STACK_RIGHT = ['PostgreSQL', 'Tailwind CSS', 'GSAP', 'Docker', 'Figma']

export default function About() {
  const containerRef = useGsapReveal<HTMLDivElement>('> *', { stagger: 0.1 })

  return (
    <section
      id="about"
      className="relative py-24 section-padding"
      aria-label="About me"
    >
      {/* Section heading */}
      <div className="text-center mb-16">
        <p className="text-sm font-mono text-[#cbacf9] tracking-widest uppercase mb-2">About me</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Building things that{' '}
          <span className="text-[#cbacf9]">matter</span>
        </h2>
      </div>

      <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">

        {/* Main card — intro */}
        <article className="lg:col-span-7 card-glass p-8 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#cbacf9]/20 flex items-center justify-center text-2xl" aria-hidden>
              👋
            </div>
            <h3 className="text-white font-semibold text-lg">Hey, I&apos;m Aarya</h3>
          </div>
          <p className="text-white/60 leading-relaxed">
            I&apos;m a full-stack developer passionate about building immersive web experiences.
            I specialise in <strong className="text-white">React, Three.js and TypeScript</strong> — turning
            ideas into polished, performant products that people love to use.
          </p>
          <p className="text-white/60 leading-relaxed">
            When I&apos;m not coding, you&apos;ll find me contributing to open source, exploring new
            design tools, or deep-diving into 3D graphics and WebGL techniques.
          </p>
          {/* Globe placeholder */}
          <div
            className="mt-auto w-full h-48 rounded-xl bg-gradient-to-br from-[#cbacf9]/10 to-blue-500/10 border border-white/5 flex items-center justify-center text-white/30 text-sm"
            aria-label="Interactive globe showing global availability"
          >
            🌏 Available worldwide — IST (UTC +5:30)
          </div>
        </article>

        {/* Tech stack card */}
        <article className="lg:col-span-5 card-glass p-8 flex flex-col gap-4">
          <h3 className="text-white font-semibold text-lg">Tech stack</h3>
          <p className="text-white/50 text-sm">Tools I work with every day</p>
          <div className="flex gap-4 flex-1 mt-2">
            <div className="flex flex-col gap-2 flex-1">
              {TECH_STACK_LEFT.map((tech) => (
                <div
                  key={tech}
                  className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white/70 text-center hover:border-[#cbacf9]/40 hover:text-[#cbacf9] transition-all duration-200"
                >
                  {tech}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 flex-1">
              {TECH_STACK_RIGHT.map((tech) => (
                <div
                  key={tech}
                  className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white/70 text-center hover:border-[#cbacf9]/40 hover:text-[#cbacf9] transition-all duration-200"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Open source / stats */}
        <article className="lg:col-span-4 card-glass p-8">
          <h3 className="text-white font-semibold text-lg mb-4">By the numbers</h3>
          <dl className="grid grid-cols-2 gap-4">
            {([
              ['5+', 'Projects shipped'],
              ['3+', 'Years coding'],
              ['200+', 'npm downloads'],
              ['10+', 'Happy clients'],
            ] as const).map(([num, label]) => (
              <div key={label} className="bg-white/5 rounded-xl p-4 text-center">
                <dt className="text-[#cbacf9] text-2xl font-bold">{num}</dt>
                <dd className="text-white/50 text-xs mt-1">{label}</dd>
              </div>
            ))}
          </dl>
        </article>

        {/* Currently building */}
        <article className="lg:col-span-4 card-glass p-8">
          <h3 className="text-white font-semibold text-lg mb-3">Currently building</h3>
          <p className="text-white/50 text-sm leading-relaxed">
            A lightweight <code className="text-[#cbacf9] bg-[#cbacf9]/10 px-1 rounded">gsap-utils</code> library
            that makes ScrollTrigger animations dead simple for React developers.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="status-dot" aria-hidden />
            <span className="text-xs text-white/40">In progress</span>
          </div>
        </article>

        {/* Contact CTA mini card */}
        <article className="lg:col-span-4 card-glass p-8 flex flex-col items-center justify-center text-center gap-4">
          <div className="text-4xl" aria-hidden>🚀</div>
          <h3 className="text-white font-semibold">Want to collaborate?</h3>
          <p className="text-white/50 text-sm">Let&apos;s build something great together.</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#cbacf9] text-black text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#b890f5] transition-colors focus-ring"
          >
            Get in touch
          </button>
        </article>

      </div>
    </section>
  )
}
