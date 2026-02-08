import React from 'react'
import { PiCaretDownLight } from "react-icons/pi";
import { PiCaretDownBold } from "react-icons/pi";
import Image from 'next/image';
import { PiPhoneCall } from "react-icons/pi";


const FAQ = () => {

    const faq = [
        {
            question: "What industries are you focused on?",
            answer: "We are focused on tech-driven businesses within healthcare services and financial services."
        },
        {
            question: "What stage do you focus on?",
            answer: "Pre-seed and Seed companies that have product in market fit, revenue or pilot contracts with recurring revenue models."
        },
        {
            question: "What check sizes do you write?",
            answer: "Our average check size is $250-$500k. We can lead. We do reserve capital for follow-on."
        },
        {
            question: "Where do you invest?",
            answer: "We invest in companies based in the U.S."
        }
    ];

    return (
        <div className='w-full min-h-screen grid grid-cols-2 gap-10 section-con mt-[100px]'>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-2'>
                    <p className='text-senary font-medium'>FREQUENTLY ASKED QUESTIONS</p>
                    <h2 className='text-[40px] font-open-sauce  leading-[48px]'>Quick Answers to Commonly Asked Questions About Cross Impact Capital.</h2>

                </div>

                <div className='flex flex-col mt-5 gap-7'>
                    {
                        faq.map((faq) => (
                            <div key={faq.question} className='flex flex-row items-center justify-between border-b border-gray-200 py-3 cursor-pointer'>
                                <h3 className='text-lg'>{faq.question}</h3>
                                <PiCaretDownBold className='text-senary'  />
                            </div>
                        ))
                    }
                </div>

            </div>

            <div className=' h-[700px] bg-gray-100 relative'>

                <Image src="/images/customer_service.png" alt="faq" width={1000} height={1000} className='w-full h-full object-cover' />

                <div className='absolute min-w-[300px]  bg-senary bottom-10 -left-24 flex flex-row items-center gap-5 px-4 py-5 cursor-pointer'>

                    <div className='rounded-full bg-white text-black p-4'>
                        <PiPhoneCall className=' text-2xl' />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className='text-white text-lg capitalize'>Have any Query?</p>
                        <p className='text-white'>+1-844-888-1001</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default FAQ