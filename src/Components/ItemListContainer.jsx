//@ts-check
import { Typography } from '@mui/material'
import React from 'react'

export default function ItemListContainer({greeting}) {
  return (
    <div>
      <Typography style={{color:'#829e04d7', textAlign:'center'}} variant="h4">
      {greeting}
      </Typography>
      
    </div>
  )
}

