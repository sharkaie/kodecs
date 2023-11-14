import React from "react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Props = {}

export const metadata: Metadata = {
    title: "About Us Innovators in Cutting-Edge Solutions",
    description:
        "Discover the story of Kodecs Technology, where innovation meets efficiency. Learn about our mission, values, and commitment to providing tailored and cutting-edge solutions for businesses.",
    keywords: [
        "About Kodecs",
        "Innovation",
        "Cutting-edge solutions",
        "Tailored solutions",
        "Mission, Values",
        "Technology company",
    ],
}

const page = (props: Props) => {
    return (
        <>
            <section className="w-full text-muted-foreground body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-col flex-wrap items-center w-full mb-12 text-center">
                        <h1 className="mb-2 text-2xl font-medium text-secondary-foreground sm:text-3xl title-font">
                            About Us
                        </h1>
                    </div>
                    <div className="w-full mx-auto text-center xl:w-1/2 lg:w-3/4">
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Welcome to Kodecs Technology, where innovation meets
                            efficiency. Explore our cutting-edge software
                            solutions designed to elevate your business. From
                            streamlined ERP systems to advanced RFID technology,
                            each product is crafted to redefine the way you
                            operate. Join us on a journey of technological
                            excellence, where possibilities unfold, and success
                            is not just a goal; it&apos;s a shared destination.
                            Discover innovation, explore efficiency—welcome to
                            Kodecs Technology.
                        </p>
                    </div>
                </div>
            </section>

            <section className="text-muted-foreground body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div className="px-4 mb-10 sm:w-1/2">
                            <div className="h-64 overflow-hidden rounded-lg">
                                <Image
                                    alt="content"
                                    className="object-cover object-center w-full h-full"
                                    src="/images/about-us/cutting-edge-technology.jpeg"
                                    width={1200}
                                    height={500}
                                />
                            </div>
                            <h2 className="mt-6 mb-3 text-2xl font-medium text-secondary-foreground title-font">
                                Cutting Edge Technology
                            </h2>
                            <p className="mb-8 text-base leading-relaxed">
                                Redefining possibilities with advanced
                                solutions. Experience innovation at the
                                forefront of technology, where your business
                                meets the future. Join us on a journey where
                                &apos;cutting-edge&apos; is not just a phrase;
                                it&apos;s a commitment to surpassing limits and
                                setting new standards.
                            </p>
                            {/* <Link className={cn(buttonVariants({variant:"default"}))} href="/">View More</Link> */}
                        </div>
                        <div className="px-4 mb-10 sm:w-1/2">
                            <div className="h-64 overflow-hidden rounded-lg">
                                <Image
                                    alt="content"
                                    className="object-cover object-center w-full h-full"
                                    src="/images/about-us/tailored-success.jpeg"
                                    width={1200}
                                    height={500}
                                />
                            </div>
                            <h2 className="mt-6 mb-3 text-2xl font-medium text-secondary-foreground title-font">
                                Tailored Success
                            </h2>
                            <p className="mb-8 text-base leading-relaxed">
                                At Kodecs, success isn&apos;t one size fits all.
                                We tailor solutions to uniquely fit your
                                business, unlocking a seamless path to success.
                                Our commitment goes beyond providing software;
                                it&apos;s about crafting an experience that
                                resonates with your goals. Join us on a journey
                                where tailored success is not just a goal;
                                it&apos;s the destination.
                            </p>
                            {/* <Link className={cn(buttonVariants({variant:"default"}))} href="/">View More</Link> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-primary body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col items-start mx-auto lg:w-2/3 sm:flex-row sm:items-center">
                        <h1 className="text-2xl font-medium grow sm:pr-16 title-font">
                            Ready to Transform Your Business? Connect with Us
                            Today. Let&apos;s Innovate Together!
                        </h1>
                        <Link
                            className={cn(
                                buttonVariants({ variant: "default" })
                            )}
                            href="/contact-us"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
