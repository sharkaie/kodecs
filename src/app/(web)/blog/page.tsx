import React from "react"
import { Metadata } from "next"
import Image from "next/image"
import { Icons } from "@/components/icons"

type Props = {}

export const metadata: Metadata = {
    title: "Explore Insights and Trends - Blogs",
    description:
        "Stay informed with Kodecs Technology's blog. Explore industry insights, tech trends, and expert perspectives on innovation, efficiency, and the future of business technology.",
    keywords: [
        "Tech trends",
        "Industry insights",
        "Business innovation",
        "Kodecs Blog",
        "Efficiency",
        "Future of technology",
    ],
}

const Page = (props: Props) => {
    return (
        <>
            <section className="w-full text-muted-foreground body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col flex-wrap items-center w-full mb-20 text-center">
                        <h1 className="mb-2 text-2xl font-medium text-secondary-foreground sm:text-3xl title-font">
                            Explore Insights and Trends - Blogs
                        </h1>
                        <p className="w-full leading-relaxed text-muted-foreground lg:w-1/2">
                            Read out our insights and trends on technology and
                            business.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="h-full overflow-hidden border-2 rounded-lg border-border border-opacity-60">
                                <Image
                                    className="object-cover object-center w-full lg:h-48 md:h-36"
                                    src="/images/blog/1.jpeg"
                                    alt="blog"
                                    width={720}
                                    height={400}
                                />
                                <div className="p-6">
                                    <h2 className="mb-1 text-xs font-medium tracking-widest uppercase text-muted-foreground title-font">
                                        Welcome
                                    </h2>
                                    <h1 className="mb-3 text-lg font-medium text-secondary-foreground title-font">
                                        Kodecs Technology: Navigating the
                                        Future: Embracing Innovation in Business
                                        Operations
                                    </h1>
                                    <p className="mb-3 leading-relaxed">
                                        In today&apos;s dynamic business
                                        landscape, staying ahead requires more
                                        than just keeping pace. It demands
                                        innovation that transforms the way we
                                        operate.
                                    </p>
                                    {/* <div className="flex flex-wrap items-center ">
                                        <a className="inline-flex items-center text-blue-500 md:mb-2 lg:mb-0">
                                            Learn More
                                            <svg
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <span className="inline-flex items-center py-1 pr-3 ml-auto mr-3 text-sm leading-none border-r-2 border-gray-200 text-muted-foreground lg:ml-auto md:ml-0">
                                            <Icons.eye className="w-4 h-4 mr-1" />
                                            1.2K
                                        </span>
                                        <span className="inline-flex items-center text-sm leading-none text-muted-foreground">
                                        <Icons.chat className="w-4 h-4 mr-1" />
                                            6
                                        </span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page
