import React from 'react'
import { createContext, useState } from 'react';

export const MyCartContext = createContext(null);

export default function CartContext({children}) {
    const [cart, setCart] = useState([]);
    

    function addItem(item, quantity) {
        item.cantidad= quantity;
        setCart(cart.push(item));
        console.log("item.cantidad ", item.cantidad)
      }
      function removeItem(itemId) {
        setCart( cart.filter((el) => el.id !== itemId ) );
      }
      function clear() {
        setCart([])
       
      }
      const isInCart = (id) => {
        let estaEnCarrito = cart.some((el) => el.id ===id);
        if(estaEnCarrito){
            estaEnCarrito.cantidad-=1;
            console.log("cambió cantidad", estaEnCarrito.cantidad )
        }
        
        //return i | -1;
      };
    
      return (
        <>
            <MyCartContext.Provider value={{ cart, setCart }}>
                {children}
            </MyCartContext.Provider>
        </>
      );
    }

