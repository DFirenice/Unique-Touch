import { Button, buttonVariants } from "@app-ui/button"
import { type VariantProps } from "class-variance-authority"
import Link from "next/link"
import React from "react"

type TBookNowProps = {
    children?: string | React.ReactNode
} & VariantProps<typeof buttonVariants>
  & React.HTMLAttributes<HTMLButtonElement>

const BookNow = ({ children, ...props }: TBookNowProps) => {
    return (
        <Link href="/book">
            <Button { ...props }>
                { children || "Book Now" }
            </Button>
        </Link>
    )
}

export default BookNow