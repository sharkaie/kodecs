import React from "react"
import { Metadata } from "next"

type Props = {}

export const metadata: Metadata = {
    title: "Get Support - Documentation and FAQs",
    description:
        "Reach out for support at Kodecs Technology. Your success is our priority. Connect with us for efficient solutions, personalized assistance, and a seamless support experience.",
    keywords: [
        "Customer support",
        "Technical assistance",
        "Kodecs support",
        "Efficient solutions",
        "Personalized assistance",
    ],
    alternates: {
        canonical: "https://kodecs.in/support",
    },
}

const Page = (props: Props) => {
    return (
        <>
            <section className="w-full text-muted-foreground body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-col flex-wrap items-center w-full mb-12 text-center">
                        <h1 className="mb-2 text-2xl font-medium text-secondary-foreground sm:text-3xl title-font">
                            Get Support
                        </h1>
                    </div>
                    <div className="w-full mx-auto text-center xl:w-1/2 lg:w-3/4">
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Documentation and Support FAQs will be coming soon
                            to this page.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page
