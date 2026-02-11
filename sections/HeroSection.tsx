"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { TransparentNav } from '@/components/TransparentNav'
import { GoArrowRight } from "react-icons/go";
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import LinkButton from '@/components/LinkButton';

const images = [
    "/images/2151054064.jpg",
    "/images/743.jpg",
    "/images/2149305398.jpg",
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
        <div className='w-full sm:h-dvh h-[90vh] overflow-hidden bg-black'>
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
            <div className='absolute inset-0 flex flex-col bg-radial from-transparent  to-black '>

                <TransparentNav />

                <div className='mt-[100px] flex-1 flex flex-col justify-center section-con padding-x'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-white text-2xl md:text-4xl lg:text-6xl font-medium leading-[1.3] capitalize'>
                            Closing opportunity gaps <br /> across wealth and health.
                        </h1>
                        <p className='text-white opacity-70 max-w-[700px]'>
                            Cross Impact Capital invests in businesses solving wealth and health disparities in underserved communities, driving opportunity and closing equity gaps
                        </p>
                        {/* <Link href="https://airtable.com/appHkxcdcq2a6l03I/pag7UJHX0Mjg9GHKE/form" target="_blank" className='bg-senary w-max flex flex-row items-center gap-4 mt-5 pr-4 text-white font-medium cursor-pointer'>
                            <div className='bg-white py-5 px-4'>
                                <GoArrowRight className='text-black' />
                            </div>
                            <p>Submit Application</p>
                        </Link> */}

                        <LinkButton text="Submit Application" href="https://airtable.com/appHkxcdcq2a6l03I/pag7UJHX0Mjg9GHKE/form" target="_blank" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroSection