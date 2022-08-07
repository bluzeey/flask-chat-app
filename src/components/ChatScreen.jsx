import React from 'react'
import '../styles/chatScreen.css'
import Message from './Message'
import Typography from '@mui/material/Typography'
function ChatScreen() {
  return (
    <div className='chatWrapper'>
      <div className='chatscreen'>
      <Typography variant="h5">Chatscreen</Typography>
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