import { cn } from '@/lib/utils'

type HeadingProps = {
  as?: keyof JSX.IntrinsicElements // 'h1' | 'h2' | etc.
  size?: '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
  className?: string
  children: React.ReactNode
}

const sizeMap: Record<NonNullable<HeadingProps['size']>, string> = {
  '4xl': 'text-6xl font-bold',
  '3xl': 'text-5xl font-bold',
  '2xl': 'text-4xl font-bold',
  'xl': 'text-3xl font-semibold',
  'lg': 'text-2xl font-semibold',
  'md': 'text-xl font-medium',
  'sm': 'text-lg font-medium',
  'xs': 'text-base font-medium',
}

export const Heading = ({
  as: Tag = 'h2',
  size = 'xl',
  className,
  children,
}: HeadingProps) => {
  return (
    <Tag className={cn(sizeMap[size], className)}>
      {children}
    </Tag>
  )
}