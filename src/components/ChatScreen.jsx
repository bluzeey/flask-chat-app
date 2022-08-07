import React from 'react'
import '../styles/chatScreen.css'
import Message from './Message'
import Typography from '@mui/material/Typography'
function ChatScreen() {
  return (
    <div className='chatWrapper'>
      <div className='chatscreen'>
      <Typography variant="h5">Chatscreen</Typography>
      </div>
      <Message/>
    </div>
  )
}

export default ChatScreen