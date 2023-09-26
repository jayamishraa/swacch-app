import React from 'react'
import Guidelines from '../components/Guidelines'
import { Outlet } from 'react-router-dom'
import { Button, Paper, InputBase, Divider } from '@mui/material'

function GuidelinesPage() {
  return (
    <div className='guidelines-page'>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 800 }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Add a new guideline..."
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <Button>Add</Button>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Button>Discard</Button>
      </Paper>

      <Guidelines />
      <Guidelines />
      <Guidelines />
      <Guidelines />
      <Guidelines />
      <Guidelines />
      <Guidelines />
      <Guidelines />
      <Guidelines />
      <Guidelines />
      <Guidelines />
      <Guidelines />
      <Guidelines />
      <Guidelines />
      <Outlet />
    </div>
  )
}

export default GuidelinesPage
