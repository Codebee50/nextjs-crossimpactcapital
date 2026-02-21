"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { TransparentNav } from '@/components/TransparentNav'
import { GoArrowRight } from "react-icons/go";
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import LinkButton from '@/components/LinkButton';

const images = [
    // "/images/2151054064.jpg",
    // "/images/heros/1.jpg",
    "/images/heros/2.webp",
    "/images/heros/4.jpg",
    "/images/heros/5.jpg",
    "/images/743.jpg",
    "https://images.unsplash.com/photo-1589828994379-7a8869c4f519?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    // "/images/2149305398.jpg",
    // "/images/25394.jpg",
]

const SLIDE_DURATION = 6000 // total time each slide is visible (ms)

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length)
        }, SLIDE_DURATION)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className='w-full sm:h-dvh h-[90vh] relative  overflow-hidden bg-black'>
            <div className='w-full h-full relative overflow-hidden'>

                <AnimatePresence>
                    <motion.div
                        key={currentIndex}
                        className='absolute inset-0'
                        initial={{ scale: 1.15, opacity: 1 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.1, opacity: 0 }}
                        transition={{
                            scale: { duration: SLIDE_DURATION / 1000, ease: 'easeOut' },
                            opacity: { duration: 1.2, ease: 'easeInOut' },
                        }}
                    >
                        <Image
                            src={images[currentIndex]}
                            alt="hero"
                            fill
                            className='object-cover'
                            priority
                        />
                    </motion.div>
                </AnimatePresence>

                <div className='absolute inset-0  overflow-hidden flex flex-row'>
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className='w-full h-full relative border-r-[0.05px] border-r-white/20' />
                    ))}
                </div>

            </div>

            {/* <div className='absolute inset-0 flex flex-col bg-linear-to-tr from-black to-black via-transparent '> */}
            <div className='absolute inset-0 flex flex-col bg-radial from-transparent via-black/70 to-black'>

                <TransparentNav />

                <div className='mt-[100px] flex-1 flex flex-col justify-center section-con padding-x'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-white text-2xl md:text-4xl lg:text-6xl font-bold leading-[1.3] capitalize'>
                            Closing opportunity gaps <br /> across wealth and health.
                        </h1>
                        <p className='text-white opacity-70 max-w-[700px]'>
                            Cross Impact Capital invests in category-defining startups. We invest where unmet needs and demographic shifts unlock outsized opportunities to expand access across wealth and health
                        </p>

                        <div className='h-[90px]'>

                        </div>

                        {/* <LinkButton text="Submit Application" href="https://airtable.com/appHkxcdcq2a6l03I/pag7UJHX0Mjg9GHKE/form" target="_blank" /> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroSection