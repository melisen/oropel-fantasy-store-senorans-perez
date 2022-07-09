//@ts-check
import "./NavBar.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext, useEffect, useState } from 'react';
import { MyCartContext } from "../../Context/CartContext";


export default function CartWidget() {

<<<<<<< HEAD
  const {cantItems} = useContext(MyCartContext);
  const [cantCartWidget, setCantCartWidget] = useState(0);
  useEffect(()=>{
    setCantCartWidget(cantItems)
  }, [cantItems])
=======
  const {cart, carritoVacio} = useContext(MyCartContext);
  let cantProductos = 0;
  if (cart.length) {
      cart.forEach(element => {
          cantProductos += parseInt(element.quantity);
      });
  }

>>>>>>> 0be3731aeac6a67e8f052761454fa22823f422bc
  
  return (
  <div className="cartWidget">
    <AddShoppingCartIcon />
<<<<<<< HEAD
    <div className={cantCartWidget===0 ? 'NoSeVe' : 'SeVe' }> <p> {cantCartWidget}  </p> </div>
=======
    <div className={carritoVacio ? 'NoSeVe' : 'SeVe' }> <p> {cantProductos}  </p> </div>
>>>>>>> 0be3731aeac6a67e8f052761454fa22823f422bc
    </div>
    )
}
