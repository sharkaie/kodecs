/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "dummyimage.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "idmtechnologies.in",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "kodecs.in",
                port: "",
                pathname: "/**",
            },
        ],
    },
}

module.exports = nextConfig
