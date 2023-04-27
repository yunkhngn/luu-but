import React from 'react'
import { Card, CardContent, TextField, TextareaAutosize, Button, Typography } from '@mui/material';
// import '../css/ShortText.css'

const ShortText = () => {
  return (
    <div className='shortText-container'>
        <Card variant="outlined">
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>ABC</Typography>
            </CardContent>
        </Card>
    </div>
  )
}

export default ShortText