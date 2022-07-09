import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { MyCartContext } from '../../Context/CartContext';
import { Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import "./Cart.css";
import {Link} from 'react-router-dom';






export default function Cart() {

    
    const {cart, removeItem, clear, carritoVacio} = useContext(MyCartContext);
    console.log(JSON.stringify(cart));   


    /*function createData(pictureURL, title, price, subtotal, quantity) {
      return { pictureURL, title, price, subtotal,  quantity };
    }*/

    
    let importeTotal = ( cart.reduce((acc, elemento) => acc + elemento.price*elemento.quantity, 0) );

  return (
    <>

    <div className="divCart">
      <Typography  style={{color:'#e0f193d7', textAlign:'center', margin:'2rem'}} variant="h4"> Carrito </Typography>

      <TableContainer component={Paper} sx={{ width:8/10, borderRadius:'15px' }}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>FOTO</TableCell>
            <TableCell align="right">Producto</TableCell>
            <TableCell align="right">Precio Unitario</TableCell>
            <TableCell align="right">Subtotal</TableCell>
            <TableCell align="right">Cantidad agregada</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                <div style={{width:'2rem'}}>
                <img src=" {row.pictureURL}" alt="{row.title}"/>
                </div>                
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">$ {row.price}</TableCell>
              <TableCell align="right">$ {row.price*row.quantity}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right"><Button variant="contained" onClick={()=>{removeItem(row.id)}} > <DeleteForeverIcon/> </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        <div className={carritoVacio ? 'SeVe' : 'NoSeVe'} style={{backgroundColor:'#283322', borderRadius:'10px', padding:'10px', display:'flex', flexDirection:'column', alignItems:'center'}}>
          <Typography variant="h5" style={{color:'#e0f193d7', fontFamily:'Joan'}}> Tu carrito está vacío, te invitamos a conocer nuestros productos. </Typography>
          <Button variant="contained"> <Link to={"/"}  style={{ color: 'inherit', textDecoration: 'none' }}> Comenzar a comprar</Link> </Button>
        </div>

        <div className="divFinalizarCompra">
          <Typography style={{color:'#e0f193d7', textAlign:'center'}} variant="h5">
            Importe total  $ {importeTotal}
          </Typography>
          <Stack spacing={2} direction="row">
            <Button variant="contained">Finalizar compra</Button>
            <Button variant="outlined" onClick={()=>{
              clear();
              }}  sx={{ color:'secondary.main'}}> Vaciar carrito</Button>
          </Stack>
        </div>

    </div>

    </>
  );


    
}

