import { env } from "@/env.mjs"
import { SiteConfig } from "@/types"

export const siteConfig: SiteConfig = {
    name: "EdgeFlow Technologies",
    description:
        "EdgeFlow Technologies with higly automated management systems for your business and enterprise needs.",
    tagline:
        "Elevating business excellence through Innovative automation upgrades",
    url: env.NEXT_PUBLIC_APP_BASE_URL || "https://kodecs.in",
    ogImage: `${env.NEXT_PUBLIC_APP_BASE_URL}/og-image.png`,
    links: {
        linkedin: "https://www.linkedin.com/company/edgeflow-technologies",
        twitter: "https://twitter.com/edgeflowtech",
        github: "https://github.com/sharkaie",
    },
}
