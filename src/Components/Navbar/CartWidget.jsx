//@ts-check
import React from 'react'
import "./NavBar.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from 'react';
import { MyCartContext } from "../../Context/CartContext";


export default function CartWidget() {

  const cart = useContext(MyCartContext);

  const carritoHardcode = [
       {
          id: "1A",
          cantidad: 2
        },
        {
          id: "1B",
          cantidad: 1
        }
      ]

  let cantItemsWidget = carritoHardcode.reduce((acc, element)=> acc + element.cantidad, 0)
  
  
  return (
  <div className="cartWidget">
    <AddShoppingCartIcon />
    <div> {cantItemsWidget>0 &&  <p> {cantItemsWidget} </p>}  </div>
    </div>
  
    )
}
