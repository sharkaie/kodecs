"use client"

import Script from "next/script"
import { Analytics as VercelAnalytics } from "@vercel/analytics/react"

const gtag = "G-C93H001C82"

const Analytics = () => (
    <>
        <VercelAnalytics />
        <Script src="https://www.googletagmanager.com/gtag/js?id=${gtag}" />
        <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${gtag}');
        `}
        </Script>
    </>
)

export default Analytics
