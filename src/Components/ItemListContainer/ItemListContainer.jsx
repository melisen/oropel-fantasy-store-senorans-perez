//@ts-check
import { Typography } from '@mui/material'
import React from 'react'
import ItemList from './ItemList'
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import {collection, getDocs, getFirestore, where, query} from "firebase/firestore";


export default function ItemListContainer({greeting}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [productosLista, setProductosLista] = useState([]);

  let {idCategory} = useParams();
  console.log("idCategory", idCategory);

    useEffect( ()=>{

      const db = getFirestore();
      const collectionRef = collection(db, 'productos');

        if (!idCategory){
            let collectionEncontrada = new Promise((resolve, rej)=>{
              setTimeout(()=>{resolve(getDocs(collectionRef))}, 1000)
            })
            
          collectionEncontrada
          .then((res)=> {
            const arrNormalizado = res.docs.map((element)=>({...element.data(), id: element.id}));
            setProductosLista(arrNormalizado);
          })
          .catch((error)=>{
            setError(true);
          })
          .finally( ()=>{
            setLoading(false);
          })
      } else{
          const collectionFiltrada = query(collectionRef, where('category', '==', idCategory));
          let arrayFiltrado = new Promise((resolve, rej)=>{
            setTimeout(()=>{  resolve(getDocs(collectionFiltrada))}, 1000)
          })
        
          arrayFiltrado.then((res)=> {
            const arrNormalizado = res.docs.map((element)=>({...element.data(), id: element.id}));
            setProductosLista(arrNormalizado);
          })
          .catch((error)=>{
            setError(true);
           })
           .finally( ()=>{
            setLoading(false);
           })
      }
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

