import React from 'react'
import { createContext, useState } from 'react';

export const MyCartContext = createContext(null);

export default function CartContext({children}) {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        cart.find((el) => el.id === id);
    }
    
    function addItem(item, quantity) {
        let yaEstaba = isInCart(item.id);
        if(yaEstaba){
            removeItem(yaEstaba.id);
            setCart( [...cart, {...item, cantidad:quantity +yaEstaba.cantidad}] )
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

