export const bookingStepsData = [
    {
        title: 'Schedule Your Appointment',
        sub: 'Book online or call to reserve your preferred time.'
    },
    {
        title: 'Personalized Consultation',
        sub: 'Our specialists will assess your needs and recommend ideal treatments.'
    },
    {
        title: 'Relax & Rejuvenate',
        sub: 'Enjoy premium care and soothing ambiance during your session.'
    },
    {
        title: 'Glow Beyond the Spa',
        sub: 'Leave with post-treatment tips to maintain your wellness glow at home.'
    },
]

export type TPackage = {
    title: string
    sub: string
    price: string
    points: string[]
    dark?: boolean
}

export const packagesData: TPackage[] = [
    {
        title: 'The Glow Ritual',
        sub: 'A refreshing facial and full-body treatment to reset your glow.',
        price: '85',
        points: [
            'Deep cleansing facial',
            'Aromatherapy body massage (60 min)',
            'Herbal tea & wellness lounge access',
            'Complimentary skin analysis',
        ]
    },
    {
        title: 'Beauva Essentials',
        sub: 'A full spa day experience designed to relax and recharge.',
        price: '145',
        points: [
            'Signature facial',
            'Aromatherapy massage (90 min)',
            'Manicure & pedicure',
            'Wellness snack & tea set',
        ],
        dark: true
    },
    {
        title: 'Radiance Retreat',
        sub: 'The ultimate luxury spa escape for complete mind and body renewal.',
        price: '220',
        points: [
            'Premium gold facial',
            'Hot stone therapy (90 min)',
            'Detox body wrap',
            'Foot ritual + herbal soak',
            'Complimentary spa gift set,'
        ]
    },
]