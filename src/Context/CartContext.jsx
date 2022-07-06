import React from 'react'
import { createContext, useState } from 'react';

export const MyCartContext = createContext(null);

export default function CartContext({children}) {
    const [cart, setCart] = useState([]);

    const isInCart = (item) => {
        return cart.some((el) => el.id === item.id);
    }
    
    function addItem(item, quantity) {
        let itemAgregado = 
        {
            id: item.id,
            title: item.title,
            price:item.price,
            description: item.description,
            category: item.category,
            pictureURL: item.pictureURL,
            cantidad: quantity,
            subtotal: item.price*item.cantidad
        
        }
        let carritoSinDuplicados = [];
        carritoSinDuplicados =
         cart.reduce((acumulador, nuevoItem) => {

            let estaEnCarrito = isInCart(itemAgregado);
            
            if(estaEnCarrito){
                    //sólo si estaEnCarrito es true, se suman las cantidades del elemento que ya estaba con el nuevoItem (el resto de los elementos del array se mapean sin  cambiar ninguna propiedad)
                    return acumulador.map((el) => {
                        if (el.id === estaEnCarrito.id) {
                            return {
                                ...el,
                                cantidad: (el.cantidad + nuevoItem.cantidad)
                            }
                            } else{
                            return el;
                            }
                        });
            } else {
                    //si estaEnCarrito es false, el resultado final del reduce() es el array que ya estaba (el acumulador, que es cart) sumando el nuevoItem
                    return [...acumulador, nuevoItem];
            }
        }, [])   //el reduce() inicializa como un array vacío
        
        setCart(carritoSinDuplicados);

        console.log("itemAgregado: ", itemAgregado.title, "  quantity: ", itemAgregado.cantidad);
        console.log("cart ", JSON.stringify(cart))

    }


    function removeItem(itemId) {
        setCart( cart.filter((el) => el.id !== itemId ) );
    }

    function clear() {
        setCart([])
    
    }




        
    
    
    return (
        <>
            <MyCartContext.Provider value={{cart, addItem, removeItem, clear}}>
                {children}
            </MyCartContext.Provider>
        </>
    );
    }

