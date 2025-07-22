import { Heading } from "@chakra-ui/react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Icon } from "@/components/ui/Icon"

import Hero from "@/components/sections/Hero"
import ServiceCards from "@/components/ui/service-cards"
import Card from "@/components/card"

import { ExperienceDataP1, ExperienceDataP2 } from "@/data/services.data"

const Home = () => {
  return (
    <>
      <Hero />

      {/* Get to know more */}
      <section className="max-h-min h-screen section-container">
        <div className="
          bg-surface-light min-h-min overflow-hidden md:container md:mx-auto rounded-lg
          flex flex-col items-center gap-6 md:gap-12 md:flex-row -translate-y-12
          md:pr-6
        ">
          <div className="relative w-full max-md:max-h-[40dvh] max-md:aspect-video md:min-h-[70dvh] md:w-2/5">
            <Image className="object-cover" src="/images/pre-hero.jpg" fill alt="Experience Unique Wellness at Unique Touch" />
          </div>
          <div className="max-md:*:mx-auto space-y-4 *:text-pretty md:pt-4">
            <Icon icon="Sparkle" size={36} color="text-brown-dp-1" className="max-md:mt-6" />
            <Heading size="3xl" className="text-pretty max-md:text-center">
              <span className="text-brown-dp-0">Experience True Wellness at</span>
              <span className="text-brown-dp-1">&nbsp;Unique Touch</span>
            </Heading>
            <p className="max-w-sm max-md:px-6 min-md:max-w-prose text-brown-dp-1 max-md:text-center">
              At Unique Touch, we believe true beauty blooms in balance. Our spa blends luxury and wellness, offering facials, massages, and more—each
              designed to renew your body, mind, and soul. Step into serenity, and let self-care become your lifestyle.
            </p>
            <Button className="flex max-md:mx-auto mt-6 mb-12" size="lg" variant="secondary">Get to Know More</Button>
          </div>
        </div>
      </section>
      
      {/* Services */}
      <section className="md:px-4 container w-full justify-self-center min-h-[85dvh] max-md:min-h-screen flex items-center justify-center text-center">
        <div className="w-full max-md:my-12 min-lg:my-12">
          <div className="px-4 py-1 border border-text-accent rounded-full inline-block text-brown-dp-1">Services</div>
          <div className="mb-12 *:my-4 *:mx-auto">
            <Heading className="text-brown-dp-0 *:not-last:mr-3 *:inline-block" size="4xl">
              <span>Relax.</span>
              <span className="text-brown-dp-1">Rejuvenate.</span>
              <span>Repeat.</span>
            </Heading>
            <p className="text-brown-dp-1 mx-auto max-md:max-w-sm max-w-prose px-4">
              From skincare rituals to full-body therapies, our services are tailored to meet your beauty and wellness goals.
            </p>
          </div>
          <ServiceCards />
        </div>
      </section>

      {/* Values & Experience, service continuation */}
      <section className="mt-16 w-full container flex flex-col mx-auto text-center mb-12">
        <div className="flex flex-col gap-4  *:[span,p,h2]:text-brown-dp-1 items-center">
          <Heading size="4xl" aria-level={2} className="*:not-last:mr-3">
            <span>Our Values,</span>
            <span className="text-brown-dp-0">Your Experience</span>
          </Heading>
          <p>Everything we do is rooted in purpose to nurture, uplift, and deliver beauty beyond the surface.</p>
        </div>
        <div className="text-layer-light grid services-small-screen md:grid-cols-3 gap-x-4 gap-y-2 mt-12 mx-4">
          <div className="flex flex-col md:*:flex-1 gap-6 sss-leftSide pt-16">
            { ExperienceDataP1.map(card => (
              <Card
                content={card}
                key={[card.heading, card.icon].toString()}
              />
            )) }
          </div>
          <div className="relative h-full w-full sss-image">
            <Image
              src="/images/experience-and-values.jpg"
              className="object-cover rounded-lg overflow-hidden"
              fill alt="Experience & Values"
            />
          </div>
          <div className="flex flex-col md:*:flex-1 gap-6 sss-rightSide">
            { ExperienceDataP2.map(card => (
              <Card 
                content={card}
                key={[card.heading, card.icon].toString()}
                pattern="text-icon"
              />
            )) }
          </div>
        </div>
      </section>
    </>
  )
}

export default Home