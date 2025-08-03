import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { Icon } from "./ui/Icon"

const SocialMediaLinks = ({ className }: { className?: string }) => {
    return (
        <div className={cn(
            "mt-6 flex flex-row gap-4",
            className
        )}>
            <Link href="">
                <Button className="bg-text-accent rounded-full hover:bg-text-accent/50 cursor-pointer"size="icon">
                    <Icon icon="LucideFacebook" color="text-brown-dp-0" size={8} />
                </Button>
            </Link>
            <Link href="">
                <Button className="bg-text-accent rounded-full hover:bg-text-accent/50 cursor-pointer" size="icon">
                    <Icon icon="LucideInstagram" color="text-brown-dp-0" size={8} />
                </Button>
            </Link>
        </div>
    )
}

export default SocialMediaLinks