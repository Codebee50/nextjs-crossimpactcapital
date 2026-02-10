import React from 'react'
import Image from 'next/image'
import { clientList } from '@/constants'
const ShowcaseTrusted = () => {


    return (
        <div className='flex flex-col items-center justify-center section-con gap-9 padding-x'>
            <h3 className='sm:text-xl text-center font-medium'>Trusted by leading brands around the world</h3>

            <div className="slider overflow-hidden w-full flex justify-start">
                <div className="slide-track gap-10 flex flex-row items-center">
                    {[...clientList, ...clientList].map((client, index) => (
                        <a
                            className="slide shrink-0 cursor-pointer"
                            key={`marquee-${index}`}
                        >
                            <Image src={client.image} alt={client.name} width={190} height={100} className='grayscale max-sm:w-[130px]' />

                        </a>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ShowcaseTrusted