import React from "react"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

type Props = {}

const Page = (props: Props) => {
    return (
        <>
            <section className="relative text-muted-foreground body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col w-full mb-12 text-center">
                        <h1 className="mb-4 text-2xl font-medium text-secondary-foreground sm:text-3xl title-font">
                            Contact Us
                        </h1>
                        <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                            Get in touch with Kodecs. Elevate your business with
                            our innovative solutions. Let&apos;s shape success
                            together. Contact us now!
                        </p>
                    </div>
                    <div className="mx-auto lg:w-1/2 md:w-2/3">
                        <div className="flex flex-wrap -m-2">
                            <div className="w-1/2 p-2">
                                <div className="relative">
                                    <label
                                        htmlFor="name"
                                        className="text-sm leading-7 text-muted-foreground"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-3 py-1 text-base leading-8 transition-colors duration-200 ease-in-out bg-opacity-50 border rounded outline-none border-border bg-muted text-muted-foreground focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
                                    />
                                </div>
                            </div>
                            <div className="w-1/2 p-2">
                                <div className="relative">
                                    <label
                                        htmlFor="email"
                                        className="text-sm leading-7 text-muted-foreground"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-3 py-1 text-base leading-8 transition-colors duration-200 ease-in-out bg-opacity-50 border rounded outline-none border-border bg-muted text-muted-foreground focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
                                    />
                                </div>
                            </div>
                            <div className="w-full p-2">
                                <div className="relative">
                                    <label
                                        htmlFor="message"
                                        className="text-sm leading-7 text-muted-foreground"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="w-full h-32 px-3 py-1 text-base leading-6 transition-colors duration-200 ease-in-out bg-opacity-50 border rounded outline-none resize-none border-border bg-muted text-muted-foreground focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="flex justify-center w-full p-2">
                                <Button>Send Enquiry</Button>
                            </div>
                            <div className="w-full p-2 pt-8 mt-8 text-center border-t border-border">
                                <a
                                    href="mailto:support@kodecs.in"
                                    className="text-blue-400"
                                >
                                    support@kodecs.in
                                </a>
                                <p className="my-5 leading-normal">
                                    G-58, Techops Garden
                                    <br />
                                    Nagpur - 440034
                                </p>
                                <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                                    <a className="text-muted-foreground">
                                        <Icons.facebook className="w-5 h-5 fill-muted-foreground" />
                                    </a>
                                    <a className="ml-3 text-muted-foreground">
                                        <Icons.twitter className="w-5 h-5 fill-muted-foreground" />
                                    </a>
                                    <a className="ml-3 text-muted-foreground">
                                        <Icons.instagram className="w-5 h-5" />
                                    </a>
                                    <a className="ml-3 text-muted-foreground">
                                        <Icons.linkedin className="w-5 h-5 fill-muted-foreground" />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page
