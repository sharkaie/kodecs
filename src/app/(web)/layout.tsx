import React from "react"
import Footer from "@/components/web/footer"
import Header from "@/components/web/header"

interface WebLayoutProps {
    children: React.ReactNode
}

export default async function WebLayout({ children }: WebLayoutProps) {
    return (
        <div className="flex flex-col min-h-full">
            <Header />
            <div className="flex flex-col items-center justify-center flex-1 w-full h-full">
                {children}
            </div>
            <Footer />
        </div>
    )
}
