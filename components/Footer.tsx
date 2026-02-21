import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6"



const Footer = () => {
    return (
        <footer className="bg-[#06061a] text-white py-10 px-6 sm:px-12 shadow-lg mt-[50px]  w-full">
            <div className="flex flex-col gap-8 sm:flex-row sm:justify-between sm:items-start section-con padding-x">

                {/* Left - Logo and Socials */}
                <div className="flex-1 flex flex-col gap-8 min-w-[220px]">
                    <div className="flex flex-row items-center gap-2">
                        <Image src="/logoshort.svg" alt="logo" width={32} height={32} className="invert-100" />
                        <span className="sm:text-2xl text-xl font-medium font-open-sauce">Cross Impact Capital</span>
                    </div>

                    <div className="flex flex-row gap-2 mt-2">
                        <a href="https://www.instagram.com/crossimpactcapital/" target="_blank" aria-label="X social" className="rounded-full p-2 bg-[#191c2b] hover:bg-[#1e2437] transition-all">
                            <FaInstagram className="text-lg" />
                        </a>
                        <a href="https://www.linkedin.com/company/cross-impact-capital/about/" target="_blank" aria-label="LinkedIn" className="rounded-full p-2 bg-[#191c2b] hover:bg-[#1e2437] transition-all">
                            <FaLinkedinIn className="text-lg" />
                        </a>
                    </div>
                </div>

                {/* Divider on desktop */}
                <div className="hidden sm:block border-l border-[#191c2b] h-28 mx-8"></div>

                {/* Right - Newsletter */}
                <div className="flex-1 flex flex-col gap-4 min-w-[280px]">
                    <p className="text-sm mb-3 max-w-[320px]">Stay connected through our ongoing newsletter, CrossRoads.</p>
                    <form className="flex flex-row gap-2 max-w-[350px]">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-3 py-2 rounded bg-[#191c2b] border border-[#191c2b] text-white placeholder:text-[#8c8d78] focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="px-5 py-2 bg-[#c13d19] hover:bg-[#cf5732] text-white rounded transition-colors text-nowrap"
                        >
                            Sign up
                        </button>
                    </form>

                    <div className="mt-3">
                        <Link href="/pitch" className="text-xs text-[#dbdbc4] hover:underline">
                            Pitch your company here
                        </Link>
                    </div>
                </div>
            </div>

            {/* Lower nav */}
            <div className="mt-10 border-t border-[#353823] pt-5 flex flex-wrap justify-center gap-2 text-sm text-gray-500">
                @
                {
                    new Date().getFullYear()
                }
                <p>Cross Impact Capital. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer