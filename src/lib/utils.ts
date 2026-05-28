import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind classes safely, resolving conflicts.
 * Uses clsx for conditional classes + tailwind-merge to deduplicate.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * EmailJS environment variable accessors with clear error messages.
 * Centralises env access so there is one place to fix if keys change.
 */
export const emailjsConfig = {
  get serviceId(): string {
    const val = import.meta.env['VITE_APP_EMAILJS_SERVICE_ID'] as string | undefined
    if (!val) throw new Error('Missing VITE_APP_EMAILJS_SERVICE_ID in .env.local')
    return val
  },
  get templateId(): string {
    const val = import.meta.env['VITE_APP_EMAILJS_TEMPLATE_ID'] as string | undefined
    if (!val) throw new Error('Missing VITE_APP_EMAILJS_TEMPLATE_ID in .env.local')
    return val
  },
  get publicKey(): string {
    const val = import.meta.env['VITE_APP_EMAILJS_PUBLIC_KEY'] as string | undefined
    if (!val) throw new Error('Missing VITE_APP_EMAILJS_PUBLIC_KEY in .env.local')
    return val
  },
} as const
