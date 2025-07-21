import { Heading } from "@chakra-ui/react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Icon } from "@/components/ui/Icon"

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="
          text-layer-dark
          min-h-screen h-screen w-screen bg-gradient-to-b from-black/50 to-black/50
          bg-[linear-gradient(to_top,rgba(0,0,0,0.38),rgba(0,0,0,0.38)),url('/images/hero-bg.jpeg')] bg-center bg-cover bg-no-repeat
        ">
        <div className="px-2 text-center flex items-center flex-col justify-center gap-6 h-full">
          <Heading className="*:capitalize max-w-full tracking-wide" size="5xl">
            <span className="text-text-accent block w-full sm:inline-flex sm:w-auto">Your Escape</span>
            <span>&nbsp;Begins Here</span>
          </Heading>
          <p className="text-pretty max-w-xs">Step into a world of calm, comfort, and beauty — curated just for you.</p>
          <div className="my-4 flex flex-wrap justify-center gap-4 sm:">
            <Button size="lg" className="capitalize">Book Your Experience</Button>
            <Button size="lg" variant="outline" className="capitalize">Explore Services</Button>
          </div>
        </div>
      </section>
      {/* Get to know more */}
      <section className="max-h-min h-auto px-6">
        <div className="
          bg-surface-light min-h-min h-[70dvh] md:container md:mx-auto rounded-lg
          overflow-hidden flex flex-col items-center gap-6 md:gap-12 md:flex-row -translate-y-12
          md:pr-6
        ">
          <div className="relative w-full max-md:max-h-[40dvh] max-md:aspect-video md:w-2/5 flex h-full">
            <Image className="object-cover w-full" src="/images/pre-hero.jpg" fill alt="Experience Unique Wellness at Unique Touch" />
          </div>
          <div className="max-md:*:mx-auto space-y-4 *:text-pretty">
            <Icon icon="Sparkle" size={36} color="text-brown-dp-1" className="max-md:mt-6" />
            <Heading size="3xl" className="text-pretty max-md:text-center">
              <span className="text-brown-dp-0">Experience True Wellness at</span>
              <span className="text-brown-dp-1">&nbsp;Unique Touch</span>
            </Heading>
            <p className="max-w-sm max-md:px-6 min-md:max-w-prose text-brown-dp-1 max-md:text-center">
              At Beauva, we believe true beauty blooms in balance. Our spa blends luxury and wellness, offering facials, massages, and more—each
              designed to renew your body, mind, and soul. Step into serenity, and let self-care become your lifestyle.
            </p>
            <Button className="flex max-md:mx-auto mt-6 mb-12" size="lg" variant="secondary">Get to Know More</Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home