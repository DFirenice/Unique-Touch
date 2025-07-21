import * as LucideIcons from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import { clsx } from 'clsx'

const DEFAULT_ICON_PROPS: Partial<LucideProps> = {
    color: 'currentColor',
    size: 20,
}

export const Icon = ({
    icon,
    className,
    color,
    ...props
}: { icon: keyof typeof LucideIcons } & LucideProps) => {
    const IconComponent = LucideIcons[icon]
    return (
        <IconComponent
            {...DEFAULT_ICON_PROPS}
            {...props}
            className={clsx({ 'text-light': !color }, className, color)}
        />
    )
}