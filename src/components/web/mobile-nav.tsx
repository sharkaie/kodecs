import * as React from "react"
import Link from "next/link"
import { Icons } from "@/components/icons"
import { siteConfig } from "@/config/site"
import { useLockBody } from "@/hooks/use-lock-body"
import { cn } from "@/lib/utils"
import { MainNavItem } from "@/types"

interface MobileNavProps {
    currentState: boolean
    setCurrentState: React.Dispatch<React.SetStateAction<boolean>>
    items: MainNavItem[]
    children?: React.ReactNode
}

export function MobileNav({
    currentState,
    setCurrentState,
    items,
    children,
}: MobileNavProps) {
    useLockBody()

    return (
        <>
            <div
                className={cn(
                    "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden backdrop-blur"
                )}
            >
                <div className="relative z-20 grid gap-6 p-4 rounded-md shadow-md bg-popover text-popover-foreground border border-border">
                    <nav className="grid grid-flow-row text-sm auto-rows-max">
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                href={item.disabled ? "#" : item.href}
                                onClick={() => setCurrentState(!currentState)}
                                className={cn(
                                    "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                                    item.disabled &&
                                        "cursor-not-allowed opacity-60"
                                )}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                    {children}
                </div>
            </div>
        </>
    )
}
