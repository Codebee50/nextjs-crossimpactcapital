"use client"

import React from 'react'
import { RiFocus2Fill } from "react-icons/ri";
import { PiPottedPlantFill } from "react-icons/pi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import Link from 'next/link';
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from 'next/image';
import { motion } from "framer-motion";

const EthosSection = () => {
    const ethos = [
        {
            title: "Innovation Focus",
            description: "Supporting solutions in technology and healthcare services closing the equity gap.",
            Icon: RiFocus2Fill,
            backgroundImage: "/images/ethos/1.jpg"
        },
        {
            title: "Sustainable Impact",
            description: "Creating measurable and lasting change in underserved communities.",
            Icon: PiPottedPlantFill,
            backgroundImage: "/images/ethos/2.jpg"
        },
        {
            title: "Strategic Growth",
            description: "Providing founders with access to strategic partnerships and capital.",
            Icon: FaMoneyBillTrendUp,
            backgroundImage: "/images/ethos/3.jpg"
        }
    ]
    return (
        <div className='section-con '>
            {/* <div className='flex flex-col gap-2 items-center justify-center'>
                <h1 className="font-medium text-4xl font-forma-djr text-center">Our Guiding Ethos.</h1>

                <p className='text-gray-500 text-lg'>At Cross Impact, we align financial success with meaningful societal impact.</p>
            </div> */}


            <motion.div
                className='flex flex-row items-center justify-center gap-5 mt-10'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.15
                        }
                    }
                }}
            >
                {
                    ethos.map((ethos, idx) => (
                        <motion.div
                            key={ethos.title}
                            className='relative h-[550px] group overflow-hidden'
                            initial={{ opacity: 0, y: 40 }}
                            animate="visible"
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 60, damping: 22, delay: idx * 0.15 }}
                        >
                            <div className='w-full h-full relative'>
                                <Image
                                    src={ethos.backgroundImage}
                                    alt={ethos.title}
                                    width={1000}
                                    height={1000}
                                    className='w-full h-full object-cover'
                                />
                                <div className="absolute inset-0 bg-black/50"></div>
                            </div>

                            <div className='flex flex-col gap-2 h-full justify-between p-8 cursor-pointer absolute inset-0 z-10'>
                                {/* Gray overlay that closes from top to bottom */}
                                <motion.div
                                    className='absolute inset-0 bg-gray-50 -z-10 transition-transform duration-1000 ease-in-out origin-top group-hover:scale-y-0'
                                    layout
                                ></motion.div>

                                <div className='flex flex-row items-center gap-2 justify-between'>
                                    <div className='rounded-full border border-gray-300 group-hover:border-white py-2 px-4 transition-colors duration-500'>
                                        <p className='font-medium text-black group-hover:text-white transition-colors duration-500'>
                                            {ethos.title}
                                        </p>
                                    </div>

                                    <motion.div
                                        className='bg-senary group-hover:bg-quinary transition-colors duration-500 text-white group-hover:text-black rounded-full shrink-0 h-[45px] w-[45px] flex items-center justify-center'
                                        whileHover={{ scale: 1.12, rotate: -10 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                                    >
                                        <ethos.Icon className='text-xl' />
                                    </motion.div>
                                </div>

                                <div className='flex flex-col gap-6'>
                                    <p className='text-black group-hover:text-white text-lg transition-colors duration-500'>
                                        {ethos.description}
                                    </p>
                                    <Link
                                        href="/apply"
                                        className='flex flex-row items-center gap-2 font-semibold text-black group-hover:text-white transition-colors duration-500 '
                                    >
                                        Apply Now <MdOutlineArrowOutward className='text-xl' />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>

        </div>
    )
}

export default EthosSection