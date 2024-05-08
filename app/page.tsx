'use client'

import React from 'react'
import Navbar from './lib/Navbar'
import SendMessageInput from './lib/SendMessage'
import UserChatMessage from './lib/UserChat'
import AIChatMessage from './lib/AIChat'
import { useChat } from 'ai/react'

function HomePage() {

  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className='w-full h-screen antialiased'>
      <Navbar />
      <div className='border-x h-full p-5 border-gray-600 overflow-y-auto w-full max-w-5xl mx-auto'>
        <div>
          {messages.map(m => (
            m.role == 'user' ?
              (<UserChatMessage key={m.id} content={m.content} />) :
              (<AIChatMessage key={m.id} content={m.content} />)
          ))}

        </div>
        <SendMessageInput
          handleChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}

export default HomePage