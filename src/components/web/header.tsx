// import Link from "next/link"
import React from "react"
import { webConfig } from "@/config/web"
import { cn } from "@/lib/utils"

// import { buttonVariants } from "../ui/button"
import { Navbar } from "./navbar"

type Props = {}

const Header = (props: Props) => {
    return (
        <header className="container z-40 bg-background">
            <div className="flex items-center justify-between h-20 py-6">
                <Navbar items={webConfig.mainNav} />
                {/* <nav>
                    <Link
                        href="/login"
                        className={cn(
                            buttonVariants({
                                variant: "secondary",
                                size: "sm",
                            }),
                            "px-4"
                        )}
                    >
                        Login
                    </Link>
                </nav> */}
            </div>
        </header>
    )
}

export default Header
