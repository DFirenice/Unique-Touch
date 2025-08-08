import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


import { escape } from 'lodash'

/* eslint-disable @typescript-eslint/no-explicit-any */
// Converting special chars into HTML codes to avoid XSS
export const sanitizeStrings = <T extends Record<string, any>>(obj: T): T => {
  const sanitized = {} as T

  for (const key in obj) {
    const value = obj[key]
    sanitized[key] = typeof value === 'string' ? escape(value) : value as any
  }

  return sanitized
}