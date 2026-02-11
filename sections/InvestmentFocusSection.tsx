import React from 'react'
import Image from 'next/image'
import { GoArrowRight } from 'react-icons/go'
import Link from 'next/link'
import LinkButton from '@/components/LinkButton'

const InvestmentFocusSection = () => {
    const investments = [
        {
            title: "Industries We Focus On",
            description: "We are focused on tech-driven businesses within healthcare services and financial services.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200",
        },
        {
            title: "Investment Stage",
            description: "Pre-seed and Seed companies that have product in market fit, revenue or pilot contracts with recurring revenue models.",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200",
        },
        {
            title: "Typical Investment Size",
            description: "Our average check size is $250-$500k. We can lead. We do reserve capital for follow-on.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
        },
        {
            title: "Geographic Focus",
            description: "We invest in companies based in the U.S.",
            image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=1200",
        }
    ]

    return (
        <div className='w-full min-h-screen pt-[100px] relative section-con padding-x' id="investment-focus">
            <div>

            </div>
            <h2 className='text-center text-4xl font-bold mb-4'>Our Investment Focus</h2>
            <p className='text-center text-gray-500 max-w-xl mx-auto mb-16'>
                Explore the key areas where we drive growth and create lasting value.
            </p>

            <div className='relative'>
                {investments.map((item, index) => (
                    <div
                        key={index}
                        className='sticky top-0 h-[500px] w-full overflow-hidden'
                        style={{ zIndex: index + 1 }}
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={1000}
                            height={1000}
                            className='w-full h-full max-h-[500px] object-cover'
                        />

                        <div className='absolute inset-0 bg-black/60 flex flex-col justify-between sm:p-10 p-8'>

                            <div className='bg-white text-black rounded-full p-2 w-max'>
                                <h3 className='text-lg sm:text-2xl md:text-3xl font-semibold '>{index + 1}</h3>
                            </div>

                            <div className=' text-white max-w-lg'>
                                <div className='flex items-stretch gap-4'>
                                    <div className='w-1 bg-white rounded-full' />
                                    <div>
                                        <h3 className='text-lg sm:text-2xl md:text-3xl font-semibold mb-2'>{item.title}</h3>
                                        <p className='text-sm md:text-base text-white/80'>{item.description}</p>
                                    </div>
                                </div>
                            </div>

                        </div>





                    </div>
                ))}
            </div>

            {/* Final content section that scrolls over the last image */}
            <div className='relative bg-white py-24 text-center flex flex-col items-center justify-center' style={{ zIndex: investments.length + 1 }}>
                <h2 className='text-3xl font-bold'>Ready to Get Started?</h2>
                <p className='text-gray-500 mt-4'>Lets build something great together.</p>


                <LinkButton text="Submit Application" href="https://airtable.com/appHkxcdcq2a6l03I/pag7UJHX0Mjg9GHKE/form" target="_blank" variant='outline' />
            </div>
        </div>
    )
}

export default InvestmentFocusSection