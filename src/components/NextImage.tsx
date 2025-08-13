/* eslint-disable jsx-a11y/alt-text */
import { cn } from "@/lib/utils"
import Image, { ImageProps } from "next/image"
import blurMap from '@mappings/img-blur.map.json'

const NextImage = (props: ImageProps) => {
    if (!props.src) return null
    return (
        <Image
            placeholder="blur"
            blurDataURL={blurMap[props.src as keyof typeof blurMap] || undefined}
            decoding="sync"
            className={cn(
                "object-cover",
                props?.className
            )}
            { ...props }
        />
    )
}

export default NextImage