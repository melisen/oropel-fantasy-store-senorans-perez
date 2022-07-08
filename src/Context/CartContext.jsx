import React from 'react'
import { createContext, useState } from 'react';

export const MyCartContext = createContext(null);


export default function CartContext({children}) {
    const [cart, setCart] = useState([]);
    const [guardarCantidad, setGuardarCantidad] = useState(0);

    const isInCart = (id) => {
        cart.find((el) => el.id === id);
    }
    
    function addItem(item, quantity) {
        let yaEstaba = isInCart(item.id);
        if(yaEstaba){
            setGuardarCantidad({...item, cantidad:quantity +yaEstaba.cantidad});
            removeItem(yaEstaba.id);
            setCart( [...cart, guardarCantidad] )
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

