import { Comfortaa, Poppins as FontSans } from "next/font/google"
import localFont from "next/font/local"

import "@/styles/globals.css"

import { Metadata, Viewport } from "next"
import Analytics from "@/components/Analytics"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

// import { cn } from "@/lib/utils"
// import { Toaster } from "@/components/ui/toaster"
// import { Analytics } from "@/components/analytics"
// import { TailwindIndicator } from "@/components/tailwind-indicator"
// import { ThemeProvider } from "@/components/theme-provider"
export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
}

const fontSans = FontSans({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
    variable: "--font-sans",
})

const fontComfortaa = Comfortaa({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-comfortaa",
})

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
    src: "../assets/CalSans-SemiBold.woff2",
    variable: "--font-heading",
})

interface RootLayoutProps {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: {
        default: `${siteConfig.name} - Empowering Businesses with Innovative Tech Solutions`,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        "kodecs technosoft",
        "kodecs",
        "software solutions",
        "id card maker",
        "idm technology",
        "buisness erp",
        "kod",
        "school erp",
        "billing software solutions",
        "it company",
        "software developer",
    ],
    alternates: {
        canonical: "https://kodecs.in",
    },
    authors: [
        {
            name: "Kodecs Technosoft",
            url: "https://kodecs.in",
        },
    ],
    creator: "Kodecs Technosoft",
    metadataBase: new URL("https://kodecs.in"),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 600,
                alt: siteConfig.name,
            },
        ],
    },
    // twitter: {
    //     card: "summary_large_image",
    //     title: siteConfig.name,
    //     description: siteConfig.description,
    //     images: [`${siteConfig.url}/og.jpg`],
    //     creator: "@idmtechnologies",
    // },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "h-full bg-background antialiased",
                    fontSans.variable,
                    fontHeading.variable,
                    fontComfortaa.variable,
                    "font-sans"
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    {children}
                    <TailwindIndicator />
                </ThemeProvider>
                <Analytics />
                {/*<Toaster /> */}
            </body>
        </html>
    )
}
