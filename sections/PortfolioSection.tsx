"use client"
import React, { useRef } from 'react'
import { clientList } from '@/constants'
import Image from 'next/image'
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";

const PortfolioSection = () => {

    const containerRef = useRef<HTMLDivElement>(null);

    const handleContainerScroll = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.scrollLeft -= containerRef.current.scrollWidth / 3;
            }

            else if (direction === "right") {
                containerRef.current.scrollLeft += containerRef.current.scrollWidth / 3;
            }

            else {
                containerRef.current.scrollLeft += containerRef.current.scrollWidth / 3;
            }
        }
    }

    return (
        <div className='w-full bg-blue-50 py-10'>
            <div id="portfolio" className='w-full  section-con padding-x flex flex-col  gap-5 mt-[50px] scroll-mt-[100px]'>
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
                    <div className='flex flex-col '>
                        {/* <p className='font-medium text-senary'>PORTFOLIO</p> */}

                        <p className='sm:text-3xl text-xl font-medium'>{`Companies We've Backed`}</p>
                        <p className='text-gray-500 max-sm:text-sm'>We proudly serve as an extension of the management teams we invest in.</p>



                    </div>

                    <div className='flex flex-row items-center gap-4 max-md:hidden'>
                        <button onClick={() => handleContainerScroll('left')} className='w-[50px] cursor-pointer h-[50px] rounded-full bg-white flex items-center justify-center hover:scale-80 transition-all duration-300 ease-in-out'>
                            <IoArrowBackOutline className='text-black text-2xl' />

                        </button>

                        <button onClick={() => handleContainerScroll('right')} className='w-[50px] cursor-pointer h-[50px] rounded-full bg-white flex items-center justify-center hover:scale-80 transition-all duration-300 ease-in-out'>
                            <IoArrowForwardOutline className='text-black text-2xl' />

                        </button>
                    </div>
                </div>


                <div ref={containerRef} className='w-full flex md:flex-row flex-col items-stretch  overflow-x-scroll gap-4 no-scrollbar sm:mt-10 mt-5 scroll-smooth'>

                    {
                        clientList.map((client) => (
                            <div key={client.name} className='flex flex-col gap-4 justify-between  bg-white p-4 rounded-t-lg min-w-[300px]'>
                                <Image src={client.image} alt={client.name} width={110} height={110} className='object-cover' />
                                <p className='text-gray-500 text-sm'>{client.description}</p>

                                <a
                                    href={client.url}
                                    target='_blank'
                                    className="inline-flex items-center gap-2 max-sm:text-xs text-sm font-semibold tracking-widest text-gray-900 uppercase hover:text-senary transition-colors duration-200 group"
                                >
                                    View Company
                                    <svg
                                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PortfolioSection