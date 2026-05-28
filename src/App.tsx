import { lazy, Suspense } from 'react'
import { Toaster } from 'sonner'

// Eagerly loaded — tiny, needed immediately
import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'

// Lazy loaded — heavy sections below the fold
const About = lazy(() => import('@/sections/About'))
const Projects = lazy(() => import('@/sections/Projects'))
const Experience = lazy(() => import('@/sections/Experience'))
const Clients = lazy(() => import('@/sections/Clients'))
const Contact = lazy(() => import('@/sections/Contact'))
const Footer = lazy(() => import('@/sections/Footer'))

// Minimal fallback that doesn't cause layout shift
const SectionFallback = () => (
  <div className="w-full min-h-[200px] flex items-center justify-center">
    <span className="text-white/30 text-sm animate-pulse">Loading…</span>
  </div>
)

export default function App() {
  return (
    <main className="relative min-h-screen bg-black-100 overflow-hidden">
      {/* Global toast notifications */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: { background: '#1c1c21', color: '#fff', border: '1px solid #2a2a35' },
        }}
      />

      {/* Always visible */}
      <Navbar />
      <Hero />

      {/* Below-fold sections — lazy loaded */}
      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Clients />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </main>
  )
}
