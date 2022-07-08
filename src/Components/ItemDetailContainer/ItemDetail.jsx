import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./ItemDetail.css"
import ItemCount from './ItemCount/ItemCount'

import { Button } from '@mui/material';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { MyCartContext } from "../../Context/CartContext";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#283322',
  ...theme.typography.h5,
  padding: theme.spacing(1),
  margin:theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.secondary,
}));

const ItemCounter = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  ...theme.typography.h4,
  padding: theme.spacing(1),
  margin:theme.spacing(0),
  textAlign: 'center',
  color: '#283322',
}));

const ItemTexto = styled(Paper)(({ theme }) => ({
  backgroundColor: '#283322',
  ...theme.typography.body1,
  padding: theme.spacing(1),
  margin:theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.secondary,
}));

export default function ItemDetail({itemProducto}) {

  const {addItem} = useContext(MyCartContext);

    function onAdd(productos, cantidadStock){
        if((productos>0)&&(cantidadStock>0)){ 
          addItem(itemProducto, productos)
          alert("¡Agregaste "+ JSON.stringify(productos)+ " de "+ itemProducto.title+ "a tu carrito!")
        }
      }



  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}>
        <Grid item xs={6} >

        <div className="columnaImagen">

            <img src={itemProducto.pictureURL} alt={itemProducto.title} className="imagenDetail"/>

        </div>
        </Grid>
        <Grid item xs={6} className='columnaInfo'>

          <Item>{itemProducto.title}</Item>

          <ItemCounter>$ {itemProducto.price}</ItemCounter>
          
          <ItemCounter className="divItemCount">  <ItemCount stock= {5} initial={1}  onAdd={onAdd} itemProducto={itemProducto} /> </ItemCounter>
          
          <ItemCounter> 
            <Button   sx={{backgroundColor: 'primary.main', color:'secondary.main',  '&:hover':{backgroundColor: '#283322'}}}> 
              <Link to={'/cart'} style={{ color: 'inherit', textDecoration: 'none' }} >  Comprar ahora </Link> 
            </Button> 
          </ItemCounter>

          <ItemTexto>Stock disponible: {itemProducto.stock}</ItemTexto>
 
          <ItemTexto>{itemProducto.description}</ItemTexto>
          
        </Grid>
      </Grid>
    </Box>
  );
}

