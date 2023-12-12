import { env } from "@/env.mjs"
import { SiteConfig } from "@/types"

export const siteConfig: SiteConfig = {
    name: "Kodecs Technosoft",
    description:
        "Welcome to Kodecs Technosoft, where innovation meets excellence. Explore our cutting-edge software solutions. Empower your business with user-friendly software tools and subscribe to our industry-leading products. Transform your digital landscape with Kodecs Technosoft.",
    tagline: "Empowering innovation into reality",
    url: env.NEXT_PUBLIC_APP_BASE_URL || "https://kodecs.in",
    ogImage: `${env.NEXT_PUBLIC_APP_BASE_URL}/og-image.png`,
    links: {
        twitter: "https://twitter.com/kodecs",
        github: "https://github.com/sharkaie/kodecs",
    },
}
