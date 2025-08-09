import Logo from "@app-comps/logo"
import { Heading } from "@app-ui/heading"
import { Separator } from "@app-ui/separator"
import Link from "next/link"
import { Icon } from "@app-ui/Icon"
import SocialMediaLinks from "@app-comps/socialMediaLinks"

const Footer = () => {
    return (
        <section className="adaptable-footer text-layer-light px-4 pt-16">
            <div className="container mx-auto max-md:px-4 flex flex-col md:flex-row gap-12 justify-between w-full py-12">
                {/* Logo */}
                <div className="flex flex-col md:gap-6 min-w-max">
                    <div className="flex flex-row gap-4 items-center max-md:hidden">
                        <div className="relative max-w-16 max-h-16 w-16 h-16 aspect-square">
                            <Logo />
                        </div>
                        <Heading size="4xl" className="font-mono">Unique Touch</Heading>
                    </div>
                    <div className="max-md:text-center *:max-md:mx-auto">
                        <Heading size="xl" className="md:mb-4">Working Hours</Heading>
                        <Heading size="lg" className="text-brown-dp-0 text-wrap break-words max-sm:max-w-48">
                            <span>Monday - Saturday : </span>
                            <span className="font-normal">9.00am - 8.00pm</span>
                        </Heading>
                        <Heading size="lg" className="text-brown-dp-0">
                            <span>Sunday : </span>
                            <span className="font-normal">Closed</span>
                        </Heading>
                    </div>
                </div>
                {/* Links */}
                <div className="flex flex-row justify-center *:flex *:flex-col gap-4 sm:gap-10">
                    {/* Menu */}
                    <div className="md:justify-self-center flex flex-col gap-4 h-full max-md:min-w-1/2">
                        <Heading size="2xl">Menu</Heading>
                        <div className="flex flex-col gap-2">
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/services">Services</Link>
                            <Link href="/#packages">Packages</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </div>
                    {/* Contact Us */}
                    <div className="flex flex-col gap-4 h-full">
                        <Heading size="2xl">Contact Us</Heading>
                        <div className="wrap-break-word flex flex-col gap-4 *:flex *:items-center *:flex-row *:gap-2 h-full">
                            <div>
                                <Icon icon="Phone" color="text-brown-dp-0 min-h-4 min-w-4 w-4 aspect-square" />
                                <span className="max-w-36">{ "(647) 302-8529" }</span>
                            </div>
                            <div>
                                <Icon icon="MailOpen" color="text-brown-dp-0 min-h-4 min-w-4 w-4 aspect-square" />
                                <span className="max-w-36">{ "Uniquetouch4wellness@gmail.com" }</span>
                            </div>
                            <div>
                                <Icon icon="MapPinned" color="text-brown-dp-0 min-h-4 min-w-4 w-4 aspect-square" />
                                <span className="max-w-36">{ "700 Dundas St E, Mississauga, ON L4Y 3Y5" }</span>
                            </div>
                        </div>
                        <SocialMediaLinks />
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <div className="w-full mx-auto" data-slot="copyright">
                <Separator orientation="horizontal" />
                <div className="container mx-auto flex flex-col max-md:text-center md:flex-row justify-between gap-2 md:gap-6 w-full pt-6 pb-10">
                    <div className="text-sm">
                        <p className="max-w-sm">
                            This site is protected by reCAPTCHA and the Google&nbsp;
                            <Link href="https://policies.google.com/privacy" className="underline">Privacy Policy</Link>&nbsp;and&nbsp;
                            <Link href="https://policies.google.com/terms" className="underline">Terms of Service</Link>&nbsp;apply.
                        </p>
                    </div>
                    <div className="max-md:*:font-medium text-sm">
                        <p>
                            <span className="mr-[1ch]">Copyright © { new Date().getFullYear() }</span>
                            <span>Unique Touch 4 Wellness</span>
                        </p>
                        <p>
                            <Link href="">Privacy Policy</Link>
                            <Link href="" className="ml-2">Terms of Service</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer