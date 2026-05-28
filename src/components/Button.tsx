import { type ReactNode, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  /** Visual variant */
  variant?: 'primary' | 'outline' | 'ghost'
  /** Show animated arrow icon */
  withArrow?: boolean
  isLoading?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  withArrow = false,
  isLoading = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled ?? isLoading}
      aria-busy={isLoading}
      className={cn(
        // Base
        'inline-flex items-center gap-2 rounded-full font-medium transition-all duration-200',
        'px-6 py-3 text-sm focus-ring',
        // Variants
        variant === 'primary' && [
          'bg-[#cbacf9] text-black hover:bg-[#b890f5]',
          'active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
        ],
        variant === 'outline' && [
          'border border-white/20 text-white hover:bg-white/10',
          'active:scale-95',
        ],
        variant === 'ghost' && 'text-white/70 hover:text-white',
        className,
      )}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
      ) : null}
      {children}
      {withArrow && !isLoading && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      )}
    </button>
  )
}
