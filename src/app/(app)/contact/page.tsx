import { Separator } from "@/components/ui/separator"
import ContactForm from "@app-comps/sections/contact"
import SocialMediaLinks from "@app-comps/socialMediaLinks"
import CollapsibleFAQ from "@app-ui/collapsibleFAQ"
import { Icon } from "@app-ui/Icon"
import { Heading } from "@app-ui/heading"
import { faqData } from "@/data/faqData"

const Contact = () => {
  return (
    <>
      <section className="mt-32 px-4">
        <div className="w-full text-layer-light container mx-auto">
          <div className="flex justify-between items-center lg:items-end flex-col gap-4 max-lg:text-center lg:flex-row">
            <Heading size="4xl" className="capitalize flex flex-col">
              <span>{`We're Here to Help You`}</span>
              <span className="text-brown-dp-0">Feel Your Best</span>
            </Heading>
            <p className="max-w-sm lg:max-w-md">{`Whether you're ready to book or simply have questions, we'd love to hear from you.`}</p>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="mt-24 px-4">
        <div className="w-full text-layer-light container mx-auto">
          <div className="flex max-sm:*:min-w-[40vw] *:flex-1 *:basis-0 flex-wrap flex-row justify-center gap-y-12 gap-4 md:gap-x-6 max-sm:text-xs max-md:text-sm">
            {/* Contact Card */}
            <div className="flex flex-col gap-4 min-w-20 md:min-w-32 items-center">
              <div className="bg-surface-light p-6 grid place-items-center max-w-26 md:max-w-32 w-full h-auto aspect-square rounded-4xl">
                <Icon icon="Phone" color="text-brown-dp-1" size={32} />
              </div>
              <div className="text-brown-dp-0 items-center flex flex-col text-center w-full break-words">
                <Heading size="2xl" className="mb-2">Contact</Heading>
                <span>{`unique@touch.com`}</span>
                <span>{`(123) 456-7890`}</span>
              </div>
            </div>
            {/* Opening Hours Card */}
            <div className="flex flex-col gap-4 min-w-20 md:min-w-32 items-center">
              <div className="bg-surface-light p-6 grid place-items-center max-w-26 md:max-w-32 w-full h-auto aspect-square rounded-4xl">
                <Icon icon="Clock2" color="text-brown-dp-1" size={32} />
              </div>
              <div className="text-brown-dp-0 flex flex-col text-center w-full break-words">
                <Heading size="2xl" className="mb-2">Opening Hours</Heading>
                <span>{`Mon - Fri: 10.00AM - 9.00PM`}</span>
                <span>{`Saturday: 10.00AM - 7.00PM`}</span>
                <span>{`Sunday: Closed`}</span>
              </div>
            </div>
            {/* Address Card */}
            <div className="flex flex-col gap-4 min-w-20 md:min-w-32 items-center">
              <div className="bg-surface-light p-6 grid place-items-center max-w-26 md:max-w-32 w-full h-auto aspect-square rounded-4xl">
                <Icon icon="House" color="text-brown-dp-1" size={32} />
              </div>
              <div className="text-brown-dp-0 flex flex-col text-center w-full break-words">
                <Heading size="2xl" className="mb-2">Address</Heading>
                <span>{`123 Seneity Lane, Los Angeles`}</span>
                <span>{`CA 90028`}</span>
              </div>
            </div>
          </div>
          <SocialMediaLinks className="justify-center" />
        </div>
      </section>
      <section className="mx-4 mt-24">
        <div className="px-4 text-layer-light w-full container mx-auto flex flex-col max-lg:gap-y-12 gap-8 lg:flex-row justify-center lg:justify-around">
          <div className="max-lg:text-center px-4">
            <Heading size="4xl">
              <span>Wondering</span>
              <span className="text-brown-dp-0"> About Something?</span>
            </Heading>
            <p className="max-w-sm mt-6 max-lg:mx-auto">Everything we do is rooted in purpose - to nurture, uplift, and deliver beauty beyond the surface.</p>
          </div>
          <div className="flex flex-col w-full px-4 not-first:mt-4">
            { faqData.map(({ trigger, content }, i) => (
              <div key={trigger + i}>
                <CollapsibleFAQ trigger={trigger} content={content} open={i < 2} />
                { i + 1 !== faqData.length && <Separator /> }
              </div>
            )) }
          </div>
        </div>
      </section>
      <section className="mt-16" />
    </>
  )
}

export default Contact