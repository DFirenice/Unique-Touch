import type { TPackage } from "@/data/arrangments.data"
import { Button } from "@app-ui/button"
import { Heading } from "@chakra-ui/react"
import { Icon } from "@app-ui/Icon"
import { cn } from "@/lib/utils"

const Package = ({ data, dark = false }: { data: TPackage, dark: boolean }) => {
    return (
        <div className={cn(
            { "text-layer-dark bg-brown-dp-1": dark },
            { "text-layer-light bg-surface-accent": dark === false },
            "rounded-2xl text-left px-8 py-12 min-w-76 max-w-76 md:min-w-96 md:max-w-96 w-full",
            "flex flex-col gap-4"
        )}>
            <div className="flex flex-col gap-8">
                <Heading size="4xl" className={
                    cn(
                        { "text-brown-dp-0": dark === false },
                        { "text-text-accent font-normal": dark },
                    )
                }>{ data.title }</Heading>
                <p>{ data.sub }</p>
                <Heading size="4xl">
                    <span className={
                    cn(
                        { "text-brown-dp-0": dark === false },
                        { "text-light": dark },
                        "font-bold"
                    )
                }>${ data.price } </span>
                    <span className="font-normal text-2xl text-">/ session</span>
                </Heading>
                <div>
                    { data.points.map(text => (
                        <div className="flex items-center gap-4">
                            <Icon
                                key={`${text}_package_point`}
                                color={cn({
                                    "text-brown-dp-0": dark === false,
                                    "text-text-accent": dark
                                })} className="min-w-5" icon="Star"
                            />
                            <span>{ text }</span>
                        </div>
                    )) }
                </div>
            </div>
            <Button variant={dark ? "default" : "secondary"} className="mt-auto w-min rounded-full px-8 py-6">
                Book Now
            </Button>
        </div>
    )
}

export default Package