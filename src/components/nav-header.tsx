import { Heading } from "@chakra-ui/react"
import Image from "next/image"
import { Icon } from "@app-ui/Icon"

const Menu = () => {
    return (
        <div className="
            absolute top-0 left-0 w-full h-screen px-2 py-4 backdrop-blur-xs bg-gray-800/50
            flex flex-col gap-4
        ">
            Menu
        </div>
    )
}

const NavHeader = () => {
    return (
        <header className="
            absolute inset-x-0 py-2 px-6 min-h-24
            flex flex-row items-center justify-between
        ">
            <div className="flex flex-row items-center gap-4">
                <div className="relative max-w-12 max-h-12 w-12 h-12 aspect-square">
                    <Image src="logo.svg" fill objectFit="cover" alt="Unique Touch 4 Wellness logo" />
                </div>
                <Heading size="2xl" className="font-mono max-md:hidden">Unique Touch</Heading>
            </div>
            <div>
                <Icon icon="AlignJustify" size={28} className="md:hidden" />
            </div>
        </header>
    )
}

export default NavHeader