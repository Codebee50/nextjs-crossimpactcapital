import React from 'react'
import Image from 'next/image'
import TextInput from '@/components/TextInput'
import PrimaryButton from '@/components/PrimaryButton'




const ContactUs = () => {
    return (
        <div id="contact" className='w-full  section-con padding-x flex flex-col md:flex-row  mt-[50px] scroll-mt-[100px]'>

            <div className='md:w-[40%] w-full md:min-h-[500px] max-md:h-[300px] bg-gray-100 rounded-lg'>

                <Image src="https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg" alt="contact" width={1000} height={1000} className='w-full h-full object-cover' />

            </div>

            <div className='flex-1 min-h-[400px] shadow-xl shadow-gray-200 flex flex-col p-8'>
                <h1 className='md:text-4xl text-2xl font-medium'>Get In Touch</h1>

                <form action="" className='w-full md:mt-[70px] mt-[40px] flex flex-col gap-10'>
                    <div className='w-full grid sm:grid-cols-2 md:gap-4 gap-10'>

                        <TextInput label="Fullname*" />
                        <TextInput label="Email*" />


                    </div>

                    <textarea name="" id="" placeholder='Message*' rows={4} className='w-full p-2 border-b outline-none placeholder:text-black border-gray-300 rounded-md resize-none' ></textarea>

                    <div className='flex flex-row items-center gap-2'>
                        <input type="checkbox" id="terms" className='w-5 h-5 border border-gray-300 rounded-md ' />
                        <label htmlFor="terms">I agree to be contacted by Cross Impact Capital about my inquiry.</label>
                    </div>

                    <PrimaryButton text="Submit Now" />

                </form>

            </div>

        </div>
    )
}

export default ContactUs