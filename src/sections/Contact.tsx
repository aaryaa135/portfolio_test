import { useRef, useState, useCallback, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'
import { useGsapReveal } from '@/hooks/useGsapReveal'
import { emailjsConfig } from '@/lib/utils'
import Button from '@/components/Button'

interface FormState {
  name: string
  email: string
  message: string
}

const INITIAL_FORM: FormState = { name: '', email: '', message: '' }

/** Simple email format validator — no external dep */
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function Contact() {
  const sectionRef = useGsapReveal<HTMLElement>('> *', { stagger: 0.1 })
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [loading, setLoading] = useState(false)

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setForm((prev) => ({ ...prev, [name]: value }))
    },
    [],
  )

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      // Client-side validation
      if (!form.name.trim()) { toast.error('Please enter your name.'); return }
      if (!isValidEmail(form.email)) { toast.error('Please enter a valid email address.'); return }
      if (form.message.trim().length < 10) { toast.error('Message must be at least 10 characters.'); return }

      setLoading(true)
      try {
        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          {
            from_name: form.name.trim(),
            to_name: 'Aarya',
            from_email: form.email.trim(),
            to_email: 'aarya@example.com', // replace with your email
            message: form.message.trim(),
          },
          emailjsConfig.publicKey,
        )
        toast.success("Message sent! I'll get back to you within 24 hours.")
        setForm(INITIAL_FORM)
      } catch (err) {
        console.error('[EmailJS]', err)
        toast.error('Something went wrong. Please try again or email me directly.')
      } finally {
        setLoading(false)
      }
    },
    [form],
  )

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 section-padding"
      aria-label="Contact me"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left — copy */}
        <div>
          <p className="text-sm font-mono text-[#cbacf9] tracking-widest uppercase mb-2">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s build{' '}
            <span className="text-[#cbacf9]">together</span>
          </h2>
          <p className="text-white/50 leading-relaxed mb-8">
            Whether you have a project in mind, a job opportunity, or just want to say hi —
            my inbox is always open.
          </p>

          {/* Contact links */}
          <ul className="flex flex-col gap-3 list-none p-0 m-0" role="list">
            {([
              ['📧', 'Email', 'aarya@example.com', 'mailto:aarya@example.com'],
              ['💼', 'LinkedIn', '/in/aarya-gupta', 'https://linkedin.com/in/aarya-gupta'],
              ['🐙', 'GitHub', '/aaryaa135', 'https://github.com/aaryaa135'],
            ] as const).map(([icon, label, display, href]) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group focus-ring rounded px-1"
                >
                  <span className="text-xl" aria-hidden>{icon}</span>
                  <span className="text-sm">
                    <strong className="text-white/80 font-medium">{label}</strong>
                    {' — '}
                    <span className="group-hover:text-[#cbacf9] transition-colors">{display}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — form */}
        <div className="card-glass p-8">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact form"
            className="flex flex-col gap-5"
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm text-white/70 mb-2">
                Your name <span className="text-[#cbacf9]" aria-hidden>*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Aarya Gupta"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#cbacf9]/50 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-sm text-white/70 mb-2">
                Email address <span className="text-[#cbacf9]" aria-hidden>*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="hello@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#cbacf9]/50 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm text-white/70 mb-2">
                Message <span className="text-[#cbacf9]" aria-hidden>*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#cbacf9]/50 transition-colors resize-none"
              />
            </div>

            <Button
              type="submit"
              withArrow={!loading}
              isLoading={loading}
              className="w-full justify-center"
            >
              {loading ? 'Sending…' : 'Send message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
