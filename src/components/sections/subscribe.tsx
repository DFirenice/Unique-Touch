import { Heading } from "@app-ui/heading"
import { Button } from "@app-ui/button"
import { Input } from "@app-ui/input"
import { TColorVariationProps } from "@/types/variation.types"
import { cn } from "@/lib/utils"

const Subscribe = ({ variation = "dark" }: TColorVariationProps) => {
    const isLight = variation === "light"
    return (
        <section data-theme-variation={variation} className={cn(
            "m-section px-4 py-12 min-h-[40vh] flex flex-row items-center justify-between gap-16",
            "bg-[url('/images/pattern.svg')] bg-repeat bg-[length:75vh] bg-center bg-brown-dp-1",
            "text-layer-dark text-pretty max-md:text-center",
            { "bg-light text-layer-light bg-[linear-gradient(to_top,rgba(255,252,251,0.9)_0%,rgba(255,252,251,1)_150%),url('/images/pattern.svg')]": isLight },
        )}>
            <div className={cn(
                "mx-auto container flex flex-col md:flex-row justify-around items-center gap-4",
                { "pb-8": isLight }
            )}>
                <div>
                    <Heading size="5xl" className="max-lg:text-4xl lg:max-w-sm text-5xl max-w-lg">
                        <span>Stay Radiant with </span>
                        <span className={cn(
                            "text-text-accent",
                            { "text-brown-dp-0": isLight }
                        )}>Unique Touch</span>
                    </Heading>
                </div>
                <div>
                    <p className={cn(
                        "mb-6 text-text-accent max-md:max-w-sm max-w-md",
                        { "text-brown-dp-1": isLight }
                    )}>Sign up to receive exclusive offers, beauty tips, and wellness inspiration.</p>
                    <div>
                        <div className="flex flex-row w-full max-w-sm *:border-none">
                            <Input
                                placeholder="Enter your email"
                                className={cn(
                                    "flex-1 rounded-l-full rounded-r-none text-light pl-6 bg-light/15",
                                    { "text-brown-dp-0 bg-surface-accent": isLight }
                                )}
                                isDark
                                autoComplete="off"
                            />
                            <Button
                                className="rounded-l-none rounded-r-full bg-brown-dp-0 text-text-accent"
                                variant={isLight ? "secondary" : "outline"}
                            >
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe