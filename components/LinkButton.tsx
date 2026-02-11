import Link from 'next/link'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'

type LinkButtonProps = {
    text: string,
    href: string,
    target?: '_blank' | '_self' | '_parent' | '_top'
    variant?: "outline" | "primary"
}


const LinkButton = ({ text, href, target = '_self', variant = 'primary' }: LinkButtonProps) => {
    return (
        <Link href={href} target={target} className={`bg-senary group w-max flex flex-row items-center gap-4 mt-5 pr-4 ${variant === 'outline' && "border border-senary"} text-white font-medium cursor-pointer`}>
            <div className='bg-white py-5 px-4'>
                <GoArrowRight className='text-black group-hover:translate-x-1 transition-all duration-300 ease-in-out' />
            </div>
            <p>{text}</p>
        </Link>
    )
}

export default LinkButton