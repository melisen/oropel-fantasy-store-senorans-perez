//@ts-check
import { Typography } from '@mui/material'
import React from 'react'
import ItemList from './ItemList'

import { useEffect, useState, useContext } from 'react';
import { useParams} from 'react-router-dom';
import {MyCartContext} from '../Cart/CartContext'




export default function ItemListContainer({greeting}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [productosLista, setProductosLista] = useState([]);

  let {idCategory} = useParams();
  console.log("idCategory", idCategory);

    useEffect( ()=>{

      let promesaProductos = new Promise((resolve, rej) =>{
        setTimeout( ()=>{
            
              fetch("http://localhost:3000/listado-productos.json")
              .then( (response)=> response.json() )
              .then ( (data)=> {
                resolve(data);
              }) 
                 
        }, 2000);
      });

      promesaProductos
      .then( (resultado)=>{
        if (!idCategory){
          setProductosLista(resultado);
        }else{
          let arrayProductosFiltrado = resultado.filter((elemento) => elemento.category === idCategory)
          setProductosLista(arrayProductosFiltrado);
        }

      })
      .catch((error)=>{
        setError(true);
       })
       .finally( ()=>{
        setLoading(false);
       })
    }, [idCategory]);

        

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

