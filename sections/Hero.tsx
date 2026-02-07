import React from 'react'
import { IoArrowForward } from 'react-icons/io5'
import Image from 'next/image'
import { FaStar } from "react-icons/fa6";


const Hero = () => {

    const trustedByClient = [
        {
            src: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            src: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            src: "https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg"
        }
    ]
    return (
        <div className='w-full  relative'>

            <div className='overflow-hidden absolute inset-0 w-full z-0 h-[calc(100vh+300px)] max-h-[1200px] bg-linear-to-b  from-blue-50 via-blue-100/60 to-blue-200'>

                <Image src="/plain-abstract.svg" alt="hero" width={1000} height={1000} className='w-full h-full object-cover' />
            </div>

            <div className='section-con flex flex-col items-center justify-between mt-[150px] z-20'>

                <div className='w-full flex flex-col items-center justify-center z-10'>
                    <h1
                        className="
                            font-semibold
                            text-[72px]
                            leading-[80px]
                            mt-0
                            mb-0
                            tracking-[-0.125em]
                            font-open-sauce
                            text-center
                        "
                        style={{
                            letterSpacing: '-2px',
                            marginTop: 0,
                            marginBottom: 0
                        }}
                    >
                        Closing opportunity gaps <br /> across wealth and health
                    </h1>
                    <p className='w-full max-w-[700px] text-center mt-4 opacity-70 text-lg'>Cross Impact Capital backs visionary founders building tech solutions that reduce disparities in underserved communities while generating strong returns.</p>

                    <div className='mt-5'>
                        <button className='bg-senary  text-white rounded-full flex flex-row items-center gap-2 py-2 pr-2 pl-5 font-medium cursor-pointer  border-b-5 border-blue-900'>

                            <p>Submit Your Company</p>

                            <div className='w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center text-black'>
                                <IoArrowForward size={18} />
                            </div>



                        </button>
                    </div>
                </div>

                <div className='w-full h-[700px] bg-white mt-20 z-10 rounded-lg overflow-hidden relative'>
                    <Image src="/images/2151054064.jpg" alt="hero" width={1000} height={1000} className='w-full h-full object-cover' />

                    <div className='absolute bottom-0 left-0 flex flex-row items-center gap-4 mx-12 my-12'>
                        <div className='flex flex-row items-center'>
                            {
                                trustedByClient.map((client) => (
                                    <Image src={client.src} key={client.src} alt="client" width={100} height={100} className='w-15 h-15 object-cover rounded-full -ml-4 border border-gray-200' />
                                ))
                            }
                        </div>

                        <div className='flex flex-col'>
                            <div className='flex flex-row items-center gap-2'>
                                {
                                    Array.from({ length: 5 }).map((_, index) => (
                                        <FaStar key={index} className='text-yellow-500' />
                                    ))
                                }
                            </div>
                            <p className='text-gray-100 text-sm'>
                                Trusted by 100+ clients
                            </p>

                        </div>

                    </div>


                </div>



            </div>
        </div>
    )
}

export default Hero