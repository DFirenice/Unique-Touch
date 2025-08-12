import { Heading } from "@app-ui/heading"
import { Button } from "@app-comps/ui/button"
import Image from "@next/image"
import { Icon } from "@app-comps/ui/Icon"
import Logo from "@app-comps/logo"
import Tag from "@app-ui/tag"
import Link from "next/link"

import Hero from "@/components/sections/Hero"
import Subscribe from "@/components/sections/subscribe"
import ServiceCards from "@app-comps/ui/service-cards"
import Card from "@app-comps/card"
import Package from "@app-comps/package"

import { ExperienceDataP1, ExperienceDataP2 } from "@/data/services.data"
import { bookingStepsData, packagesData, TPackage } from "@/data/arrangments.data"
import { Separator } from "@app-comps/ui/separator"

const Home = () => {
  return (
    <>
      {/* Hero */}
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
            <Link href="/about">
              <Button className="flex max-md:mx-auto mt-6 mb-12" size="lg" variant="secondary">Get to Know More</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services */}
      <section id="services" className="md:px-4 container w-full justify-self-center min-h-[85dvh] max-md:min-h-screen flex items-center justify-center text-center">
        <div className="w-full max-md:my-12 min-lg:my-12">
          <Tag content="Services" />
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
      <section className="mt-16 w-full container flex flex-col mx-auto text-center">
        <div className="flex flex-col gap-4  *:[span,p,h2]:text-brown-dp-1 items-center">
          <Heading size="4xl" aria-level={2} className="*:not-last:mr-3">
            <span>Our Values,</span>
            <span className="text-brown-dp-0">Your Experience</span>
          </Heading>
          <p>Everything we do is rooted in purpose to nurture, uplift, and deliver beauty beyond the surface.</p>
        </div>
        <div className="text-layer-light grid services-small-screen md:grid-cols-3 gap-x-4 gap-y-2 mt-12 mx-4">
          <div className="flex flex-col md:*:flex-1 gap-6 sss-leftSide max-md:pt-16">
            { ExperienceDataP1.map(card => (
              <Card
                key={[card.heading, card.icon].toString()}
                content={card}
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
                key={[card.heading, card.icon].toString()}
                content={card}
                pattern="text-icon"
              />
            )) }
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="md:mx-4 max-md:min-h-[50dvh] text-layer-light px-4 m-section">
        <div className="container mx-auto flex md:flex-row flex-col gap-4 justify-center">
          <div className="*:my-4 w-full max-md:text-center max-md:*:mx-auto">
            <Heading size="4xl" className="flex flex-col">
              <span className="text-brown-dp-0">Our Journey</span>
              <span>in Numbers</span>
            </Heading>
            <p className="text-brown-dp-1 max-w-sm">
              <span className="text-brown-dp-0 font-medium">Every number tells a story - </span>
              of glowing skin, happy hearts, and meaningful spa moments.
            </p>
          </div>
          <div className="w-full max-md:text-center grid grid-cols-2 gap-2 *:min-w-1/2 *:w-full **:text-pretty">
            <div className="rounded-lg overflow-hidden p-6">
              <Heading size="4xl" className="text-brown-dp-0 font-medium text-nowrap">5,2K+</Heading>
              <p>Happy Clients Served</p>
            </div>
            <div className="rounded-lg overflow-hidden p-6">
              <Heading size="4xl" className="text-brown-dp-0 font-medium text-nowrap">4.9 <span className="text-2xl text-dropwn-dp-1">/ 5</span></Heading>
              <p>Avarage Customer Rating</p>
            </div>
            <div className="rounded-lg overflow-hidden p-6">
              <Heading size="4xl" className="text-brown-dp-0 font-medium text-nowrap">
                10+ <span className="text-2xl text-dropwn-dp-1">years</span>
              </Heading>
              <p>Spa & Wellness Expertise</p>
            </div>
            <div className="rounded-lg overflow-hidden p-6">
              <Heading size="4xl" className="text-brown-dp-0 font-medium text-nowrap">50+</Heading>
              <p>Certified Wellness Experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customers' feedback */}
      <section className="
        m-section px-4 py-12 min-h-[75vh] flex flex-col items-center justify-center gap-16 text-center
        bg-[url('/images/pattern.svg')] bg-repeat bg-[length:75vh] bg-center bg-brown-dp-1
      ">
        <div className="flex flex-col justify-center gap-4">
          <div className="relative w-12 h-12 mx-auto"><Logo /></div>
          <Heading size="3xl">Voices of <span className="text-text-accent">Wellness</span></Heading>
        </div>
        <div className="space-y-4">
          <p className="text-xl">{`"Unique Touch is my personal escape. Every visit leaves me refreshed, glowing, and completely relaxed. The team is amazing! I've been a loyal client for over two years and it just keeps getting better."`}</p>
          <span className="text-text-accent">Lana Moris, Long-time client</span>
        </div>
      </section>

      {/* Hot it works */}
      <section className="m-section text-center px-4 text-layer-light">
        <div>
          <Tag content="Hot It Works" />
          <div className="mb-12 *:my-4 *:mx-auto">
            <Heading className="text-brown-dp-0 *:not-last:mr-3 *:inline-block" size="4xl">
              <span className="text-brown-dp-1">From booking</span>
              <span>To Glowing</span>
            </Heading>
          </div>
        </div>
        <div className="text-pretty flex flex-col lg:flex-row gap-4 text-left lg:container mx-auto w-full mt-12">
          { bookingStepsData.map((step, i) => (
            <div className="flex flex-row max-lg:flex-col min-sm:max-lg:mx-auto max-lg:min-w-4/5" key={`${step.title}_main`}>
              <div className="max-h-min gap-6 flex max-lg:flex-row lg:flex-col align-start">
                <Heading size="6xl" className="max-lg:mx-8 max-sm:mx-4 max-lg:max-w-[2rem] w-full">{i + 1}</Heading>
                <div className="w-full">
                  <Heading size="2xl" className="text-brown-dp-0 font-normal">{ step.title }</Heading>
                  <p className="max-w-sm">{ step.sub }</p>
                  { i + 1 !== bookingStepsData.length && <Separator orientation="horizontal" className="lg:hidden my-6" />}
                </div>
              </div>
              { i + 1 !== bookingStepsData.length && <Separator orientation="vertical" className="max-lg:hidden max-h-2/3 m-auto mx-6" />}
            </div>
          )) }
        </div>
      </section>

      {/* Packages */}
      <section className="px-4 m-section text-layer-light text-center" id="packages">
        <div className="w-full mx-auto xl:container">
          <div className="*:my-4 w-full text-center flex items-center flex-col">
            <Heading size="4xl" className="flex flex-col text-brown-dp-0">
              <span className="text-brown-dp-1">Wellness</span>
              <span>Begins with One Visit</span>
            </Heading>
            <p className="text-brown-dp-1 max-w-sm mx-auto">
              No commitment needed - just choose a package that suits your mood and let your self-care journey begin.
            </p>
          </div>
          <div className="flex flex-row xl:justify-center gap-4 max-xl:overflow-x-scroll w-full mt-12">
            { packagesData.map((pack: TPackage) => (
              <Package
                key={pack.title + "_package"}
                data={pack}
                dark={pack.dark || false}
              />
            )) }
          </div>
        </div>
      </section>
      
      <Subscribe />
    </>
  )
}

export default Home