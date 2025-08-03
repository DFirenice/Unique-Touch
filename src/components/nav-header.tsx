'use client'

import { Heading } from "@app-ui/heading"
import { Button } from "@app-ui/button"
import { Icon } from "@app-ui/Icon"
import Logo from "@app-comps/logo"
import Link from "next/link"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const NavHeader = () => {
    const [ isMinimized, setMinimized ] = useState(false)
    const [ dropdownOpen, setDropdownOpen ] = useState(false)
    const path = usePathname()
    
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
    
    // Trigger
    const fullCondition = (isMinimized || dropdownOpen || path === '/about' || path === '/contact')
    const minimizedCondition = (!isMinimized || dropdownOpen)

    // Modile: dropdown
    const handleDropdown = () => setDropdownOpen(state => !state)

    const navLinks = [['Home', '/'], ['About', '/about'], ['Services', '/#services'], ['Contact', '/contact']]

    const renderDropdown = () => {
        return dropdownOpen ? (
            <div className={cn(
                "fixed inset-0 z-10 h-full backdrop-blur-lg p-6",
                "flex flex-col",
                { "mt-24 bg-surface-dark/60": minimizedCondition },
                { "mt-16 bg-surface-dark/38": fullCondition },
            )}>
                { navLinks.map(
                    ([text, link], i) => (
                        <Link
                            href={link}
                            className={cn(
                                "underline-offset-8 hover:underline decoration-light",
                                "px-2 py-4 w-full",
                                { "underline": path === link }
                            )}
                            onClick={() => setDropdownOpen(false)}
                            key={`${text}_${i}`}
                        >
                            { text }
                        </Link>
                    )
                ) }
            </div>
        ) : null
    }
    
    return (
        <>
            <header className={ cn(
                "fixed inset-x-0 py-2 px-6 transition-all border-b-2 border-b-transparent",
                "flex flex-row items-center justify-between z-20",
                { "min-h-24": !isMinimized },
                { "min-h-16 backdrop-blur-lg bg-gradient-to-b lg:from-surface-dark/60 lg:to-surface-dark/60": fullCondition },
                { "bg-gradient-to-b from-surface-dark/38 to-surface-dark/38": fullCondition },
                { "border-b-brown-dp-1/24": dropdownOpen }
            ) }>
                <div className="flex flex-row items-center gap-4">
                    <div className="relative max-w-12 max-h-12 w-12 h-12 aspect-square">
                        <Logo />
                    </div>
                    <Heading size="2xl" className="font-mono max-md:hidden drop-shadow-sm">Unique Touch</Heading>
                </div>
                <div className="font-medium absolute text-center inset-x-0 flex-1 mx-auto max-lg:hidden *:px-4">
                    { navLinks.map(
                        ([text, link], i) => (
                            <Link href={link} className={cn(
                                "underline-offset-8 hover:underline decoration-light",
                                { "underline": path === link }
                            )} key={`${text}_${i}`}>
                                { text }
                            </Link>
                        )
                    ) }
                </div>
                <div>
                    <Icon icon={dropdownOpen ? "CircleX" : "AlignJustify" } size={28} className="lg:hidden drop-shadow-xs drop-shadow-black/50" onClick={handleDropdown} />
                    <Button className="max-lg:hidden" size="lg">Sign Up</Button>
                </div>
            </header>
            { renderDropdown() }
        </>
    )
}

export default NavHeader