import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/cdn-cgi/l/email-protection",
        },
        sitemap: "https://kodecs.in/sitemap.xml",
    }
}
