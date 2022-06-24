//ts-check

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./ItemCount.css";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';




export default function ItemCount( {stock, initial, onAdd}) {

  const [stockDisp, setStockDisp] = useState(stock);
  const [cantItems, setCantItems] = useState(initial);

  function agregar(){
    if ((cantItems<stock) && (stockDisp>0) ){
      setCantItems(cantItems+1);
      setStockDisp(stockDisp-1)
    }
  }

  function remover(){
    if (cantItems>1){
    setCantItems(cantItems-1);
    setStockDisp(stockDisp+1)
    }
  }


  return (
    <Box sx={{ maxWidth: 275 }}>
      <Card variant="outlined" >{
        <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" style={{textAlign:'center'}} gutterBottom>
        Artículo
      </Typography>
      
      <div className="contadorCarrito">
        <Button   onClick={ ()=> {agregar()} }><AddIcon color='secondary' /></Button>
        <p>{cantItems} </p>
        <Button  onClick= { ()=> {remover()} }><RemoveIcon color='secondary' /></Button>
      </div>

    </CardContent>
    <CardActions style={{display: 'flex',justifyContent: 'center',alignItems: 'center',}} >
      <div className='contenedorCentrarBtn'>
        <Button color='secondary' onClick={ ()=> {onAdd(cantItems, stockDisp)}} >Agregar al carrito</Button>
        </div>
    </CardActions>
  </React.Fragment>

      }</Card>
    </Box>
  );
}
