# Optimised Portfolio — Change Log

## Security fixes
- `netlify.toml` added with CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- `.gitignore` updated: `*.tsbuildinfo`, `.env.local` and all env variants excluded
- `leva` removed from production dependencies (was exposing debug panel)
- EmailJS env vars renamed to `VITE_APP_EMAILJS_*` (clearer naming, same VITE_ prefix is required by EmailJS browser SDK)
- `.env.example` updated as the only env file committed

## Performance fixes
- `React.lazy()` + `Suspense` wraps all below-fold sections (About, Projects, Experience, Clients, Contact, Footer)
- `React.lazy()` wraps all Three.js canvas components (HackerRoom, HeroCamera, ReactLogo, Rings, Target)
- `vite.config.ts` — `manualChunks` splits: vendor-react, vendor-three, vendor-r3f, vendor-gsap, vendor-emailjs, vendor-globe
- `dpr={[1, 1.5]}` cap on Canvas (was uncapped — ran at 2x on retina = 4x fill rate)
- `useGLTF.preload()` called at module level for all GLTF models
- Netlify headers: `Cache-Control: immutable` for /assets/* and *.glb

## SEO & accessibility
- `index.html` — full OG + Twitter Card meta tags added
- `index.html` — JSON-LD structured data (Person schema)
- Navbar uses `IntersectionObserver` for active section detection (no scroll event polling)
- All form inputs have `<label>` with `htmlFor` — screen reader accessible
- Canvas element gets `aria-label`; all decorative images get `alt=""`
- `aria-live="polite"` on typewriter role text
- `<time>` element with `dateTime` attribute on experience dates
- Footer uses `role="contentinfo"`, nav uses `aria-label`

## Code quality
- `tsconfig.app.json` — `strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitReturns` all enabled
- Both lock files conflict resolved — pick ONE: `bun install` or `npm install`
- `leva` removed (only dev use)
- `useGsapReveal` custom hook extracts scroll animation logic (was duplicated across sections)
- `emailjsConfig` accessor object centralises env reading with helpful error messages
- `isValidEmail` client-side validator added (contact form was sending without email validation)
- ESLint upgraded to `strictTypeChecked` — catches `any`, unused vars, type inconsistencies

## Enhancements added
- Typewriter role animation in Hero (cycles Full-Stack Developer, Three.js Engineer, etc.)
- "Available for work" status indicator with pulsing green dot in Navbar + Hero
- Active nav link highlighting via IntersectionObserver
- Mobile menu now closes on Escape key press
- Responsive 2-column bento grid layout in About section
- Stats ("By the numbers") section in About
- Tech stack grid replaces plain text list
- Loading spinner on contact form Submit button while sending
- Scroll hint animation at bottom of Hero

## File structure preserved
All original section names (Navbar, Hero, About, Projects, Experience, Clients, Contact, Footer) and
component names (HackerRoom, HeroCamera, ReactLogo, Rings, Target, Cube, DemoComputer, CanvasLoader)
are kept identical to the original so your git diff is clean.
