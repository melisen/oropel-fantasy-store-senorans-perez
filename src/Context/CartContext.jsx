import React from 'react'
import { createContext, useState } from 'react';

export const MyCartContext = createContext(null);

export default function CartContext({children}) {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
          cart.some((el) => el.id === id);
    }
    
    function addItem(item, quantity) {
        let yaEstaba = isInCart(item.id);
        if(yaEstaba){
            setCart(
                cart.map((elemento) =>{
                if (elemento.id === item.id){
                    return {...yaEstaba, cantidad: yaEstaba.cantidad + quantity};
                }else{
                    return elemento;
                }
            })
          );
        }else{
          setCart([...cart, {...item, cantidad:quantity}])
        }
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

