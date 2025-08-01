import { cn } from "@/lib/utils"
import { Icon, Ticons } from "@app-ui/Icon"
import { Heading } from "@chakra-ui/react"

export type TCardContent = {
    icon: Ticons
    heading: string
    desc: string
}

type TCardProps = {
    content: TCardContent
    pattern?: 'icon-text' | 'text-icon'
}

const Card = ({ content, pattern = 'icon-text'}: TCardProps ) => {
    return (
        <div className="
            bg-surface-accent rounded-2xl overflow-hidden
            inline-flex flex-col md:flex-row items-center md:justify-between
            gap-6 md:gap-4 py-8 md:py-4 px-2 md:px-6
        ">
            <div className={ cn("grid place-items-center w-18", { "max-md:-order-1": pattern === 'text-icon' }) }>
                <Icon icon={content.icon as Ticons} color="text-brown-dp-1" size={36} />
            </div>
            <div className={ cn({
                "md:text-left -order-1": pattern === 'text-icon',
                "md:text-right": pattern === 'icon-text'
            }, "**:text-pretty **:max-w-sm") }>
                <Heading>{ content.heading }</Heading>
                <p>{ content.desc }</p>
            </div>
        </div>
    )
}

export default Card