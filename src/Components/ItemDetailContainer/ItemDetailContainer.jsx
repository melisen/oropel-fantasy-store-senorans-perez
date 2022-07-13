//@ts-check
import React, { useEffect, useState } from 'react'
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore} from "firebase/firestore";

export default function ItemDetailContainer() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [itemProducto, setItemProducto] = useState({});

    let {idItem}= useParams() ;

    useEffect( ()=>{
        const db = getFirestore();
        const itemConsultadoRef = doc(db, 'productos', idItem);
        let promesaItem = new Promise((resolve, rej)=>{
            setTimeout(()=>{resolve(getDoc(itemConsultadoRef)) }, 1000)
        })
        
        promesaItem
        .then((snapshot)=>{
            setItemProducto({...snapshot.data(), id: snapshot.id});
        })
        .catch((error)=> {
            setError(true);
        })
        .finally(()=>{
            setLoading(false);
        })
        /*
        let promesaDetail = new Promise((resolve, rej) =>{
                setTimeout( ()=>{
                        
                            fetch("http://localhost:3000/listado-productos.json")
                            .then((response)=> response.json())
                            .then((data)=>{
                                resolve(data);
                            })
                }, 2000)
            });

        promesaDetail
        .then((resultado)=> {
                let aux = resultado.find((elemento) => elemento.id == idItem)
                setItemProducto(aux);
        })
*/

    }, [idItem])

    return (

            <>
        {loading && "Loading..."}
        {error && "Hubo un error en la petición del producto"}
        {itemProducto && <ItemDetail itemProducto={itemProducto} />}
        </>

    )
}
