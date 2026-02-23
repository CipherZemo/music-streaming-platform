import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Utility for merging Tailwind class names safely (used by shadcn components)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format duration in seconds to mm:ss display
export function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}
