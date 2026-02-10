import React from 'react'
import { IoArrowForward } from 'react-icons/io5'
import Image from 'next/image'
import { FaStar } from "react-icons/fa6";


const OurHeroSection = () => {

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

            <div className='overflow-hidden absolute inset-0 w-full z-0 h-[calc(100vh+300px)] max-h-[1000px] bg-linear-to-b  from-blue-50 via-blue-100/60 to-blue-200'>

                <Image src="/embedcircles.svg" alt="hero" width={1000} height={1000} className='w-full h-full object-cover' />
                {/* <Image src="/plain-abstract.svg" alt="hero" width={1000} height={1000} className='w-full h-full object-cover' /> */}
            </div>

            <div className='section-con flex flex-col items-center justify-between mt-[150px] z-20'>

                <div className='w-full flex flex-row gap-2 items-center justify-between z-10'>
                    <h1
                        className="
                            font-medium
                            text-[55px]
                            leading-[63px]
                            mt-0
                            mb-0
                            tracking-[-0.125em]
                            font-open-sauce
                            capitalize
                        "
                        style={{
                            letterSpacing: '-2px',
                            marginTop: 0,
                            marginBottom: 0
                        }}
                    >
                        Closing opportunity gaps <br /> across wealth and health
                    </h1>

                    <div>

                        <p className='w-full max-w-[500px] mt-4 opacity-70'>
                            Cross Impact Capital invests in businesses solving wealth and health disparities in underserved communities, driving opportunity and closing equity gaps.
                        </p>

                        <div className='mt-5'>
                            <button className='bg-senary  text-white rounded-full flex flex-row items-center gap-2 p-1 font-medium cursor-pointer   border-blue-900'>

                                <p className='ml-4'>Submit Application</p>

                                <div className='w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center text-black'>
                                    <IoArrowForward size={18} />
                                </div>



                            </button>
                        </div>

                    </div>




                </div>

                <div className='w-full h-[600px] bg-white mt-20 z-10 rounded-lg overflow-hidden relative'>
                    <Image src="/images/743.jpg" alt="hero" width={2000} height={2000} className='w-full h-full object-cover' />

                    <div className='absolute bottom-0 left-0 flex flex-row items-center gap-4 mx-12 my-12'>
                        <div className='flex flex-row items-center'>
                            {
                                trustedByClient.map((client) => (
                                    <Image src={client.src} key={client.src} alt="client" width={100} height={100} className='w-15 h-15 object-cover rounded-full -ml-4 border-3 border-gray-200' />
                                ))
                            }
                        </div>

                        <div className='flex flex-col'>
                            <div className='flex flex-row items-center gap-2'>
                                {
                                    Array.from({ length: 5 }).map((_, index) => (
                                        <FaStar key={index} className='text-white' />
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

export default OurHeroSection