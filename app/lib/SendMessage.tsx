import React, { ChangeEvent } from 'react'

function SendMessageInput({ handleChange, handleSubmit }: any) {
    return (
        <div className='flex justify-center fixed bottom-0 inset-x-0 w-full max-w-lg mx-auto p-10'>
            <div className='w-full border rounded-md border-gray-600  max-w-lg flex items-center'>
                <input onChange={handleChange} type="text"
                    className='bg-transparent outline-none text-xl text-gray-300 p-3 w-full placeholder:text-gray-500'
                    placeholder='Say Hello...' />

                <button onClick={handleSubmit} className='text-gray-500 text-3xl py-2 px-3'>
                    <i className='bx bx-send'></i>
                </button>
            </div>
        </div>
    )
}

export default SendMessageInput