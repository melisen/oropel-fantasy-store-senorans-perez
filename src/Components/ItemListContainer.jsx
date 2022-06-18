//@ts-check
import { Typography } from '@mui/material'
import React from 'react'
import ItemCount from './ItemCount/ItemCount'


export default function ItemListContainer({greeting}) {


  return (
    <div>
      <Typography style={{color:'#829e04d7', textAlign:'center'}} variant="h4">
      {greeting}
      </Typography>
      <ItemCount stock= {5} initial={1}  onAdd= {(items, cantidadStock)=> {if((items>0)&&(cantidadStock>0)){ alert("¡Agregaste "+ JSON.stringify(items)+ " artículos a tu carrito!")}}} />
    </div>
  )
}

