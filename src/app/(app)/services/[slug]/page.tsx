'use client'

import { usePathname } from "next/navigation"
import { cn, formatPath } from "@/lib/utils"
import { Heading } from "@app-ui/heading"
import { ServicesContentData } from "@/data/services.data"
import { Icon } from "@app-ui/Icon"
import { Button } from "@app-ui/button"

const Service = () => {
    // Capitalizing and splitting to suitable format (... / ...)
    const formattedPath = formatPath(usePathname())
    const svData = ServicesContentData.find(sv => sv.id === formattedPath?.split(' / ').at(-1)?.toLowerCase())
    console.log(svData, formattedPath?.split(' / ').at(-1)?.toLowerCase())
    
    return (
        <>
            <section className="px-4 min-h-[60vh] h-96 text-layer-dark bg-[linear-gradient(to_top,rgba(0,0,0,0.38),rgba(0,0,0,0.38)),url('/images/hero-bg.jpeg')] bg-center bg-cover bg-no-repeat">
                <div className="flex h-full flex-col gap-4 w-full items-center justify-center">
                    <Heading size="5xl" className="capitalize text-center max-md:text-4xl">
                        <span>Discover the Treatments</span><br />
                        <span className="text-text-accent">That Restore Balance</span>
                    </Heading>
                    <div className="text-base font-medium text-text-accent *:last-of-type:text-light">
                        { formattedPath?.split('　').map(chunk => (
                            <span className={cn({ "text-brown-dp-0": chunk === '/' })} key={formattedPath + chunk}>
                                { chunk.replaceAll('-', ' ') }
                            </span>
                        )) }
                    </div>
                </div>
            </section>
            {/* Intro, title */}
            { svData ? (
                <>
                    <section className="m-section text-layer-light px-4">
                        <div className="container mx-auto">
                            <div className="text-center my-6 *:mx-auto">
                                <Heading size="4xl" className="mb-8">{ svData.name }</Heading>
                                <p>{ svData.sub }</p>
                            </div>
                        </div>
                    </section>
                    <section className="mt-16 lg:m-section-sm text-layer-light px-4">
                        <div className="px-4 container mx-auto flex flex-col lg:flex-row gap-16 justify-center lg:justify-between">
                            {/* Session Information */}
                            <div className="max-lg:text-center">
                                <div className="my-6 max-lg:text-center max-lg:mx-auto">
                                    <Heading size="4xl" className="mb-8 max-lg:mx-auto">
                                        <span>About</span>
                                        <span className="text-brown-dp-0"> the service</span>
                                    </Heading>
                                    <p className="max-lg:mx-auto">{ svData.about }</p>
                                </div>
                                <div className="mb-6 my-16">
                                    <Heading size="4xl" className="mb-8 max-lg:mx-auto">
                                        <span>What to Expect</span>
                                        <span className="text-brown-dp-0"> During Your Session</span>
                                    </Heading>
                                    <ul>
                                        { svData.session.map((step, i) => (
                                            <li key={step.title} className="flex flex-row max-lg:justify-center gap-6 mb-8 max-lg:text-left">
                                                <Heading className="text-brown-dp-0">{ i + 1 }.</Heading>
                                                <div className="flex flex-col">
                                                    <Heading className="text-brown-dp-0 mb-2">{ step.title }</Heading>
                                                    <p>{ step.description }</p>
                                                </div>
                                            </li>
                                        )) }
                                    </ul>
                                </div>
                                <div className="mb-6 my-16">
                                    <Heading className="text-brown-dp-0 mb-8 max-lg:mx-auto max-lg:hidden" size="4xl">Benefits</Heading>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 max-w-max max-lg:mx-auto max-lg:min-w-xl">
                                        { svData.benefits.map(perk => (
                                            <li key={perk} className="flex items-center max-lg:justify-center gap-2">
                                                <Icon icon="Check" color="text-light font-bold" className="grid place-items-center p-0.5 h-4 w-4 rounded-full bg-brown-dp-0" />
                                                <span>{ perk }</span>
                                            </li>
                                        )) }
                                    </ul>
                                </div>
                            </div>
                            {/* Service Details (Booking card) */}
                            <div className="
                                text-layer-dark bg-brown-dp-1 flex flex-col gap-8 h-max justify-center
                                p-8 rounded-4xl w-full sm:text-center lg:text-left lg:max-w-96 xl:max-w-lg
                            ">
                                <Heading size="4xl" className="sm:mx-auto lg:mx-0">Service Details</Heading>
                                <p className="text-text-accent sm:mx-auto lg:mx-0">{ svData.details.description }</p>
                                <div className="flex max-sm:flex-col flex-row lg:flex-col gap-4 justify-around">
                                    <div>
                                        <Heading size="md" className="font-bold">Duration</Heading>
                                        <span>{ svData.details.duration } minutes</span>
                                    </div>
                                    <div>
                                        <div>
                                            <Heading size="md" className="font-bold">Schedule</Heading>
                                            <span>{ svData.details.schedule }</span>
                                        </div>
                                    </div>
                                    <div>
                                        <Heading size="md" className="font-bold">Price</Heading>
                                        <div>
                                            <span className="font-medium">${ svData.details.price }</span>
                                            <span> per session</span>
                                        </div>
                                    </div>
                                </div>
                                <Button variant="light" className="rounded-2xl mt-6">Book now</Button>
                            </div>
                        </div>
                    </section>
                </>
            ) : null }
        </>
    )
}

export default Service