import React from 'react'
import Image from 'next/image'
import { clientList } from '@/constants'
const ShowcaseTrusted = () => {


    return (
        <div className='flex flex-col items-center justify-center section-con gap-9   padding-x'>
            <h3 className='text-xl text-center font-medium'>Trusted by leading brands around the world</h3>

            <div className='flex flex-row items-center justify-center gap-10 mt-4'>
                {
                    clientList.map((client) => (
                        <div key={client.name}>
                            <Image src={client.image} alt={client.name} width={190} height={100} className='grayscale' />
                        </div>
                    ))
                }
            </div>


        </div>
    )
}

export default ShowcaseTrusted