import React from "react"
import { Metadata } from "next"
import ProductItem from "@/components/web/product-item"

type Props = {}

const products = [
    {
        category: "Software",
        title: "AdminSync Pro",
        price: "Exclusive",
        image: "/images/products/adminsync-pro.jpeg",
        href: "/products/adminsync-pro",
    },
    {
        category: "Software",
        title: "ID Data Collection Portal",
        price: "coming soon",
        image: "/images/products/id-data-collection-portal.jpeg",
        href: "/products/",
        // href: "/products/id-data-collection-portal",
    },
    {
        category: "Software",
        title: "Business ERP",
        price: "coming soon",
        image: "/images/products/business-erp-2.jpeg",
        href: "/products/",
    },
    {
        category: "Software",
        title: "ID Card Maker Software",
        price: "coming soon",
        image: "/images/products/id-card-maker-9.jpeg",
        href: "/products/",
    },
    {
        category: "Software",
        title: "Billing Software",
        price: "coming soon",
        image: "/images/products/billing-software.jpeg",
        href: "/products/",
    },
    {
        category: "Software",
        title: "Digital Card Maker",
        price: "coming soon",
        image: "/images/products/digital-card-maker-4.jpeg",
        href: "/products/",
    },
]

export const metadata: Metadata = {
    title: "Discover Our Cutting-Edge Software Solutions",
    description:
        "Explore our innovative software solutions designed to elevate your business. From efficient ERP systems to advanced RFID technology, discover the future of technology at Kodecs.",
    keywords: [
        "Cutting-edge software",
        "ERP solutions",
        "RFID technology",
        "Business software",
        "Innovative solutions",
        "Kodecs Technosoft",
    ],
    alternates: {
        canonical: "https://kodecs.in/products",
    },
}

const Page = (props: Props) => {
    return (
        <>
            <section className="w-full text-muted-foreground body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-col flex-wrap items-center w-full mb-20 text-center">
                        <h1 className="mb-2 text-2xl font-medium text-secondary-foreground sm:text-3xl title-font">
                            Products & Services
                        </h1>
                        <p className="w-full leading-relaxed text-muted-foreground lg:w-1/2">
                            Elevate efficiency and innovation with our
                            cutting-edge software solutions. Explore our
                            products now!
                        </p>
                    </div>
                    <div className="flex flex-wrap w-full shrink-0">
                        {products.map((product, index) => (
                            <ProductItem key={index} {...product} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page
