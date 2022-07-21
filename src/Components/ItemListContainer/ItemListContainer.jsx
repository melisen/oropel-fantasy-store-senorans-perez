
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react'
import ItemList from './ItemList'
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import {collection, getDocs, getFirestore, where, query} from "firebase/firestore";


export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [productosLista, setProductosLista] = useState([]);

  let {idCategory} = useParams();

    useEffect( ()=>{

      const db = getFirestore();
      const collectionRef = collection(db, 'productos');
      const collectionFiltrada = idCategory? query(collectionRef, where('category', '==', idCategory)) : collectionRef
        
        getDocs(collectionFiltrada)
        .then((res)=> {
            let arrNormalizado= [];
            arrNormalizado = res.docs.map((element)=>({...element.data(), id: element.id}));
            setProductosLista(arrNormalizado);
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

      <>
      {loading && <CircularProgress
            size={24}
            sx={{
              color: 'primary.main',
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />}
      {error && "Hubo un error en la petición de datos"}
      {productosLista && <ItemList productosLista={productosLista} />}
      </>

      
      
    </div>
  )
}

