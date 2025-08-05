import type { TCardContent } from "@/components/card"
import { TServiceCard } from "@/types/services.types"

export const ExperienceDataP1: TCardContent[] = [
    {
        icon: "Flower",
        heading: 'Holistic Healing',
        desc: 'We treat beauty and wellness as one harmonious journey'
    },
    {
        icon: "PersonStanding",
        heading: 'Client-Centered Care',
        desc: 'Your comfort and results are always our top priority'
    },
    {
        icon: "Flower2",
        heading: 'Sustainable Beauty',
        desc: 'We use eco-friendly, cruelty-free products for conscious self-care'
    }
]

export const ExperienceDataP2: TCardContent[] = [
    {
        icon: "Lightbulb",
        heading: 'Continuous Innovation',
        desc: 'We stay ahead with the latest spa technology and trends'
    },
    {
        icon: "BadgeCheck",
        heading: 'Authenticity',
        desc: 'We provide personalized experiences with genuine passion'
    },
    {
        icon: "UsersRound",
        heading: 'Community',
        desc: 'We build a welcoming space for everyone to feel empowered'
    }
]

// Service cards (ie Services)
export const ServicesData: TServiceCard[] = [
    {
        previewUrl: '/images/skin-care.jpg',
        category: 'Skincare',
        title: 'Radiant Glow Facial',
        content: 'A rejuvenating facial treatment that deeply cleanses, nourishes, and brightens your skin for a healthy, radiant glow.',
        link: '/services/radiant-glow-facial'
    },
    {
        previewUrl: '/images/body-and-wellness.jpg',
        category: 'Body & Wellness',
        title: 'Aromatherapy Massage',
        content: 'A relaxing massage using essential oils to soothe the senses, reduce stress, and promote overall well-being.',
        link: '/services/aromatherapy-massage'
    },
    {
        previewUrl: '/images/nail-care.jpg',
        category: 'Nail Care',
        title: 'Signature Manicure & Pedicure',
        content: 'A luxurious nail treatment including shaping, buffing, cuticle care, and polish for beautifully maintained hands and feet.',
        link: '/services/signature-manicure-pedicure'
    },
    {
        previewUrl: '/images/body-treatment.jpg',
        category: 'Body Treatment',
        title: 'Detox Body Wrap',
        content: 'A nourishing body wrap designed to draw out impurities, hydrate the skin, and leave you feeling refreshed and revitalized.',
        link: '/services/detox-body-wrap'
    },
    {
        previewUrl: '/images/experience-and-values.jpg',
        category: 'Massage Therapy',
        title: 'Hot Stone Therapy',
        content: 'Smooth, heated stones are placed and massaged along the body to relieve tension, improve circulation, and calm the nervous system.',
        link: '/services/hot-stone-therapy'
    },
    {
        previewUrl: '/images/pre-hero.jpg',
        category: 'Beauty Enhancements',
        title: 'Brow & Lash Care',
        content: 'Professional brow shaping and lash treatments to define, enhance, and highlight your natural beauty.',
        link: '/services/brow-lash-care'
    }
]