'use client'

import { Heading } from "@chakra-ui/react"
import { Button } from "@app-ui/button"
import { Icon } from "@app-ui/Icon"
import Image from "next/image"
import Link from "next/link"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const NavHeader = () => {
    const [ isMinimized, setMinimized ] = useState(false)
    
    useEffect(() => {
        const handleScroll = () => {
            const threshold = window.innerHeight * 0.2
            if (window.scrollY > threshold) setMinimized(true)
            else setMinimized(false)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    
    return (
        <header className={ cn(
            "fixed inset-x-0 py-2 px-6 transition-all",
            "flex flex-row items-center justify-between z-10",
            { "min-h-24": !isMinimized },
            { "min-h-16 backdrop-blur-lg": isMinimized }
        ) }>
            <div className="flex flex-row items-center gap-4">
                <div className="relative max-w-12 max-h-12 w-12 h-12 aspect-square">
                    <Image className="drop-shadow-sm drop-shadow-black object-cover" src="logo.svg" fill alt="Unique Touch 4 Wellness logo" />
                </div>
                <Heading size="2xl" className="font-mono max-md:hidden">Unique Touch</Heading>
            </div>
            <div className="font-medium absolute text-center inset-x-0 flex-1 mx-auto max-lg:hidden *:px-4">
                { ['Home', 'About', 'Services', 'Contact'].map(
                    (text, i) => (
                        <Link href="" className="underline-offset-8 underline decoration-light" key={`${text}_${i}`}>
                            { text }
                        </Link>
                    )
                ) }
            </div>
            <div>
                <Icon icon="AlignJustify" size={28} className="lg:hidden drop-shadow-xs drop-shadow-black" />
                <Button className="max-lg:hidden" size="lg">Sign Up</Button>
            </div>
        </header>
    )
}

export default NavHeader