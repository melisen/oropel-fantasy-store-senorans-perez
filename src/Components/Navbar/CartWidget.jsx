//@ts-check
import React from 'react'
import "./NavBar.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from 'react';
import { MyCartContext } from "../../Context/CartContext";


export default function CartWidget() {

  const {cart, carritoVacio} = useContext(MyCartContext);
  let cantProductos = 0;
  if (cart.length) {
      cart.forEach(element => {
          cantProductos += parseInt(element.quantity);
      });
  }

  
  return (
  <div className="cartWidget">
    <AddShoppingCartIcon />
    <div className={carritoVacio ? 'NoSeVe' : 'SeVe' }> <p> {cantProductos}  </p> </div>
    </div>
  
    )
}
