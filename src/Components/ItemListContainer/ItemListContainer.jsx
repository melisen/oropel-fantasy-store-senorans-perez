//@ts-check
import { Typography } from '@mui/material'
import React from 'react'
import ItemList from './ItemList'

import { useEffect, useState } from 'react';



export default function ItemListContainer({greeting}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [productosLista, setProductosLista] = useState([]);

    

    useEffect( ()=>{

 

      let promesaProductos = new Promise((resolve, rej) =>{
        setTimeout( ()=>{
            resolve(() =>{
              fetch('./listado-productos.json')
              .then( (response)=> response.json() )
              .then ( (data)=> {
                setProductosLista(data);
                console.log(productosLista);
              }) 
          });        
        }, 2000);
      });

      promesaProductos
      .then( (resultado)=>{
        setProductosLista(resultado);
      })
      .catch((error)=>{
        setError(true);
       })
       .finally( ()=>{
        setLoading(false);
       })
    }, []);
    
    

  return (
    <div>
      <Typography style={{color:'#829e04d7', textAlign:'center'}} variant="h4">
      {greeting}  
      </Typography>

      <>
      {loading && "Loading..."}
      {error && "Hubo un error en la petición de datos"}
      {productosLista && <ItemList productosLista={productosLista} />}
      </>

      
      
    </div>
  )
}

