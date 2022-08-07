import React from 'react'
import '../styles/chatScreen.css'
import { TextField } from '@mui/material'

function Message() {
  return (
    <div className='Message'>
    <TextField label="Type your message"/>
    <button>Send</button>
    </div>
  )
}

export default Message