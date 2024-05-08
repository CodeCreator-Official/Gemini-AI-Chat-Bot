'use client'
import React from 'react'

function AIChatMessage({ content = '' }) {
    return (
        <div className='p-3'>
            <div className='flex gap-3'>
                <img className='w-8 h-8 rounded-full' src="https://p1.hiclipart.com/preview/864/1002/500/google-logo-search-engine-google-account-google-search-search-engine-optimization-google-classroom-raisr-google-current-png-clipart.jpg" alt="" />
                <h1 className='text-xl font-semibold text-gray-200'>Google</h1>
            </div>

            <p className='p-4 w-full max-w-5xl'>
                {content}
            </p>
        </div>
    )
}

export default AIChatMessage