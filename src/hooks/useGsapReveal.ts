import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface RevealOptions {
  /** Direction to animate from. Default 'bottom'. */
  direction?: 'bottom' | 'left' | 'right' | 'none'
  /** Stagger delay between children (seconds). Default 0. */
  stagger?: number
  /** Duration in seconds. Default 0.8. */
  duration?: number
  /** Distance in pixels to travel. Default 40. */
  distance?: number
}

/**
 * Attaches a GSAP ScrollTrigger fade-in animation to a container ref.
 * Children can be targeted via a CSS selector passed as `selector`.
 */
export function useGsapReveal<T extends HTMLElement>(
  selector = '> *',
  options: RevealOptions = {},
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const {
      direction = 'bottom',
      stagger = 0,
      duration = 0.8,
      distance = 40,
    } = options

    const fromVars: gsap.TweenVars = { opacity: 0, duration }
    if (direction === 'bottom') fromVars['y'] = distance
    if (direction === 'left')  fromVars['x'] = -distance
    if (direction === 'right') fromVars['x'] = distance

    const ctx = gsap.context(() => {
      gsap.from(selector === 'self' ? el : el.querySelectorAll(selector), {
        ...fromVars,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      })
    }, el)

    return () => ctx.revert()
  }, [selector, options])

  return ref
}
