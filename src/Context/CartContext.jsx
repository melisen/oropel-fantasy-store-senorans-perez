
import { createContext, useState } from 'react';

export const MyCartContext = createContext();

export default function CartContext({children}) {
    const [cart, setCart] = useState([]);
     const [cantItems, setCantItems] =useState(0);
     const [importeTotal, setImporteTotal] = useState(0)
    const [condicionCartVacio, setCondicionCartVacio] = useState(true)
   

    const isInCart = (id) => {
        return cart.find((el) => el.id === id);
    }
    
    function addItem(item, quantity) {
        setCondicionCartVacio(false)
        if(isInCart(item.id)){
            //producto existe
            let nuevoCart = cart; //hago una copia de mi carrito actual
            let indexProducto = nuevoCart.findIndex(element=> element.id === item.id); //busco index del producto por id
            nuevoCart[indexProducto].quantity = Number(nuevoCart[indexProducto].quantity) + Number(quantity);  // sumo quantity al valor que vino en el onAdd.
            setCart(nuevoCart); //seteo todo el array de nuevo pero modificado
            setCantItems(nuevoCart.reduce((acc, element)=> acc + element.quantity, 0));
            
          }else{
            const nuevoCarrito = [...cart, {...item, quantity:quantity }];
            setCart(nuevoCarrito)
            setCantItems(nuevoCarrito.reduce((acc, element)=> acc + element.quantity, 0));
            setImporteTotal( nuevoCarrito.reduce((acc, elemento) => acc + elemento.price*elemento.quantity, 0) );
          }
            

        console.log("cart ", JSON.stringify(cart))
    }


    function removeItem(itemId) {
        const nuevoCarrito = cart.filter((el) => el.id !== itemId );
            setCart(nuevoCarrito)   
            setCantItems(nuevoCarrito.reduce((acc, element)=> acc + element.quantity, 0));
            nuevoCarrito.lenght===0 && setCondicionCartVacio(true);
            setImporteTotal( nuevoCarrito.reduce((acc, elemento) => acc + elemento.price*elemento.quantity, 0) );
    }


    function clear() {
        const nuevoCarrito=[];
        setCart(nuevoCarrito);
        setCantItems(0);
        setCondicionCartVacio(true)
        setImporteTotal(0)
;        
    }


    
    return (
        <>
            <MyCartContext.Provider value={{ cantItems, cart, addItem, removeItem, clear, condicionCartVacio, importeTotal}}>
                {children}
            </MyCartContext.Provider>
        </>
    );
    }

