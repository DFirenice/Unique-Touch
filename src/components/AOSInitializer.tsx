"use client"

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AOSInitializer () {
    useEffect(() => {
        AOS.init({
            once: true,
            easing: 'ease-in',
            duration: 300,
            offset: 125,
            anchorPlacement: 'top-center'
        })
    }, [])
    return null
}