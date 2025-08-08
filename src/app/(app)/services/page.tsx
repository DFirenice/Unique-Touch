import { Heading } from "@app-comps/ui/heading"
import ServiceCard from "@app-comps/serviceCard"
import { ServicesData } from "@/data/services.data"
import { Button } from "@/components/ui/button"
import Subscribe from "@/components/sections/subscribe"

const Services = () => {
  return (
    <>
        <section className="px-4 min-h-[60vh] h-96 text-layer-dark bg-[linear-gradient(to_top,rgba(0,0,0,0.38),rgba(0,0,0,0.38)),url('/images/hero-bg.jpeg')] bg-center bg-cover bg-no-repeat">
            <div className="flex h-full flex-col gap-4 w-full items-center justify-center">
                <Heading size="5xl" className="capitalize text-center max-md:text-4xl">
                    <span>Discover the Treatments</span><br />
                    <span className="text-text-accent">That Restore Balance</span>
                </Heading>
                <div className="text-base font-medium">
                    <span className="text-text-accent">Home </span>
                    <span>/ Services</span>
                </div>
            </div>
        </section>

        {/* Service tiles */}
        <section className="px-4 m-section text-layer-light">
            <div className="w-full container mx-auto">
                <div className="flex justify-between items-center lg:items-end flex-col gap-4 max-lg:text-center lg:flex-row">
                    <Heading className="text-brown-dp-0 *:not-last:mr-3 *:inline-block" size="4xl">
                        <span>Relax.</span>
                        <span className="text-brown-dp-1">Rejuvenate. </span>
                        <span>Repeat.</span>
                    </Heading>
                    <p className="max-w-sm lg:max-w-md">{`From skincare rituals to full-body therapies, our services are tailored to meet your beauty and wellness goals.`}</p>
                </div>
                <div className="mt-16 flex flex-row flex-wrap justify-between gap-4 *:basis-1/4 *:shrink *:grow">
                    { ServicesData.map((card, i) => (
                        <div key={"service_card" + i} className="*:mx-auto">
                            <ServiceCard data={card} />
                        </div>
                    )) }
                </div>
            </div>
        </section>

        {/* Ready to Reconnect */}
        <section className="mt-24 md:px-4 text-layer-dark">
            <div className="w-full md:container mx-auto">
                <div className="
                    flex justify-center items-center flex-col gap-6 min-h-[40vh] overflow-hidden md:rounded-4xl p-6 text-center
                    bg-[linear-gradient(to_top,rgba(114,91,75,0.87),rgba(114,91,75,0.87)),url('/images/about/towels_on_rack.jpg')] bg-center bg-cover bg-no-repeat
                ">
                    <div className="max-md:py-4">
                        <Heading size="4xl" className="mx-auto">
                            <span>Ready to</span>
                            <span className="text-text-accent"> Reconnect </span>
                            <span>Yourself?</span>
                        </Heading>
                        <p className="mx-auto max-w-sm mt-2 max-sm:my-4">Book your favorite treatment or consult our team for a personalized wellness plan made just for you.</p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Button variant="light">Book Now</Button>
                        <Button variant="outline">Explore Packages</Button>
                    </div>
                </div>
            </div>
        </section>

        <Subscribe variation="light" />
    </>
  )
}


export default Services