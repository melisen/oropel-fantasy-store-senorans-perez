//@ts-check
import React from 'react'
import "./NavBar.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from 'react';
import { MyCartContext } from "../../Context/CartContext";


export default function CartWidget() {

  const {cart, carritoVacio} = useContext(MyCartContext);

  let cantItemsWidget = cart.reduce((acc, element)=> acc + element.quantity, 0)
  
  
  return (
  <div className="cartWidget">
    <AddShoppingCartIcon />
    <div className={carritoVacio ? 'NoSeVe' : 'SeVe' }> <p> {cantItemsWidget}  </p> </div>
    </div>
  
    )
}
