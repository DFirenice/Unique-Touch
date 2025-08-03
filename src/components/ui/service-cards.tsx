import { Heading } from "@app-ui/heading"
import Image from "next/image"

const serviceCards = [
    {
        localImgSrc: '/images/nail-care.jpg',
        service: 'Nail Care',
        desc: 'Signature Manicure & Pedicure'
    },
    {
        localImgSrc: '/images/skin-care.jpg',
        service: 'Skincare',
        desc: 'Radiant Glow Facial'
    },
    {
        localImgSrc: '/images/body-and-wellness.jpg',
        service: 'Body & Wellness',
        desc: 'Aromatherapy'
    },
    {
        localImgSrc: '/images/body-treatment.jpg',
        service: 'Body Treatment',
        desc: 'Detox Body Wrap'
    },
]


const ServiceCards = () => {
    return (
        <div className="
            grid gap-4 screen-container
            md:grid-cols-4
        ">
            {serviceCards.map(({ localImgSrc, service, desc }) => (
                <div
                    key={service}
                    className="
                        flex flex-col max-md:flex-row items-center gap-4
                        max-md:bg-surface-light sm:rounded-lg h-full
                    ">
                    <div className="
                        relative aspect-square w-full overflow-hidden
                        max-md:max-h-36 max-md:max-w-36 md:rounded-lg
                        max-sm:max-h-28 max-sm:max-w-28
                    ">
                        <Image
                            src={localImgSrc}
                            alt={`${service}_${desc}`}
                            className="object-cover max-md:rounded-l-lg max-sm:rounded-r-lg max-sm:rounded-l-none"
                            fill
                        />
                    </div>
                    <div className="inline-block max-md:text-left max-md:pr-4 **:text-pretty w-full">
                        <span className="text-brown-dp-1">{ service }</span>
                        <Heading className="text-brown-dp-0">{ desc }</Heading>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ServiceCards