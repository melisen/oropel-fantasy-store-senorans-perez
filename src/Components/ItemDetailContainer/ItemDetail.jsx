import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import ItemCount from './ItemCount/ItemCount'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#4b3b42',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ItemDetail({itemProducto}) {

    function onAdd(items, cantidadStock){
        if((items>0)&&(cantidadStock>0)){ 
          alert("¡Agregaste "+ JSON.stringify(items)+ " artículos a tu carrito!")
        }
      }



  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>{itemProducto.pictureURL}</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>{itemProducto.title}</Item>
          <Item>{itemProducto.price}</Item>
          <Item>Stock disponible: {itemProducto.stock}</Item>
          <Item> <ItemCount stock= {5} initial={1}  onAdd={onAdd}/> </Item>
          <Item>{itemProducto.description}</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

