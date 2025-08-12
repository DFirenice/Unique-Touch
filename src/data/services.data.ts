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

// Services' content (pages)
export type TServicesContentData = {
    id: string
    name: string
    sub: string
    about: string
    session: {
        title: string
        description: string
    }[]
    benefits: string[]
    details: {
        description: string
        duration: number    // Minutes
        schedule: string    // Ex.: Moday-Saturday, 10am - 7pm
        price: number       // Dollars per session
    }
}

export const ServicesContentData: TServicesContentData[] = [
    {
        id: 'radiant-glow-facial',
        name: 'Radiant Glow Facial',
        sub: 'Restore your skin’s natural brightness and vitality',
        about: 'Our Radiant Glow Facial is a premium skincare experience designed to deeply cleanse, hydrate, and rejuvenate your complexion. Using high-quality products rich in antioxidants and vitamins, this treatment helps remove impurities, reduce dullness, and leave your skin feeling refreshed and luminous.',
        session: [
            {
                title: 'Deep Cleansing & Exfoliation',
                description: 'We start by thoroughly cleansing the skin to remove makeup, dirt, and excess oils, followed by gentle exfoliation to slough away dead skin cells.'
            },
            {
                title: 'Nourishing Mask',
                description: 'A rich mask infused with botanical extracts and vitamins is applied to hydrate, soothe, and brighten the skin.'
            },
            {
                title: 'Facial Massage',
                description: 'Relaxing massage techniques stimulate blood circulation, promote lymphatic drainage, and leave your face looking revitalized.'
            }
        ],
        benefits: [
            'Brightens dull skin',
            'Hydrates and nourishes',
            'Reduces signs of fatigue',
            'Improves skin texture and tone'
        ],
        details: {
            description: 'Ideal for anyone seeking to improve skin health and achieve a natural, radiant glow.',
            duration: 60,
            schedule: 'Monday–Saturday, 10am – 7pm',
            price: 85
        }
    },
    {
        id: 'aromatherapy-massage',
        name: 'Aromatherapy Massage',
        sub: 'Relax your body and uplift your mind with the power of essential oils',
        about: 'Our Aromatherapy Massage blends gentle massage techniques with pure essential oils, offering a sensory journey that calms the mind, relieves muscle tension, and restores emotional balance. Each oil blend is chosen to match your needs, from stress relief to energy boosting.',
        session: [
            {
                title: 'Essential Oil Selection',
                description: 'Choose from a variety of therapeutic oil blends to match your mood and wellness goals.'
            },
            {
                title: 'Full-Body Massage',
                description: 'A light to medium pressure massage focuses on relaxation and stress reduction while enhancing circulation.'
            },
            {
                title: 'Mindful Breathing & Relaxation',
                description: 'Guided breathing helps deepen the effects of the treatment and promote a sense of inner calm.'
            }
        ],
        benefits: [
            'Relieves stress and anxiety',
            'Promotes better sleep',
            'Boosts mood and energy',
            'Improves circulation'
        ],
        details: {
            description: 'Perfect for those looking to de-stress and indulge in a soothing, aromatic experience.',
            duration: 75,
            schedule: 'Monday–Saturday, 10am – 7pm',
            price: 95
        }
    },
    {
        id: 'signature-manicure-pedicure',
        name: 'Signature Manicure & Pedicure',
        sub: 'Luxurious care for hands and feet',
        about: 'Treat yourself to our Signature Manicure & Pedicure — a pampering session that leaves your hands and feet looking and feeling their best. We use nourishing treatments to maintain nail health while enhancing beauty.',
        session: [
            {
                title: 'Nail Shaping & Buffing',
                description: 'Gently shaping and smoothing nails for a clean, polished look.'
            },
            {
                title: 'Cuticle Care',
                description: 'Hydrating cuticle treatment and precise trimming to promote healthy nail growth.'
            },
            {
                title: 'Polish or Natural Finish',
                description: 'Choose from a wide range of premium polishes or opt for a buffed natural shine.'
            }
        ],
        benefits: [
            'Improves nail health',
            'Softens skin on hands and feet',
            'Provides a clean, polished appearance',
            'Promotes relaxation'
        ],
        details: {
            description: 'Ideal for regular upkeep or special occasions when you want to look and feel your best.',
            duration: 90,
            schedule: 'Monday–Saturday, 10am – 7pm',
            price: 70
        }
    },
    {
        id: 'detox-body-wrap',
        name: 'Detox Body Wrap',
        sub: 'Purify and renew from head to toe',
        about: 'Our Detox Body Wrap is designed to cleanse the skin, eliminate toxins, and deeply hydrate. This treatment combines natural clays, seaweed, and herbal infusions to refresh the body and restore energy.',
        session: [
            {
                title: 'Body Exfoliation',
                description: 'Gentle exfoliation removes dead skin cells and prepares the skin for optimal absorption of nutrients.'
            },
            {
                title: 'Nourishing Wrap',
                description: 'A warm, nutrient-rich wrap envelops the body, drawing out impurities and replenishing moisture.'
            },
            {
                title: 'Hydration Finish',
                description: 'The session concludes with a moisturizing massage to leave your skin silky smooth.'
            }
        ],
        benefits: [
            'Draws out toxins',
            'Hydrates and softens skin',
            'Boosts circulation',
            'Relieves fatigue'
        ],
        details: {
            description: 'Recommended for those seeking to refresh the body and enhance skin vitality.',
            duration: 75,
            schedule: 'Monday–Saturday, 10am – 7pm',
            price: 110
        }
    },
    {
        id: 'hot-stone-therapy',
        name: 'Hot Stone Therapy',
        sub: 'Deep relaxation with the healing warmth of stones',
        about: 'Hot Stone Therapy uses smooth, heated basalt stones to melt away muscle tension and promote a deep state of relaxation. The combination of heat and massage helps improve circulation and calm the nervous system.',
        session: [
            {
                title: 'Stone Placement',
                description: 'Heated stones are placed on specific points to target tension and promote energy flow.'
            },
            {
                title: 'Massage with Stones',
                description: 'The therapist uses the stones as an extension of their hands for deep muscle relief.'
            },
            {
                title: 'Finishing Stretches',
                description: 'Gentle stretching completes the session, leaving you feeling light and relaxed.'
            }
        ],
        benefits: [
            'Eases muscle stiffness',
            'Enhances blood flow',
            'Promotes deep relaxation',
            'Reduces stress'
        ],
        details: {
            description: 'Ideal for individuals with chronic muscle tension or those seeking ultimate relaxation.',
            duration: 90,
            schedule: 'Monday–Saturday, 10am – 7pm',
            price: 120
        }
    },
    {
        id: 'brow-lash-care',
        name: 'Brow & Lash Care',
        sub: 'Frame your eyes with perfectly shaped brows and lush lashes',
        about: 'Our Brow & Lash Care service enhances your natural features with professional shaping, tinting, and nourishing treatments. Whether you’re looking for a subtle lift or a bold, defined look, we customize the service to your style.',
        session: [
            {
                title: 'Brow Shaping',
                description: 'Careful sculpting of the eyebrows to match your facial structure and style preference.'
            },
            {
                title: 'Lash Enhancement',
                description: 'Lash tint or lift for a fuller, more defined appearance without the need for mascara.'
            },
            {
                title: 'Nourishing Serum Application',
                description: 'A conditioning treatment strengthens and promotes healthy lash and brow growth.'
            }
        ],
        benefits: [
            'Enhances facial symmetry',
            'Defines and brightens eyes',
            'Reduces daily makeup needs',
            'Strengthens hair follicles'
        ],
        details: {
            description: 'Perfect for those who want long-lasting definition and low-maintenance beauty.',
            duration: 45,
            schedule: 'Monday–Saturday, 10am – 7pm',
            price: 55
        }
    }
]