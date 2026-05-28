import { Suspense, lazy, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import gsap from 'gsap'
import CanvasLoader from '@/components/CanvasLoader'
import Button from '@/components/Button'

// Lazy-load the heavy 3D scene components
const HackerRoom = lazy(() => import('@/components/HackerRoom'))
const HeroCamera = lazy(() => import('@/components/HeroCamera'))
const ReactLogo = lazy(() => import('@/components/ReactLogo'))
const Rings = lazy(() => import('@/components/Rings'))
const Target = lazy(() => import('@/components/Target'))

/** Terminal-style typewriter words */
const ROLES = ['Full-Stack Developer', 'Three.js Engineer', 'UI/UX Enthusiast', 'Open Source Contributor']

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const roleRef = useRef<HTMLSpanElement>(null)

  // Entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([headingRef.current, subtitleRef.current, ctaRef.current], {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2,
      })
    })
    return () => ctx.revert()
  }, [])

  // Role typewriter cycle
  useEffect(() => {
    const el = roleRef.current
    if (!el) return
    let i = 0
    let charIndex = 0
    let isDeleting = false
    let timerId: ReturnType<typeof setTimeout>

    function tick() {
      const current = ROLES[i] ?? ''
      if (!isDeleting) {
        el.textContent = current.slice(0, charIndex + 1)
        charIndex++
        if (charIndex === current.length) {
          isDeleting = true
          timerId = setTimeout(tick, 1800)
          return
        }
      } else {
        el.textContent = current.slice(0, charIndex - 1)
        charIndex--
        if (charIndex === 0) {
          isDeleting = false
          i = (i + 1) % ROLES.length
        }
      }
      timerId = setTimeout(tick, isDeleting ? 40 : 80)
    }

    timerId = setTimeout(tick, 500)
    return () => clearTimeout(timerId)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
      aria-label="Hero section"
    >
      {/* Gradient background decoration */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#cbacf9]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Text content */}
      <div className="relative z-10 text-center section-padding max-w-4xl mx-auto">
        {/* Status pill */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 text-xs text-white/60">
          <span className="status-dot" aria-hidden />
          Open to new opportunities · India
        </div>

        <h1
          ref={headingRef}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4"
        >
          Hi, I&apos;m{' '}
          <span className="text-[#cbacf9]">Aarya</span>
        </h1>

        {/* Typewriter role */}
        <p className="text-xl md:text-2xl text-white/60 font-mono mb-4 h-8">
          <span ref={roleRef} className="cursor-blink" aria-live="polite" />
        </p>

        <p
          ref={subtitleRef}
          className="text-base md:text-lg text-white/50 max-w-xl mx-auto mb-8 leading-relaxed"
        >
          I craft immersive web experiences with React, Three.js and clean code.
          From pixel-perfect UIs to interactive 3D scenes.
        </p>

        <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4">
          <Button
            withArrow
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See my work
          </Button>
          <Button
            variant="outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in touch
          </Button>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <Canvas
          className="w-full h-full"
          camera={{ position: [0, 0, 15], fov: 25, near: 0.1, far: 1000 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 1.5]}
          aria-label="3D developer room scene"
        >
          <Suspense fallback={<CanvasLoader />}>
            <HeroCamera isMobile={window.innerWidth < 768}>
              <HackerRoom scale={window.innerWidth < 768 ? 0.065 : 0.09} position={[0, -3.5, 0]} />
            </HeroCamera>

            {/* Floating decorative elements */}
            <group>
              <Target position={[window.innerWidth < 768 ? 0 : 1.5, -0.8, -1]} />
              <ReactLogo position={[window.innerWidth < 768 ? 0 : 2, 3, 0]} />
              <Rings />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 20, 10]} intensity={1.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30 text-xs animate-bounce">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
        Scroll
      </div>
    </section>
  )
}
