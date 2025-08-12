import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// Converting special chars into HTML codes to avoid XSS
import { escape } from 'lodash'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const sanitizeStrings = <T extends Record<string, any>>(obj: T): T => {
  const sanitized = {} as T

  for (const key in obj) {
    const value = obj[key]
    sanitized[key] = typeof value === 'string' ? escape(value) : value as any
  }

  return sanitized
}


// Path formatter
export const formatPath = (path: string) => {
  if (path) {
    return path
      .split('/')
      .map(chunk => ((chunk[0]?.toUpperCase() || 'Home') + chunk.slice(1)))
      .splice(1)
      .join(' / ')
  }
  return null
}