import React from "react"
import TopBar from "@/components/web/topbar"
import Footer from "@/components/web/footer"

interface WebLayoutProps {
    children: React.ReactNode
}

export default async function WebLayout({ children }: WebLayoutProps) {
    return (
        <div className="flex flex-col min-h-full">
            {/* <TopBar /> */}
            <div className="flex-1 flex h-full items-center justify-center">
                {children}
            </div>
            {/* <Footer /> */}
        </div>
    )
}
