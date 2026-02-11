import Link from 'next/link'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'

type LinkButtonProps = {
    text: string,
    href: string,
    target?: '_blank' | '_self' | '_parent' | '_top'
    variant?: "outline" | "primary"
    className?: string
    fillSpace?: boolean
}


const LinkButton = ({ text, href, target = '_self', variant = 'primary', className = '', fillSpace = false }: LinkButtonProps) => {
    return (
        <Link href={href} target={target} className={`bg-senary group ${fillSpace ? 'w-full text-center' : 'w-max'} flex flex-row items-center gap-4 mt-5 pr-4 ${variant === 'outline' && "border border-senary"} text-white font-medium cursor-pointer ${className}`}>
            <div className='bg-white py-5 px-4'>
                <GoArrowRight className='text-black group-hover:translate-x-1 transition-all duration-300 ease-in-out' />
            </div>
            <p className={fillSpace ? 'text-center self-center justify-self-center flex-1' : ''}>{text}</p>
        </Link>
    )
}

export default LinkButton