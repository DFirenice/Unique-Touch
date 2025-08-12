import Image from "@next/image"

const Logo = () => {
    return (
        <Image
            placeholder="empty"
            className="drop-shadow-sm drop-shadow-black/50 object-cover"
            alt="Unique Touch 4 Wellness logo"
            src="/logo.svg"
            fill
            unoptimized
        />
    )
}

export default Logo