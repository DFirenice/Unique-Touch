import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, isDark = false, ...props }: React.ComponentProps<"input"> & { isDark?: boolean }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground selection:bg-brown-dp-1 selection:text-primary-foreground border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        { "placeholder-text-brown-dp-0/60": isDark === true },
        { "placeholder-text-accent-foreground": isDark === false }, // bruh
        className
      )}
      {...props}
    />
  )
}

export { Input }
