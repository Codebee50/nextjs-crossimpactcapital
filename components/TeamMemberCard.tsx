"use client"

import { TeamMember } from '@/types/global'
import Image from 'next/image'
import React, { useState } from 'react'
import { RiTwitterXLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdPhoneAndroid } from "react-icons/md";
import { IconType } from 'react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';


const TeamMemberCard = ({ member }: { member: TeamMember }) => {
    const [modalOpen, setModalOpen] = useState(false)

    const getSocialIcon = (platform: string): IconType => {
        if (platform == 'twitter') return RiTwitterXLine
        else if (platform === 'instagram') return BsInstagram
        else if (platform === "linkedin") return FaLinkedinIn
        return MdPhoneAndroid
    }

    return (
        <>
            <div className='flex flex-row gap-4'>
                <Image src={urlFor(member.image).width(400).url()} alt={member.name} height={400} width={400} className='h-[230px] w-[200px] object-cover rounded-md' />
                <div className='flex flex-col gap-4 justify-between h-full'>

                    <div className='flex flex-col'>
                        <p className='font-semibold'>{member.name}</p>
                        <p className='text-senary text-sm'>{member.role}</p>
                        <div className='mt-3 w-full h-[0.8px] bg-black/20 min-w-[200px]' />
                    </div>

                    <div>
                        <p className='text-black/60 text-sm line-clamp-5'>{member.bio}</p>
                        <button
                            onClick={() => setModalOpen(true)}
                            className='text-sm text-black/40 hover:text-black/70 underline underline-offset-2 mt-1 transition-colors'
                        >
                            Learn more
                        </button>
                    </div>

                    <div className='flex flex-row items-center gap-4'>
                        {member.socials.map((social, index) => {
                            const Icon = getSocialIcon(social.platform)
                            return (
                                <Link href={social.url} key={`social-${index}`} className='bg-[#d9d9d9]/20 flex items-center justify-center p-3 rounded-md w-[50px] h-[40px]'>
                                    <Icon />
                                </Link>
                            )
                        })}
                    </div>

                </div>
            </div>

            <AnimatePresence>
                {modalOpen && (
                    <motion.div
                        className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'
                        onClick={() => setModalOpen(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div
                            className='bg-white rounded-xl shadow-xl p-6 max-w-lg w-full mx-4 flex flex-col gap-5'
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.85, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 10, opacity: 0 }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 22,
                            }}
                        >
                            <div className='flex flex-row gap-4 items-center'>
                                <Image src={urlFor(member.image).width(200).url()} alt={member.name} height={200} width={200} className='h-[80px] w-[70px] object-cover rounded-md' />
                                <div>
                                    <p className='font-semibold text-lg'>{member.name}</p>
                                    <p className='text-senary text-sm'>{member.role}</p>
                                </div>
                            </div>

                            <div className='w-full h-[0.8px] bg-black/20' />

                            <p className='text-black/60 text-sm'>{member.bio}</p>

                            <div className='flex flex-row items-center gap-4'>
                                {member.socials.map((social, index) => {
                                    const Icon = getSocialIcon(social.platform)
                                    return (
                                        <Link href={social.url} key={`social-${index}`} className='bg-[#d9d9d9]/20 flex items-center justify-center p-3 rounded-md w-[50px] h-[40px]'>
                                            <Icon />
                                        </Link>
                                    )
                                })}
                            </div>

                            <button
                                onClick={() => setModalOpen(false)}
                                className='self-end text-sm text-black/40 hover:text-black/70 transition-colors'
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default TeamMemberCard