import React from "react"
import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/config/site"

import { Icons } from "../icons"

type Props = {}

const footerYear = new Date().getFullYear()

const Footer = (props: Props) => {
    return (
        <footer className="text-muted-foreground bg-background body-font">
            <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
                <div className="w-64 mx-auto mt-10 text-center shrink-0 md:mx-0 md:text-left md:mt-0">
                    <Link
                        href="/"
                        className="flex items-center justify-center font-medium text-secondary-foreground title-font md:justify-start"
                    >
                        <Image
                            className="w-10 h-10rounded-sm"
                            src="/android-chrome-192x192.png"
                            alt="logo"
                            width={50}
                            height={50}
                        />
                        <span className="ml-3 text-xl font-comfortaa">
                            {siteConfig.name}
                        </span>
                    </Link>
                    <p className="mt-2 text-sm text-muted-foreground">
                        {siteConfig.tagline}
                    </p>
                </div>
                <div className="flex flex-wrap order-first -mb-10 text-center grow md:pr-20 md:text-left">
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-white title-font">
                            MAIN
                        </h2>
                        <nav className="mb-10 list-none">
                            <ul>
                                <li>
                                    <Link
                                        href="/"
                                        className="py-2 text-muted-foreground hover:text-white"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/products"
                                        className="py-2 text-muted-foreground hover:text-white"
                                    >
                                        Products & Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/blog"
                                        className="py-2 text-muted-foreground hover:text-white"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about-kodecs-technosoft"
                                        className="py-2 text-muted-foreground hover:text-white"
                                    >
                                        About Kodecs Technosoft
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
                            Support
                        </h2>
                        <nav className="mb-10 list-none">
                            <ul>
                                <li>
                                    <Link
                                        href="/support"
                                        className="py-2 text-muted-foreground hover:text-white"
                                    >
                                        Suppport & Documentation
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-white title-font">
                            CONTACT
                        </h2>
                        <nav className="mb-10 list-none text">
                            <ul>
                                <li>
                                    <Link
                                        href="/contact-us"
                                        className="py-2 text-muted-foreground hover:text-white"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="mailto:support@kodecs.in"
                                        className="py-2 text-muted-foreground hover:text-white"
                                    >
                                        support@kodecs.in
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/* <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-white title-font">
                            CATEGORIES
                        </h2>
                        <nav className="mb-10 list-none">
                            <li>
                                <a className="text-muted-foreground hover:text-white">
                                    First Link
                                </a>
                            </li>
                            <li>
                                <a className="text-muted-foreground hover:text-white">
                                    Second Link
                                </a>
                            </li>
                            <li>
                                <a className="text-muted-foreground hover:text-white">
                                    Third Link
                                </a>
                            </li>
                            <li>
                                <a className="text-muted-foreground hover:text-white">
                                    Fourth Link
                                </a>
                            </li>
                        </nav>
                    </div> */}
                </div>
            </div>
            <div className="bg-opacity-75 bg-primary-foreground">
                <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
                    <p className="text-sm text-center text-muted-foreground sm:text-left">
                        © {footerYear} {siteConfig.name}. All rights reserved.
                    </p>
                    <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                        <a
                            href="https://facebook.com/kodecstechnology"
                            className="py-2 text-muted-foreground"
                            aria-label="Visit us on Facebook"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Icons.facebook className="w-5 h-5 fill-muted-foreground" />
                        </a>
                        <a
                            href="https://x.com/kodecstechnology"
                            className="py-2 ml-3 text-muted-foreground"
                            aria-label="Visit us on Twitter"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Icons.twitter className="w-5 h-5 fill-muted-foreground" />
                        </a>
                        <a
                            href="https://instagram.com/kodecs.technosoft"
                            className="py-2 ml-3 text-muted-foreground"
                            aria-label="Follow us on Instagram"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Icons.instagram className="w-5 h-5" />
                        </a>
                        <a
                            href="https://linkedin.com/kodecstechnology"
                            className="py-2 ml-3 text-muted-foreground"
                            aria-label="Connect us on LinkedIn"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Icons.linkedin className="w-5 h-5 fill-muted-foreground" />
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
