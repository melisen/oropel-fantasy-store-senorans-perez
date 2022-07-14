import React, { useState, useContext } from 'react'
import { MyCartContext } from '../../Context/CartContext';
import "./CheckOut.css"
import { Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export default function CheckOut() {
    
    const {cart, importeTotal} = useContext(MyCartContext);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    

        function handleClickComprar(){
            const pedido = { 
                buyer: { name, phone, email }, 
                items: [...cart], 
                date: Date(), 
                total: importeTotal  }
            const db = getFirestore();
            const collectionPedidosRef= collection(db, 'pedidos')
            addDoc(collectionPedidosRef, pedido).then(({id})=> console.log(id))
        }

  return (
    <>
    <div className='divCheckout'>
        <Typography  style={{color:'#e0f193d7', textAlign:'center', margin:'2rem'}} variant="h4"> Resumen de compra </Typography>
        <div className='Columnas'>
            <div className='divFormulario'>
                <Typography variant="h5" style={{color:'#e0f193d7', textAlign:'center'}}>Productos</Typography>

            </div>
            <div  className='divFormulario'>
                <Typography variant="h5" style={{color:'#e0f193d7', textAlign:'center'}}>Datos personales</Typography>
                <TextField onChange={(e)=> setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" type={"text"} placeholder={"Nombre"}/>
                <TextField onChange={(e)=> setPhone(e.target.value)} id="outlined-basic" label="Phone" variant="outlined" type={"tel"} placeholder={"Teléfono"}/>
                <TextField  onChange={(e)=> setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" type={"email"} placeholder={"Email"}/>
                <Button onClick={handleClickComprar()} variant="contained">Confirmar compra</Button>
            </div>
        </div>
    </div>
    </>
  )
}
