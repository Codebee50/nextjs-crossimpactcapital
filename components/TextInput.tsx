import React from 'react'


type TextInputProps = {
    label: string
    type?: string
    required?: boolean
}

const TextInput = ({ label, type = "text", required = true }: TextInputProps) => {
    return (
        // <div>
        //     <label htmlFor="name">{label}</label>
        //     <input type="text" id="name" name="name" className='w-full p-2 border-b outline-none border-gray-300 rounded-md' />
        // </div>
        <div>
            <input type={type} required={required} id="name" name="name" placeholder={label} className='w-full px-2 pb-9 border-b outline-none placeholder:text-black border-gray-300 rounded-md' />
        </div>
    )
}

export default TextInput