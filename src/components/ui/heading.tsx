import { JSX } from "react"

type HeadingProps = {
  as?: keyof JSX.IntrinsicElements
  size?: '6xl' | '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
  className?: string
  children: React.ReactNode
}

const sizes = {
  '6xl': 'text-6xl',
  '5xl': 'text-5xl',
  '4xl': 'text-4xl',
  '3xl': 'text-3xl',
  '2xl': 'text-2xl',
  xl: 'text-xl',
  lg: 'text-lg',
  md: 'text-md',
  sm: 'text-base',
  xs: 'text-sm',
}

export const Heading = ({
  as: Tag = 'h2',
  size = '2xl',
  className = '',
  children,
}: HeadingProps) => (
  <Tag className={`${sizes[size]} leading-tight font-semibold ${className}`}>
    {children}
  </Tag>
)
