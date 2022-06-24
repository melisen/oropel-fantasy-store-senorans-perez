//@ts-check
import React, { useEffect, useState } from 'react'
import ItemDetail from "./ItemDetail.jsx"

export default function ItemDetailContainer() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [itemProducto, setItemProducto] = useState({});

    let itemElegidoID=10;

    useEffect( ()=>{
        let promesaDetail = new Promise((resolve, rej) =>{
                setTimeout( ()=>{
                        resolve(
                            fetch("./listado-productos.json")
                            .then((response)=> response.json())
                            .then((data)=>{
                                console.log(data);
                            })
                        );
                }, 2000)
            });

        promesaDetail
        .then((resultado)=> {
                let aux = resultado.find((elemento) => elemento.id == itemElegidoID)
                setItemProducto(aux);
            console.log(itemProducto);
        })
        .catch((error)=> {
            setError(true);
        })
        .finally(()=>{
            setLoading(false);
        })

    }, [itemElegidoID])

    return (

            <>
        {loading && "Loading..."}
        {error && "Hubo un error en la petición del producto"}
        {itemProducto && <ItemDetail itemProducto={itemProducto} />}
        </>

    )
}
