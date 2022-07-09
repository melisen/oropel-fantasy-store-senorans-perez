
import { createContext, useState, useEffect } from 'react';

export const MyCartContext = createContext();

export default function CartContext({children}) {
    const [cart, setCart] = useState([]);
<<<<<<< HEAD
     const [cantItems, setCantItems] =useState(0);
     const [importeTotal, setImporteTotal] = useState(0)
    const [condicionCartVacio, setCondicionCartVacio] = useState(true)
   

=======
    const [carritoVacio, setCarritoVacio] = useState(true)
>>>>>>> 0be3731aeac6a67e8f052761454fa22823f422bc
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
            
          }else{
            setCart([...cart, {...item, quantity:quantity }])
          }
            

        console.log("cart ", JSON.stringify(cart))
    }


    function removeItem(itemId) {

            setCart(cart.filter((el) => el.id !== itemId ) )
    }


    function clear() {
<<<<<<< HEAD
        setCart([])
        setCondicionCartVacio(true)
=======
        setCart([]);
        setCarritoVacio(true)
        
>>>>>>> 0be3731aeac6a67e8f052761454fa22823f422bc
    }

// useEffect: cada vez que se actualiza cart, tiene que cambiar el número de items (el total de items de cart) para pasárselo al cartWidget. Tiene que calcular el importe total, y tiene que volver true la condición del carrito vacío cuando el array quede vacío:
    useEffect( ()=>{
        setCantItems(cart.reduce((acc, element)=> acc + element.quantity, 0));
        cart.lenght===0 && setCondicionCartVacio(true);
        setImporteTotal( cart.reduce((acc, elemento) => acc + elemento.price*elemento.quantity, 0) );
      }, [cart]);
    
    return (
        <>
            <MyCartContext.Provider value={{ cantItems, cart, addItem, removeItem, clear, condicionCartVacio, importeTotal}}>
                {children}
            </MyCartContext.Provider>
        </>
    );
    }

