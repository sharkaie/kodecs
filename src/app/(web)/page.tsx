"use client"
import React from "react"
import {motion} from "framer-motion"

type Props = {}

const Page = (props: Props) => {
    return (
        <div className="flex-col flex items-center justify-center ">
            <motion.span 
            initial={{opacity: 0, y: -10}}
            animate={{opacity: 1, y:0}}
            transition={{
                animation: "easeInOut",
                duration: 0.25
            }}
            className="text-5xl uppercase font-bold tracking-wider text-center">
                Kodecs Technology
            </motion.span>
            <motion.span
            initial={{opacity: 0, x: -10}}
            animate={{opacity: 1, x:0}}
            transition={{
                animation: "easeInOut",
                duration: 0.5,
                delay: 0.15
            }}
            className="text-xl uppercase font-bold tracking-wider">
                Coming Soon
            </motion.span>
        </div>
    )
}

export default Page
