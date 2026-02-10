"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const TransparentNav = () => {
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

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`bg-transparent p text-white transition-colors duration-500 ease-in-out  py-4  w-full flex flex-row items-center justify-between fixed top-0  z-50 ${scrolled ? 'bg-white text-black' : ''}`}>

            <div className='flex flex-row items-center justify-between w-full section-con padding-x'>
                <div className='flex flex-row items-center gap-2'>
                    <div className='w-[50px] h-[50px] bg-senary rounded-full flex items-center justify-center'>
                        <Image src="/logoshort.svg" alt="logo" width={30} height={30}  className='invert-100'/>

                    </div>
                    <p className={`text-lg font-semibold font-open-sauce ${scrolled ? 'text-black' : 'text-white'}`}>CrossImpact</p>
                </div>

                <div className='flex flex-row items-center gap-8 '>
                    {navItems.map((item) => (
                        <Link href={item.href} key={item.name} className={`${scrolled ? 'text-black' : 'text-white'}`}>
                            <p >{item.name}</p>
                        </Link>
                    ))}
                </div>

                <div className='flex flex-row items-center gap-2'>

                    <div className='border border-gray-200/50 rounded-full p-2'>
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
