import React from "react"
import Image from "next/image"
import Link from "next/link"

type Props = {
    category: string
    title: string
    price: string
    image: string
    href: string
}

const ProductItem = ({ category, title, price, image, href }: Props) => {
    return (
        <>
            <Link
                href={href || "/products"}
                className="w-full p-4 lg:w-1/4 md:w-1/2"
            >
                <span className="relative block h-48 overflow-hidden rounded">
                    <Image
                        alt={title}
                        className="block object-cover object-center w-full h-full"
                        src={image || "https://dummyimage.com/420x260"}
                        width={420}
                        height={260}
                    />
                </span>
                <div className="mt-4">
                    <h3 className="mb-1 text-xs tracking-widest uppercase text-muted-foreground title-font">
                        {category}
                    </h3>
                    <h2 className="text-lg font-medium text-secondary-foreground title-font">
                        {title}
                    </h2>
                    <p className="mt-1">{price}</p>
                </div>
            </Link>
        </>
    )
}

export default ProductItem
