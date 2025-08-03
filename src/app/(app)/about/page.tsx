import { Heading } from "@app-ui/heading"
import { Separator } from "@/components/ui/separator"
import { Icon } from "@/components/ui/Icon"
import Tag from "@app-ui/tag"
import Image from "next/image"
import BookingSection from "@app-comps/sections/booking"

import { ExperienceDataP1, ExperienceDataP2 } from "@/data/services.data"
import './styles.css'

const AboutPage = () => {
    return (
        <>
            <section className="mt-28 max-md:min-h-[50vh] text-layer-light w-full">
                <div className="container px-4 flex h-full flex-col justify-center mx-auto">
                    <div className="w-full flex max-md:text-center md:justify-between items-center md:items-end flex-col md:flex-row gap-4">
                        <div className="max-md:mx-auto inline-flex my-2 md:hidden">
                            <Tag content="About" />
                        </div>
                        <Heading size="4xl" className="flex flex-col">
                            <span>Rooted in Wellness,</span>
                            <span className="text-brown-dp-0">Elevated by Beauty</span>
                        </Heading>
                        <div className="max-w-sm flex flex-col">
                            <span className="max-md:mx-auto inline-flex my-2 max-md:hidden">
                                <Tag content="About" />
                            </span>
                            <span>Discover the story, spirit, and soul behind every serene moment at Unique Touch.</span>
                        </div>
                    </div>
                    <div className="
                        mt-16 grid grid-cols-3 gap-4 *:w-full *:h-72 max-md:*:max-h-64
                        max-md:grid-cols-2 max-md:grid-rows-2
                    ">
                        <div className="relative aspect-square rounded-2xl overflow-hidden AboutPics1">
                            <Image className="object-cover aspect-square" fill src="/images/about/mixture.jpg" alt="Unique Touch" />
                        </div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden AboutPics2">
                            <Image className="object-cover aspect-square" fill src="/images/about/candles.jpg" alt="Unique Touch" />
                        </div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden AboutPics3">
                            <Image className="object-cover aspect-square" fill src="/images/pre-hero.jpg" alt="Unique Touch" />
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="mt-24 text-layer-light text-center px-4">
                <div className="w-full">
                    <div className="*:max-w-4xl overflow-hidden">
                        <Heading size="4xl" className="mx-auto">
                            <span className="text-brown-dp-0">{`Self-care is more than a luxury —`}</span>
                            <span>{` it's a lifestyle. Nestled in a calm, elegant space, our spa is a sanctuary where beauty, wellness, and inner balance come together.`}</span>
                        </Heading>
                    </div>
                    <div className="my-10 flex flex-row items-center justify-between">
                        <Separator orientation="horizontal" className="max-w-2/5" />
                        <div className="p-4 rounded-full bg-text-accent">
                            <Icon icon="Star" size={24} color="text-brown-dp-1" />
                        </div>
                        <Separator orientation="horizontal" className="max-w-2/5" />
                    </div>
                    <blockquote className="max-w-prose mx-auto">{`Whether you're here for a relaxing facial, a full-body retreat, or a moment of quiet, our treatments are designed to restore not only your skin, but also your spirit. Our expert therapists, calming rituals, and natural products ensure every visit feels like a gentle reset for your whole being.`}</blockquote>
                </div>
            </section>

            {/* Our values */}
            <section className="mt-24 bg-surface-dark text-layer-dark px-4">
                <div className="py-24 mx-auto container w-full flex justify-around flex-col gap-y-14 gap-x-8 max-md:text-center max-md:*:mx-auto md:flex-row">
                    <div>
                        <Heading className="flex flex-col" size="4xl">
                            <span className="text-text-accent">Our Values,</span>
                            <span>Your Experience</span>
                        </Heading>
                        <p className="mt-6 max-w-sm">Everything we do is rooted in purpose to nurture, uplift, and deliver beauty beyond the surface.</p>
                    </div>
                    <div className="flex flex-col gap-10 text-left">
                        { [ ...ExperienceDataP1, ...ExperienceDataP2 ].map((item, i) => (
                            <div className="flex gap-6 lg:gap-12 items-start max-md:items-center" key={`${item.heading}_${i}`} >
                                <div className="shrink-0 pt-1">
                                    <Icon icon={item.icon} size={36} color="text-text-accent" />
                                </div>
                                <div>
                                    <Heading size="2xl" className="font-semibold text-text-accent">{ item.heading }</Heading>
                                    <p className="text-light/60">{ item.desc }</p>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
            </section>

            <BookingSection />
        </>
    )
}

export default AboutPage