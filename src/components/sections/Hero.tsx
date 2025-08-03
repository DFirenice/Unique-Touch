import { Heading } from "@app-ui/heading"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Hero = () => {
    return (
        <section className="
            text-layer-dark
            min-h-screen h-screen w-screen
            bg-[linear-gradient(to_top,rgba(0,0,0,0.38),rgba(0,0,0,0.38)),url('/images/hero-bg.jpeg')] bg-center bg-cover bg-no-repeat
        " id="hero">
            <div className="px-2 text-center flex items-center flex-col justify-center gap-6 h-full">
                <Heading className="*:capitalize max-w-full tracking-wide" size="5xl">
                    <span className="text-text-accent block w-full sm:inline-flex sm:w-auto">Your Escape</span>
                    <span>&nbsp;Begins Here</span>
                </Heading>
                <p className="text-pretty max-w-xs">Step into a world of calm, comfort, and beauty — curated just for you.</p>
                <div className="my-4 flex flex-wrap justify-center gap-4 max-md:flex-col">
                    <Button size="lg" className="capitalize">Book Your Experience</Button>
                    <Link href="/#services">
                        <Button size="lg" variant="outline" className="capitalize">Explore Services</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero