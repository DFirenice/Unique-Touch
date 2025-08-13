'use client'

import { useState } from "react"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Icon } from "@app-ui/Icon"
import { Heading } from "@app-ui/heading"
import { cn } from "@root/src/lib/utils"

type TCollapsibleFaqProps = {
    trigger: string
    content: string
    open?: boolean
    variant?: TVariant
}

export type TVariant = keyof typeof variants

// Base properties of the trigger container
const baseProperties = "text-left flex flex-row justify-between items-center w-full"

const variants = {
    "transparent": {
        containerStyles: "",
        triggerStyles: {
            container: "",
            iconColor: "text-brown-dp-1"
        },
        contentStyles: {
            container: "mb-4",
            p: "max-w-sm"
        }
    },
    "light": {
        containerStyles: "text-brown-dp-0 bg-surface-accent rounded-2xl my-4",
        triggerStyles: {
            container: "py-2 px-6",
            iconColor: "text-brown-dp-0"
        },
        contentStyles: {
            container: "mb-4 px-6",
            p: "pb-4 max-w-sm text-brown-dp-1"
        }
    },
}

const CollapsibleFAQ = ({ trigger, content, open = false, variant = "transparent" }: TCollapsibleFaqProps) => {
    const [ isOpen, setOpen ] = useState(open)
    return (
        <Collapsible
            open={isOpen}
            onOpenChange={state => setOpen(state)}
            className={cn(variants[variant].containerStyles)}
        >
            <CollapsibleTrigger className={cn(baseProperties, variants[variant].triggerStyles.container)}>
                <Heading className={isOpen ? "mt-4 mb-0" : "my-4"} size="2xl">{ trigger }</Heading>
                <Icon
                    color={cn(variants[variant].triggerStyles.iconColor)}
                    icon={isOpen ? 'ChevronUp' : 'ChevronDown'}
                    size={32}
                />
            </CollapsibleTrigger>
            <CollapsibleContent className={cn(variants[variant].contentStyles.container)}>
                <p className={cn(variants[variant].contentStyles.p)}>
                    { content }
                </p>
            </CollapsibleContent>
        </Collapsible>
    )
}

export default CollapsibleFAQ