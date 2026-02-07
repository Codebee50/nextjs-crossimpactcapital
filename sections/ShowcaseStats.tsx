import Image from 'next/image'
import React from 'react'
import { FaChartLine, FaUser } from 'react-icons/fa6'
import { HiUsers } from "react-icons/hi2";
import { BsRocketFill } from "react-icons/bs";
import { SiMoneygram } from "react-icons/si";


const ShowcaseStats = () => {

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

    return (
        <div className='pt-[50px] section-con'>
            <div className='w-full flex flex-row items-center justify-between'>
                <h2 className='text-[40px] font-open-sauce max-w-[645px] font-semibold leading-[48px]'>
                    “Cross Impact empowers those driven by purpose—founders who aspire to build, transform, and close the opportunity gap.”
                </h2>

                <div className='flex flex-col gap-3 items-start'>
                    <Image src="/images/justicetext.png" alt="ceo" width={100} height={100} className='w-[300px]' />

                    <div className='w-full h-[2px] bg-gray-200'>

                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className='text-xl font-medium'>
                            Sophie Chou
                        </p>
                        <p className='text-gray-500'>
                            Chief Executive Officer
                        </p>
                    </div>

                </div>

            </div>


            <div className='w-full min-h-[200px] border-t border-b border-gray-200 mt-20 flex flex-row items-center justify-between'>
                {
                    stats.map((stat) => (
                        <div className='flex flex-row items-center gap-4' key={stat.title}>
                            <div className='bg-quinary/10 rounded-full p-3 shrink-0 '>

                                <div className='bg-quinary rounded-full p-6 shrink-0'>
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