import Logo from "@app-comps/logo"
import { Heading } from "@app-ui/heading"
import { Separator } from "@app-ui/separator"
import Link from "next/link"
import { Icon } from "@app-ui/Icon"
import SocialMediaLinks from "@app-comps/socialMediaLinks"

const Footer = () => {
    return (
        <section className="text-layer-light mx-4">
            <div className="px-4 flex flex-col md:flex-row gap-12 justify-between w-full py-12 lg:px-12">
                {/* Logo */}
                <div className="flex flex-col md:gap-6 min-w-max">
                    <div className="flex flex-row gap-4 items-center max-md:hidden">
                        <div className="relative max-w-16 max-h-16 w-16 h-16 aspect-square">
                            <Logo />
                        </div>
                        <Heading size="4xl" className="font-mono">Unique Touch</Heading>
                    </div>
                    <div className="max-md:text-center">
                        <Heading size="xl" className="max-md:mx-auto">Working Hours</Heading>
                        <div className="text-brown-dp-0">
                            <span className="font-medium">Monday-Saturday : </span>
                            <span>9.00am - 8.00pm</span>
                        </div>
                        <div className="text-brown-dp-0">
                            <span className="font-medium">Sunday : </span>
                            <span>Closed</span>
                        </div>
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
                            <Link href="/#services">Services</Link>
                            <Link href="/#packages">Packages</Link>
                            <Link href="">Contact</Link>
                        </div>
                    </div>
                    {/* Contact Us */}
                    <div className="flex flex-col gap-4 h-full">
                        <Heading size="2xl">Contact Us</Heading>
                        <div className="flex flex-col gap-4 *:flex *:flex-row *:gap-2 h-full">
                            <div>
                                <Icon icon="Phone" color="text-brown-dp-0 min-h-4 min-w-4 w-4 aspect-square" />
                                <span className="max-w-36">{ "(123) 456-7890" }</span>
                            </div>
                            <div>
                                <Icon icon="MailOpen" color="text-brown-dp-0 min-h-4 min-w-4 w-4 aspect-square" />
                                <span className="max-w-36">{ "hello@ut4w.com" }</span>
                            </div>
                            <div>
                                <Icon icon="MapPinned" color="text-brown-dp-0 min-h-4 min-w-4 w-4 aspect-square" />
                                <span className="max-w-36">{ "123 Serenity Lane, Los Angeles, CA" }</span>
                            </div>
                        </div>
                        <SocialMediaLinks />
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <div className="w-full mx-auto">
                <Separator orientation="horizontal" />
                <div className="flex flex-col max-md:text-center md:flex-row justify-between gap-2 md:gap-6 w-full pt-6 pb-10">
                    <div className="max-md:*:font-medium">
                        <span className="mr-[1ch]">Copyright © { new Date().getFullYear() }</span>
                        <span>Unique Touch</span>
                    </div>
                    <div>
                        <Link href="" className="mr-6">Privacy Policy</Link>
                        <Link href="">Term and conditions</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer