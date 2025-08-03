'use client'

import { useState } from "react"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Icon } from "@app-ui/Icon"
import { Heading } from "@chakra-ui/react"

type TCollapsibleFaqProps = {
    trigger: string
    content: string
}

const CollapsibleFAQ = ({ trigger, content }: TCollapsibleFaqProps) => {
    const [ isOpen, setOpen ] = useState(false)
    return (
        <Collapsible
            open={isOpen}
            onOpenChange={state => setOpen(state)}
        >
            <CollapsibleTrigger className="flex flex-row justify-between items-center w-full">
                <Heading className="my-4" size="2xl">{ trigger }</Heading>
                <Icon color="text-brown-dp-1" icon={isOpen ? 'ChevronUp' : 'ChevronDown'} size={32} />
            </CollapsibleTrigger>
            <CollapsibleContent className="mb-4">
                <p className="max-w-sm">{ content }</p>
            </CollapsibleContent>
        </Collapsible>
    )
}

export default CollapsibleFAQ