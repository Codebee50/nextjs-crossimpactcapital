import React from 'react'
import { GoArrowRight } from 'react-icons/go'

type PrimaryButtonProps = {
    text: string,
    type?: 'submit' | 'button' | 'reset'
}

const PrimaryButton = ({ text, type = 'submit' }: PrimaryButtonProps) => {
    return (
        <button type={type} className='bg-senary group w-max flex flex-row items-center gap-4 mt-5 pr-4 border border-senary text-white font-medium cursor-pointer'>
            <div className='bg-white py-5 px-4'>
                <GoArrowRight className='text-black group-hover:translate-x-1 transition-all duration-300 ease-in-out' />
            </div>
            <p>{text}</p>
        </button>
    )
}

export default PrimaryButton