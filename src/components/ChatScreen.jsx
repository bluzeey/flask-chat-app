import React from 'react'
import '../styles/chatScreen.css'
import Message from './Message'
function ChatScreen() {
  return (
    <div className='chatWrapper'>
      <div className='chatscreen'>ChatScreen
      <ol>
        <li>Message 1</li>
        <li>Message 2</li>
      </ol>
      </div>
      <Message/>
    </div>
  )
}

export default ChatScreen