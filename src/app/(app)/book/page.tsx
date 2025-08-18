'use client'

import BookingForm from "@app-comps/sections/booking"
import { Heading } from "@app-ui/heading"
import Subscribe from "@app-comps/sections/subscribe"
import { faqData } from "@/data/faqData"
import CollapsibleFAQ from "@app-ui/collapsibleFAQ"
import { Separator } from "@app-ui/separator"
import CaptchaWrapper from "@app-comps/captcha/captcha-wrapper"

const BookingPage = () => {
    return (
        <>
            <section className="px-4 min-h-[60vh] h-96 text-layer-dark bg-[linear-gradient(to_top,rgba(0,0,0,0.38),rgba(0,0,0,0.38)),url('/images/hero-bg.jpeg')] bg-center bg-cover bg-no-repeat">
                <div className="flex h-full flex-col gap-4 w-full items-center justify-center">
                    <Heading size="5xl" className="capitalize text-center max-md:text-4xl">
                        <span>Your Path to Wellness</span><br />
                        <span className="text-text-accent"> is Just a Message Away</span>
                    </Heading>
                    <div className="text-base font-medium">
                        <span className="text-text-accent">Home </span>
                        <span>/ Booking</span>
                    </div>
                </div>
            </section>

            {/* Booking form */}
            <section data-aos="fade-up">
                <div className="container mx-auto">
                    <CaptchaWrapper>
                        <BookingForm />
                    </CaptchaWrapper>
                </div>
            </section>

            {/* FAQ */}
            <section data-aos="fade-up" className="mx-4 m-section">
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

            <Subscribe variation="light"/>
        </>
    )
}

export default BookingPage