"use client"

import React, { useState } from 'react'
import { HiUsers } from 'react-icons/hi';
import { FaIndustry } from "react-icons/fa";
import { FaTimeline } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";


const cardContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.13
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.47, ease: [0.32, 1, 0.32, 1] as [number, number, number, number] }
    }
};

const iconVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.45, ease: [0.44, 0, 0.56, 1] as [number, number, number, number] } }
};


const InvestmentFocus = () => {
    const sections = [
        "Target Sectors",
        "Investment Stage",
        "Typical Investment Size",
        "Geographic Focus"
    ];
    const [activeSection, setActiveSection] = useState(sections[0]);

    const criteriaList = [
        {
            question: "Industries We Focus On",
            answer: "We are focused on tech-driven businesses within healthcare services and financial services.",
            Icon: FaIndustry
        },
        {
            question: "Investment Stage",
            answer: "Pre-seed and Seed companies that have product in market fit, revenue or pilot contracts with recurring revenue models.",
            Icon: FaTimeline
        },
        {
            question: "Typical Investment Size",
            answer: "Our average check size is $250-$500k. We can lead. We do reserve capital for follow-on.",
            Icon: FaMoneyBill
        },
        {
            question: "Geographic Focus",
            answer: "We invest in companies based in the U.S.",
            Icon: MdLocationOn
        }
    ];

    return (
        <motion.div
            className='w-full  bg-blue-50/70 mt-[100px]'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className='section-con py-24 flex flex-col items-start w-[50%]'>
                <motion.div
                    className='grid grid-cols-2 gap-2'

                >
                    <h1
                        className="
                            font-semibold
                            text-5xl
                            font-forma-djr
                            capitalize
                            text-black
                            max-w-[550px]
                        "
                    >
                        Our investment Focus
                    </h1>
                    <p className='text-black opacity-70 max-w-[680px] font-open-sauce'>Cross Impact Capital is focused on investing in category-redefining businesses that seek to address some of the largest disparities among underserved communities, expand economic opportunity, and close significant equity gaps.</p>
                </motion.div>

                <motion.div
                    className='grid grid-cols-4 mt-[50px] gap-2'
                    variants={cardContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    {
                        criteriaList.map((item, index) => (
                            <motion.div
                                key={item.question}
                                className='flex flex-col gap-2 bg-white px-5 py-6 rounded-lg'
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.025,
                                    boxShadow: "0 10px 24px 0px rgba(78,108,186,0.10)",
                                    zIndex: 2,
                                    transition: { type: "spring", stiffness: 220, damping: 18 }
                                }}
                            >
                                <motion.div className='bg-white/10 rounded-full p-2 shrink-0 w-max border border-senary/5'>
                                    <motion.div
                                        className='bg-white rounded-full p-4 shrink-0 w-max border border-senary/10'
                                        variants={iconVariants}
                                        initial="initial"
                                        animate="animate"
                                    >
                                        <item.Icon className='text-xl text-senary' />
                                    </motion.div>
                                </motion.div>
                                <h1 className='text-xl font-open-sauce font-semibold text-black mt-3'>{item.question}</h1>
                                <p className='text-gray-800 opacity-50 font-open-sauce'>{item.answer}</p>
                            </motion.div>
                        ))
                    }
                </motion.div>

            </div>
        </motion.div>
    )
}

export default InvestmentFocus