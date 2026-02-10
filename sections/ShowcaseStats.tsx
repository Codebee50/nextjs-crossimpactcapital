"use client"

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { FaChartLine, FaUser } from 'react-icons/fa6'
import { HiUsers } from "react-icons/hi2";
import { BsRocketFill } from "react-icons/bs";
import { SiMoneygram } from "react-icons/si";
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';


const ShowcaseStats = () => {

    const ref = useRef(null)

    const stats = [
        {
            title: "Total Users",
            value: "100K",
            Icon: HiUsers
        },
        {
            title: "Faster sales",
            value: "10X",
            Icon: BsRocketFill
        },
        {
            title: "Revenue Growth",
            value: "88%",
            Icon: SiMoneygram
        }
    ]

    const quote = `"Cross Impact empowers those driven by purpose—founders who aspire to build, transform, and close the opportunity gap."`

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

    const words = quote.split(" ");

    return (
        <div className='pt-[50px] section-con' ref={ref}>
            <motion.div className='w-full flex flex-row items-center justify-center' style={{ scale: scaleProgress }}>
                <h2 className='text-[28px] font-open-sauce max-w-[800px] text-center italic leading-[36px]'>
                    {quote}
                </h2>
            </motion.div>

            <div className='w-full min-h-[200px] border-t border-b border-gray-200 mt-20 flex flex-row items-center justify-between'>
                {
                    stats.map((stat) => (
                        <div className='flex flex-row items-center gap-4' key={stat.title}>
                            <div className='bg-senary/10 rounded-full p-3 shrink-0 '>
                                <div className='bg-senary rounded-full p-6 shrink-0'>
                                    <stat.Icon className='text-2xl text-white' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-1'>
                                <p className='text-4xl font-semibold'>{stat.value}</p>
                                <p className='text-gray-500 text-lg'>{stat.title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ShowcaseStats