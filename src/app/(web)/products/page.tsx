import React from "react"
import { Metadata } from "next"
import ProductItem from "@/components/web/product-item"

type Props = {}

const products = [
    {
        category: "Software",
        title: "ID Data Collection Portal",
        price: "coming soon",
        image: "/images/products/id-data-collection-portal.jpeg",
    },
    {
        category: "Software",
        title: "RFID Attendance System",
        price: "coming soon",
        image: "/images/products/rfid-attendance-system.jpeg",
    },
    {
        category: "Software",
        title: "Business ERP",
        price: "coming soon",
        image: "/images/products/business-erp-2.jpeg",
    },
    {
        category: "Software",
        title: "ID Card Maker Software",
        price: "coming soon",
        image: "/images/products/id-card-maker-9.jpeg",
    },
    {
        category: "Software",
        title: "Billing Software",
        price: "coming soon",
        image: "/images/products/billing-software.jpeg",
    },
    {
        category: "Software",
        title: "Digital Card Maker",
        price: "coming soon",
        image: "/images/products/digital-card-maker-4.jpeg",
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
        "Kodecs Technology",
    ],
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
