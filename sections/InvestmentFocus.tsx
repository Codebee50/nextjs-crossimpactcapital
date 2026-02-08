"use client"

import React, { useState } from 'react'
import { HiUsers } from 'react-icons/hi';
import { FaIndustry } from "react-icons/fa";
import { FaTimeline } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";


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
        <div className='w-full  bg-[#0e274e] mt-[100px]'>
            <div className='section-con py-24 flex flex-col items-start'>

                <div className='flex flex-col gap-2'>
                    <h1
                        className="
                            font-semibold
                            text-[50px]
                            leading-[58px]
                            mt-0
                            mb-0
                            tracking-[-0.125em]
                            font-open-sauce
                            capitalize
                            text-white
                            max-w-[550px]
                        "
                        style={{
                            letterSpacing: '-2px',
                            marginTop: 0,
                            marginBottom: 0
                        }}
                    >
                        Our investment Focus
                    </h1>
                    <p className='text-white opacity-70 max-w-[680px]'>Cross Impact Capital is focused on investing in category-redefining businesses that seek to address some of the largest disparities among underserved communities, expand economic opportunity, and close significant equity gaps.</p>
                </div>

                {/* <div className='w-full flex flex-row items-center justify-between mt-10 gap-5'>
                    {
                        sections.map((section, index) => (
                            <div key={section} className={`flex flex-row items-center justify-center gap-4 cursor-pointer border flex-1 border-gray-300/20 px-4 py-5 font-medium ${activeSection === section ? 'text-black bg-white' : 'text-white bg-transparent'}`} onClick={() => setActiveSection(section)}>
                                <div className={`rounded-full px-3 w-8 h-8 flex items-center justify-center ${activeSection === section ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                    <p>{index + 1}</p>
                                </div>

                                <h2>{section}</h2>
                            </div>
                        ))
                    }

                </div> */}


                <div className='grid grid-cols-4 mt-[90px] gap-10'>
                    {
                        criteriaList.map((item, index) => (
                            <div key={item.question} className='flex flex-col gap-4'>
                                <div className='bg-white/10 rounded-full p-2 shrink-0 w-max'>

                                    <div className='bg-white rounded-full p-4 shrink-0 w-max'>
                                        <item.Icon className='text-2xl text-black' />

                                    </div>

                                </div>
                                <h1 className='text-xl font-open-sauce font-semibold text-white'>{item.question}</h1>
                                <p className='text-white opacity-50'>{item.answer}</p>
                            </div>
                        ))
                    }


                </div>


            </div>
        </div>
    )
}

export default InvestmentFocus