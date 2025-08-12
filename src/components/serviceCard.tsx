import type { TServiceCard } from "@app-types/services.types"
import { cn } from "@/lib/utils"
import Image from "@next/image"
import { Heading } from "@app-ui/heading"
import { Button } from "./ui/button"
import Link from "next/link"

type TServiceCardProps = {
    data: TServiceCard
}

const ServiceCard = ({ data }: TServiceCardProps) => {
    return (
        <div className={cn(
            "relative h-80 md:h-92 min-w-72 w-full rounded-lg overflow-hidden",
            `bg-[url('/images/skin-care.jpg')] bg-center bg-cover bg-no-repeat`,
            "hover:[&>div>#content>p]:opacity-100",
            "hover:[&>#panel]:h-full hover:[&>#panel]:justify-center hover:[&>#panel]:backdrop-blur-sm hover:[&>#panel>#content>p]:transition-all",
            "max-md:[&>#panel]:h-full max-md:[&>#panel]:justify-center max-md:[&>#panel]:backdrop-blur-sm"
        )}>
            <Image src={data.previewUrl} alt={data.title} className="object-cover" fill />
            <div className="
                absolute bottom-0 inset-x-0 h-[35%] bg-black/35 text-layer-dark
                flex flex-col gap-2 items-center px-2 py-4 overflow-hidden text-center
            " id="panel">
                <span>{ data.category }</span>
                <div id="content">
                    <Heading>{ data.title }</Heading>
                    <p className="md:opacity-0 mt-4 mb-6 max-w-sm">{ data.content }</p>
                </div>
                <Button variant="light" asChild>
                    <Link href={data.link}>View Details</Link>
                </Button>
            </div>
        </div>
    )
}

export default ServiceCard