import React from 'react'
import '../styles/userList.css'
import Paper from '@mui/material/Paper'
import AlignItemsList from '../components/ChatComponent'
import Typography from '@mui/material/Typography'

function Userlist() {
  return (
    <Paper>
        <Typography variant='h5'>Userlist</Typography>
        <AlignItemsList/>
    </Paper>
  )
}

export default Userlist