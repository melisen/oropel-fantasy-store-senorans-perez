
import { createContext, useState } from 'react';

export const MyCartContext = createContext();

export default function CartContext({children}) {
    const [cart, setCart] = useState([]);
    const [carritoVacio, setCarritoVacio] = useState(true)

    const isInCart = (id) => {
        cart.find((el) => el.id === id);
    }
    
    function addItem(item, quantity) {
        setCarritoVacio(false);
        if(isInCart(item.id)){
            //producto existe
            let nuevoCart = cart; //hago una copia de mi carrito actual
            let indexProducto = nuevoCart.findIndex(element=> element.id == item.id); //busco index del producto por id
            nuevoCart[indexProducto].quantity = Number(nuevoCart[indexProducto].quantity) + Number(quantity);  // sumo quantity al valor que vino en el onAdd.
            setCart(nuevoCart); //seteo todo el array de nuevo pero modificado
          }else{
            setCart([...cart, {...item, quantity:quantity }])
          }
            
        
        console.log("cart ", JSON.stringify(cart))
    }


    function removeItem(itemId) {
       //primero filtra el carrito para elminar el item.
       //Luego, si resulta que ese era el último item del carrito y éste queda vacío, setea CarritoVacio en true para que se muestre condicionalmente el mensaje y el botón de "Comenzar a comprar" en Cart.jsx
        let promesaCarrito = new Promise((resolve, rej) =>{
            resolve(
                setCart( cart.filter((el) => el.id !== itemId ) )
            )
        })
        promesaCarrito.then((resultado)=>{
            resultado===[] && setCarritoVacio(true);
        })
    }

    function clear() {
        setCart([]);
        setCarritoVacio(true)
    }




        
    
    
    return (
        <>
            <MyCartContext.Provider value={{cart, addItem, removeItem, clear, setCarritoVacio, carritoVacio}}>
                {children}
            </MyCartContext.Provider>
        </>
    );
    }

