import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoArrowForward } from "react-icons/io5";


const Nav = () => {

    const navItems = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'About',
            href: '/about'
        },
        // {
        //     name: 'Team',
        //     href: '/team'
        // },
        {
            name: 'Focus',
            href: '/investment-focus'
        },
        {
            name: 'Portfolio',
            href: '/portfolio'
        },
        {
            name: 'Contact',
            href: '/contact'
        }
    ]

    return (
        <div className=' bg-white padding-x  py-4  w-full flex flex-row items-center justify-between fixed top-0  z-50'>

            <div className='flex flex-row items-center justify-between w-full section-con'>
                <div className='flex flex-row items-center gap-2'>
                    <Image src="/logoshort.svg" alt="logo" width={30} height={30} />
                    <p className='text-lg font-semibold'>CrossImpact</p>
                </div>

                <div className='flex flex-row items-center gap-8'>
                    {navItems.map((item) => (
                        <Link href={item.href} key={item.name} className='text-[#333]'>
                            <p className=''>{item.name}</p>
                        </Link>
                    ))}
                </div>

                <div className='flex flex-row items-center gap-2'>

                    <div className='border border-gray-200 rounded-full p-2'>
                        <Image src="/flags/united-states.png" alt="linkedin" width={20} height={20} />
                    </div>

                    <button className='rounded-full flex flex-row items-center gap-2 py-2 px-5 bg-white text-black border border-gray-200 font-medium cursor-pointer'>

                        <p>Get in touch</p>


                    </button>

                </div>
            </div>



        </div>
    )
}

export default Nav