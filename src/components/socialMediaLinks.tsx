import Link from "next/link"
import { IconButton } from "@chakra-ui/react"
import { LuFacebook, LuInstagram } from "react-icons/lu"
import { cn } from "@/lib/utils"

const SocialMediaLinks = ({ className }: { className?: string }) => {
    return (
        <div className={cn(
            "mt-6 flex flex-row gap-4",
            className
        )}>
            <Link href="">
                <IconButton className="bg-text-accent" rounded="full">
                    <LuFacebook strokeWidth="1" />
                </IconButton>
            </Link>
            <Link href="">
                <IconButton className="bg-text-accent" rounded="full">
                    <LuInstagram strokeWidth="1" />
                </IconButton>
            </Link>
        </div>
    )
}

export default SocialMediaLinks