// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { id: 'about',      label: 'About' },
  { id: 'work',       label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact',    label: 'Contact' },
] as const

// ─── Projects ────────────────────────────────────────────────────────────────
export interface Project {
  readonly id: number
  readonly title: string
  readonly description: string
  readonly spotlight: string
  readonly image: string
  readonly iconLists: readonly string[]
  readonly link: string
}

export const PROJECTS: readonly Project[] = [
  {
    id: 1,
    title: 'YC Directory — Startup Pitch Platform',
    description: 'A Next.js 15 platform where entrepreneurs can submit startup ideas and gain exposure. Features real-time content updates, Sanity CMS and GitHub OAuth.',
    spotlight: '/assets/spotlight1.png',
    image: '/assets/p1.svg',
    iconLists: ['/assets/re.svg', '/assets/tail.svg', '/assets/ts.svg'],
    link: 'https://github.com/aaryaa135',
  },
  {
    id: 2,
    title: '3D iPhone 15 Pro — Product Landing Page',
    description: 'An Apple-inspired product page with GSAP scroll-triggered animations and a Three.js 3D iPhone model you can rotate and inspect.',
    spotlight: '/assets/spotlight2.png',
    image: '/assets/p2.svg',
    iconLists: ['/assets/re.svg', '/assets/tail.svg', '/assets/ts.svg', '/assets/three.svg'],
    link: 'https://github.com/aaryaa135',
  },
  {
    id: 3,
    title: 'AI Image SaaS — Cloudinary Integration',
    description: 'A production-grade AI image-editing SaaS with Cloudinary AI transformations, Stripe payments, Clerk auth, and a credits system.',
    spotlight: '/assets/spotlight3.png',
    image: '/assets/p3.svg',
    iconLists: ['/assets/re.svg', '/assets/tail.svg', '/assets/ts.svg', '/assets/c.svg'],
    link: 'https://github.com/aaryaa135',
  },
  {
    id: 4,
    title: 'Animated Portfolio — Three.js + GSAP',
    description: 'The very portfolio you are looking at — built with React, Three.js 3D models, GSAP scroll animations, and EmailJS contact integration.',
    spotlight: '/assets/spotlight4.png',
    image: '/assets/p4.svg',
    iconLists: ['/assets/re.svg', '/assets/tail.svg', '/assets/ts.svg', '/assets/three.svg'],
    link: 'https://github.com/aaryaa135/portfolio_test',
  },
]

// ─── Experience ───────────────────────────────────────────────────────────────
export interface WorkExperience {
  readonly id: number
  readonly title: string
  readonly company: string
  readonly icon: string
  readonly iconBg: string
  readonly date: string
  readonly points: readonly string[]
}

export const WORK_EXPERIENCE: readonly WorkExperience[] = [
  {
    id: 1,
    title: 'Frontend Developer Intern',
    company: 'Tech Startup',
    icon: '/assets/exp1.svg',
    iconBg: '#accbe1',
    date: 'Jan 2023 — Apr 2023',
    points: [
      'Built responsive UI components using React and Tailwind CSS.',
      'Improved Lighthouse performance score from 62 to 91 by optimising images and lazy-loading routes.',
      'Collaborated with designers in Figma to ship pixel-perfect screens.',
    ],
  },
  {
    id: 2,
    title: 'Full-Stack Developer',
    company: 'Freelance',
    icon: '/assets/exp2.svg',
    iconBg: '#fbc3bc',
    date: 'May 2023 — Present',
    points: [
      'Designed and built 5+ client websites using Next.js, Supabase, and Stripe.',
      'Integrated EmailJS for transactional email without exposing API keys client-side.',
      'Set up CI/CD pipelines on Vercel with preview deployments per PR.',
    ],
  },
  {
    id: 3,
    title: 'Open Source Contributor',
    company: 'Various Projects',
    icon: '/assets/exp3.svg',
    iconBg: '#b7e4c7',
    date: '2023 — Present',
    points: [
      'Contributed bug fixes and documentation to OSS projects.',
      'Authored a GSAP utility library with 200+ npm downloads.',
    ],
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────
export interface Testimonial {
  readonly id: number
  readonly name: string
  readonly position: string
  readonly feedback: string
  readonly img: string
}

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: 1,
    name: 'Emily Carter',
    position: 'CTO, LaunchPad Inc.',
    feedback: 'Aarya delivered our redesign 2 weeks early. The Three.js animations alone drove a 40% increase in demo signups. Exceptional attention to detail.',
    img: 'https://randomuser.me/api/portraits/women/32.jpg',
  },
  {
    id: 2,
    name: 'Rajan Mehta',
    position: 'Founder, IndieSaaS',
    feedback: 'The best frontend developer I have hired. Clean code, great communication, and the end result looked better than our Figma designs.',
    img: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    id: 3,
    name: 'Sofia Andersen',
    position: 'Product Lead, HealthTech',
    feedback: 'Aarya rebuilt our dashboard from scratch in 3 weeks. Performance, accessibility and aesthetics — all nailed.',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
]

// ─── Social links ─────────────────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { label: 'GitHub',   href: 'https://github.com/aaryaa135',        icon: '/assets/github.svg' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/aarya-gupta', icon: '/assets/linkedin.svg' },
  { label: 'Twitter',  href: 'https://twitter.com/aarya135',        icon: '/assets/twitter.svg' },
] as const
