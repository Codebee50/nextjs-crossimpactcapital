import React from 'react'
import { clientList } from '@/constants'
import Image from 'next/image'

const PortfolioSection = () => {
    return (
        <div className='w-full  section-con padding-x'>
            <div className='w-full flex flex-col items-center justify-center gap-2 '>
                <p className='font-medium text-senary'>PORTFOLIO</p>

                <p className='text-4xl font-semibold'>{`Companies We've Backed`}</p>
                <p className='text-gray-500 text-lg'>We proudly serve as an extension of the management teams we invest in.</p>

            </div>

            <div className='w-full flex flex-row items-stretch  overflow-x-scroll gap-4 mt-10 no-scrollbar'>

                {
                    clientList.map((client) => (
                        <div key={client.name} className='flex flex-col gap-8 border justify-between border-gray-100  bg-gray-50/30 p-4 rounded-t-lg min-w-[300px]'>
                            <Image src={client.image} alt={client.name} width={110} height={110} className='object-cover' />
                            <p className='text-gray-500 text-sm'>{client.description}</p>

                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-gray-900 uppercase hover:text-senary transition-colors duration-200 group"
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
    )
}

export default PortfolioSection