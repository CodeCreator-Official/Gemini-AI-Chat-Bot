'use client'
import React from 'react'

function UserChatMessage({ content = '' }) {
    return (
        <div className='p-3'>
            <div className='flex gap-3'>
                <img className='w-8 h-8 rounded-full' src="https://s43932.pcdn.co/wp-content/uploads/sites/12/2024/01/shutterstock_683518837-1200x1200.jpg.optimal.jpg" alt="" />
                <h1 className='text-xl font-semibold text-gray-200'>You</h1>
            </div>

            <p className='p-4 w-full max-w-5xl'>
                {content}
            </p>
        </div>
    )
}

export default UserChatMessage